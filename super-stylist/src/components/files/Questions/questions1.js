import React, { useState } from "react";
import Question2 from './question2';
import './questions1.css'

function Questions() {
    const[ques2,setQues2]=useState(false);

    const next=()=>{
        setQues2(true);
        
    }
    return (
        <>
      {ques2?<Question2/>:
        <div className="ques1">
            <p><b>Welcome to the Super Stylist profile Questionaire!</b></p>
            <div class="gender"><p>Please Select your Gender from the following</p>
            <div ><div className="male" onClick={next}><img src="https://cdn4.vectorstock.com/i/1000x1000/01/18/portrait-cute-young-man-vector-14970118.jpg" style={{height:"150px",width:"150px", borderRadius:"50%"}}/>Male</div>
            <div className="female" onClick={next}><img src="https://cdn4.vectorstock.com/i/1000x1000/89/93/portrait-beautiful-glamorous-woman-vector-1788993.jpg" style={{height:"150px",width:"150px", borderRadius:"50%"}}/>Female</div></div></div>
        </div>
        
      }
        </>
    )


}
export default Questions;