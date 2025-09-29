import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import CartDrawer from "./components/CartDrawer";
import Home from "./pages/Home";
import ProductDetails from "./pages/ProductDetails";
import Checkout from "./pages/Checkout";
import { products } from "./data/products";
import "./styles/global.css";

export default function App() {
  const [cart, setCart] = useState([]);
  const [isCartOpen, setCartOpen] = useState(false);

  const addToCart = (product) => {
    setCart((prev) => [...prev, product]);
  };

  return (
    <Router>
      <Navbar cartCount={cart.length} onCartToggle={() => setCartOpen(true)} />
      <CartDrawer isOpen={isCartOpen} cart={cart} onClose={() => setCartOpen(false)} />
      <Routes>
        <Route path="/" element={<Home products={products} addToCart={addToCart} />} />
        <Route path="/product/:id" element={<ProductDetails products={products} addToCart={addToCart} />} />
        <Route path="/checkout" element={<Checkout cart={cart} />} />
      </Routes>
      <Footer />
    </Router>
  );
}
