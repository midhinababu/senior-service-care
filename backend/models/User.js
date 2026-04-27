const mongoose = require("mongoose");
const Userschema = new mongoose.Schema({
  fullName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
  },
  age: Number,
  dob: Date,
  gender: String,
  role: {
    type: String,
    enum: ["senior", "caretaker", "physiotherapist", "admin", "nurse"],
    default: "senior",
  },
  experience: {
    type: String,
  },
  availability: {
    type: String,
  },
  address: {
    type: String,
  },
  amount: {
    type: String,
  },
  photo: {
    type: String,
  },
});

module.exports = mongoose.model("User", Userschema);
