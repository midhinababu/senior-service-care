const Message = require("../models/Message");

// Save contact message
exports.createMessage = async (req, res) => {
  try {
    const { email, message } = req.body;

    const newMessage = new Message({
      email,
      message,
    });

    await newMessage.save();

    res.status(201).json("Message sent successfully");
  } catch (err) {
    console.log("Create message error:", err);
    res.status(500).json("Server error");
  }
};

// Get all messages (admin)
exports.getAllMessages = async (req, res) => {
  try {
    const messages = await Message.find().sort({ createdAt: -1 });
    res.status(200).json(messages);
  } catch (err) {
    console.log("Get messages error:", err);
    res.status(500).json("Server error");
  }
};
