import React from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Navbar() {
  const raw = localStorage.getItem("user");
  const user = raw ? JSON.parse(raw) : null;
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("user");
    navigate("/");
    window.location.reload();
  };

  return (
    <div className="nav">
      <div style={{display:'flex',gap:12,alignItems:'center'}}>
        <Link to="/" style={{fontWeight:700,fontSize:18}}>MyShop</Link>
      </div>

      <div style={{display:'flex',gap:12,alignItems:'center'}}>
        <Link to="/about" style={{opacity:0.95}}>About</Link>
        {!user ? (
          <>
            <Link to="/login" className="button" style={{background:'#fff',color:'#4f46e5'}}>Sign In</Link>
            <Link to="/signup" className="button" style={{background:'transparent',border:'1px solid rgba(255,255,255,0.5)'}}>Sign Up</Link>
          </>
        ) : (
          <>
            <Link to="/products" style={{color:'white'}}>Products</Link>
            <Link to="/cart" style={{color:'white'}}>Cart</Link>
            <Link to="/profile" style={{color:'white'}}>{user.name}</Link>
            <button onClick={logout} className="button" style={{background:'#fff',color:'#4f46e5'}}>Logout</button>
          </>
        )}
      </div>
    </div>
  );
}
