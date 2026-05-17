const jwt = require("jsonwebtoken");

const authMiddleware = (req, res, next) => {

  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({ message: "No token, access denied" });
  }

  try {
    const decoded = jwt.verify(token, "SECRET_KEY");

    req.user = decoded; // user info store

    next();

  } catch (err) {
    return res.status(401).json({ message: "Invalid token" });
  }
};

module.exports = authMiddleware;