import React,{useState} from "react";
import "../App.css";

function Reviews(){

const [review,setReview] = useState("")
const [rating,setRating] = useState("")

const submitReview=()=>{

if(review===""){
alert("Please write a review")
return
}

alert("Review Submitted")

}

return(

<div className="review-container">

<h2>Doctor Reviews</h2>

<textarea
placeholder="Write your review..."
onChange={(e)=>setReview(e.target.value)}
/>

<select onChange={(e)=>setRating(e.target.value)}>
<option>Select Rating</option>
<option>⭐ 1</option>
<option>⭐⭐ 2</option>
<option>⭐⭐⭐ 3</option>
<option>⭐⭐⭐⭐ 4</option>
<option>⭐⭐⭐⭐⭐ 5</option>
</select>

<button onClick={submitReview}>Submit Review</button>

</div>

)

}

export default Reviews