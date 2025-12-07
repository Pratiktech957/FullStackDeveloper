// seeder/seedProducts.js
require("dotenv").config();
const connectDB = require("../config/db");
const Product = require("../models/Product");

const products = [
  {
    name: "iPhone 14",
    description: "Apple iPhone 14 - 128GB",
    price: 70000,
    image: "https://via.placeholder.com/300?text=iPhone+14",
    countInStock: 5
  },
  {
    name: "Samsung Galaxy S23",
    description: "Samsung Galaxy S23 - 256GB",
    price: 60000,
    image: "https://via.placeholder.com/300?text=Galaxy+S23",
    countInStock: 7
  },
  {
    name: "Sony Headphones",
    description: "Wireless over-ear headphones",
    price: 5000,
    image: "https://via.placeholder.com/300?text=Headphones",
    countInStock: 20
  }
];

const importData = async () => {
  try {
    const MONGO_URI = process.env.MONGO_URI || "mongodb://127.0.0.1:27017/ecommerce";
    await connectDB(MONGO_URI);
    await Product.deleteMany({});
    await Product.insertMany(products);
    console.log("✅ Data Imported!");
    process.exit();
  } catch (err) {
    console.error("❌ Import failed:", err);
    process.exit(1);
  }
};

importData();
