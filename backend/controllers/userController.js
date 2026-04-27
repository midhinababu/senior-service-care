const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
exports.loginUser = async (req, res) => {
  console.log("API Called To login");
  console.log(req.body);
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    console.log(user);
    const pswdmatch = await bcrypt.compare(password, user.password);
    if (pswdmatch) {
      const token = jwt.sign(
        { userMail: user.email, role: user.role },
        process.env.jwtKey,
      );
      console.log(token);
      return res
        .status(201)
        .json({ message: "User Login Successfully", user: user, token: token });
    } else {
      return res.status(404).json({ message: "User not found" });
    }
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: error.message });
  }
};

exports.registerUser = async (req, res) => {
  console.log("API call for register", req.body);
  const { fullName, email, password, age, gender, role, dob, phone } = req.body;
  const hashedpassword = await bcrypt.hash(password, 10);
  console.log("at registration password", hashedpassword);
  try {
    const photoPath = req.file ? req.file.filename : null;
    console.log("email", email);
    const existinguser = await User.findOne({ email });
    console.log("existinguser", existinguser);
    if (existinguser) {
      res.status(409).json("User Already Exist");
    } else {
      const newUser = new User({
        fullName,
        password: hashedpassword,
        email,
        role,
        gender,
        age,
        dob,
        phone,
        photo: photoPath,
      });
      await newUser.save();
      res.status(200).json({ message: "User Added", user: newUser });
    }
  } catch (err) {
    res.send("Error in user Registration", err);
  }
};

exports.googleLogin = async (req, res) => {
  const { fullName, email, password } = req.body;
  try {
    const existinguser = await User.findOne({ email });
    if (existinguser) {
      console.log("user already added");
      res.status(201).json(existinguser);
    } else {
      const user = await User.create(req.body);
      res.status(201).json(user);
    }
  } catch (error) {
    console.log(error);
  }
};

exports.viewAllNurse = async (req, res) => {
  try {
    const nurse = await User.find({ role: "nurse" });
    if (nurse) {
      console.log("nurselist", nurse);
      res.status(201).json({ message: "nurse details", nurseList: nurse });
    } else {
      res.status(301).json({ message: "No nurse details found" });
    }
  } catch (error) {
    console.log(error);
  }
};
exports.viewAllphysio = async (req, res) => {
  try {
    const nurse = await User.find({ role: "physiotherapist" });
    if (nurse) {
      console.log("nurselist", nurse);
      res
        .status(201)
        .json({ message: "physiotherapist details", nurseList: nurse });
    } else {
      res.status(301).json({ message: "No physiotherapist details found" });
    }
  } catch (error) {
    console.log(error);
  }
};
exports.viewAllcaretaker = async (req, res) => {
  try {
    const nurse = await User.find({ role: "caretaker" });
    if (nurse) {
      console.log("nurselist", nurse);
      res.status(201).json({ message: "caretaker details", nurseList: nurse });
    } else {
      res.status(301).json({ message: "No caretaker details found" });
    }
  } catch (error) {
    console.log(error);
  }
};

exports.viewUserProfile = async (req, res) => {
  const { id } = req.params;
  console.log("id", id);
  try {
    const user = await User.findById(id);
    if (user) {
      console.log("nurselist", user);
      res.status(201).json({ message: "user details", user: user });
    } else {
      res.status(301).json({ message: "No user details found" });
    }
  } catch (error) {
    res.send(err);
  }
};

exports.updateUserProfile = async (req, res) => {
  const { fullName, email, password, phone } = req.body;
  const { id } = req.params;
  // console.log(id);
  try {
    const userDetails = await User.findByIdAndUpdate(
      id,
      {
        fullName,
        email,
        password,
        phone,
      },
      { new: true },
    );
    console.log("updating status", userDetails);
    if (userDetails) {
      res.status(200).json({ message: "Admin details Updated", userDetails });
    } else {
      res.status(409).json("Admin Details not Fetched");
    }
  } catch (err) {
    res.send(err);
  }
};

//care team section

exports.listSeniors = async (req, res) => {
  try {
    const senior = await User.find({ role: "senior" });
    if (senior) {
      console.log("senior", senior);
      res.status(201).json({ message: "senior details", senior: senior });
    } else {
      res.status(301).json({ message: "No senior details found" });
    }
  } catch (error) {
    console.log(error);
  }
};

exports.viewCareTeamProfile = async (req, res) => {
  const { id } = req.params;
  console.log("id", id);
  console.log("at viewCareTeamProfile", id);
  try {
    const careTeam = await User.findById(id);
    console.log("careTeam", careTeam);
    if (careTeam) {
      console.log("careTeam", careTeam);
      res.status(201).json({ message: "CareTeam details", careTeam: careTeam });
    } else {
      res.status(301).json({ message: "No user details found" });
    }
  } catch (error) {
    res.send(err);
  }
};

exports.updateCareTeamProfile = async (req, res) => {
  const {
    fullName,
    email,
    password,
    phone,
    experience,
    availability,
    address,
  } = req.body;
  const { id } = req.params;
  // console.log(id);
  try {
    const careTeamDetails = await User.findByIdAndUpdate(
      id,
      {
        fullName,
        email,
        password,
        phone,
        experience,
        availability,
        address,
      },
      { new: true },
    );
    console.log("updating status", careTeamDetails);
    if (careTeamDetails) {
      res
        .status(200)
        .json({ message: "careTeam details Updated", careTeamDetails });
    } else {
      res.status(409).json("careTeam Details not Fetched");
    }
  } catch (err) {
    res.send(err);
  }
};

//admin section
exports.viewAllSeniors = async (req, res) => {
  try {
    const senior = await User.find({ role: "senior" });
    if (senior) {
      console.log("seniorlist", senior);
      res.status(201).json({ message: "senior details", seniorList: senior });
    } else {
      res.status(301).json({ message: "No caretaker details found" });
    }
  } catch (error) {
    console.log(error);
  }
};


//admin update all users 

exports.adminUpdateUser = async (req, res) => {
  try {
    const userId = req.params.id;
    const updatedData = req.body;
    const updatedUser = await User.findByIdAndUpdate(
      userId,
      updatedData,
      { new: true } // return updated document
    );
    if (!updatedUser) {
      return res.status(404).json({
        message: "User not found",
      });
    }
    res.status(200).json({
      message: "User updated successfully",
      user: updatedUser,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: "Server error",
    });
  }
};



