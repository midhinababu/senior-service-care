import React from "react";
import { useState } from "react";
import { Container, Row, Col, Form, Button, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { registerUser } from "../../services/allAPI";

export default function CareRegister() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    age: "",
    gender: "",
    dob: "",
    phone: "",
    role: "",
    amount: "",
    adress: "",
    experience:""
  });

  console.log("formdata", formData);

  const registerCareteam = async () => {
    const result = await registerUser(formData);
    console.log("result", result);
    if (result.status == 200) {
      alert(result.data.message);
      if (
        result.data.user.role == "caretaker" ||
        result.data.user.role == "nurse" ||
        result.data.user.role == "physiotherapist"
      ) {
        navigate("/careteam-login");
      }
    } else {
      alert(result.data);
    }
  };
  return (
    <div style={{ height: "100vh", backgroundColor: "#f5f6fa" }}>
      <Container className="d-flex justify-content-center align-items-center h-100">
        <Row className="w-100 justify-content-center">
          <Col md={8}>
            <Card className="p-4 shadow-lg" style={{ borderRadius: "20px" }}>
              <Row>
                {/* Left Side Image */}
                <Col
                  md={6}
                  className="d-flex flex-column justify-content-center align-items-center p-3"
                >
                  {/* Text above image */}
                  <h4 className="mb-3 text-center">Join as a Careteam</h4>
                  <p className="text-muted text-center">
                    Provide compassionate care and earn.
                  </p>
                  <img
                    src="/images/caretakers.png"
                    alt="care taker"
                    style={{
                      width: "100%",
                      borderRadius: "15px",
                      objectFit: "cover",
                    }}
                  />
                </Col>

                {/* Right Side Form */}
                <Col md={6} className="p-4 d-flex align-items-center">
                  <Form className="w-100">
                    <Row className="mb-3">
                      <Col>
                        <Form.Group controlId="formAge">
                          <Form.Label>Name</Form.Label>
                          <Form.Control
                            type="text"
                            placeholder="Enter your Age"
                            onChange={(e) =>
                              setFormData({
                                ...formData,
                                fullName: e.target.value,
                              })
                            }
                          />
                        </Form.Group>
                      </Col>
                      <Col>
                        <Form.Group className="mb-3">
                          <Form.Label>Role</Form.Label>
                          <Form.Select
                            value={formData.role}
                            onChange={(e) =>
                              setFormData({ ...formData, role: e.target.value })
                            }
                          >
                            <option value="">Select role</option>
                            <option value="caretaker">Caretaker</option>
                            <option value="physiotherapist">
                              Physiotherapist
                            </option>
                            <option value="nurse">Nurse</option>
                          </Form.Select>
                        </Form.Group>
                      </Col>
                    </Row>

                    <Row className="mb-3">
                      <Col>
                        <Form.Group controlId="formAge">
                          <Form.Label>Age</Form.Label>
                          <Form.Control
                            type="text"
                            placeholder="Enter your Age"
                            onChange={(e) =>
                              setFormData({ ...formData, age: e.target.value })
                            }
                          />
                        </Form.Group>
                      </Col>
                      <Col>
                        <Form.Group controlId="formDOB">
                          <Form.Label>Date of Birth</Form.Label>
                          <Form.Control
                            type="date"
                            onChange={(e) =>
                              setFormData({ ...formData, dob: e.target.value })
                            }
                          />
                        </Form.Group>
                      </Col>
                    </Row>

                    <Form.Group className="mb-3" controlId="formGender">
                      <Form.Label>Gender</Form.Label>
                      <div className="d-flex gap-3">
                        <Form.Check
                          type="radio"
                          label="Male"
                          name="gender"
                          value="Male"
                          id="genderMale"
                          onChange={(e) =>
                            setFormData({ ...formData, gender: e.target.value })
                          }
                        />
                        <Form.Check
                          type="radio"
                          label="Female"
                          name="gender"
                          value="Female"
                          id="genderFemale"
                          onChange={(e) =>
                            setFormData({ ...formData, gender: e.target.value })
                          }
                        />
                        <Form.Check
                          type="radio"
                          label="Other"
                          name="gender"
                          value="Other"
                          id="genderOther"
                          onChange={(e) =>
                            setFormData({ ...formData, gender: e.target.value })
                          }
                        />
                      </div>
                    </Form.Group>
{/* 
                    <Form.Group className="mb-3">
                      <Form.Label>Email</Form.Label>
                      <Form.Control
                        type="email"
                        placeholder="Enter your email"
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                      />
                    </Form.Group> */}

                    <Row className="mb-3">
                      <Col>
                        <Form.Group className="mb-3" controlId="formname">
                          <Form.Label>Mobile Number</Form.Label>
                          <Form.Control
                            type="text"
                            placeholder="Enter your Mobile Number"
                            onChange={(e) =>
                              setFormData({
                                ...formData,
                                phone: e.target.value,
                              })
                            }
                          />
                        </Form.Group>
                      </Col>
                      <Col>
                        <Form.Group className="mb-3">
                          <Form.Label>Password</Form.Label>
                          <Form.Control
                            type="password"
                            placeholder="Enter password"
                            onChange={(e) =>
                              setFormData({
                                ...formData,
                                password: e.target.value,
                              })
                            }
                          />
                        </Form.Group>
                      </Col>
                    </Row>
                     <Row className="mb-3">
                      <Col>
                        <Form.Group className="mb-3" controlId="formname">
                          <Form.Label>Email</Form.Label>
                          <Form.Control
                            type="text"
                            placeholder="Enter email"
                            onChange={(e) =>
                              setFormData({
                                ...formData,
                                email: e.target.value,
                              })
                            }
                          />
                        </Form.Group>
                      </Col>
                      <Col>
                        <Form.Group className="mb-3">
                          <Form.Label>Experience</Form.Label>
                          <Form.Control
                            type="text"
                            placeholder="Experience in year"
                            onChange={(e) =>
                              setFormData({
                                ...formData,
                                experience: e.target.value,
                              })
                            }
                          />
                        </Form.Group>
                      </Col>
                    </Row>

                    <Row className="mb-3">
                      <Col>
                        <Form.Group className="mb-3" controlId="formname">
                          <Form.Label>Address</Form.Label>
                          <Form.Control
                            type="text"
                            placeholder="Enter your District"
                            onChange={(e) =>
                              setFormData({
                                ...formData,
                                address: e.target.value,
                              })
                            }
                          />
                        </Form.Group>
                      </Col>
                      <Col>
                        <Form.Group className="mb-3">
                          <Form.Label>Amount</Form.Label>
                          <Form.Control
                            type="text"
                            placeholder="Enter Fee"
                            onChange={(e) =>
                              setFormData({
                                ...formData,
                                amount: e.target.value,
                              })
                            }
                          />
                        </Form.Group>
                      </Col>
                    </Row>

                    <Button
                      className="w-100 mt-2"
                      variant="primary"
                      onClick={registerCareteam}
                    >
                      Sign Up
                    </Button>
                    {/* Sign Up Link */}
                    <p
                      className="text-center mt-3"
                      style={{ fontSize: "14px" }}
                    >
                      Already have an account?{" "}
                      <a href="/careteam-login">Login</a>
                    </p>
                  </Form>
                </Col>
              </Row>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
