import React, {useEffect, useState} from "react";
import api from "../api";

export default function Profile(){
  const [profile, setProfile] = useState(null);
  const [err, setErr] = useState(null);

  useEffect(()=> {
    api.get('/users/profile').then(res=> setProfile(res.data)).catch(e=> setErr(e.response?.data?.message || e.message));
  },[]);

  if(err) return <div className="container" style={{color:'red'}}>{err}</div>;

  return (
    <div className="container">
      <h2>Profile</h2>
      {profile ? (
        <div className="card">
          <div><strong>Name:</strong> {profile.name}</div>
          <div><strong>Email:</strong> {profile.email}</div>
        </div>
      ) : <div>Loading...</div>}
    </div>
  );
}
