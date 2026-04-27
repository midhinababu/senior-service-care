const express = require("express");
const {
  createUser,
  loginUser,
  registerUser,
  googleLogin,
  viewAllNurse,
  viewAllphysio,
  viewAllcaretaker,
  viewUserProfile,
  updateUserProfile,
  viewCareTeamProfile,
  updateCareTeamProfile,
  viewAllSeniors,
  listSeniors,
  adminUpdateUser,
} = require("../controllers/userController");
const upload = require("../multerConfig");

const bookingController=require('../controllers/bookController')
const messageController = require("../controllers/messageController");
const chatController=require("../controllers/chatController")
const router = express.Router();
router.post("/loginuser", loginUser);
router.post("/registerusers", upload.single("photo"), registerUser);
router.post("/google-login", googleLogin);
router.get("/viewAllNurse", viewAllNurse);
router.get("/viewAllphysio", viewAllphysio);
router.get("/viewAllcaretaker", viewAllcaretaker);
router.get("/viewUser/:id", viewUserProfile);
router.put("/updateUserProfile/:id", updateUserProfile);
router.get("/viewCareTeamProfile/:id", viewUserProfile);
router.get("/booking/user/:userId",bookingController.getUserBookings);
//careteam section 

router.get("/listPatients", listSeniors);
router.get("/CareTeamProfile/:id", viewCareTeamProfile);
router.put("/updateCareTeamProfile/:id", updateCareTeamProfile);
router.get("/caretakerviewBookings/:caretakerId", bookingController.getCaretakerBookings);


//admin section

router.get("/viewAllSeniors", viewAllSeniors);
router.get("/viewAllBookings", bookingController.getAllBookings);

router.post("/admin/updateusers",adminUpdateUser);
//admin-message
router.post("/contact", messageController.createMessage);
router.get("/admin/messages", messageController.getAllMessages);


//payment routes

router.post("/booking/create/:id",bookingController.createBooking);
router.post("/booking/payment-intent", bookingController.createPaymentIntent);
router.post("/booking/payment-success", bookingController.paymentSuccessAPI);

//chating between two users 

router.get("/chat/messages/:user1/:user2", chatController.getMessages);


module.exports = router;
