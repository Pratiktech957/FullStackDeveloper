import React from "react";
import { motion } from "framer-motion";

export default function ProductCard({ product, onAdd }) {
  return (
    <motion.div
      className="product-card"
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 200 }}
    >
      <motion.img
        src={product.image}
        alt={product.name}
        whileHover={{ scale: 1.1 }}
        transition={{ duration: 0.3 }}
      />
      <h3>{product.name}</h3>
      <p className="brand">{product.brand}</p>
      <p className="price">₹{product.price}</p>
      <motion.button
        className="btn"
        whileTap={{ scale: 0.9 }}
        onClick={() => onAdd(product)}
      >
        Add to Cart
      </motion.button>
    </motion.div>
  );
}
