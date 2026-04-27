import React from "react";
import { Modal, Button, Form } from "react-bootstrap";

const UserModal = ({ show, handleClose, user, setUser, handleUpdate }) => {
  if (!user) return null;

  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>Update Details</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <Form>
          <Form.Group className="mb-2">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              value={user.fullName || ""}
              onChange={(e) =>
                setUser({ ...user, fullName: e.target.value })
              }
            />
          </Form.Group>

          <Form.Group className="mb-2">
            <Form.Label>Age</Form.Label>
            <Form.Control
              type="number"
              value={user.age || ""}
              onChange={(e) =>
                setUser({ ...user, age: e.target.value })
              }
            />
          </Form.Group>

          <Form.Group className="mb-2">
            <Form.Label>Gender</Form.Label>
            <Form.Control
              type="text"
              value={user.gender || ""}
              onChange={(e) =>
                setUser({ ...user, gender: e.target.value })
              }
            />
          </Form.Group>

          <Form.Group className="mb-2">
            <Form.Label>Phone</Form.Label>
            <Form.Control
              type="text"
              value={user.phone || ""}
              onChange={(e) =>
                setUser({ ...user, phone: e.target.value })
              }
            />
          </Form.Group>
        </Form>
      </Modal.Body>

      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="success" onClick={handleUpdate}>
          Update
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default UserModal;
