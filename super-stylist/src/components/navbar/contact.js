import React from "react";
import "./contact.css";
import { Redirect } from "react-router-dom";
function Contact() {
  const [redirect, setRedirect] = React.useState(false);

  function clickHandler() {
    console.log(`I am clicked`);
    setRedirect(true);
  }
  return (
    <>
      {redirect ? (
        <Redirect to="/" />
      ) : (
        <div>
          <div className="contact">
            <span className="closebtn" onClick={clickHandler}>
              <i className="fas fa-times"></i>
            </span>
            <h1>Get in Touch</h1>
            <h4>Feel free to drop us a line below!</h4>
            <input
              className="field"
              type="text"
              value=""
              placeholder="Enter Your Name"
            />
            <input
              className="field"
              type="text"
              value=""
              placeholder="Enter your e-mail"
            />
            <textarea
              className="textfield"
              type="text"
              value=""
              placeholder="Type your message..."
            />
            <button type="submit" className="send">
              Send
            </button>
            <div className="information">
              <h3>Contact Us</h3>
              <div className="mail-id">
                <i class="material-icons">&#xe0be;</i>{" "}
                <div>sujatachandravanshi@gmail.com</div>
              </div>
              <div className="linkedIn">
                <i style={{ fontSize: "24px" }} className="fa">
                  &#xf08c;
                </i>{" "}
                <div>suju123456789</div>
              </div>
              <div className="phone">
                <i class="material-icons">&#xe0cd;</i>
                <div> +91 7896543210</div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Contact;
