import React,{useState} from "react";
import "../App.css";

function Login(){

const [email,setEmail] = useState("")
const [password,setPassword] = useState("")

const loginUser=(e)=>{
e.preventDefault()

if(email === "" || password === ""){
alert("Login validation error")
}else{
alert("Login successful")
}
}

return(

<div className="form-container">

<h2>Login</h2>

<form onSubmit={loginUser}>

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

<button>Login</button>

</form>

</div>

)
}

export default Login