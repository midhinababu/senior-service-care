import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { FaImage } from "react-icons/fa";

const FeaturesSection = () => {
  return (
    <div style={{ backgroundColor: "#b2c2ccff", padding: "60px 0" }}>
      <Container>
        {/* Heading & Subtext */}
        <h2 className="text-center text-dark fw-bold mb-3">Features</h2>
        <p className="text-center text-dark mb-5" style={{ maxWidth: "700px", margin: "0 auto" }}>
          Our website is easy to use, allowing seniors and families to access services without confusion. It offers personalised care options and reliable support to ensure comfort, safety, and peace of mind.
        </p>

        <Row className="g-4">
          {/* 1st Card */}
          <Col md={4}>
            <Card className="text-center p-4" style={{ borderRadius: "12px" }}>
              <div
                style={{
                  width: "90px",
                  height: "90px",
                  borderRadius: "50%",
                  backgroundColor: "#DCE1E8",
                  margin: "0 auto",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginTop: "-60px",
                }}
              >
              <img
  src="/images/care1.png"
  alt="Profile"
  title="Change Profile Image"
  width={90}
  height={90}
  style={{ cursor: "pointer", borderRadius: "50%" }}
/>
              </div>

              <h5 className="fw-bold mt-4">Personalized In-Home Care Services</h5>
              <p className="text-muted">
                Care plans tailored to health condition & age,Services like medication support, mobility help, daily assistance,Nurses / caretakers visit based on individual needs
              </p>

              <Button variant="outline-dark" className="rounded-pill px-4">
                Learn More
              </Button>
            </Card>
          </Col>

          {/* 2nd Card */}
          <Col md={4}>
            <Card className="text-center p-4" style={{ borderRadius: "12px" }}>
              <div
                style={{
                  width: "90px",
                  height: "90px",
                  borderRadius: "50%",
                  backgroundColor: "#DCE1E8",
                  margin: "0 auto",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginTop: "-60px",
                }}
              >
                           <img
  src="/images/caretakers.png"
  alt="Profile"
  title="Change Profile Image"
  width={90}
  height={90}
  style={{ cursor: "pointer", borderRadius: "50%" }}
/>
              </div>

              <h5 className="fw-bold mt-4">Easy-to-Use</h5>
              <p className="text-muted">
                Make secure payments easily and chat instantly with our care team or support staff without confusion.Everything is designed to be simple, clear, for senior citizens and their families.
              </p>

              <Button variant="outline-dark" className="rounded-pill px-4">
                Learn More
              </Button>
            </Card>
          </Col>

          {/* 3rd Card */}
          <Col md={4}>
            <Card className="text-center p-4" style={{ borderRadius: "12px" }}>
              <div
                style={{
                  width: "90px",
                  height: "90px",
                  borderRadius: "50%",
                  backgroundColor: "#DCE1E8",
                  margin: "0 auto",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginTop: "-60px",
                }}
              >
                           <img
  src="/images/care2.png"
  alt="Profile"
  title="Change Profile Image"
  width={90}
  height={90}
  style={{ cursor: "pointer", borderRadius: "50%" }}
/>
              </div>

              <h5 className="fw-bold mt-4">Reliable Support & Safety</h5>
              <p className="text-muted">
               Our service provides quick help whenever needed, with trusted caretakers and a reliable support team, giving peace of mind to seniors and their families.
              </p>

              <Button variant="outline-dark" className="rounded-pill px-4">
                Learn More
              </Button>
            </Card>
          </Col>

        </Row>
      </Container>
    </div>
  );
};

export default FeaturesSection;
