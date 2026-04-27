import React, { useEffect, useState } from "react";
import { Table, Button, Badge } from "react-bootstrap";
import { viewAllphysio } from "../../services/allAPI";

const PhysiotherapistList = () => {

   const [physhio, setphyshio] = useState([]);
    
      const listcaretaker = async () => {
        const result =await viewAllphysio();
       
        if (result.status == 201) {
          console.log(result)
           console.log(result.data.nurseList)
          setphyshio(result.data.nurseList);
           console.log("physhio",physhio)
        } else {
          console.log("nurse data not fethed");
        }
      };
      useEffect(() => {
        listcaretaker();
      }, []);
  return (
    <div>
      <h4 className="mb-3">Physiotherapists</h4>

      {/* Responsive Table */}
      <div className="table-responsive">
        <Table bordered hover className="align-middle">
          <thead className="table-secondary">
            <tr>
              <th>Physio ID</th>
              <th>Name</th>
              <th>Qualification</th>
              <th>Experience</th>
              <th>Contact</th>
              <th>Availability</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
              {
              physhio?physhio.map(item=>
  <tr>
              <td>PT001</td>
              <td>{item.fullName}</td>
              <td></td>
              <td>{item.experience}</td>
              <td>{item.phone}</td>
              <td>
                <Badge bg="success">{item.availability}</Badge>
              </td>
              <td>
                <div className="d-flex gap-2 flex-wrap">
                  <Button size="sm" variant="primary">
                    View
                  </Button>
                  <Button size="sm" variant="secondary">
                    Edit
                  </Button>
                  {/* <Button size="sm" variant="warning">
                    Assign
                  </Button> */}
                </div>
              </td>
            </tr>

              ):""}
          

          
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default PhysiotherapistList;
