import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import { sendMessageAPI } from "../../services/allAPI";

const Footer = () => {
  const [form, setForm] = useState({
    email: "",
    message: "",
  });
  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await sendMessageAPI(form);

    if (res.status === 201) {
      alert("Message sent successfully");
      setForm({ email: "", message: "" });
    } else {
      alert("Failed to send message");
    }
  };

  return (
    <footer
      style={{
        backgroundColor: "rgb(93 112 130)",
        color: "white",
        padding: "50px 0",
      }}
    >
      <Container>
        <Row className="g-4">
          {/* About Section */}
          <Col md={4}>
            <h4 className="fw-bold">Senior Care</h4>
            <p style={{ textAlign: "justify" }}>
              We provide reliable healthcare support including physiotherapy,
              pharmacy delivery, and trained caretakers to ensure comfort,
              safety, and improved well-being at home.
            </p>
          </Col>

          {/* Quick Links */}
          <Col md={3}>
            <h4 className="fw-bold">Quick Links</h4>
            <ul style={{ listStyle: "none", padding: 0, lineHeight: "2" }}>
              <li>
                <a
                  href="#"
                  style={{ color: "#DCE1E8", textDecoration: "none" }}
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#"
                  style={{ color: "#DCE1E8", textDecoration: "none" }}
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#"
                  style={{ color: "#DCE1E8", textDecoration: "none" }}
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#"
                  style={{ color: "#DCE1E8", textDecoration: "none" }}
                >
                  Contact
                </a>
              </li>
            </ul>
          </Col>

          {/* Contact Form */}
          {/* <Col md={5}>
            <h4 className="fw-bold">Contact Us</h4>
            <Form>
              <Form.Group className="mb-3">
                <Form.Control
                  type="email"
                  placeholder="Enter your email"
                  style={{ backgroundColor: "#8e9dafff", border: "none", color: "white" }}
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Control
                  as="textarea"
                  rows={3}
                  placeholder="Your message"
                  style={{ backgroundColor: "#8e9dafff", border: "none", color: "white" }}
                />
              </Form.Group>

              <Button variant="light" className="fw-bold px-4">
                Send
              </Button>
            </Form>
          </Col> */}

          <Col md={5}>
            <h4 className="fw-bold">Contact Us</h4>
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3">
                <Form.Control
                  type="email"
                  placeholder="Enter your email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  style={{
                    backgroundColor: "#8e9dafff",
                    border: "none",
                    color: "white",
                  }}
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Control
                  as="textarea"
                  rows={3}
                  placeholder="Your message"
                  value={form.message}
                  onChange={(e) =>
                    setForm({ ...form, message: e.target.value })
                  }
                  style={{
                    backgroundColor: "#8e9dafff",
                    border: "none",
                    color: "white",
                  }}
                />
              </Form.Group>

              <Button variant="light" className="fw-bold px-4" type="submit">
                Send
              </Button>
            </Form>
          </Col>
        </Row>

        <hr style={{ borderColor: "#546273" }} />

        {/* Social + Copyright */}
        <div className="text-center mt-3">
          <div className="d-flex justify-content-center gap-4 mb-3">
            <FaFacebookF size={20} style={{ cursor: "pointer" }} />
            <FaTwitter size={20} style={{ cursor: "pointer" }} />
            <FaInstagram size={20} style={{ cursor: "pointer" }} />
          </div>
          <p className="mb-0" style={{ color: "#DCE1E8" }}>
            © 2025 Senior service care — All Rights Reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
