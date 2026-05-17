//     const Product = require("../models/Product");

// /* GET ALL PRODUCTS */
// exports.getProducts = async (req, res) => {
//   const products = await Product.find();
//   res.json(products);
// };

// /* ADD PRODUCT (ADMIN) */
// exports.addProduct = async (req, res) => {
//   const product = await Product.create(req.body);
//   res.json(product);
// };

// /* DELETE PRODUCT */
// exports.deleteProduct = async (req, res) => {
//   await Product.findByIdAndDelete(req.params.id);
//   res.json({ message: "Deleted" });
// };

const Product = require("../models/Product");

// ➕ ADD
exports.addProduct = async (req, res) => {
  try {
    const product = new Product({
      ...req.body,
      image: req.file ? req.file.path : ""
    });

    await product.save();
    res.json(product);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// 📦 GET ALL
exports.getProducts = async (req, res) => {
  const products = await Product.find().sort({ createdAt: -1 });
  res.json(products);
};

// 📦 GET SINGLE (EDIT)
exports.getSingleProduct = async (req, res) => {
  const product = await Product.findById(req.params.id);
  res.json(product);
};

// ✏️ UPDATE
exports.updateProduct = async (req, res) => {
  try {

    const data = { ...req.body };

    if (req.file) {
      data.image = req.file.path;
    }

    const updated = await Product.findByIdAndUpdate(
      req.params.id,
      data,
      { new: true }
    );

    res.json(updated);

  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// ❌ DELETE
exports.deleteProduct = async (req, res) => {
  await Product.findByIdAndDelete(req.params.id);
  res.json({ message: "Deleted" });
};