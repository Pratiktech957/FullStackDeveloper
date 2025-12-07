// controllers/productController.js
const Product = require("../models/Product");

// GET /api/products
const getProducts = async (req, res) => {
  try {
    const products = await Product.find().sort({ createdAt: -1 });
    res.json(products);
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
};

// GET /api/products/:id
const getProductById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) return res.status(404).json({ message: "Product not found" });
    res.json(product);
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
};

// POST /api/products  (protected - for admin ideally)
const createProduct = async (req, res) => {
  try {
    const { name, description, price, image, countInStock } = req.body;
    const product = new Product({ name, description, price, image, countInStock });
    const saved = await product.save();
    res.status(201).json(saved);
  } catch (err) {
    res.status(400).json({ message: "Invalid data", error: err.message });
  }
};

// PUT /api/products/:id
const updateProduct = async (req, res) => {
  try {
    const upd = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!upd) return res.status(404).json({ message: "Product not found" });
    res.json(upd);
  } catch (err) {
    res.status(400).json({ message: "Update failed", error: err.message });
  }
};

// DELETE /api/products/:id
const deleteProduct = async (req, res) => {
  try {
    const del = await Product.findByIdAndDelete(req.params.id);
    if (!del) return res.status(404).json({ message: "Product not found" });
    res.json({ message: "Product deleted" });
  } catch (err) {
    res.status(500).json({ message: "Delete failed", error: err.message });
  }
};

module.exports = {
  getProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct
};
