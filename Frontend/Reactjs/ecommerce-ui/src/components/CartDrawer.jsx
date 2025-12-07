import React from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function CartDrawer({ isOpen, cart, onClose }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="cart-drawer"
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          exit={{ x: "100%" }}
          transition={{ type: "tween", duration: 0.4 }}
        >
          <div className="cart-header">
            <h2>Your Cart</h2>
            <button onClick={onClose}>✖</button>
          </div>
          <div className="cart-items">
            {cart.map((item, i) => (
              <div key={i} className="cart-item">
                <img src={item.image} alt={item.name} />
                <div>
                  <h4>{item.name}</h4>
                  <p>₹{item.price}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
