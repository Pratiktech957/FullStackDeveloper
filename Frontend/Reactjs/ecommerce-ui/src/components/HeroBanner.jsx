import React from "react";
import { motion } from "framer-motion";

export default function HeroBanner() {
  return (
    <motion.section
      className="hero"
      initial={{ opacity: 0, y: -40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h1>Discover the Latest Trends</h1>
      <p>Shop your favorite items with exclusive discounts</p>
      <button className="btn">Shop Now</button>
    </motion.section>
  );
}
