const express = require("express");
const authMiddleware = require("../middlewares/authMiddleware");

const {
    createUser,
    getUsers
} = require("../controllers/userController");

const router = express.Router();

router.post("/", authMiddleware, createUser);
router.get("/", authMiddleware, getUsers);

module.exports = router;