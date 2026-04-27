import React from "react";
import { Card, Row, Col, Button, Badge } from "react-bootstrap";
import { BsCalendarCheck, BsChatDots, BsPeople, BsBell } from "react-icons/bs";
import { Link } from "react-router-dom";

const AdminHome = () => {
  return (
    <div>
      {/* Header */}
      <div className="mb-4">
        <h3>Welcome, Admin 👋</h3>
        <p className="text-muted">
          Manage senior care services, bookings, and caregivers
        </p>
      </div>

      {/* Stats Cards */}
      <Row className="g-3 mb-4">
        <Col md={3} sm={6}>
          <Link
            to="/admin/nurselist"
            className="text-decoration-none text-dark"
          >
            <Card className="shadow-sm">
              <Card.Body>
                <BsPeople size={28} />
                <h6 className="mt-2">Nurse</h6>
                <h4>8</h4>
              </Card.Body>
            </Card>
          </Link>
        </Col>
        <Col md={3} sm={6}>
          <Link
            to="/admin/physio"
            className="text-decoration-none text-dark"
          >
            <Card className="shadow-sm">
              <Card.Body>
                <BsPeople size={28} />
                <h6 className="mt-2">Physiotherapist</h6>
                <h4>10</h4>
              </Card.Body>
            </Card>
          </Link>
        </Col>

        <Col md={3} sm={6}>
          <Link
            to="/admin/caretakers"
            className="text-decoration-none text-dark"
          >
            <Card className="shadow-sm">
              <Card.Body>
                <BsPeople size={28} />
                <h6 className="mt-2">Care Taker</h6>
                <h4>6</h4>
              </Card.Body>
            </Card>
          </Link>
        </Col>

        <Col md={3} sm={6}>
          <Card className="shadow-sm">
            <Card.Body>
              <BsBell size={28} />
              <h6 className="mt-2">Alerts</h6>
              <h4>3</h4>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Main Sections */}
      <Row className="g-4">
        {/* New Bookings */}
        <Col md={6}>
          <Link to="/admin/bookings" className="text-decoration-none text-dark">
            <Card className="shadow-sm clickable-card">
              <Card.Header className="fw-semibold" style={{backgroundColor:"#ddbfb9ff"}}>New Bookins</Card.Header>
              <Card.Body className="text-center">
                <BsCalendarCheck size={28} />
                <h6 className="mt-2">New Bookings</h6>
                <h4>12</h4>
              </Card.Body>
            </Card>
          </Link>
        </Col>

        {/* Scheduled Services */}
        <Col md={6}>
          <Card className="shadow-sm">
            <Card.Header className="fw-semibold" style={{backgroundColor:"#ebb3deff"}}>
              Today’s Scheduled Services
            </Card.Header>
            <Card.Body>
              <p>
                View Fixed schedules booked by seniors for caretakers, nurses,
                and physiotherapists
              </p>

              <Link to="/admin/schedulestoday">
                <Button size="sm" variant="secondary">
                  View Schedule
                </Button>
              </Link>
            </Card.Body>
          </Card>
        </Col>

        {/* Messages */}
        {/* <Col md={12}>
          <Card className="shadow-sm">
            <Card.Header className="fw-semibold">
              Recent Messages
            </Card.Header>
            <Card.Body>
              <p>
                <b>Caregiver Anjali:</b> Need confirmation for tomorrow’s visit
              </p>
              <Button size="sm" variant="primary">
                Go to Messages
              </Button>
            </Card.Body>
          </Card>
        </Col> */}

        <Col md={6} sm={12}>
          <Link to="/admin/messages" className="text-decoration-none text-dark">
            <Card className="shadow-sm">
               <Card.Header className="fw-semibold" style={{backgroundColor:"#c6e4d0ff"}}>
              Recent Messages
            </Card.Header>
              <Card.Body>
                <BsChatDots size={28} />
                <h6 className="mt-2">New Messages</h6>
                <h4>5</h4>
              </Card.Body>
            </Card>
          </Link>
        </Col>
      </Row>
    </div>
  );
};

export default AdminHome;
