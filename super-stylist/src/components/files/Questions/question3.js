import React, { useState } from "react";
import './question3.css'
import Complete from '../complete';

function Questions3() {

    const[complete,setComplete]=useState(false);

    const next=()=>{
        setComplete(true);

    }
    return (
        <>
     {complete?<Complete/>:
        <div className="ques3">
            
            <div className="height"><p>Please Select your Height from the following</p>
            <div ><button className="short" onClick={next}>4.8ft-5.2ft</button>
            <button className="mediumht" onClick={next}>5.3ft-5.6ft</button>
            <button className="tall" onClick={next}>5.7ft-5.9ft</button></div></div>
        </div>
     }
        </>
    )


}
export default Questions3;