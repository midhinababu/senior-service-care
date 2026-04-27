import React, { useEffect, useState } from "react";
import { Container, Card, Button } from "react-bootstrap";
import { BsCalendarDate } from "react-icons/bs";
import { FaUserNurse } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { viewBookings } from "../../services/allAPI";

const NewBookings = () => {
  const [bookings, setBookings] = useState([]);
  useEffect(() => {
    const fetchBookings = async () => {
      const user = JSON.parse(sessionStorage.getItem("careTeamDetails"));
      const caretakerId = user?._id;

      if (!caretakerId) return;

      const res = await viewBookings(caretakerId);
      if (res.status === 200) {
        console.log(res.data);
        setBookings(res.data);
      } else {
        console.log("error");
      }
    };

    fetchBookings();
  }, []);

  return (
    <Container
      className="p-4 mt-4"
      style={{
        backgroundColor: "#f7f8fc",
        borderRadius: "10px",
        maxWidth: "900px",
      }}
    >
      <h5 className="fw-bold mb-4">BOOKINGS</h5>
      {bookings ? (
        bookings.map((p) => (
          <Card className="p-3 mb-3 shadow-sm" style={{ borderRadius: "10px" }}>
            <div className="d-flex justify-content-between">
              <div>
                <p className="fw-bold mb-1">{p.userId.fullName}</p>
                <p className="mb-1">Phone: {p.userId.phone}</p>
                <p className="mb-0">
                  Date: {new Date(p.createdAt).toLocaleString()}
                </p>
              </div>
              <div>
                {/* <Link to={"/careteam/chat"}>
                  <Button
                    size="sm"
                    style={{
                      backgroundColor: "#7994afff",
                      border: "none",
                      color: "#fff",
                    }}
                  >
                    Confirm
                  </Button>
                </Link> */}
                <span
                  className={`badge mt-2 ${
                    p.bookingStatus === "success"
                      ? "bg-success"
                      : "bg-warning text-dark"
                  }`}
                >
                  {p.bookingStatus === "success"
                    ? "Payment Successful"
                    : "Pending"}
                </span>
                <br /> <br />
                <Link to={"/careteam/chat"}>
                  <Button
                    size="sm"
                    style={{
                      backgroundColor: "#7994afff",
                      border: "none",
                      color: "#fff",
                    }}
                  >
                    Chat
                  </Button>
                </Link>
              </div>
            </div>
          </Card>
        ))
      ) : (
        <Card className="p-3 shadow-sm" style={{ borderRadius: "10px" }}>
          <div className="d-flex justify-content-between">
            <h4>No Bookings</h4>
          </div>
        </Card>
      )}
    </Container>
  );
};

export default NewBookings;
