import React, { useState } from "react";
import { useEffect } from "react";
import { Table, Button, Badge } from "react-bootstrap";
import { listAllUsers } from "../../services/allAPI";
import UserModal from "../Admin/UserModal";

const UsersList = () => {
  const [user, setUsers] = useState([]);


  const [showModal, setShowModal] = useState(false);
const [selectedUser, setSelectedUser] = useState(null);




  const listUsers = async () => {
    const result =await listAllUsers();
   
    if (result.status == 201) {
      console.log(result)
       console.log(result.data.seniorList)
      setUsers(result.data.seniorList);
       console.log("user",user)
    } else {
      console.log("user data not fethed");
    }
  };
  useEffect(() => {
    listUsers();
  }, []);


const handleView = (user) => {
  if (!user) return;
  setSelectedUser(user);
  setShowModal(true);
};
const handleUpdate = async() => {
   try {
    console.log("user",user)
    const result = await adminupdateUserAPI(user);
     // editUser contains form data

    if (result.status === 200) {
      alert("User updated successfully");

      setShowModal(false);   // close modal
      listUsers();          // reload user list
    } else {
      alert("Update failed");
    }
  } catch (err) {
    console.log(err);
  }
};



  return (
    <>
    <div>
      <h4 className="mb-3">Senior Citizens / Users</h4>

      {/* Responsive Table */}
      <div className="table-responsive">
        <Table bordered hover className="align-middle">
          <thead className="table-secondary">
            <tr>
              <th>Sl No</th>
              <th>Name</th>
              <th>Age</th>
              <th>Gender</th>
              <th>Contact</th>
              <th>Location</th>
              {/* <th>Status</th> */}
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {
              user?user.map((item,index)=>

<tr>
              <td>{index + 1}</td>
              <td>{item.fullName}</td>
              <td>{item.age}</td>
              <td>{item.gender}</td>
              <td>{item.phone}</td>
              <td>{}</td>
              {/* <td>
                <Badge bg="success">Active</Badge>
              </td> */}
              <td>
                <div className="d-flex gap-2 flex-wrap">
                  <Button size="sm" variant="primary" onClick={() => handleView(item)}>
                    View
                  </Button>
                </div>
              </td>
            </tr>

              ):""
            }
          

            
          </tbody>
        </Table>
      </div>
         <UserModal
  show={showModal}
  handleClose={() => setShowModal(false)}
  user={selectedUser}
  setUser={setSelectedUser}
  handleUpdate={handleUpdate}
/>
    </div>

 
</>
  );
};

export default UsersList;
