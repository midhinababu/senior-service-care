import React, { useState } from "react";
import { useEffect } from "react";
import { Container, Row, Col, Card, Form, Button } from "react-bootstrap";
import {
  UpdateCareTeamProfile,
  viewCareTeamProfile,
} from "../../services/allAPI";

const CareTeamProfile = () => {
  const [profile, setProfile] = useState({
    name: "",
    email: "",
    phone: "",
    role: "Caretaker",
    experience: "",
    availability: "",
    address: "",
  });

  const handleChange = (e) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };
  const userId = JSON.parse(
    sessionStorage.getItem("careTeamDetails") || "{}",
  )?._id;

  const userViewProfile = async () => {
    const result = await viewCareTeamProfile(userId);
    console.log("result", result);
    setProfile(result.data.careTeam);
  };
  useEffect(() => {
    if (userId) {
      userViewProfile();
    }
  }, []);
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Updated Profile:", profile);
    console.log("updating profile");
    const update = await UpdateCareTeamProfile(userId, profile);
    console.log("update Result", update);
    if (update) {
      alert("Profile Updated");
    } else {
      alert("Profile Not Updated");
    }
  };
  // const updateProfile = async () => {
  //   console.log("updating profile")
  //   const update = await UpdateCareTeamProfile(userId, profile);
  //   console.log("update Result", update);
  //   if(update){
  //     alert("Profile Updated")
  //   }else{
  //      alert("Profile Not Updated")
  //   }
  // };

  return (
    <Col>
      <Container fluid className="p-3">
        <Row className="justify-content-center">
          <Col md={8} lg={6}>
            <Card className="shadow-sm">
              <Card.Body>
                <Card.Title className="mb-3">Update Profile</Card.Title>

                <Form onSubmit={handleSubmit}>
                  <Form.Group className="mb-3">
                    <Form.Label>Full Name</Form.Label>
                    <Form.Control
                      type="text"
                      name="fullName"
                      placeholder="Enter full name"
                      value={profile.fullName}
                      onChange={handleChange}
                    />
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                      type="email"
                      name="email"
                      placeholder="Enter email"
                      value={profile.email}
                      onChange={handleChange}
                    />
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label>Phone Number</Form.Label>
                    <Form.Control
                      type="text"
                      name="phone"
                      placeholder="Enter phone number"
                      value={profile.phone}
                      onChange={handleChange}
                    />
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label>Role</Form.Label>
                    <Form.Select
                      name="role"
                      value={profile.role}
                      onChange={handleChange}
                    >
                      <option>Caretaker</option>
                      <option>Nurse</option>
                      <option>Physiotherapist</option>
                    </Form.Select>
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label>Experience (Years)</Form.Label>
                    <Form.Control
                      type="number"
                      name="experience"
                      placeholder="e.g. 3"
                      value={profile.experience}
                      onChange={handleChange}
                    />
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label>Availability</Form.Label>
                    <Form.Control
                      type="text"
                      name="availability"
                      placeholder="Morning / Evening / Full Day"
                      value={profile.availability}
                      onChange={handleChange}
                    />
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label>Address</Form.Label>
                    <Form.Control
                      as="textarea"
                      rows={3}
                      name="address"
                      placeholder="Enter address"
                      value={profile.address}
                      onChange={handleChange}
                    />
                  </Form.Group>
                  <Button type="submit" variant="primary" className="w-100">
                    Save Changes
                  </Button>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </Col>
  );
};
export default CareTeamProfile;
