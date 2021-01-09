import React, { useState } from "react";



function Complete() {
    const[home,setHome]=useState(false);

    const next=()=>{
        setHome(true);
    }
    
    return (
        <>
      {
        <div className="complete">
            <p>Thanks for your Response. We will show you our best Results!</p>
            <button className="home" onClick={next}><b>Go to Home</b></button>
            <div className="left"><img src="https://cdn4.vectorstock.com/i/1000x1000/85/08/mix-race-women-having-fun-with-shopping-bags-black-vector-35018508.jpg" style={{height:"600px"}}/></div>
        </div>
      }
        </>
    )


}
export default Complete;