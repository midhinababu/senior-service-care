const dotenv = require("dotenv");
const express = require("express");
const app = express();
const cors = require("cors");
const http = require("http");
const { Server } = require("socket.io");
const Chats = require("./models/chatModel");
dotenv.config(); //must use this otherwise show error in mongodb connection
const connectDB = require("./config/db");
//middlewares
app.use(cors());
app.use(express.json()); 
app.use(express.urlencoded({ extended: true }));
const userRoutes = require("./router/router");
const server = http.createServer(app);
const path = require("path");

app.use("/uploads", express.static("uploads"));
const io = new Server(server, {
  cors: {
    origin: "*",
  },
});
app.use("/uploads", express.static(path.join(__dirname, "uploads")));
io.on("connection", (socket) => {
  console.log("User connected:", socket.id);
  socket.on("sendMessage", async (data) => {
    try {
      const { senderId, receiverId, message } = data;
      // save to DB
      console.log( senderId, receiverId, message)
      const newMessage = new Chats({
        senderId,
        receiverId,
         message: message,
      });
      const savedMessage = await newMessage.save();
      // emit to both users
      io.emit("receiveMessage", savedMessage);
    } catch (err) {
      console.log(err);
    }
  });
  socket.on("disconnect", () => {
    console.log("User disconnected");
  });
});

//1️ Read .env file , Load all values into process.env ,Make them available everywhere in your app
connectDB();
console.log("command line arguments",process.argv);

const PORT = process.env.PORT || 3001;
app.use("/", userRoutes);



// app.listen(PORT, () => {
//   console.log(`server is listening on ${PORT}`);
// });

server.listen(PORT, () => {
  console.log(`server is listening on ${PORT}`);
});
