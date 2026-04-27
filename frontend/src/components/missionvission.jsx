import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import StatsSection from "./StatsSection";

const MissionVision= () => {
  return (
    <Container className="my-5">
      <Row className="align-items-center g-4">
        
        {/* Left Side Image */}
        <Col md={4}>
          <img
          height={"400px"}
          width={"400px"}
            src="/images/muthachan.png"   // replace with your image
            alt="Mission Vision"
            className="img-fluid rounded shadow"
          />
        </Col>

        {/* Right Side Content */}
        <Col md={8}>
          <h2 className="fw-bold mb-3 text-center">About Us</h2>
          <p style={{ textAlign: "justify" }}>
            Our mission is to provide accessible, compassionate, and high-quality
            healthcare support to individuals who require rehabilitation,
            medication assistance, and daily care. We aim to empower families by
            delivering reliable physiotherapy, pharmacy services, and caretaker support
            directly to their homes.
          </p>

          <p style={{ textAlign: "justify" }}>
            Our vision is to create a digital healthcare ecosystem that ensures comfort,
            safety, and trust. We strive to make home-based medical care effortless
            through technology, dedicated professionals, and a strong focus on enhancing
            quality of life for patients and their families.
          </p>

          <StatsSection/>
        </Col>

      </Row>
    </Container>
  );
};

export default MissionVision;
