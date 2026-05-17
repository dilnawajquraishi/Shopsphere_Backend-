// const express = require("express");
// const router = express.Router();

// const bcrypt = require("bcryptjs");
// const jwt = require("jsonwebtoken");

// const User = require("../models/User");

// /* =========================
//    📝 REGISTER
// ========================= */
// router.post("/register", async (req, res) => {
//   try {
//     const { name, email, password, role } = req.body; // 🔥 role add

//     const exist = await User.findOne({ email });
//     if (exist) {
//       return res.json({ message: "User already exists" });
//     }

//     const hash = await bcrypt.hash(password, 10);

//     const user = await User.create({
//       name,
//       email,
//       password: hash,
//       role: role || "user" // 🔥 dynamic role
//     });

//     res.json({ success: true, user });

//   } catch (err) {
//     res.status(500).json({ message: err.message });
//   }
// });

// /* =========================
//    🔐 LOGIN
// ========================= */
// router.post("/login", async (req, res) => {
//   try {

//     const { email, password } = req.body;

//     const user = await User.findOne({ email });
//     if (!user) {
//       return res.json({ message: "User not found" });
//     }

//     const match = await bcrypt.compare(password, user.password);
//     if (!match) {
//       return res.json({ message: "Wrong password" });
//     }

//     const token = jwt.sign(
//       { id: user._id, role: user.role },
//       "SECRET_KEY"
//     );

//     res.json({
//       token,
//       user: {
//         id: user._id,
//         name: user.name,
//         email: user.email,
//         role: user.role // 🔥 IMPORTANT
//       }
//     });

//   } catch (err) {
//     res.status(500).json({ message: err.message });
//   }
// });

// module.exports = router;


const express = require("express");
const router = express.Router();

const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const User = require("../models/User");

/* =========================
   📝 REGISTER
========================= */
router.post("/register", async (req, res) => {
  try {

    const { name, email, password, role } = req.body;

    const exist = await User.findOne({ email });
    if (exist) {
      return res.json({ message: "User already exists" });
    }

    const hash = await bcrypt.hash(password, 10);

    const user = await User.create({
      name,
      email,
      password: hash,
      role: role || "user" // 🔥 admin bhi ban sakta
    });

    res.json({ success: true, user });

  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

/* =========================
   🔐 LOGIN
========================= */
router.post("/login", async (req, res) => {
  try {

    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) {
      return res.json({ message: "User not found" });
    }

    const match = await bcrypt.compare(password, user.password);
    if (!match) {
      return res.json({ message: "Wrong password" });
    }

    const token = jwt.sign(
      { id: user._id, role: user.role },
      "SECRET_KEY"
    );

    res.json({
      token,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role
      }
    });

  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;