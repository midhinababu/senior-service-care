import React, { useState } from "react";
import { Container, Row, Col, Form, Button, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import { GoogleLogin } from "@react-oauth/google";
import { loginUsers } from "../../services/allAPI";

export default function CareLogin() {
  const navigate = useNavigate();
  const [data, setData] = useState({
    email: "",
    password: "",
    role: "",
  });

  const loginCareteam = async () => {
    const result = await loginUsers(data);
    console.log("result", result);
    if(result.status==201){
      sessionStorage.setItem("token", result.data.token);
      sessionStorage.setItem("careTeamDetails", JSON.stringify(result.data.user));
      if (
      result.data.user.role == "caretaker" ||
      result.data.user.role == "nurse" ||
      result.data.user.role == "physiotherapist"
    ) {
      navigate("/careteam/home");
    }else if( result.data.user.role == "admin"){
      navigate("/admin/home");
    }
    }
     else {
      alert(result.message);
    }
  };

  const handleGoogleLogin = async (credentialResponse) => {
    const decode = jwtDecode(credentialResponse.credential);
    console.log(decode);
    const response = await loginUsers({
      fullName: decode.name,
      email: decode.email,
      password: "googlepassword",
    });
    if (response) {
      navigate("/careteam/home");
    } else {
      console.log(response.message);
    }
  };

  return (
    <div style={{ height: "100vh", backgroundColor: "#f5f6fa" }}>
      <Container className="d-flex justify-content-center align-items-center h-100">
        <Row className="w-100 justify-content-center">
          <Col md={8}>
            <Card className="p-4 shadow-lg" style={{ borderRadius: "20px" }}>
              <h2 className="text-center mb-4 fw-bold">Login</h2>

              <Row>
                {/* Left Side Image */}
                <Col
                  md={6}
                  className="d-flex justify-content-center align-items-center p-3"
                >
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
                    <Form.Group className="mb-3">
                      <Form.Label>Email</Form.Label>
                      <Form.Control
                        type="email"
                        placeholder="Enter your email"
                        onChange={(e) =>
                          setData({ ...data, email: e.target.value })
                        }
                      />
                    </Form.Group>

                    <Form.Group className="mb-3">
                      <Form.Label>Password</Form.Label>
                      <Form.Control
                        type="password"
                        placeholder="Enter password"
                        onChange={(e) => {
                          setData({ ...data, password: e.target.value });
                        }}
                      />
                    </Form.Group>
                    <Form.Group className="mb-3">
                      <Form.Label>Role</Form.Label>
                      <Form.Select
                        onChange={(e) => {
                          setData({ ...data, role: e.target.value });
                        }}
                      >
                        <option value="">Select role</option>
                        <option value="caretaker">Caretaker</option>
                        <option value="physiotherapist">Physiotherapist</option>
                        <option value="nurse">Nurse</option>
                      </Form.Select>
                    </Form.Group>

                    <Button
                      className="w-100 mt-2 mb-3"
                      variant="primary"
                      onClick={loginCareteam}
                    >
                      Login
                    </Button>

                    <GoogleLogin
                      onSuccess={(credentialResponse) => {
                        console.log(credentialResponse);
                        handleGoogleLogin(credentialResponse);
                      }}
                      onError={() => {
                        console.log("Login Failed");
                      }}
                    />
                    {/* Sign Up Link */}
                    <p
                      className="text-center mt-3"
                      style={{ fontSize: "14px" }}
                    >
                      Don’t have an account? <a href="/careteam-register">Sign Up</a>
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
