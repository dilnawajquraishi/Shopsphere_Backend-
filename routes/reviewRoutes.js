// const router = require("express").Router();
// const Review = require("../models/Review");

// const auth = require("../middleware/authMiddleware");

// /* ➕ ADD REVIEW */
// router.post("/", auth, async (req, res) => {

//   const { productId, rating, comment } = req.body;

//   const review = await Review.create({
//     userId: req.user.id,
//     productId,
//     rating,
//     comment
//   });

//   res.json(review);
// });

// /* 📦 GET REVIEWS */
// router.get("/:productId", async (req, res) => {

//   const data = await Review.find({
//     productId: req.params.productId
//   });

//   res.json(data);
// });

// module.exports = router;


const router = require("express").Router();
const Review = require("../models/Review");

/* =========================
   ➕ ADD REVIEW
========================= */
router.post("/", async (req, res) => {
  try {
    const review = await Review.create(req.body);
    res.json(review);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

/* =========================
   📦 GET REVIEWS BY PRODUCT
========================= */
router.get("/:productId", async (req, res) => {
  const reviews = await Review.find({
    productId: req.params.productId
  });
  res.json(reviews);
});

module.exports = router;