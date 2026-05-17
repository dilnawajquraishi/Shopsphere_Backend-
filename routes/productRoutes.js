const express = require("express");
const router = express.Router();

const multer = require("multer");
const path = require("path");

const {
  addProduct,
  getProducts,
  getSingleProduct,
  updateProduct,
  deleteProduct
} = require("../controllers/productController");

// 🔥 IMAGE UPLOAD CONFIG
const storage = multer.diskStorage({
  destination: "uploads/",
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname);
  }
});

const upload = multer({ storage });

// ➕ ADD
router.post("/add", upload.single("image"), addProduct);

// 📦 GET ALL
router.get("/", getProducts);

// 📦 GET ONE (EDIT के लिए जरूरी)
router.get("/:id", getSingleProduct);

// ✏️ UPDATE
router.put("/:id", upload.single("image"), updateProduct);

// ❌ DELETE
router.delete("/:id", deleteProduct);

module.exports = router;


// const router = require("express").Router();
// const multer = require("multer");
// const Product = require("../models/Product");

// // 🔥 IMAGE UPLOAD CONFIG
// const storage = multer.diskStorage({
//   destination: "uploads/",
//   filename: (req, file, cb) => {
//     cb(null, Date.now() + "-" + file.originalname);
//   }
// });

// const upload = multer({ storage });

// /* =========================
//    ➕ ADD PRODUCT
// ========================= */
// router.post("/add", upload.single("image"), async (req, res) => {
//   try {

//     const product = new Product({
//       name: req.body.name,
//       price: req.body.price,
//       category: req.body.category,
//       stock: req.body.stock,
//       color: req.body.color,
//       size: req.body.size,
//       image: req.file ? req.file.path : ""
//     });

//     await product.save();

//     res.json({ message: "Product Added" });

//   } catch (err) {
//     res.status(500).json({ message: err.message });
//   }
// });


// /* =========================
//    📦 GET ALL PRODUCTS
// ========================= */
// router.get("/", async (req, res) => {
//   const products = await Product.find();
//   res.json(products);
// });


// /* =========================
//    🔍 GET SINGLE PRODUCT
// ========================= */
// router.get("/:id", async (req, res) => {
//   const product = await Product.findById(req.params.id);
//   res.json(product);
// });


// /* =========================
//    ✏️ UPDATE PRODUCT
// ========================= */
// router.put("/:id", upload.single("image"), async (req, res) => {
//   try {

//     const updateData = {
//       name: req.body.name,
//       price: req.body.price,
//       category: req.body.category,
//       stock: req.body.stock,
//       color: req.body.color,
//       size: req.body.size
//     };

//     if (req.file) {
//       updateData.image = req.file.path;
//     }

//     const updated = await Product.findByIdAndUpdate(
//       req.params.id,
//       updateData,
//       { new: true }
//     );

//     res.json(updated);

//   } catch (err) {
//     res.status(500).json({ message: err.message });
//   }
// });


// /* =========================
//    ❌ DELETE PRODUCT
// ========================= */
// router.delete("/:id", async (req, res) => {
//   try {
//     await Product.findByIdAndDelete(req.params.id);
//     res.json({ message: "Deleted" });
//   } catch (err) {
//     res.status(500).json({ message: err.message });
//   }
// });

// module.exports = router;