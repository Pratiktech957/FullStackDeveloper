import React, {useState} from "react";
import api from "../api";
import { useNavigate } from "react-router-dom";

export default function Login(){
  const [form,setForm] = useState({email:'',password:''});
  const [err,setErr] = useState(null);
  const nav = useNavigate();

  const submit = async (e)=>{
    e.preventDefault();
    setErr(null);
    try{
      const res = await api.post('/users/login', form);
      localStorage.setItem('user', JSON.stringify(res.data));
      nav('/products');
    }catch(error){
      setErr(error.response?.data?.message || error.message);
    }
  };

  return (
    <div className="container">
      <div className="form card">
        <h3>Sign in</h3>
        {err && <div style={{color:'red'}}>{err}</div>}
        <form onSubmit={submit}>
          <input className="input" placeholder="Email" type="email" value={form.email} onChange={e=>setForm({...form,email:e.target.value})} required />
          <input className="input" placeholder="Password" type="password" value={form.password} onChange={e=>setForm({...form,password:e.target.value})} required />
          <button className="button" type="submit">Sign In</button>
        </form>
      </div>
    </div>
  );
}
