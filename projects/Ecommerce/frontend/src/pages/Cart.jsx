import React, {useState,useEffect} from "react";

export default function Cart(){
  const [cart, setCart] = useState([]);

  useEffect(()=> {
    try{
      setCart(JSON.parse(localStorage.getItem('cart')||'[]'));
    }catch{ setCart([]) }
  },[]);

  const updateQty = (id,qty) => {
    const copy = cart.map(it=> it._id===id? {...it, qty} : it);
    setCart(copy); localStorage.setItem('cart', JSON.stringify(copy));
  };

  const removeItem = (id) => {
    const copy = cart.filter(it=> it._id !== id);
    setCart(copy); localStorage.setItem('cart', JSON.stringify(copy));
  };

  const total = cart.reduce((s,i)=> s + i.price * i.qty, 0);

  return (
    <div className="container">
      <h2>Your Cart</h2>
      {cart.length===0? <div>Your cart is empty</div> : (
        <div>
          {cart.map(item => (
            <div key={item._id} className="card" style={{display:'flex',gap:12,alignItems:'center',marginBottom:12}}>
              <img src={item.image} alt={item.name} style={{width:96,height:96,objectFit:'cover',borderRadius:6}} />
              <div style={{flex:1}}>
                <div style={{fontWeight:600}}>{item.name}</div>
                <div>₹{item.price}</div>
                <div>
                  <input type="number" value={item.qty} min={1} onChange={e=>updateQty(item._id, Number(e.target.value))} className="input" style={{width:80}} />
                  <button onClick={()=>removeItem(item._id)} className="button" style={{background:'#ef4444',marginLeft:8}}>Remove</button>
                </div>
              </div>
            </div>
          ))}

          <div style={{textAlign:'right', marginTop: 12}}>
            <div style={{fontSize:18,fontWeight:700}}>Total: ₹{total}</div>
            <button className="button" style={{background:'#10b981',marginTop:8}}>Checkout</button>
          </div>
        </div>
      )}
    </div>
  );
}
