import React from "react";
import { motion } from "framer-motion";
import HeroBanner from "../components/HeroBanner.jsx";
import ProductCard from "../components/ProductCard.jsx";

export default function Home({ products, addToCart }) {
  return (
    <div className="container">
      <HeroBanner />
      <motion.div className="product-grid"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        {products.map((p) => (
          <ProductCard key={p.id} product={p} onAdd={addToCart} />
        ))}
      </motion.div>
    </div>
  );
}
