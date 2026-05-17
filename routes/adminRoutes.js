// const router = require("express").Router();
// const Order = require("../models/Order");
// const Product = require("../models/Product");

// const auth = require("../middleware/authMiddleware");
// const admin = require("../middleware/adminMiddleware");

// /* =========================
//    📊 DASHBOARD DATA
// ========================= */
// router.get("/dashboard", auth, admin, async (req, res) => {

//   const totalOrders = await Order.countDocuments();
//   const totalProducts = await Product.countDocuments();

//   const orders = await Order.find();

//   const totalRevenue = orders.reduce(
//     (acc, o) => acc + o.totalAmount,
//     0
//   );

//   // STATUS COUNT (for pie chart)
//   const statusData = {
//     placed: 0,
//     shipped: 0,
//     delivered: 0
//   };

//   orders.forEach(o => {
//     statusData[o.status] = (statusData[o.status] || 0) + 1;
//   });

//   res.json({
//     totalOrders,
//     totalProducts,
//     totalRevenue,
//     statusData
//   });
// });

// module.exports = router;
const router = require("express").Router();

const Order = require("../models/Order");
const Product = require("../models/Product");

// 🔐 MIDDLEWARE
const auth = require("../middleware/authMiddleware");
const admin = require("../middleware/adminMiddleware");

/* =========================
   📊 ADMIN DASHBOARD
========================= */
router.get("/dashboard", auth, admin, async (req, res) => {
  try {

    // 🔥 DATE FILTER
    const { from, to } = req.query;

    let query = {};

    if (from && to) {
      query.createdAt = {
        $gte: new Date(from),
        $lte: new Date(to)
      };
    }

    // 🔥 DATA
    const totalOrders = await Order.countDocuments(query);
    const totalProducts = await Product.countDocuments();

    const orders = await Order.find(query);

    // 💰 TOTAL REVENUE
    const totalRevenue = orders.reduce(
      (acc, o) => acc + (o.totalAmount || 0),
      0
    );

    // 📊 STATUS COUNT
    const statusData = {
      placed: 0,
      shipped: 0,
      delivered: 0
    };

    orders.forEach(o => {
      if (o.status === "placed") statusData.placed++;
      else if (o.status === "shipped") statusData.shipped++;
      else if (o.status === "delivered") statusData.delivered++;
    });

    // 📈 SALES BY DATE
    const salesMap = {};

    orders.forEach(o => {
      const date = new Date(o.createdAt).toLocaleDateString();

      if (!salesMap[date]) salesMap[date] = 0;
      salesMap[date] += o.totalAmount || 0;
    });

    const salesByDate = Object.keys(salesMap).map(date => ({
      date,
      total: salesMap[date]
    }));

    // 🔥 TOP SELLING PRODUCTS
    const productMap = {};

    orders.forEach(order => {
      order.products?.forEach(item => {
        const name = item.name;

        if (!productMap[name]) productMap[name] = 0;

        productMap[name] += item.qty;
      });
    });

    const topProducts = Object.keys(productMap).map(name => ({
      name,
      qty: productMap[name]
    }))
    .sort((a, b) => b.qty - a.qty)
    .slice(0, 5);

    // 🔥 FINAL RESPONSE
    res.json({
      totalOrders,
      totalProducts,
      totalRevenue,
      statusData,
      salesByDate,
      topProducts
    });

  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});


/* =========================
   📦 GET ALL ORDERS
========================= */
router.get("/orders", auth, admin, async (req, res) => {
  try {
    const orders = await Order.find().sort({ createdAt: -1 });
    res.json(orders);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});


/* =========================
   🔄 UPDATE ORDER STATUS
========================= */
router.put("/order/:id", auth, admin, async (req, res) => {
  try {

    const { status } = req.body;

    const order = await Order.findByIdAndUpdate(
      req.params.id,
      { status },
      { new: true }
    );

    res.json(order);

  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;