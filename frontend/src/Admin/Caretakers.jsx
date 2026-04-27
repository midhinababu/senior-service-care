import React, { useEffect, useState } from "react";
import { Table, Button, Badge, Card, Row, Col, Form } from "react-bootstrap";
import { BsEye, BsTrash } from "react-icons/bs";
import { viewAllcaretaker } from "../../services/allAPI";

const CareTakersList = () => {

  const [caretaker, setcareTaker] = useState([]);
  
    const listcaretaker = async () => {
      const result =await viewAllcaretaker();
     
      if (result.status == 201) {
        console.log(result)
         console.log(result.data.nurseList)
        setcareTaker(result.data.nurseList);
         console.log("nurse",caretaker)
      } else {
        console.log("nurse data not fethed");
      }
    };
    useEffect(() => {
      listcaretaker();
    }, []);
  return (
    <div>
      {/* Page Header */}
      <Row className="mb-4 align-items-center">
        <Col>
          <h4>Care Takers</h4>
          <p className="text-muted mb-0">
            Manage all registered care takers
          </p>
        </Col>

        {/* <Col md={4}>
          <Form.Control type="text" placeholder="Search care taker..." />
        </Col> */}
      </Row>

      {/* Care Takers Table */}
      <Card className="shadow-sm">
        <Card.Body>
          <Table responsive hover>
            <thead className="table-light">
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Experience</th>
                <th>Phone</th>
                <th>Availability</th>
                <th className="text-center">Actions</th>
              </tr>
            </thead>

            <tbody>
              {
              caretaker?caretaker.map(item=>

 <tr>
                <td>1</td>
                <td>{item.fullName}</td>
                <td>{item.experience}</td>
                <td>{item.phone}</td>
                <td>
                  <Badge bg="success">{item.availability}</Badge>
                </td>
                <td className="text-center">
                  <Button size="sm" variant="outline-primary" className="me-2">
                    <BsEye /> View
                  </Button>
                  <Button size="sm" variant="outline-danger">
                    <BsTrash /> Remove
                  </Button>
                </td>
              </tr>


              ):""}
             
            </tbody>
          </Table>
        </Card.Body>
      </Card>
    </div>
  );
};

export default CareTakersList;
