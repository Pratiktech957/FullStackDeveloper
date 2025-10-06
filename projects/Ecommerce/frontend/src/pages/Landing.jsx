import React from "react";
import { Link } from "react-router-dom";

export default function Landing(){
  return (
    <div style={{padding:40,backgroundImage:'url(https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=1400&q=60)',backgroundSize:'cover',color:'white',textAlign:'center'}}>
      <h1 style={{fontSize:48,margin:0}}>Welcome to MyShop</h1>
      <p style={{maxWidth:800,margin:'16px auto'}}>A small MERN ecommerce demonstration. Beautiful UI, auth, products and cart.</p>
      <div style={{marginTop:20}}>
        <Link to="/products" className="button" style={{background:'#fff',color:'#4f46e5'}}>Shop Now</Link>
      </div>
    </div>
  );
}
