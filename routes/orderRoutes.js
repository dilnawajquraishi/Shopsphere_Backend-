const router = require("express").Router();
const Order = require("../models/Order");

// ✅ PLACE ORDER
router.post("/", async (req, res) => {

  try {

    const order = new Order(req.body);

    await order.save();

    res.json({
      success: true,
      order
    });

  } catch (err) {

    res.status(500).json({
      success: false,
      message: err.message
    });

  }

});

// ✅ GET ALL ORDERS (ADMIN)
router.get("/", async (req, res) => {

  try {

    const orders = await Order.find()
      .sort({ createdAt: -1 });

    res.json(orders);

  } catch (err) {

    res.status(500).json({
      success: false,
      message: err.message
    });

  }

});

// ✅ GET USER ORDERS
router.get("/user/:id", async (req, res) => {

  try {

    const orders = await Order.find({
      userId: req.params.id
    }).sort({ createdAt: -1 });

    res.json(orders);

  } catch (err) {

    res.status(500).json({
      success: false,
      message: err.message
    });

  }

});

module.exports = router;

// const router = require("express").Router();
// const Order = require("../models/Order");

// // ➕ CREATE ORDER
// router.post("/", async (req, res) => {
//   try {

//     const order = new Order(req.body);
//     await order.save();

//     res.json({
//       success: true,
//       order
//     });

//   } catch (err) {
//     res.status(500).json({
//       success: false,
//       message: err.message
//     });
//   }
// });

// // 📦 GET ALL ORDERS (ADMIN)
// router.get("/", async (req, res) => {
//   try {

//     const orders = await Order.find().sort({ createdAt: -1 });

//     res.json(orders);

//   } catch (err) {
//     res.status(500).json({
//       success: false,
//       message: err.message
//     });
//   }
// });

// module.exports = router;