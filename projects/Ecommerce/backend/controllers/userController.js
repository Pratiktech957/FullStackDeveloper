// controllers/userController.js
const jwt = require("jsonwebtoken");
const User = require("../models/User");

// helper: generate JWT
const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: "7d" });
};

// POST /api/users/signup
const signup = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    if (!name || !email || !password) return res.status(400).json({ message: "All fields required" });

    const existing = await User.findOne({ email });
    if (existing) return res.status(400).json({ message: "User already exists" });

    const user = new User({ name, email, password });
    await user.save();

    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      token: generateToken(user._id)
    });
  } catch (err) {
    res.status(500).json({ message: "Signup error", error: err.message });
  }
};

// POST /api/users/login
const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) return res.status(400).json({ message: "All fields required" });

    const user = await User.findOne({ email });
    if (user && await user.matchPassword(password)) {
      return res.json({
        _id: user._id,
        name: user.name,
        email: user.email,
        token: generateToken(user._id)
      });
    } else {
      return res.status(401).json({ message: "Invalid email or password" });
    }
  } catch (err) {
    res.status(500).json({ message: "Login error", error: err.message });
  }
};

// GET /api/users/profile  (protected)
const getProfile = async (req, res) => {
  try {
    // authMiddleware sets req.user
    if (!req.user) return res.status(401).json({ message: "Not authorized" });
    res.json({
      _id: req.user._id,
      name: req.user.name,
      email: req.user.email
    });
  } catch (err) {
    res.status(500).json({ message: "Profile error", error: err.message });
  }
};

module.exports = { signup, login, getProfile };
