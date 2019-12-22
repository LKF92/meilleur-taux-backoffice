import React, { useState, useEffect } from "react";
import Cookie from "js-cookie";
const uid2 = require('uid2')

export default function Login({setReload}) {
  const [password, setPassword] = useState("");
  
  useEffect(()=> {
if(password === "tothemoon") {
    Cookie.set("token", uid2(16))
    setReload(true)
}
  }, [password])


  return (
    <div style={{ margin: "50px auto", width: "100%", display: "flex", flexDirection: "column", justifyContent: "center", alignItems:'center' }}>
      <h2>PASSWORD : </h2>
      <p style={{marginBottom : "10px", marginTop : "0" }}>(hint 🚀)</p>
      <input type="password" value={password} onChange={e => setPassword(e.target.value)} />
    </div>
  );
}
