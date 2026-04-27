import React, { useEffect } from "react";
import { Container, Row, Col, Card, Form, Button } from "react-bootstrap";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { registerUser } from "../../services/allAPI";

const Register = () => {
  const navigate = useNavigate();
  const [selectedFile, setSelectedFile] = useState(null);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    age: "",
    gender: "",
    dob: "",
    phone: "",
  });
  const data = new FormData();

  for (let key in formData) {
    data.append(key, formData[key]);
  }

  if (selectedFile) {
    data.append("photo", selectedFile);
  }

  console.log("form data", formData);
  const register = async () => {
    const result = await registerUser(data);
    console.log("result", result);
    if (result.status == 200) {
      alert(result.data);
      navigate("/login");
    } else {
      alert(result.data);
    }
  };
  return (
    <div style={{ height: "100vh", background: "#f5f6fa" }}>
      <Container className="d-flex justify-content-center align-items-center h-100">
        <Row className="w-100 justify-content-center">
          <Col md={4}>
            <Card className="p-4 shadow-sm" style={{ borderRadius: "15px" }}>
              <h3 className="text-center mb-4 fw-bold">Sign Up</h3>

              <Form>
                <Form.Group className="mb-3" controlId="formname">
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter your Name"
                    onChange={(e) =>
                      setFormData({ ...formData, fullName: e.target.value })
                    }
                  />
                </Form.Group>

                {/* <Form.Group className="mb-3" controlId="formname">
                  <Form.Label>Age</Form.Label>
                  <Form.Control type="text" placeholder="Enter your Age" />
                </Form.Group> */}
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

                {/* Email */}
                <Form.Group className="mb-3" controlId="formEmail">
                  <Form.Label>Email Address</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter your email"
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                  />
                </Form.Group>

                {/* Password */}

                <Row className="mb-3">
                  <Col>
                    <Form.Group className="mb-3" controlId="formPassword">
                      <Form.Label>Password</Form.Label>
                      <Form.Control
                        type="password"
                        placeholder="Enter password"
                        onChange={(e) =>
                          setFormData({ ...formData, password: e.target.value })
                        }
                      />
                    </Form.Group>
                  </Col>
                  <Col>
                    <Form.Group className="mb-3" controlId="formnumber">
                      <Form.Label>Mobile Number</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Mobile Number"
                        onChange={(e) =>
                          setFormData({ ...formData, phone: e.target.value })
                        }
                      />
                    </Form.Group>
                  </Col>
                </Row>
                <Form.Group className="mb-3" controlId="formFile">
                  <Form.Label>Profile picture</Form.Label>
                  <Form.Control
                    type="file"
                    accept="image/*"
                    onChange={(e) => {
                      const file = e.target.files[0];
                      console.log("Selected file:", file);
                      setSelectedFile(file);
                    }}
                  />
                </Form.Group>

                {/* Forgot Password */}
                <div className="text-end mb-3">
                  <a href="#" style={{ fontSize: "14px" }}>
                    Forgot Password?
                  </a>
                </div>

                {/* Submit */}
                <Button
                  type="button"
                  className="w-100"
                  style={{ borderRadius: "10px" }}
                  onClick={register}
                >
                  Sign Up
                </Button>

                {/* Sign Up Link */}
                <p className="text-center mt-3" style={{ fontSize: "14px" }}>
                  Already have an account? <a href="#">Login</a>
                </p>
              </Form>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Register;
