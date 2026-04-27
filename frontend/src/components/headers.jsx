import React from "react";
import { Navbar, Nav, Container, Button } from "react-bootstrap";
import { FaReact } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Headers = () => {
  const navigate=useNavigate()
  return (
    <>
      {/* NAVBAR */}
      <Navbar bg="light" expand="lg" className="shadow-sm">
        <Container>
          {/* Left: Icon + Site Name */}
          {/* <Navbar.Brand href="#" className="d-flex align-items-center">
            <FaReact size={28} className="me-2 text-primary" />
            <span className="fw-bold">Senior Care</span>
          </Navbar.Brand> */}

          <Navbar.Brand href="#" className="d-flex align-items-center">
  <img
    src="/images/logo.png"
    alt="Senior Care Logo"
    height="32"
    className="me-2"
  />
  <span className="fw-bold">Senior Care</span>
</Navbar.Brand>


          {/* Toggle for mobile */}
          <Navbar.Toggle aria-controls="basic-navbar-nav" />

          {/* Nav Links */}
          <Navbar.Collapse id="basic-navbar-nav">
            {/* LEFT SIDE LINKS */}
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#about">About</Nav.Link>
                <Nav.Link href="#contact">Contact</Nav.Link>
            </Nav>

            {/* RIGHT SIDE LINKS */}
            <Nav className="ms-auto">
              <Nav.Link href="login">Login / Signup</Nav.Link>
            
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* HERO SECTION WITH BG IMAGE */}
      <div
        style={{
          backgroundImage: "url('/images/muthumuthasi2.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "750px",
          color: "#fff",
          display: "flex",
          alignItems: "center",
        }}
      >
        <Container>
          <div style={{ maxWidth: "500px" }}>
            <h1 className="fw-bold text-dark">Care At Your Fingertip</h1>
            <p className="mb-4 text-dark">
             A senior service care website provides trusted, compassionate care solutions that help seniors live safely, comfortably, and independently at home.
            </p>

            <div>
              <Button variant="primary" className="me-3" onClick={()=>navigate('/careteam-login')}>Join Us Careteam</Button>
              <Button variant="outline-dark" onClick={()=>navigate('/login')}>Book Care Service</Button>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Headers;

