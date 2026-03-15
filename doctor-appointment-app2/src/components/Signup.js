import React, { useState } from "react";
import "../App.css";

function Signup() {

const [name,setName] = useState("")
const [email,setEmail] = useState("")
const [password,setPassword] = useState("")

const handleSubmit = (e)=>{
e.preventDefault()

if(name === "" || email === "" || password === ""){
alert("Please fill all fields")
}else{
alert("Signup successful")
}
}

return(

<div className="form-container">

<h2>Create Account</h2>

<form onSubmit={handleSubmit}>

<input
type="text"
placeholder="Full Name"
onChange={(e)=>setName(e.target.value)}
/>

<input
type="email"
placeholder="Email"
onChange={(e)=>setEmail(e.target.value)}
/>

<input
type="password"
placeholder="Password"
onChange={(e)=>setPassword(e.target.value)}
/>

<button type="submit">Sign Up</button>

</form>

</div>

)
}

export default Signup