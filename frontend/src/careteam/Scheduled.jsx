import React from "react";
import { Container, Card } from "react-bootstrap";
import { BsCalendarCheck } from "react-icons/bs";

const Scheduled = () => {
  return (
    <Container
      className="p-4 mt-4"
      style={{
        backgroundColor: "#f7f8fc",
        borderRadius: "10px",
        maxWidth: "900px",
      }}
    >
      <h5 className="fw-bold mb-4">SCHEDULED BOOKINGS</h5>

      {/* Booking 1 */}
      <Card className="p-3 mb-3 shadow-sm" style={{ borderRadius: "10px" }}>
        <div className="d-flex justify-content-between">
          <div>
            <p className="fw-bold mb-1">Client: Mrs. Rose</p>
            <p className="mb-1">Service: Physiotherapy Session</p>
            <p className="mb-0">Date: Tomorrow, 9 AM</p>
          </div>

          <BsCalendarCheck size={28} color="#1f8b4c" />
        </div>
      </Card>

      {/* Booking 2 */}
      <Card className="p-3 mb-3 shadow-sm" style={{ borderRadius: "10px" }}>
        <div className="d-flex justify-content-between">
          <div>
            <p className="fw-bold mb-1">Client: Mr. Mathew</p>
            <p className="mb-1">Service: Home Nurse Visit</p>
            <p className="mb-0">Date: Dec 18, 11 AM</p>
          </div>

          <BsCalendarCheck size={28} color="#1f8b4c" />
        </div>
      </Card>

      {/* Booking 3 */}
      <Card className="p-3 shadow-sm" style={{ borderRadius: "10px" }}>
        <div className="d-flex justify-content-between">
          <div>
            <p className="fw-bold mb-1">Client: Ms. Anita</p>
            <p className="mb-1">Service: Medication Reminder</p>
            <p className="mb-0">Date: Dec 19, 7 PM</p>
          </div>

          <BsCalendarCheck size={28} color="#1f8b4c" />
        </div>
      </Card>
    </Container>
  );
};

export default Scheduled;
