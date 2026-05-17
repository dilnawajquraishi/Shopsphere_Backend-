const Order = require("../models/Order");
const Product = require("../models/Product");

/* CREATE ORDER */
exports.createOrder = async (req, res) => {

  const { userId, items, totalAmount } = req.body;

  const order = await Order.create({
    userId,
    items,
    totalAmount
  });

  /* 🔥 STOCK REDUCE */
  for (let item of items) {
    const product = await Product.findById(item.productId);

    if (product) {
      product.stock -= item.qty;
      product.sold += item.qty;
      await product.save();
    }
  }

  res.json(order);
};

/* GET ORDERS */
exports.getOrders = async (req, res) => {
  const orders = await Order.find();
  res.json(orders);
};