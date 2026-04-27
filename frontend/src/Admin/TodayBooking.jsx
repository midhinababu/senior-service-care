import React from "react";
import { Container, Table, Badge, Card, Row, Col } from "react-bootstrap";

export default function TodayScheduledServices() {
  return (
    <Container fluid className="py-4">
      <Row className="mb-3">
        <Col>
          <h4 className="fw-bold">Today’s Scheduled Services</h4>
          <p className="text-muted">
            Fixed schedules booked by seniors for caretakers, nurses, and physiotherapists
          </p>
        </Col>
      </Row>

      <Card className="shadow-sm">
        <Card.Body>
          <Table responsive bordered hover className="align-middle">
            <thead className="table-light">
              <tr>
                <th>#</th>
                <th>Senior Name</th>
                <th>Service Type</th>
                <th>Assigned Staff</th>
                <th>Time Slot</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Raghavan Nair</td>
                <td>Caretaker</td>
                <td>Anitha</td>
                <td>09:00 AM – 11:00 AM</td>
                <td>
                  <Badge bg="success">Scheduled</Badge>
                </td>
              </tr>
              <tr>
                <td>2</td>
                <td>Leela Menon</td>
                <td>Physiotherapist</td>
                <td>Rahul</td>
                <td>11:30 AM – 12:30 PM</td>
                <td>
                  <Badge bg="success">Scheduled</Badge>
                </td>
              </tr>
              <tr>
                <td>3</td>
                <td>Krishnan P</td>
                <td>Nurse</td>
                <td>Divya</td>
                <td>03:00 PM – 06:00 PM</td>
                <td>
                  <Badge bg="success">Scheduled</Badge>
                </td>
              </tr>
            </tbody>
          </Table>
        </Card.Body>
      </Card>
    </Container>
  );
}

/* Optional CSS (add to your CSS file)

.table th, .table td {
  vertical-align: middle;
}

*/