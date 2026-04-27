import React, { useEffect, useState } from "react";
import { Table, Button, Badge } from "react-bootstrap";
import { viewAllNurse } from "../../services/allAPI";

const NurseList = () => {

 const [nurse, setNurses] = useState([]);

  const listNurses = async () => {
    const result =await viewAllNurse();
   
    if (result.status == 201) {
      console.log(result)
       console.log(result.data.nurseList)
      setNurses(result.data.nurseList);
       console.log("nurse",nurse)
    } else {
      console.log("nurse data not fethed");
    }
  };
  useEffect(() => {
    listNurses();
  }, []);



  return (
    <div>
      <h4 className="mb-3">Nurses</h4>

      {/* Responsive Table */}
      <div className="table-responsive">
        <Table bordered hover className="align-middle">
          <thead className="table-secondary">
            
            <tr>
              <th>Nurse ID</th>
              <th>Name</th>
              <th>Qualification</th>
              <th>Experience</th>
              <th>Contact</th>
              <th>Assigned Status</th>
              <th>Availability</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
             {
              nurse?nurse.map(item=>

 <tr>
              <td>NR001</td>
              <td>{item.fullName}</td>
              <td>GNM</td>
              <td>{item.experience}</td>
              <td>{item.phone}</td>
              <td>
                <Badge bg="success">Assigned</Badge>
              </td>
              <td>
                <Badge bg="danger">{item.availabily}</Badge>
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
                    Reassign
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

export default NurseList;
