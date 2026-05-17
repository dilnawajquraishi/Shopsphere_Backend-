// require("dotenv").config();

// const express = require("express");
// const mongoose = require("mongoose");
// const cors = require("cors");

// const app = express();

// 🔥 MIDDLEWARE
// app.use(express.json());
// app.use(cors());

// // 🔥 ROUTES IMPORT
// const authRoutes = require("./routes/authRoutes");
// const productRoutes = require("./routes/productRoutes");
// const orderRoutes = require("./routes/orderRoutes");
// const wishlistRoutes = require("./routes/wishlistRoutes");
// const reviewRoutes = require("./routes/reviewRoutes");
// const adminRoutes = require("./routes/adminRoutes"); // ✅ IMPORTANT

// // ❌ REMOVE PAYMENT (तुम use नहीं कर रहे)
// // const paymentRoutes = require("./routes/paymentRoutes");

// // 🔥 ROUTES USE
// app.use("/api/auth", authRoutes);
// app.use("/api/products", productRoutes);
// app.use("/api/orders", orderRoutes);
// app.use("/api/wishlist", wishlistRoutes);
// app.use("/api/reviews", reviewRoutes);
// app.use("/api/admin", adminRoutes); // ✅ ADMIN ROUTE

// // 📁 IMAGE ACCESS
// app.use("/uploads", express.static("uploads"));

// // 🔥 DB CONNECT
// mongoose.connect("mongodb://127.0.0.1:27017/shopsphere")
//   .then(() => console.log("✅ MongoDB Connected"))
//   .catch(err => console.log(err));

// // 🔥 SERVER
// app.listen(5000, () => {
//   console.log("🚀 Server running on port 5000");
// });



// const express = require("express");
// const mongoose = require("mongoose");
// const cors = require("cors");

// const app = express();

// // 🔥 MIDDLEWARE
// app.use(express.json());
// app.use(cors());

// // 🔥 ROUTES IMPORT
// const authRoutes = require("./routes/authRoutes");
// const productRoutes = require("./routes/productRoutes");
// const orderRoutes = require("./routes/orderRoutes");
// const wishlistRoutes = require("./routes/wishlistRoutes");
// const reviewRoutes = require("./routes/reviewRoutes");

// // 🔥 ROUTES USE
// app.use("/api/auth", authRoutes);
// app.use("/api/products", productRoutes);
// app.use("/api/orders", orderRoutes);
// app.use("/api/wishlist", wishlistRoutes);
// app.use("/api/reviews", reviewRoutes);

// // 🔥 DB CONNECT
// mongoose.connect("mongodb://127.0.0.1:27017/shopsphere")
//   .then(() => console.log("MongoDB Connected"))
//   .catch(err => console.log(err));

// // 🔥 SERVER
// app.listen(5000, () => {
//   console.log("Server running on port 5000");
// });



// -----------------update------------
require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

// 🔥 MIDDLEWARE
app.use(express.json());
app.use(cors());

// 🔥 ROUTES IMPORT
const authRoutes = require("./routes/authRoutes");
const productRoutes = require("./routes/productRoutes");
const orderRoutes = require("./routes/orderRoutes");
const wishlistRoutes = require("./routes/wishlistRoutes");
const reviewRoutes = require("./routes/reviewRoutes");
const adminRoutes = require("./routes/adminRoutes");
const userRoutes = require("./routes/userRoutes"); // ✅ NEW

// 🔥 ROUTES USE
app.use("/api/auth", authRoutes);
app.use("/api/products", productRoutes);
app.use("/api/orders", orderRoutes);
app.use("/api/wishlist", wishlistRoutes);
app.use("/api/reviews", reviewRoutes);
app.use("/api/admin", adminRoutes);
app.use("/api/users", userRoutes); // ✅ NEW

// 📁 IMAGE ACCESS
app.use("/uploads", express.static("uploads"));

// 🔥 DB CONNECT
mongoose.connect("mongodb://127.0.0.1:27017/shopsphere")
  .then(() => console.log("✅ MongoDB Connected"))
  .catch(err => console.log(err));

// 🔥 SERVER
app.listen(5000, () => {
  console.log("🚀 Server running on port 5000");
});