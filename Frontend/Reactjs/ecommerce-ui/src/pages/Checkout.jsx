import React, { useState } from "react";
import { motion } from "framer-motion";

export default function Checkout({ cart }) {
  const [form, setForm] = useState({ name: "", email: "", address: "" });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Order Placed Successfully!");
  };

  return (
    <motion.div className="container checkout"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h2>Checkout</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Full Name" value={form.name} onChange={handleChange} required />
        <input type="email" name="email" placeholder="Email" value={form.email} onChange={handleChange} required />
        <textarea name="address" placeholder="Address" value={form.address} onChange={handleChange} required></textarea>
        <button type="submit" className="btn">Place Order</button>
      </form>

      <div className="checkout-summary">
        <h3>Order Summary</h3>
        {cart.map((item, i) => (
          <div key={i} className="cart-item">
            {item.name} - ₹{item.price}
          </div>
        ))}
        <p>Total: ₹{cart.reduce((a,b)=>a+b.price,0)}</p>
      </div>
    </motion.div>
  );
}
