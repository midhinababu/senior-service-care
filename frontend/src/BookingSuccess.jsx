import React from "react";
import { Container, Card, Button } from "react-bootstrap";
import { CheckCircleFill } from "react-bootstrap-icons";
import { useNavigate } from "react-router-dom";

const BookingSuccess = () => {
  const navigate = useNavigate();

  return (
    <Container
      fluid
      className="d-flex justify-content-center align-items-center"
      style={{ minHeight: "100vh", backgroundColor: "#f8f9fa" }}
    >
      <Card
        className="text-center shadow-lg p-4"
        style={{ maxWidth: "450px", width: "100%", borderRadius: "15px" }}
      >
        <CheckCircleFill
          size={80}
          className="text-success mb-3"
        />

        <h3 className="fw-bold text-success">Booking Confirmed!</h3>

        <p className="text-muted mt-2">
          Your payment was successful and your booking has been confirmed.
        </p>

        <div
          className="my-3 p-3 rounded"
          style={{ backgroundColor: "#f1fdf6" }}
        >
          <p className="mb-1">
            <strong>Status:</strong> Paid ✅
          </p>
          <p className="mb-0">
            <strong>Service:</strong> Caretaker Booking
          </p>
        </div>

        <Button
          variant="success"
          className="w-100 mt-3"
          onClick={() => navigate("/user/booking")}
        >
          View My Bookings
        </Button>

        <Button
          variant="outline-secondary"
          className="w-100 mt-2"
          onClick={() => navigate("/user/home")}
        >
          Back to Home
        </Button>
      </Card>
    </Container>
  );
};

export default BookingSuccess;
