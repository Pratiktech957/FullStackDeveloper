import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import axios from "axios";


export default function ProductDetails({ products, addToCart }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = products.find((p) => p.id === parseInt(id));

  if (!product) return <h2>Product not found</h2>;

  return (
    <motion.div className="container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="product-details">
        <img src={product.image} alt={product.name} />
        <div className="details">
          <h2>{product.name}</h2>
          <p className="brand">{product.brand}</p>
          <p className="price">₹{product.price}</p>
          <p className="description">{product.description}</p>
          <button className="btn" onClick={() => addToCart(product)}>Add to Cart</button>
          <button className="btn" onClick={() => navigate("/checkout")} style={{ marginLeft: "10px", background: "#16a34a" }}>Buy Now</button>
        </div>
      </div>
    </motion.div>
  );
}
