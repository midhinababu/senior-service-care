import React, { useEffect, useState } from "react";
import { Container, Row, Col, Card, Form, Button } from "react-bootstrap";
import { UpdateUserProfile, viewUserProfile } from "../../services/allAPI";

export default function UserSettings() {
  const [profile, setProfile] = useState();
  console.log("profile", profile);
  const handleChange = (e) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(profile);
  };

  const userId = JSON.parse(sessionStorage.getItem("UserDetails") || "{}")?._id;

  const userViewProfile = async () => {
    const result = await viewUserProfile(userId);
    console.log("result", result);
    setProfile(result.data.user);
  };
  useEffect(() => {
    if (userId) {
      userViewProfile();
    }
  }, []);

  const updateProfile = async () => {
    const update = await UpdateUserProfile(userId, profile);
    console.log("update Result", update);
  };

  return (
    <Col>
      <Container fluid className="profile-bg py-4">
        <Row className="justify-content-center">
          <Col xs={12} md={8} lg={6}>
            <Card className="profile-card shadow-sm">
              <Card.Body style={{ backgroundColor: "#ffffffff" }}>
                <div
                  className="text-center mb-4 "
                  style={{ backgroundColor: "#f5d4efff" }}
                >
                  <img
                    style={{
                      width: "120px",
                      height: "120px",
                      borderRadius: "50%",
                      objectFit: "cover",
                      border: "4px solid #f5ebf3ff",
                    }}
                    src={
                      profile
                        ? `http://localhost:3001/uploads/${profile.photo}`

                        : "https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
                    }
                    alt="Profile"
                    className="profile-img"
                  />
                  <Button
                    size="sm"
                    variant="outline-secondary"
                    className="mt-2"
                  >
                    Change Photo
                  </Button>
                </div>

                <h5 className="text-center mb-4">Profile</h5>

                <Form onSubmit={handleSubmit}>
                  <Form.Group className="mb-3">
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                      type="text"
                      name="fullName"
                      placeholder="Enter name"
                      onChange={handleChange}
                      value={profile ? profile.fullName : ""}
                    />
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                      type="email"
                      name="email"
                      placeholder="Enter email"
                      onChange={handleChange}
                      value={profile ? profile.email : ""}
                    />
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label>Phone</Form.Label>
                    <Form.Control
                      type="text"
                      name="phone"
                      placeholder="Enter phone number"
                      onChange={handleChange}
                      value={profile ? profile.phone : ""}
                    />
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label>New Password</Form.Label>
                    <Form.Control
                      type="password"
                      name="password"
                      placeholder="New password"
                      onChange={handleChange}
                    />
                  </Form.Group>

                  <Form.Group className="mb-4">
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control
                      type="password"
                      name="confirmPassword"
                      placeholder="Confirm password"
                      onChange={handleChange}
                    />
                  </Form.Group>

                  <div className="d-grid">
                    <Button
                      onClick={updateProfile}
                      type="submit"
                      style={{ backgroundColor: "#555c5fff", border: "none" }}
                      className="save-btn"
                    >
                      Save Changes
                    </Button>
                  </div>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </Col>
  );
}

/* Add this CSS in your main CSS file */
/* 
.profile-bg {
  background-color: #f5f7fb;
}

.profile-card {
  border-radius: 16px;
  background: #ffffff;
}

.profile-img {
  width: 120px;
  height: 120px;
  border-radius: 50%;
  object-fit: cover;
  border: 4px solid #e6eaf5;
}

.save-btn {
  background-color: #b8c4f5;
  border: none;
}

.save-btn:hover {
  background-color: #9faef0;
}
*/
