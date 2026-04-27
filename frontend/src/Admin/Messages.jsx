import React, { useEffect, useState } from "react";
import {
  Row,
  Col,
  ListGroup,
  Badge,
  Card,
  Form,
  Button,
} from "react-bootstrap";
import { getMessagesAPI } from "../../services/allAPI";

const Supportmessages = () => {
  const [messages, setMessages] = useState([]);
  const [selectedUser, setSelectedUser] = useState(0);

  const fetchMessages = async () => {
    const res = await getMessagesAPI();
    if (res.status === 200) {
      console.log(res.data);
      setMessages(res.data);
    }
  };

  useEffect(() => {
    fetchMessages();
  }, []);

  const current = messages[selectedUser];
  return (
<>

    <Row className="g-3">
      {/* Left: Chat List */}
      <Col md={4}>
        <Card className="h-100">
          <Card.Header className="fw-semibold">Support Messages</Card.Header>


                    <ListGroup variant="flush">
            {messages.length > 0 ? (
              messages.map((p, index) => (
                <ListGroup.Item
                  action
                  key={index}
                  active={selectedUser === index}
                  onClick={() => setSelectedUser(index)}
                  style={{ cursor: "pointer" }}
                >
                  <div>
                    <b>{p.name || "User"}</b>
                    <div className="text-muted small">
                      {p.email}
                    </div>
                  </div>
                </ListGroup.Item>
              ))
            ) : (
              <div className="p-3 text-muted">No messages</div>
            )}
          </ListGroup>

        </Card>
      </Col>

      {/* Right: Chat Window */}

      <Col md={8}>
        <Card className="h-100">
          <Card.Header>
            {current ? current.name : "Select a message"}
          </Card.Header>

          <Card.Body>
            {current ? (
              <>
                <p>
                  <b>Email:</b> {current.email}
                </p>
                <p>
                  <b>Message:</b>
                </p>
                <div className="p-3 bg-light rounded">
                  {current.message}
                </div>
              </>
            ) : (
              <p className="text-muted">No message selected</p>
            )}
          </Card.Body>

          <Card.Footer className="d-flex">
            <Form.Control
              type="text"
              placeholder="Type your reply..."
            />
            <Button className="ms-2">Send</Button>
          </Card.Footer>
        </Card>
      </Col>
    </Row>
    </>
  );
};

export default Supportmessages;
