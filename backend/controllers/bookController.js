// controllers/bookingController.js
const Booking = require("../models/Booking");
const User = require("../models/User");
const Stripe = require("stripe");
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
console.log("Stripe key in controller:", process.env.STRIPE_SECRET_KEY);
// CREATE BOOKING
exports.createBooking = async (req, res) => {
  try {
    const { id } = req.params;
    console.log("body", req.body);
    console.log("req.userid", req.body.userId);
    const nurse = await User.findById(id);
    if (!nurse) {
      return res.status(404).json("Nurse not found");
    }
    const existingBooking = await Booking.findOne({
      userId: req.body.userId,
      nurseId: id,
      status: "pending",
    });
    if (existingBooking) {
      return res.status(200).json(existingBooking); // return existing booking
    }
    // Create new booking only if not exists
    const booking = new Booking({
      userId: req.body.userId,
      nurseId: id,
      amount: nurse.amount,
      status: "pending",
    });
    await booking.save();
    res.status(201).json(booking);
  } catch (err) {
    res.status(500).json(err);
  }
};

// CREATE PAYMENT INTENT
exports.createPaymentIntent = async (req, res) => {
  try {
    const { bookingId } = req.body;
    const booking = await Booking.findById(bookingId);
    if (!booking) {
      return res.status(404).json("Booking not found");
    }
    const paymentIntent = await stripe.paymentIntents.create({
      amount: booking.amount * 100, // paise
      currency: "inr",
      automatic_payment_methods: {
        enabled: true,
      },
    });
    res.status(200).json({
      clientSecret: paymentIntent.client_secret,
    });
  } catch (err) {
    console.error("Payment intent error:", err);
    res.status(500).json(err.message);
  }
};

// PAYMENT SUCCESS UPDATE
exports.paymentSuccess = async (req, res) => {
  try {
    const { paymentIntentId } = req.body;

    await Booking.findOneAndUpdate(
      { paymentIntentId },
      {
        paymentStatus: "PAID",
        bookingStatus: "CONFIRMED",
      },
    );

    res.json({ message: "Booking confirmed" });
  } catch (err) {
    res.status(500).json(err);
  }
};

//user view booking
exports.getUserBookings = async (req, res) => {
  const { userId } = req.params;
  console.log(req.params);
  try {
    console.log("userId", userId);
    const bookings = await Booking.find({
      userId,
      paymentStatus: "success",
    })
      .populate("nurseId", "fullName email phone role address")
      .sort({ createdAt: -1 });

    res.status(200).json(bookings);
  } catch (err) {
    console.log("Get bookings error:", err);
    res.status(500).json("Server error");
  }
};

exports.paymentSuccessAPI = async (req, res) => {
  console.log("inside payment api backend");
  try {
    const { bookingId } = req.body;
    console.log("bookingId", bookingId);
    if (!bookingId) {
      return res.status(400).json("Booking ID is required");
    }

    const updatedBooking = await Booking.findByIdAndUpdate(
      bookingId,
      { paymentStatus: "success", bookingStatus: "success" },
      { new: true },
    );

    if (!updatedBooking) {
      return res.status(404).json("Booking not found");
    }

    res.status(200).json({
      message: "Payment status updated successfully",
      booking: updatedBooking,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json("Server error");
  }
};

// care taker view their bookings 

exports.getCaretakerBookings = async (req, res) => {
  const { caretakerId } = req.params;

  try {
    const bookings = await Booking.find({
      nurseId: caretakerId,
      paymentStatus: "success",
    })
      .populate("userId", "fullName email phone age") // user details
      .sort({ createdAt: -1 });
    res.status(200).json(bookings);
  } catch (err) {
    console.log("Caretaker booking error:", err);
    res.status(500).json("Server error");
  }
};

//admin view all bookings
exports.getAllBookings = async (req, res) => {
    console.log("get All Booking API")
  try {
    const bookings = await Booking.find()
      .populate("userId", "fullName email phone age")     // user details
      .populate("nurseId", "fullName email phone amount role") // caretaker details
      .sort({ createdAt: -1 });

    res.status(200).json(bookings);
  } catch (err) {
    console.log("Get all bookings error:", err);
    res.status(500).json("Server error");
  }
};
