import React, { useEffect, useState } from "react";
import { Table, Button, Badge } from "react-bootstrap";
import { viewAllBookings } from "../../services/allAPI";

const AdminBookingList = () => {

 const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchBookings = async () => {
    try {
      const res = await viewAllBookings();
      if (res.status === 200) {
        console.log(res.data)
        setBookings(res.data);
      }
    } catch (err) {
      console.log("Error fetching bookings:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBookings();
  }, []);
  
  return (
    <div>
      <h4 className="mb-3">Booking List</h4>

      {/* Responsive wrapper */}
      <div className="table-responsive">
        <Table bordered hover className="align-middle">
          <thead className="table-secondary">
            <tr>
             
              <th>Senior Name</th>
              <th>Service Type</th>
              <th>Date & Time</th>
              <th>Caregiver</th>
               <th>Amount</th>
              <th>Payment Status</th>
              {/* <th>Actions</th> */}
            </tr>
          </thead>

          <tbody>
            {bookings?bookings.map(p=>
               <tr>
             
              <td>{p.userId.fullName}</td>
              <td>{p.nurseId.role}</td>
              <td>{new Date(p.createdAt).toLocaleString()}</td>
              <td>{p.nurseId.fullName}</td> 
              <td>{p.nurseId.amount}</td>
             <td>
  {p.paymentStatus === "success" ? (
    <Badge bg="success">Paid</Badge>
  ) : (
    <Badge bg="warning" text="dark">
      Pending
    </Badge>
  )}
</td>
            </tr>
            ):""}
           
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default AdminBookingList;
