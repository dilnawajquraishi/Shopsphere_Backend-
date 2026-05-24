// const mongoose = require("mongoose");

// const connectDB = async () => {
//   try {
//     await mongoose.connect("mongodb://127.0.0.1:27017/shopsphere");

//     console.log("✅ MongoDB Connected Successfully");

//   } catch (error) {
//     console.log("❌ MongoDB Connection Failed:", error.message);
//     process.exit(1);
//   }
// };

// module.exports = connectDB;

const mongoose = require("mongoose");
require("dotenv").config();

const connectDB = async () => {
  try {

    await mongoose.connect(process.env.MONGO_URI);

    console.log("✅ MongoDB Atlas Connected Successfully");

  } catch (error) {

    console.log("❌ MongoDB Connection Failed:", error.message);
    process.exit(1);

  }
};

module.exports = connectDB;