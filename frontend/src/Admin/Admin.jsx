import React, { useState } from "react";
import { Button, Nav, Row, Col } from "react-bootstrap";
import { BsList } from "react-icons/bs";
import { NavLink } from "react-router-dom";

const Sidebar = ({ children }) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Toggle Button - Mobile only */}
      <Button
        variant="light"
        className="d-md-none m-2"
        onClick={() => setOpen(!open)}
      >
        <BsList size={22} />
      </Button>

      <Row className="g-0">
        {/* Sidebar */}
        <Col
          xs={12}
          md={3}
          lg={2}
          className={`sidebar-col ${open ? "show" : "hide"} d-md-block`}
        >
          <div className="sidebar p-3">
            <h5 className="text-center mb-4">Admin</h5>

            <Nav className="flex-column gap-2">
              <Nav.Link as={NavLink} to="/admin/home" className="sidebar-link">
                Dashboard
              </Nav.Link>
              <Nav.Link
                as={NavLink}
                to="/admin/bookings"
                className="sidebar-link"
              >
                Bookings
              </Nav.Link>
              <Nav.Link
                as={NavLink}
                to="/admin/userslist"
                className="sidebar-link"
              >
                Users
              </Nav.Link>
              <Nav.Link
                as={NavLink}
                to="/admin/nurselist"
                className="sidebar-link"
              >
                Nurse
              </Nav.Link>
              <Nav.Link as={NavLink} to="/admin/caretakers" className="sidebar-link">
                care Takers
              </Nav.Link>
              <Nav.Link
                as={NavLink}
                to="/admin/physio"
                className="sidebar-link"
              >
                physiotherapist
              </Nav.Link>
              <Nav.Link
                as={NavLink}
                to="/admin/messages"
                className="sidebar-link"
              >
                Messages
              </Nav.Link>
              <Nav.Link
                as={NavLink}
                to="/admin/settings"
                className="sidebar-link"
              >
                Settings
              </Nav.Link>
              <Nav.Link
                as={NavLink}
                to="/login"
                className="sidebar-link"
              >
                Logout
              </Nav.Link>
            </Nav>
          </div>
        </Col>

        {/* Main Content */}
        <Col xs={12} md={9} lg={10} className="content-area p-3">
          {children}
        </Col>
      </Row>
    </>
  );
};

export default Sidebar;
