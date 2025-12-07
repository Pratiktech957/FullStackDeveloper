// routes/userRoutes.js
const express = require("express");
const router = express.Router();
const { signup, login, getProfile } = require("../controllers/userController");
const { protect } = require("../middleware/authMiddleware");

router.post("/signup", signup);
router.post("/login", login);
router.get("/profile", protect, getProfile);

module.exports = router;
