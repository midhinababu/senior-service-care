import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaUsers, FaCalendarAlt, FaUserNurse, FaBuilding } from "react-icons/fa";

const StatsSection = () => {
  return (
    <div style={{ background: "#ffffffff", padding: "40px 0" }}>
      <Container>
        <Row className="text-center">

          {/* Item 1 */}
          <Col xs={12} md={3} className="mb-4 mb-md-0">
            <FaUsers size={35} className="text-primary mb-2" />
            <h4 className="fw-bold">1,00,000+</h4>
            <p className="text-muted m-0">Lives Touched</p>
          </Col>

          {/* Item 2 */}
          <Col xs={12} md={3} className="mb-4 mb-md-0">
            <FaCalendarAlt size={35} className="text-warning mb-2" />
            <h4 className="fw-bold">2012</h4>
            <p className="text-muted m-0">14 Years of Service</p>
          </Col>

          {/* Item 3 */}
          <Col xs={12} md={3} className="mb-4 mb-md-0">
            <FaUserNurse size={35} className="text-primary mb-2" />
            <h4 className="fw-bold">500+</h4>
            <p className="text-muted m-0">Nursing Staffs</p>
          </Col>

          {/* Item 4 */}
          <Col xs={12} md={3}>
            <FaBuilding size={35} className="text-warning mb-2" />
            <h4 className="fw-bold">9</h4>
            <p className="text-muted m-0">Dedicated Offices</p>
          </Col>

        </Row>
      </Container>
    </div>
  );
};




export default StatsSection;
