const mongoose = require("mongoose");
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.connectionString);
    console.log("Mongodb connected");
   console.log("DB Name :", mongoose.connection.db.databaseName);
   
  } catch (err) {
    console.log("Mongodb connection failed", err);
  }
};
module.exports = connectDB;
