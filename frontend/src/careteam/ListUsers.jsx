import React, { useEffect, useState } from "react";
import { Container, Row, Col, Card, Button, Badge } from "react-bootstrap";
import { BsChatDotsFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import { viewSeniorList } from "../../services/allAPI";

export default function SeniorsList() {
  const[patient,setPatient]=useState([])
  const viewsenior = async () => {
    const result =await viewSeniorList();
    console.log(result);
    if(result.status==201){
      setPatient(result.data.senior)
    }
  };
  useEffect(() => {
    viewsenior();
  }, []);

  return (
    <Col>
      <Container fluid className="py-4" style={{ paddingLeft: "100px", paddingRight: "100px" }}>
        <h4 className="fw-bold mb-3">Patients</h4>
        <p className="text-muted mb-4">
          Seniors assigned to you today. Click chat icon to start conversation.
        </p>
        <div style={{ paddingLeft: "100px", paddingRight: "100px" }}>
          {/* Senior Row Card */}
          {patient?patient.map(p=>


 <Card className="shadow-sm mb-3 senior-row">
            <Card.Body>
              <Row className="align-items-center text-center text-md-start">
                <Col xs={1} md={1}>
                  <img src="\images\usericon.png" alt="user-photo"  width="70px" height={"70px"}/>
                </Col>
                <Col xs={12} md={3} className="mb-2 mb-md-0">
                  <h6 className="mb-0">{p.fullName}</h6>
                  <small className="text-muted">Age: {p.age}</small>
                </Col>
                {/* <Col xs={6} md={3}>
                  <small className="text-muted">09:00 AM – 11:00 AM</small>
                </Col> */}

                <Col  className="text-md-end mt-2 mt-md-0">
                  <Link to={`/careteam/chat/${p._id}`}>
                    <Button variant="outline-primary" size="sm">
                      <BsChatDotsFill className="me-1" /> Chat
                    </Button>
                  </Link>
                </Col>
              </Row>
            </Card.Body>
          </Card>
          ):""}
        </div>
      </Container>
    </Col>
  );
}

/* Optional CSS (add to CSS file)

.senior-row {
  border-left: 4px solid #6c8cff;
}

*/
