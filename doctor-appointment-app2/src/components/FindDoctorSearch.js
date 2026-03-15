import React,{useState} from "react";
import "../App.css";

function FindDoctorSearch(){

const [search,setSearch] = useState("")

const doctors = [
"Dr. Maria Santos - Cardiologist",
"Dr. Juan Cruz - Dentist",
"Dr. Ana Reyes - Pediatrician",
"Dr. Mark Lopez - Dermatologist"
]

const results = doctors.filter(d =>
d.toLowerCase().includes(search.toLowerCase())
)

return(

<div className="search-container">

<h2>Find a Doctor</h2>

<input
className="search-input"
type="text"
placeholder="Search doctor..."
onChange={(e)=>setSearch(e.target.value)}
/>

<div className="doctor-list">

{results.map((doc,index)=>(
<div className="doctor-card" key={index}>
{doc}
</div>
))}

</div>

</div>

)

}

export default FindDoctorSearch