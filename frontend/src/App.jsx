import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landingpage from "./pages/Landingpage";
import Login from "./components/Login";
import CareLogin from "./careteam/LoginCareteam";
import Home from "./user/Home";
import Userhome from "./user/userhome";
import Nurses from "./user/Nurses";
import CareTakerProfile from "./user/CareTakerProfile";
import ChatPage from "./user/Chat";
import Careteamhome from "./careteam/CareteamHome";
import CaretamChat from "./careteam/CareteamChat";
import Welcome from "./careteam/careteamwelcome";
import NewBookings from "./careteam/Newbookings";
import Scheduled from "./careteam/Scheduled";
import AdminSidebar from "./Admin/Admin.jsx";
import AdminHome from "./Admin/Adminhome.jsx";
import AdminBookingList from "./Admin/Bookings.jsx";
import UsersList from "./Admin/UsersList.jsx";
import NurseList from "./Admin/NurseList.jsx";
import PhysiotherapistList from "./Admin/PhysioList.jsx";
import Supportmessages from "./Admin/Messages.jsx";
import AdminSettings from "./Admin/Settings.jsx";
import CareTakersList from "./Admin/Caretakers.jsx";
import UserSettings from "./user/UserSettings.jsx";
import TodayScheduledServices from "./Admin/TodayBooking.jsx";
import SeniorsList from "./careteam/ListUsers.jsx";
import CareTeamProfile from "./careteam/Profile.jsx";
import Register from "./components/Register.jsx";
import CareRegister from "./careteam/CareteamRegister.jsx";
import Allcaretaker from "./user/Allcaretaker.jsx";
import AllPhysio from "./user/AllPhysio.jsx";
import Payment from "./payment.jsx";
import BookingSuccess from "./BookingSuccess.jsx";
import BookingStatus from "./user/BookingStatus.jsx";

const ProtectRoutes = () => {
  <Routes></Routes>;
};

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landingpage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/careteam-login" element={<CareLogin />} />
          <Route path="/careteam-register" element={<CareRegister />} />
          <Route
            path="/user/home"
            element={
              <Home>
                <Userhome />
              </Home>
            }
          />
          <Route
            path="/user/nurses"
            element={
              <Home>
                <Nurses />
              </Home>
            }
          />
           <Route
            path="/user/booking"
            element={
              <Home>
                <BookingStatus />
              </Home>
            }
          />
          <Route
            path="/user/caretaker"
            element={
              <Home>
                <Allcaretaker />
              </Home>
            }
          />
          <Route
            path="/user/physio"
            element={
              <Home>
                <AllPhysio />
              </Home>
            }
          />
          <Route
            path="/user/view-profile/:id"
            element={
              <Home>
                <CareTakerProfile />
              </Home>
            }
          />
          <Route
            path="/user/settings"
            element={
              <Home>
                <UserSettings />
              </Home>
            }
          />
          <Route
            path="/user/message/:receiverId"
            element={
              <Home>
                <ChatPage />
              </Home>
            }
          />
          <Route
            path="/careteam/home"
            element={
              <Careteamhome>
                <Welcome />
              </Careteamhome>
            }
          />
          <Route
            path="/careteam/chat/:receiverId"
            element={
              <Careteamhome>
                <CaretamChat />
              </Careteamhome>
            }
          />
          <Route
            path="/careteam/bookings"
            element={
              <Careteamhome>
                <NewBookings />
              </Careteamhome>
            }
          />
          <Route
            path="/careteam/scheduled"
            element={
              <Careteamhome>
                <Scheduled />
              </Careteamhome>
            }
          />
          <Route
            path="/careteam/list-users"
            element={
              <Careteamhome>
                <SeniorsList />
              </Careteamhome>
            }
          />
          <Route
            path="/careteam/profile"
            element={
              <Careteamhome>
                <CareTeamProfile />
              </Careteamhome>
            }
          />

          <Route
            path="/admin/home"
            element={
              <AdminSidebar>
                <AdminHome />
              </AdminSidebar>
            }
          />
          <Route
            path="/admin/bookings"
            element={
              <AdminSidebar>
                <AdminBookingList />
              </AdminSidebar>
            }
          />
          <Route
            path="/admin/userslist"
            element={
              <AdminSidebar>
                <UsersList />
              </AdminSidebar>
            }
          />
          <Route
            path="/admin/caretakers"
            element={
              <AdminSidebar>
                <CareTakersList />
              </AdminSidebar>
            }
          />
          <Route
            path="/admin/schedulestoday"
            element={
              <AdminSidebar>
                <TodayScheduledServices />
              </AdminSidebar>
            }
          />

          <Route
            path="/admin/nurselist"
            element={
              <AdminSidebar>
                <NurseList />
              </AdminSidebar>
            }
          />
          <Route
            path="/admin/physio"
            element={
              <AdminSidebar>
                <PhysiotherapistList />
              </AdminSidebar>
            }
          />
          <Route
            path="/admin/messages"
            element={
              <AdminSidebar>
                <Supportmessages />
              </AdminSidebar>
            }
          />
          <Route
            path="/admin/settings"
            element={
              <AdminSidebar>
                <AdminSettings />
              </AdminSidebar>
            }
          />
          <Route path="/payment/:bookingId" element={<Payment />} />
          <Route path="/booking-success" element={<BookingSuccess/>} />

        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
