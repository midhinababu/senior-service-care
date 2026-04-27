import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  FaShieldAlt,
  FaUserMd,
  FaHeartbeat,
  FaHandsHelping,
  FaMobileAlt,
} from "react-icons/fa";

const TrustQuality = () => {
  return (
    <div style={{ padding: "40px 0", background: "#f9f9f9" }}>
      <Container>
        <Row className="text-center">
          {/* Item 1 */}
          <Col md={2} xs={6} className="mb-4">
            <FaShieldAlt size={40} className="text-info mb-2" />
            <h6 className="fw-bold m-0">Vetted & Verified TEAM</h6>
            <small className="text-muted">Nursing Staffs</small>
          </Col>

          {/* Item 2 */}
          <Col md={2} xs={6} className="mb-4">
            <FaUserMd size={40} className="text-primary mb-2" />
            <h6 className="fw-bold m-0">Expert Nurse</h6>
            <small className="text-muted">Consultation</small>
          </Col>

          {/* Item 3 */}
          <Col md={2} xs={6} className="mb-4">
            <FaHeartbeat size={40} className="text-danger mb-2" />
            <h6 className="fw-bold m-0">24/7 Support</h6>
            <small className="text-muted">Emergency Help</small>
          </Col>

          {/* Item 4 */}
          <Col md={2} xs={6} className="mb-4">
            <FaHandsHelping size={40} className="text-success mb-2" />
            <h6 className="fw-bold m-0">Personalized Care</h6>
            <small className="text-muted">Care Plans</small>
          </Col>

          {/* Item 5 */}
          <Col md={2} xs={6} className="mb-4">
            <FaMobileAlt size={40} className="text-warning mb-2" />
            <h6 className="fw-bold m-0">Tech-Enabled</h6>
            <small className="text-muted">Digital Monitoring</small>
          </Col>
          {/* Item 2 */}
          <Col md={2} xs={6} className="mb-4">
            <FaUserMd size={40} className="text-primary mb-2" />
            <h6 className="fw-bold m-0">Expert Physiotherapist</h6>
            <small className="text-muted">Consultation</small>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default TrustQuality;
