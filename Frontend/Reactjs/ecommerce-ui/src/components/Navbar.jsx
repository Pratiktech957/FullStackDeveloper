import React from "react";
import { motion } from "framer-motion";

export default function Navbar({ cartCount, onCartToggle }) {
  return (
    <nav className="navbar">
      <motion.div
        className="logo"
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
      >
        🛍️ MyShop
      </motion.div>

      <div className="cart-icon" onClick={onCartToggle}>
        🛒
        {cartCount > 0 && <span className="badge">{cartCount}</span>}
      </div>
    </nav>
  );
}
