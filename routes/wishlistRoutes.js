const router = require("express").Router();
const Wishlist = require("../models/Wishlist");

const auth = require("../middleware/authMiddleware");

/* ❤️ ADD */
router.post("/", auth, async (req, res) => {
  const { productId } = req.body;

  const exist = await Wishlist.findOne({
    userId: req.user.id,
    productId
  });

  if (exist) {
    return res.json({ message: "Already added" });
  }

  const item = await Wishlist.create({
    userId: req.user.id,
    productId
  });

  res.json(item);
});

/* 📦 GET */
router.get("/", auth, async (req, res) => {
  const data = await Wishlist.find({ userId: req.user.id });
  res.json(data);
});

/* ❌ REMOVE */
router.delete("/:id", auth, async (req, res) => {
  await Wishlist.findByIdAndDelete(req.params.id);
  res.json({ message: "Removed" });
});

module.exports = router;