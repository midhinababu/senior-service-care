import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

const Services = () => {
  return (
    <Container className="my-5">
      {/* <h2 className="text-center mb-4 fw-bold">Services Provided</h2> */}

      <Row className="g-4">
        {/* Service 1 */}
        <Col md={4}>
          <Card
            className="p-4 text-center"
            style={{ backgroundColor: "#FEEFEA", borderRadius: "12px" }}
          >
            <h5 className="fw-bold">Certified Physiotherapists</h5>
            <p className="mt-2">
              Helping with rehabilitation & mobility improvement.
            </p>
          </Card>
        </Col>

        {/* Service 2 */}
        <Col md={4}>
          <Card
            className="p-4 text-center"
            style={{ backgroundColor: "#E8F6FF", borderRadius: "12px" }}
          >
            <h5 className="fw-bold">Skilled Nurses</h5>
            <p className="mt-2">
             providing compassionate, round-the-clock care,Seamless care worldwide
            </p>
          </Card>
        </Col>

        {/* Service 3 */}
        <Col md={4}>
          <Card
            className="p-4 text-center"
            style={{ backgroundColor: "#F3F8E8", borderRadius: "12px" }}
          >
            <h5 className="fw-bold">Care Takers</h5>
            <p className="mt-2">
              Support for daily activities with trained professionals.
            </p>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Services;
