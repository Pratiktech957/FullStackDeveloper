import React from "react";

export default function ProductCard({ product, onAdd }) {
  return (
    <div className="card">
      <img src={product.image} alt={product.name} style={{width:'100%',height:160,objectFit:'cover',borderRadius:6}} />
      <h3 style={{margin:'10px 0 6px'}}>{product.name}</h3>
      <p style={{color:'#666',fontSize:13}}>{product.description?.slice(0,80)}</p>
      <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',marginTop:10}}>
        <strong>₹{product.price}</strong>
        <button className="button" onClick={() => onAdd(product)}>Add</button>
      </div>
    </div>
  );
}
