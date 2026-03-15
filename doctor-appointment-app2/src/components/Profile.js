import React,{useState} from "react";
import "../App.css";

function Profile(){

const [name,setName] = useState("John Doe")

return(

<div className="profile-container">

<h2>User Profile</h2>

<div className="profile-card">

<p><strong>Name:</strong> {name}</p>

<input
placeholder="Update Name"
onChange={(e)=>setName(e.target.value)}
/>

<button>Update Profile</button>

</div>

</div>

)

}

export default Profile