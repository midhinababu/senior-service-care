import React, { useEffect, useState } from "react";
import { Container, Card, Row, Col, Spinner, Badge } from "react-bootstrap";
import { getUserBookingsAPI } from "../../services/allAPI";

const BookingStatus = () => {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const user = JSON.parse(sessionStorage.getItem("UserDetails") || "{}");
  console.log("user from session", user._id);
  const userId = user._id;
  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const res = await getUserBookingsAPI(userId);
        console.log("fetching data");
        if (res.status === 200) {
          setBookings(res.data);
        }
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    };

    fetchBookings();
  }, []);

  const getStatusColor = (status) => {
    if (status === "paid") return "success";
    if (status === "pending") return "warning";
    if (status === "cancelled") return "danger";
    return "secondary";
  };

  if (loading) {
    return (
      <div className="text-center mt-5">
        <Spinner animation="border" />
      </div>
    );
  }

  return (
    <Col>
      <Container className="mt-4 p-5 m-5">
        <h3 className="mb-4 text-center">My Bookings</h3>

        {bookings.length === 0 ? (
          <p className="text-center">No bookings found</p>
        ) : (
          bookings.map((booking) => (
            <Card key={booking._id} className="mb-3 shadow-sm p-3">
              <Row className="align-items-center">
                <Col md={3}>
                  <h6 className="mb-1">{booking.nurseId?.role || "N/A"}</h6>
                  <p className="mb-0">{booking.nurseId?.fullName || "N/A"}</p>
                  <p className="mb-0">{booking.nurseId?.phone || ""}</p>
                  <p className="mb-0">{booking.nurseId?.address || ""}</p>
                </Col>

                <Col md={3}>
                  <h6 className="mb-1">Amount</h6>
                  <p className="mb-0">₹{booking.amount}</p>
                </Col>

                <Col md={3}>
                  <h6 className="mb-1">Date</h6>
                  <p className="mb-0">
                    {new Date(booking.createdAt).toLocaleDateString()}
                  </p>
                </Col>

                <Col md={3} className="text-md-end">
                  <Badge bg={getStatusColor(booking.status)}>
                    {booking.status}
                  </Badge>
                </Col>
              </Row>
            </Card>
          ))
        )}
      </Container>
    </Col>
  );
};

export default BookingStatus;
