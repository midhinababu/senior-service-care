import React, { useState } from "react";
import { Card, Form, Button, Row, Col } from "react-bootstrap";

const AdminSettings = () => {
  const [settings, setSettings] = useState({
    adminName: "",
    email: "",
    phone: "",
    password: "",
    notifications: true,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setSettings({
      ...settings,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(settings);
    alert("Settings updated successfully");
  };

  return (
    <div>
      <h4 className="mb-4">Admin Settings</h4>

      <Card className="shadow-sm">
        <Card.Body>
          <Form onSubmit={handleSubmit}>
            <Row className="mb-3">
              <Col md={6}>
                <Form.Group>
                  <Form.Label>Admin Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter admin name"
                    name="adminName"
                    value={settings.adminName}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>
              </Col>

              <Col md={6}>
                <Form.Group>
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter email"
                    name="email"
                    value={settings.email}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>
              </Col>
            </Row>

            <Row className="mb-3">
              <Col md={6}>
                <Form.Group>
                  <Form.Label>Phone Number</Form.Label>
                  <Form.Control
                    type="tel"
                    placeholder="Enter phone number"
                    name="phone"
                    value={settings.phone}
                    onChange={handleChange}
                  />
                </Form.Group>
              </Col>

              <Col md={6}>
                <Form.Group>
                  <Form.Label>Change Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="New password"
                    name="password"
                    value={settings.password}
                    onChange={handleChange}
                  />
                </Form.Group>
              </Col>
            </Row>

            <Form.Group className="mb-4">
              <Form.Check
                type="switch"
                label="Enable Notifications"
                name="notifications"
                checked={settings.notifications}
                onChange={handleChange}
              />
            </Form.Group>

            <div className="text-end">
              <Button variant="secondary" className="me-2">
                Cancel
              </Button>
              <Button variant="success" type="submit">
                Save Changes
              </Button>
            </div>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
};

export default AdminSettings;
