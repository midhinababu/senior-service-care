import React from "react";
import { Container, Row, Col, Card, Button, Image } from "react-bootstrap";
import { BsChatDotsFill, BsPeopleFill } from "react-icons/bs";
import { Link } from "react-router-dom";

const Welcome = () => {
  return (
    <Col>
      <Container
        fluid
        className="p-3"
        style={{ background: "#f5f6fa", minHeight: "100vh" }}
      >
        <h2 className="fw-bold mt-5">Welcome Back, Care Team!</h2>
        <p className="text-muted mb-4">Here's your day at a glance</p>
        {/* Top Image */}

        <Row className="gy-4">
          <Col md={6}>
            <div className="text-center mb-4">
              <Image
                width={"80%"}
                height={"100%"}
                src="/images/careHome.png"
                alt="Care Team"
                fluid
                style={{ maxHeight: "500px" }}
              />
            </div>
          </Col>
          {/* MIDDLE - Scheduled Works */}
          <Col
            md={6}
            className="px-5 text-center d-flex flex-column align-items-start justify-content-center"
          >
            <Card
              className="shadow-sm mb-3 action-card border-0"
              style={{ width: "100%" ,backgroundColor:"#f3e9f5ff"}}
            >
              <Card.Body className="d-flex justify-content-between align-items-center">
                <div className="d-flex flex-column align-items-center">
                  <div>
                    <h6 className="mb-0">
                      View Patients{" "}
                      <BsPeopleFill size={20} className="m-2 text-primary" />
                    </h6>
                    <small className="text-muted">
                      View the list of seniors assigned to you along with their
                      care details and schedules. Easily track their daily
                      activities and upcoming appointments. Stay informed to
                      provide timely and personalized care for each senior.{" "}
                    </small>
                  </div>
                  <Button
                    as={Link}
                    to="/careteam/list-users"
                    size="sm"
                    variant="outline-success"
                  >
                    View
                  </Button>
                </div>
              </Card.Body>
            </Card>

            {/* View Messages */}
            <Card className="shadow-sm border-0 mb-3 action-card" style={{ width: "100%" ,backgroundColor:"#ebf5e9ff"}}>
              <Card.Body className="d-flex justify-content-between align-items-center">
                <div className="d-flex flex-column align-items-center">
                  <div>
                    <h6 className="mb-0">
                      View Messages
                      <BsChatDotsFill size={20} className="m-2 text-success" />
                    </h6>
                    <small className="text-muted">
                      Check and reply to messages from seniors and the admin
                      team in one place. Stay updated and connected with your
                      seniors and their care schedules anytime, anywhere.
                    </small>
                  </div>
                  <Button
                    as={Link}
                    to="/careteam/messages"
                    size="sm"
                    variant="outline-success"
                  >
                    View
                  </Button>
                </div>
              </Card.Body>
            </Card>




            <Card
              className="shadow-sm mb-3 action-card border-0"
              style={{ width: "100%" ,backgroundColor:"#cee1f3ff"}}
            >
              <Card.Body className="d-flex justify-content-between align-items-center">
                <div className="d-flex flex-column align-items-center">
                  <div>
                    <h6 className="mb-0">
                      View Bookings{" "}
                      <BsPeopleFill size={20} className="m-2 text-primary" />
                    </h6>
                    <small className="text-muted">
                    Check the latest bookings made by seniors and assign staff
                    accordingly.Check the latest bookings made by seniors and assign staff
                    accordingly.
                    </small>
                  </div>
                  <Button
                    as={Link}
                    to="/careteam/bookings"
                    size="sm"
                    variant="outline-success"
                  >
                    View
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <Row className="gy-4">
          {/* LEFT SIDE - New Bookings */}
          {/* <Col md={6}>
            <Card className="shadow-sm mb-3">
              <Card.Body className="d-flex flex-column flex-md-row justify-content-between align-items-start align-items-md-center">
                <div>
                  <h5 className="mb-2">New Booking</h5>
                  <p className="text-muted mb-2">
                    Check the latest bookings made by seniors and assign staff
                    accordingly.
                  </p>
                </div>
                <Button
                  as={Link}
                  to="/admin/new-bookings"
                  variant="primary"
                  className="mt-2 mt-md-0"
                >
                  View
                </Button>
              </Card.Body>
            </Card>
          </Col> */}

          {/* <Col md={6}>
            <div className="text-center mb-4">
              <Image
                width={"60%"}
                src="/images/care2.png"
                alt="Care Team"
                fluid
                style={{ maxHeight: "300px" }}
              />
            </div>
          </Col> */}
        </Row>
      </Container>
    </Col>
  );
};

export default Welcome;
