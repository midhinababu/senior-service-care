import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { loadStripe } from "@stripe/stripe-js";
import {
  Elements,
  CardElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import { Button, Card, Container, Spinner } from "react-bootstrap";
import { createPaymentIntentAPI, paymentSuccessAPI } from "../services/allAPI";

// Stripe public key
const stripePromise = loadStripe(
  "pk_test_51SplvUHrgAdKex3TieBQVfNZ9E3q5wYXkJJ0sIUygK6cpawB4YC0klyXF6H3fh6zS3zfRXnPPASvrgmv2C7ZKXXG00F2lQr0kp",
);

// ---------------- CHECKOUT FORM ----------------
const CheckoutForm = ({ clientSecret }) => {
  const stripe = useStripe();
  const elements = useElements();
  const navigate = useNavigate();
 const { bookingId } = useParams();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) return;

    setLoading(true);
    setError("");

    const cardElement = elements.getElement(CardElement);

    const { paymentIntent, error } = await stripe.confirmCardPayment(
      clientSecret,
      {
        payment_method: {
          card: cardElement,
        },
      },
    );

    if (error) {
      setError(error.message);
      setLoading(false);
      return;
    }

    if (paymentIntent.status === "succeeded") {
      try {
        const res = await paymentSuccessAPI({
          bookingId: bookingId,
        });

        console.log("Payment success API response:", res);

        if (res.status === 200) {
          console.log("Payment status updated successfully");
          navigate("/booking-success");
        } else {
          console.log("Payment status update failed");
        }
      } catch (err) {
        console.error("Error calling paymentSuccessAPI:", err);
      }
    }

    setLoading(false);
  };

  return (
    <form onSubmit={handleSubmit}>
      <CardElement
        options={{
          style: {
            base: {
              fontSize: "16px",
              color: "#32325d",
              "::placeholder": {
                color: "#aab7c4",
              },
            },
          },
        }}
      />

      {error && <p className="text-danger mt-2">{error}</p>}

      <Button
        type="submit"
        disabled={!stripe || loading}
        className="mt-3 w-100"
      >
        {loading ? <Spinner size="sm" /> : "Pay Now"}
      </Button>
    </form>
  );
};

// ---------------- MAIN PAYMENT PAGE ----------------
const Payment = () => {
  const { bookingId } = useParams();
  const [clientSecret, setClientSecret] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const createIntent = async () => {
      console.log("bookingId", bookingId);
      const res = await createPaymentIntentAPI(bookingId);

      if (res.status === 200 && res.data?.clientSecret) {
        setClientSecret(res.data.clientSecret);
      } else {
        console.error("Payment intent creation failed", res);
      }

      setLoading(false);
    };

    createIntent();
  }, [bookingId]);

  if (loading) {
    return (
      <div className="text-center mt-5">
        <Spinner animation="border" />
      </div>
    );
  }

  return (
    <Container className="mt-5">
      <Card className="p-4 shadow">
        <h4 className="mb-3 text-center">Complete Your Payment</h4>

        {clientSecret && (
          <Elements stripe={stripePromise} options={{ clientSecret }}>
            <CheckoutForm clientSecret={clientSecret} />
          </Elements>
        )}
      </Card>
    </Container>
  );
};

export default Payment;
