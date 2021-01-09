import React from "react";

import Question1 from './questions1'

const Questionaire=()=>{
    return (
        <>
       
        <header classNameName="deskstop-container">
            <nav className="navb">
               
              <p className="navbar-bran" style={{fontSize:"xx-large"}}><span className="super"><b>Super</b></span><span className="stylist"> <b>Stylist</b></span></p>
              <a className="Login" href="/login" style={{fontSize:"x-large"}}><b>Login/SignUp</b></a>
              <a className="About" href="/about" style={{fontSize:"x-large"}}><b>About</b></a>
              <a className="wishlist" href="#" style={{fontSize:"x-large"}}>
          <span class="glyphicon glyphicon-bookmark"></span>
        </a>
              <a className="profile" href="#" style={{fontSize:"x-large"}}>
          <span class="glyphicon glyphicon-user"></span>
        </a>
            </nav>

     </header>
     <Question1/>

     
    

        </>

        
    )
}
export default Questionaire;