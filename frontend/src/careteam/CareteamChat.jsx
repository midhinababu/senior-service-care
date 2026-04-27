import React, { useEffect, useState } from "react";
import { Container, Row, Col, Card, Form, InputGroup } from "react-bootstrap";
import { BsSend } from "react-icons/bs";
import { Link, useParams } from "react-router-dom";
import { getChatMessagesAPI, viewUserProfile } from "../../services/allAPI";
import socket from "../socket";
const CaretamChat = () => {
  const [messages, setMessages] = useState([]);
  const [text, setText] = useState("");
  const [user, setUser] = useState({
    fullName:""
  });
  console.log("user",user)
  // care team login details
  const careUser = JSON.parse(
    sessionStorage.getItem("careTeamDetails") || "{}",
  );
  const senderId = careUser._id;
  const { receiverId } = useParams();
  const userId = receiverId;
  const fetchUserDeatail = async () => {
    const res = await viewUserProfile(userId);
    setUser(res.data.user);
    console.log(res.data.user);
  };
  useEffect(() => {
    fetchUserDeatail();
  }, []);

  useEffect(() => {
    if (!senderId || !receiverId) return;
    fetchMessages();
    socket.on("receiveMessage", (msg) => {
      if (
        (msg.senderId === senderId && msg.receiverId === receiverId) ||
        (msg.senderId === receiverId && msg.receiverId === senderId)
      ) {
        setMessages((prev) => [...prev, msg]);
      }
    });

    return () => socket.off("receiveMessage");
  }, [senderId, receiverId]);

  const fetchMessages = async () => {
    const res = await getChatMessagesAPI(senderId, receiverId);
    setMessages(res.data);
  };

  const sendMessage = () => {
    if (!text.trim()) return;

    socket.emit("sendMessage", {
      senderId,
      receiverId,
      message: text,
    });

    setText("");
  };

  return (
    <Col>
      <Container
        fluid
        className="p-3"
        style={{ background: "#f9fbfdff", minHeight: "100vh" }}
      >
        <Row className="justify-content-center">
          <Col xs={12} md={8} lg={6}>
            <Card
              className="shadow-lg border-0"
              style={{ borderRadius: "20px" }}
            >
              {/* Header */}
              <Link
                to="/careteam/view-profile"
                className="text-decoration-none"
              >
                <Card.Header
                  className="d-flex align-items-center"
                  style={{
                    background:
                      "linear-gradient(to right, #b1bac4ff, #81c3ecff)",
                    borderRadius: "20px 20px 0 0",
                  }}
                >
                  <img
                    src="https://static.vecteezy.com/system/resources/thumbnails/022/014/184/small/user-icon-member-login-isolated-vector.jpg"
                    alt="user"
                    style={{
                      width: "55px",
                      height: "55px",
                      borderRadius: "50%",
                      marginRight: "15px",
                    }}
                  />
                  <h5 className="mt-2 fw-bold" style={{color:'rgb(0, 0, 77)'}}>{user.fullName}</h5>
                </Card.Header>
              </Link>

              {/* Messages */}
              <Card.Body
                style={{
                  background: "white",
                  maxHeight: "400px",
                  minHeight:"500px",
                  overflowY: "auto",
                }}
              >
                <h6 className="text-muted mb-3">Messages</h6>

                {messages.length === 0 ? (
                  <div className="text-center text-muted mt-4">
                    No chats yet
                  </div>
                ) : (
                  messages.map((msg, index) => (
                    <div
                      key={index}
                      className={`d-flex mb-3 ${
                        msg.senderId === senderId
                          ? "justify-content-end"
                          : "justify-content-start"
                      }`}
                    >
                      <div
                        style={{
                          background:
                            msg.senderId === senderId
                              ? "#7db0c4ff"
                              : "#e5edeeff",
                          padding: "10px 15px",
                          borderRadius: "15px",
                          maxWidth: "80%",
                        }}
                      >
                        {msg.message}
                      </div>
                    </div>
                  ))
                )}
              </Card.Body>

              {/* Input */}
              <Card.Footer className="bg-white">
                <InputGroup>
                  <Form.Control
                    placeholder="Type your message..."
                    style={{ borderRadius: "15px" }}
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter") sendMessage();
                    }}
                  />
                  <InputGroup.Text
                    onClick={sendMessage}
                    style={{
                      background: "#396a79ff",
                      color: "white",
                      cursor: "pointer",
                      borderRadius: "15px",
                    }}
                  >
                    <BsSend />
                  </InputGroup.Text>
                </InputGroup>
              </Card.Footer>
            </Card>
          </Col>
        </Row>
      </Container>
    </Col>
  );
  // return (
  //    <Col>
  //   <Container fluid className="p-3" style={{ background: "#f9fbfdff", minHeight: "100vh" }}>
  //     <Row className="justify-content-center">
  //       <Col xs={12} md={8} lg={6}>
  //         {/* Chat Card */}
  //         <Card className="shadow-lg border-0" style={{ borderRadius: "20px" }}>
  //           {/* Header */}
  //           <Card.Header
  //             className="d-flex align-items-center"
  //             style={{
  //               background: "linear-gradient(to right, #b1bac4ff, #81c3ecff)",
  //               borderRadius: "20px 20px 0 0",
  //             }}
  //           >
  //             <img
  //               src="https://static.vecteezy.com/system/resources/thumbnails/022/014/184/small/user-icon-member-login-isolated-vector.jpg"
  //               alt="nurse"
  //               style={{
  //                 width: "55px",
  //                 height: "55px",
  //                 borderRadius: "50%",
  //                 marginRight: "15px",
  //               }}
  //             />
  //             <h5 className="mt-2 fw-bold">user1</h5>
  //           </Card.Header>

  //           {/* Body */}
  //           <Card.Body style={{ background: "white" }}>
  //             <h6 className="text-muted mb-3">Messages</h6>

  //             {/* Incoming Message */}
  //             <div className="d-flex mb-3">
  //               <div
  //                 style={{
  //                   background: "#e5edeeff",
  //                   padding: "10px 15px",
  //                   borderRadius: "15px",
  //                   maxWidth: "80%",
  //                 }}
  //               >
  //                 Hello, how can I help today?
  //               </div>
  //             </div>

  //             {/* Outgoing */}
  //             <div className="d-flex justify-content-end mb-3">
  //               <div
  //                 style={{
  //                   background: "#7db0c4ff",
  //                   padding: "10px 15px",
  //                   borderRadius: "15px",
  //                   maxWidth: "80%",
  //                 }}
  //               >
  //                 You
  //               </div>
  //             </div>

  //             {/* Incoming */}
  //             <div className="d-flex mb-3">
  //               <div
  //                 style={{
  //                   background:"#e5edeeff",
  //                   padding: "10px 15px",
  //                   borderRadius: "15px",
  //                   maxWidth: "80%",
  //                 }}
  //               >
  //                 “Have how can a nurse help you handle your medication
  //                 schedule?”
  //               </div>
  //             </div>

  //             {/* Outgoing */}
  //             <div className="d-flex justify-content-end mb-3">
  //               <div
  //                 style={{
  //                   background:  "#7db0c4ff",
  //                   padding: "10px 15px",
  //                   borderRadius: "15px",
  //                   maxWidth: "80%",
  //                 }}
  //               >
  //                 You
  //               </div>
  //             </div>

  //             {/* Incoming */}
  //             <div className="d-flex mb-3">
  //               <div
  //                 style={{
  //                   background: "#e5edeeff",
  //                   padding: "10px 15px",
  //                   borderRadius: "15px",
  //                   maxWidth: "80%",
  //                 }}
  //               >
  //                 “Has the nurse assisted you well in managing your appointment
  //                 schedule?”
  //               </div>
  //             </div>

  //             {/* Outgoing */}
  //             <div className="d-flex justify-content-end mb-4">
  //               <div
  //                 style={{
  //                   background:  "#7db0c4ff",
  //                   padding: "10px 15px",
  //                   borderRadius: "15px",
  //                   maxWidth: "80%",
  //                 }}
  //               >
  //                 You
  //               </div>
  //             </div>
  //           </Card.Body>

  //           {/* Bottom Input */}
  //           <Card.Footer className="bg-white">
  //             <InputGroup>
  //               <Form.Control
  //                 placeholder="Type your message..."
  //                 style={{ borderRadius: "15px" }}
  //               />
  //               <InputGroup.Text
  //                 style={{
  //                   background: "#396a79ff",
  //                   color: "white",
  //                   cursor: "pointer",
  //                   borderRadius: "15px",
  //                 }}
  //               >
  //                 <BsSend />
  //               </InputGroup.Text>
  //             </InputGroup>
  //           </Card.Footer>
  //         </Card>
  //       </Col>
  //     </Row>
  //   </Container>

  //   </Col>
  // );
};

export default CaretamChat;
