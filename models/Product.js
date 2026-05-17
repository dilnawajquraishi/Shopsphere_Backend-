const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: String,
  price: Number,
  category: String,
  stock: Number,
  image: String,

  // 🔥 NEW
  color: String,
  size: String
});

module.exports = mongoose.model("Product", productSchema);


// const mongoose = require("mongoose");

// const productSchema = new mongoose.Schema({
//   name: String,
//   price: Number,
//   category: String,
//   image: String,
//   stock: Number
// });

// module.exports = mongoose.model("Product", productSchema);