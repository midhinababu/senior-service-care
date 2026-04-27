const Chats = require("../models/chatModel");

exports.getMessages = async (req, res) => {
    console.log("backend fn getMessages");
  try {
    const { user1, user2 } = req.params;
    console.log("users in chat backend",user1,user2)
    const chatmessages = await Chats.find({
      $or: [
        { senderId: user1, receiverId: user2 },
        { senderId: user2, receiverId: user1 },
      ],
    }).sort({ createdAt: 1 });
    res.status(200).json(chatmessages);
  } catch (err) {
    res.status(500).json(err);
  }
};
