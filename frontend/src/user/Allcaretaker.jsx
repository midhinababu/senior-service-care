import React from 'react'
import {
  Container,
  Row,
  Col,
  Card,
  Button,
  Form,
  InputGroup,
} from "react-bootstrap";
import { FaStar, FaRegCommentDots } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { viewAllcaretaker } from '../../services/allAPI';
function Allcaretaker() {
     const [token, setToken] = useState("");
     const [nurse, setNurse] = useState([]);
   
     useEffect(() => {
       const storedToken = sessionStorage.getItem("token");
       if (storedToken) {
         setToken(storedToken);
       }
     }, []);
   
     const reqHeader = {
       Authorization: `Bearer ${token}`,
     };
     const viewnurses = async () => {
       const result = await viewAllcaretaker(reqHeader);
       console.log(result);
       if (result.status == 201) {
         console.log("nurse list", result);
         setNurse(result.data.nurseList);
       } else {
         console.log("No details found");
       }
     };
     useEffect(() => {
       viewnurses();
     }, []);
     return (
       <Col>
         <div
           className="py-5"
           style={{ backgroundColor: "#eeeeeeff",height:"100%", padding: "60px" }}
         >
           {/* Heading */}
           <h2 className="text-center mb-4">Connecting You with CareTaker</h2>
   
           {/* Search & Filters */}
           <Row className="mb-4 justify-content-center g-2">
             <Col xs={12} md={6}>
               <InputGroup>
                 <Form.Control placeholder="Search by Name" />
               </InputGroup>
             </Col>
             {/* <Col xs="auto">
             <Button variant="outline-secondary">Specialty</Button>
           </Col> */}
             {/* <Col xs="auto">
               <Button variant="outline-secondary">Availability</Button>
             </Col>
             <Col xs="auto">
               <Button variant="outline-secondary">Sort By: Rating</Button>
             </Col> */}
           </Row>
   
           {/* Provider Cards */}
           <Row className="g-4 justify-content-center">
             {nurse.map((p, idx) => (
               <Col key={idx} xs={12} md={6} lg={4}>
                 <Card className="p-3 shadow-sm position-relative">
                   {/* Chat Icon top-right */}
                   <FaRegCommentDots
                     className="position-absolute"
                     style={{
                       top: "15px",
                       right: "15px",
                       cursor: "pointer",
                       color: "#007bff",
                     }}
                     size={20}
                   />
   
                   <Row className="align-items-center">
                     {/* Image + Status */}
                     <Col xs={4} className="text-center">
                       <img
                         src="https://cdn.pixabay.com/photo/2023/02/18/11/00/icon-7797704_640.png"
                         alt="nurse Image"
                         className="rounded-circle"
                         style={{
                           width: "70px",
                           height: "70px",
                           objectFit: "cover",
                         }}
                       />
                       <div
                         className={`badge mt-2 bg-warning`}
                         style={{ fontSize: "0.7rem" }}
                       >
                         offline/online
                       </div>
                     </Col>
   
                     {/* Details */}
                     <Col xs={8}>
                       <Card.Body className="p-0">
                         <Card.Title className="fw-bold">{p.fullName}</Card.Title>
   
                         {/* Rating */}
                         <div className="mb-1">
                           {[...Array(8)].map((_, i) => (
                             <FaStar
                               key={i}
                               color={
                                 i < Math.round(p.reviews / 500)
                                   ? "#ffc107"
                                   : "#e4e5e9"
                               }
                               size={14}
                             />
                           ))}
                           <small className="text-muted ms-1">
                             (678 reviews)
                           </small>
                         </div>
   
                         <div
                           className="mb-2 text-muted"
                           style={{ fontSize: "0.8rem" }}
                         >
                           experience
                         </div>
                         <Link to={`/user/view-profile/${p._id}`}>
                        
                           <Button
                             variant="success"
                             className="w-100"
                             style={{
                               padding: "10px 20px",
                               backgroundColor: "#628897ff",
                               border: "none",
                             }}
                           >
                             View
                           </Button>
                         </Link>
                       </Card.Body>
                     </Col>
                   </Row>
                 </Card>
               </Col>
             ))}
           </Row>
         </div>
       </Col>
     );
   }


export default Allcaretaker