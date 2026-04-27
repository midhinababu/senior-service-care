import React, { useEffect, useState } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { BsChatDotsFill } from "react-icons/bs";
import { Link, useNavigate, useParams } from "react-router-dom";
import { createBookingAPI, viewCareTeam } from "../../services/allAPI";

const CareTakerProfile = () => {
  const navigate = useNavigate();
  const [nurse, setNurse] = useState();
 

const user = JSON.parse(sessionStorage.getItem("UserDetails") || "{}");
console.log("user from session",user._id)
const userId=user._id

  const param = useParams();
  const { id } = param;
  // console.log("user", user);
  const viewcareteam = async () => {
    const result = await viewCareTeam(id);
    console.log(result);
    setNurse(result.data.user);
  };

  useEffect(() => {
    viewcareteam();
  }, []);

  const handleConfirmBooking = async () => {
    try {
      console.log("id", id);
      const res = await createBookingAPI(id,userId);
      console.log("response",res)
      if (res.status == 201) {
        navigate(`/payment/${res.data._id}`);
      }
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <Col>
      <div
        style={{
          background: "linear-gradient(to bottom right, #fdecef, #e9f8ff)",
          minHeight: "100vh",
          padding: "30px 0",
        }}
      >
        <Container>
          <Row className="justify-content-center">
            <Col md={8}>
              <Card className="p-4 shadow-sm" style={{ borderRadius: "20px" }}>
                <Row className="align-items-center text-center text-md-start">
                  {/* Profile Image */}
                  <Col
                    xs={12}
                    md={4}
                    className="mb-3 d-flex justify-content-center"
                  >
                    <img
                      src="https://static.vecteezy.com/system/resources/thumbnails/022/014/184/small/user-icon-member-login-isolated-vector.jpg"
                      alt="nurse"
                      style={{
                        width: "150px",
                        height: "150px",
                        borderRadius: "50%",
                        border: "5px solid white",
                        objectFit: "cover",
                      }}
                    />
                  </Col>

                  {/* Name */}
                  <Col
                    xs={12}
                    md={4}
                    className="mb-3 d-flex justify-content-center"
                  >
                    <h2 className="fw-bold" style={{ color: "#27383dff" }}>
                      {nurse ? nurse.fullName : ""}
                    </h2>
                  </Col>

                  {/* Buttons */}
                  <Col
                    xs={12}
                    md={4}
                    className="d-flex flex-column gap-3 mb-3 align-items-center"
                  >
                   <Link to={`/user/message/${id}`}>
                      <Button
                        variant="success"
                        className="w-100"
                        style={{
                          padding: "10px 20px",
                          backgroundColor: "#628897ff",
                          border: "none",
                        }}
                      >
                        Chat
                      </Button>
                    </Link>

                    <Button
                      variant="success"
                      className="w-100"
                      style={{
                        padding: "10px 20px",
                        backgroundColor: "#628897ff",
                        border: "none",
                      }}
                      onClick={handleConfirmBooking}
                    >
                      CONFIRM BOOKING
                    </Button>
                  </Col>
                </Row>

                {/* ABOUT SECTION */}
                <h5 className="fw-bold" style={{ color: "#27383dff" }}>
                  ABOUT
                </h5>

                <p style={{ color: "#555", lineHeight: "1.6" }}>
                  Experienced and compassionate registered nurse with 5+ years
                  in pediatrics and general care. Specializes in patient comfort
                  and health education. Available for home visits and virtual
                  consultations.
                </p>

                <hr />

                {/* REVIEWS SECTION */}
                <h5 className="fw-bold" style={{ color: "#27383dff" }}>
                  REVIEWS
                </h5>

                <div>
                  {/* Review 1 */}
                  <Card
                    className="p-3 mb-3 shadow-sm"
                    style={{ borderRadius: "15px" }}
                  >
                    <div className="text-warning mb-1">★★★★★</div>
                    <p className="m-0">
                      "Chloe was wonderful with my child!" - Sarah L.
                    </p>
                  </Card>

                  {/* Review 2 */}
                  <Card
                    className="p-3 mb-3 shadow-sm"
                    style={{ borderRadius: "15px" }}
                  >
                    <div className="text-warning mb-1">★★★★★</div>
                    <p className="m-0">
                      "Very helpful with a professional touch."
                    </p>
                  </Card>

                  {/* Review 3 */}
                  <Card
                    className="p-3 mb-1 shadow-sm"
                    style={{ borderRadius: "15px" }}
                  >
                    <div className="text-warning mb-1">★★★★★</div>
                    <p className="m-0">"A true angel!" - Maria K.</p>
                  </Card>
                </div>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </Col>
  );
};

export default CareTakerProfile;
