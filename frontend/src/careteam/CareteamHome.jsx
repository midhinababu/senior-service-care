import { Tooltip } from "bootstrap";
import React from "react";
import { Col, Container, OverlayTrigger, Row } from "react-bootstrap";
import { AiFillSchedule } from "react-icons/ai";
import { FaBed, FaClipboardList } from "react-icons/fa";
import { FiHome, FiLogOut, FiSettings, FiUser } from "react-icons/fi";
import { HiUsers } from "react-icons/hi";
import { IoIosSettings } from "react-icons/io";
import { MdHomeFilled } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";

function Careteamhome({ children }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    sessionStorage.clear();
    navigate("/careteam-login");
  };
  const IconWithTooltip = ({ title, to, children }) => (
    <OverlayTrigger placement="right" overlay={<Tooltip>{title}</Tooltip>}>
      <Link to={to} className="icon-link">
        {children}
      </Link>
    </OverlayTrigger>
    
  );
  return (
    <>
      <Container fluid className="p-0" style={{ height: "100vh" }}>
        <Row className="g-0 h-100">
          {/* Sidebar */}
          <Col
            xs={12} // top on small devices
            lg="auto" // left sidebar on large
            className="
            d-flex
            flex-column flex-lg-column
            align-items-center
            justify-content-between
            py-3 px-3 shadow-sm
          "
            style={{ background: "#7994afff", minWidth: "70px" }}
          >
            {/* Main Icons */}
            <div
              className="
            d-flex
            flex-row flex-lg-column
            align-items-center
            justify-content-center
            gap-4
            w-100
          "
            >
              {/* */}
              <Link to="/careteam/home" title="Home" className="icon-link">
                <MdHomeFilled size={24}  style={{color:"white"}}/>
              </Link>

              <Link
                to="/careteam/list-users "
                title="List Users"
                className="icon-link"
              >
                <HiUsers size={24} style={{color:"white"}} />
              </Link>
              <Link
                to="/careteam/bookings"
                title="Bookings"
                className="icon-link"
              >
                <FaClipboardList size={24}  style={{color:"white"}} />
              </Link>
               <Link
                to="/careteam/scheduled"
                title="Scheduled"
                className="icon-link"
              >
                <AiFillSchedule size={24} style={{color:"white"}} />
              </Link>
               <Link
                to="/careteam/Profile"
                title="Profile"
                className="icon-link"
              >
                <IoIosSettings size={24}  style={{color:"white"}}/>
              </Link>
             

              {/* Logout only visible on top row for small screens */}
              <div className="d-lg-none">
                <Link
                  to="/nurse-login"
                  title="LogOut"
                  className="icon-link"
                >
                  <FiLogOut
                    size={24}
                    style={{ cursor: "pointer", color: "red" }}
                  />
                </Link>
              </div>
            </div>

            {/* Logout for large screens */}
            <div className="d-none d-lg-block mt-lg-auto" onClick={handleLogout}>
              <FiLogOut size={24} style={{ cursor: "pointer", color: "red" }} />
            </div>
          </Col>

          {/* Main Content */}

          {/* <Col>
          <Nurses />
        </Col> */}

          {/* <Userhome /> */}
          {children}
        </Row>
      </Container>
    </>
  );
}

export default Careteamhome;
