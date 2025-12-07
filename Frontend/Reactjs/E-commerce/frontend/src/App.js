import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar.jsx";
import Shop from "./Pages/Shop.jsx";
import ShopCategory from "./Pages/ShopCategory.jsx";
import Cart from "./Pages/Cart";
import LoginSignup from "./Pages/LoginSignup";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Shop />} />
        <Route path="/mens" element={<ShopCategory category="mens" />} />
        <Route path="/womens" element={<ShopCategory category="womens" />} />
        <Route path="/kids" element={<ShopCategory category="kids" />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<LoginSignup />} />

        <Route/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
