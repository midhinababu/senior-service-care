import { Container, Row, Col, Image } from "react-bootstrap";
import { OverlayTrigger, Tooltip } from "react-bootstrap";
import { FiHome, FiUser, FiSettings, FiLogOut } from "react-icons/fi";
import Userhome from "./userhome";
import { Link, Links, NavLink, useNavigate } from "react-router-dom";
import { FaBed, FaHandsHelping, FaUserNurse } from "react-icons/fa";
import { FaClipboardList } from "react-icons/fa";

export default function HomePage({ children }) {
 const navigate = useNavigate();

  const handleLogout = () => {
    sessionStorage.clear();
    navigate("/login");
  };
  const IconWithTooltip = ({ title, to, children }) => (
    <OverlayTrigger placement="right" overlay={<Tooltip>{title}</Tooltip>}>
      <Link to={to} className="icon-link">
        {children}
      </Link>
    </OverlayTrigger>
  );
  return (
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
            {/* <FiUser size={24} style={{ cursor: "pointer" }} />
            <FiSettings size={24} style={{ cursor: "pointer" }} /> */}

            <IconWithTooltip title="Home" to="/user/home">
              <FiHome size={24} style={{ color: "white" }} />
            </IconWithTooltip>

            <IconWithTooltip title="Nurse" to="/user/nurses">
              <FaUserNurse size={24} style={{ color: "white" }} />
            </IconWithTooltip>

            <IconWithTooltip title="Care Taker" to="/user/caretaker">
              <FaHandsHelping size={24} style={{ color: "white" }} />
            </IconWithTooltip>

            <IconWithTooltip title="Physiotheraphist" to="/user/physio">
              <FaBed size={24} style={{ color: "white" }} />
            </IconWithTooltip>

            {/* <IconWithTooltip title="" to="/user/view-profile">
              <FiUser size={24} />
            </IconWithTooltip>
               <IconWithTooltip title="Users" to="/user/message">
               <FiUser size={24} />
            </IconWithTooltip> */}
            <IconWithTooltip title="My Bookings" to="/user/booking">
              <FaClipboardList size={24} style={{ color: "white" }} />
            </IconWithTooltip>
            <IconWithTooltip title="Settings" to="/user/settings">
              <FiSettings size={24} style={{ color: "white" }} />
            </IconWithTooltip>
            {/* Logout only visible on top row for small screens */}
            <div className="d-lg-none"  onClick={handleLogout}>
              <IconWithTooltip title="LogOut">
                <FiLogOut
                  size={24}
                  style={{ color: "red" }}
                 
                />
              </IconWithTooltip>
            </div>
          </div>

          {/* Logout for large screens */}
          <div className="d-none d-lg-block mt-lg-auto" onClick={handleLogout}>
            <IconWithTooltip title="LogOut">
              <FiLogOut
                title="Logout"
                size={24}
                style={{ cursor: "pointer", color: "red" }}
             
              />
            </IconWithTooltip>
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
  );
}
