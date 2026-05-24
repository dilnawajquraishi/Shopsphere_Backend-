require("dotenv").config();

const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");

const app = express();

// ✅ DB CONNECT
connectDB();

// ✅ MIDDLEWARE
app.use(express.json());

app.use(cors({
  origin: "*"
}));

// ✅ STATIC FOLDER
app.use("/uploads", express.static("uploads"));

// ✅ ROUTES
app.use("/api/auth", require("./routes/authRoutes"));

app.use("/api/users", require("./routes/userRoutes"));

app.use("/api/products", require("./routes/productRoutes"));

app.use("/api/orders", require("./routes/orderRoutes"));

// ✅ PORT
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});


// require("dotenv").config();
// const express = require("express");
// const cors = require("cors");
// const connectDB = require("./config/db");

// const app = express();

// connectDB();

// app.use(express.json());
// app.use(cors());

// app.use("/api/auth", require("./routes/authRoutes"));
// app.use("/api/users", require("./routes/userRoutes"));

// const PORT= process.env.PORT || 5000;
// app.listen(PORT, () => {
//   console.log("🚀 Server running on port 5000");
// });












// -----------------------------------------------------

// require("dotenv").config();

// const express = require("express");
// const cors = require("cors");
// const connectDB = require("./config/db");

// const app = express();

// // DB CONNECT
// connectDB();

// // MIDDLEWARE
// app.use(express.json());
// app.use(cors());

// // ROUTES
// app.use("/api/auth", require("./routes/authRoutes"));
// app.use("/api/products", require("./routes/productRoutes"));
// app.use("/api/orders", require("./routes/orderRoutes"));
// app.use("/api/wishlist", require("./routes/wishlistRoutes"));
// app.use("/api/reviews", require("./routes/reviewRoutes"));
// app.use("/api/admin", require("./routes/adminRoutes"));
// app.use("/api/users", require("./routes/userRoutes"));

// app.use("/uploads", express.static("uploads"));

// // SERVER
// app.listen(5000, () => {
//   console.log("🚀 Server running on port 5000");
// });


// -----------------update------------
// require("dotenv").config();

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
// const adminRoutes = require("./routes/adminRoutes");
// const userRoutes = require("./routes/userRoutes"); // ✅ NEW

// // 🔥 ROUTES USE
// app.use("/api/auth", authRoutes);
// app.use("/api/products", productRoutes);
// app.use("/api/orders", orderRoutes);
// app.use("/api/wishlist", wishlistRoutes);
// app.use("/api/reviews", reviewRoutes);
// app.use("/api/admin", adminRoutes);
// app.use("/api/users", userRoutes); // ✅ NEW

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