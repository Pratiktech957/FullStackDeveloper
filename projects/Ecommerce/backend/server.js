// server.js
require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
const productRoutes = require("./routes/productRoutes");
const userRoutes = require("./routes/userRoutes");

const app = express();
app.use(cors());
app.use(express.json());

// Connect DB
const MONGO_URI = process.env.MONGO_URI || "mongodb://127.0.0.1:27017/ecommerce";
connectDB(MONGO_URI);

// Routes
app.get("/", (req, res) => res.send("Ecommerce Backend Running"));
app.use("/api/products", productRoutes);
app.use("/api/users", userRoutes);

// Basic error handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: "Server error", error: err.message });
});

// Start
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
