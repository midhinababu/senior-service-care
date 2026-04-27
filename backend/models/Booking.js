// models/Booking.js
const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true
    },
    nurseId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true
    },
    amount: {
      type: Number,
      required: true
    },
    paymentIntentId: String,
    paymentStatus: {
      type: String,
      default: "PENDING"
    },
    bookingStatus: {
      type: String,
      default: "PENDING"
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Booking", bookingSchema);

