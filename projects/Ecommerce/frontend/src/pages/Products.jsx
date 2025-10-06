import React, {useEffect, useState} from "react";
import api from "../api";
import ProductCard from "../components/ProductCard";

export default function Products(){
  const [products,setProducts] = useState([]);
  const [loading,setLoading] = useState(true);
  const [err,setErr] = useState(null);

  useEffect(()=>{
    let mounted = true;
    api.get('/products').then(res=> { if(mounted){ setProducts(res.data); setLoading(false);} })
      .catch(e=> { setErr(e.message); setLoading(false); });
    return ()=> mounted=false;
  },[]);

  const addToCart = (p) => {
    const raw = localStorage.getItem('cart') || '[]';
    const cart = JSON.parse(raw);
    const idx = cart.findIndex(i=> i._id === p._id);
    if(idx>-1) cart[idx].qty += 1;
    else cart.push({...p, qty:1});
    localStorage.setItem('cart', JSON.stringify(cart));
    alert('Added to cart');
  };

  return (
    <div className="container">
      <h2>Products</h2>
      {loading? <div>Loading...</div> : err? <div style={{color:'red'}}>{err}</div> : (
        <div className="grid">
          {products.map(p=> <ProductCard key={p._id} product={p} onAdd={addToCart} />)}
        </div>
      )}
    </div>
  );
}
