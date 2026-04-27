import { useState } from "react";
import { Container, Row, Col, Card, Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";
import { googleLogin, loginUsers } from "../../services/allAPI";

const Login = () => {
  const navigate = useNavigate();
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  console.log("data", data);
  const loginUser = async () => {
    const result = await loginUsers(data);
    console.log("login result", result);
    if (result.status == 201) {
      console.log("ROLE", result.data.user.role);
      if (result.data.user.role === "senior") {
        sessionStorage.setItem("token", result.data.token);
        sessionStorage.setItem("UserDetails", JSON.stringify(result.data.user));
        navigate("/user/home");
      } else if (result.data.user.role === "admin") {
        navigate("/admin/home");
      } else if (
        result.data.user.role === "caretaker" ||
        result.data.user.role === "physiotherapist" ||
        result.data.user.role === "nurse"
      ) {
        navigate("/careteam/home");
      }
    } else {
      alert(result.data);
    }
  };

  const handleGoogleLogin = async (credentialResponse) => {
    const decode = jwtDecode(credentialResponse.credential);
    console.log(decode);
    const response = await googleLogin({
      fullName: decode.name,
      email: decode.email,
      password: "googlepassword",
    });
    if (response) {
      navigate("/user/home");
    }
  };

  // const loginUser = async () => {
  //   try {
  //     const response = await fetch("http://localhost:3001/login", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify(
  //         {data}
  //       ),
  //     });
  //     console.log("response", response);

  //     if (!response.ok) {
  //       throw new Error("Failed to create user");
  //     }

  //     const details = await response.json();
  //     console.log("Success:", details);
  //   } catch (error) {
  //     console.error("Error:", error.message);
  //   }
  // };

  return (
    <div style={{ height: "100vh", background: "#f5f6fa" }}>
      <Container className="d-flex justify-content-center align-items-center h-100">
        <Row className="w-100 justify-content-center">
          <Col md={4}>
            <Card className="p-4 shadow-sm" style={{ borderRadius: "15px" }}>
              <h3 className="text-center mb-4 fw-bold">Login</h3>

              <Form>
                {/* Email */}
                <Form.Group className="mb-3" controlId="formEmail">
                  <Form.Label>Email Address</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter your email"
                    onChange={(e) =>
                      setData({ ...data, email: e.target.value })
                    }
                  />
                </Form.Group>
                {/* Password */}
                <Form.Group className="mb-3" controlId="formPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Enter your password"
                    onChange={(e) =>
                      setData({ ...data, password: e.target.value })
                    }
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
                  className="w-100 mb-3"
                  style={{ borderRadius: "10px" }}
                  onClick={loginUser}
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
                <p className="text-center mt-3" style={{ fontSize: "14px" }}>
                  Don't have an account? <a href="/register">Sign up</a>
                </p>
              </Form>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Login;
