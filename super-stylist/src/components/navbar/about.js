import React from "react";
import { Redirect } from "react-router-dom";
import "./about.css";
function About() {
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
        <div className="about_us">
          <h1 className="head">
            <b>About Us</b>
          </h1>

          <h4 className="description">
            <b>SuperStylist</b> is your partner who helps you to look good.
            Gives you Variety of Idea for Variety of occasions so that you add
            beauty to your beauty. We pay attention to every detail, which means
            you'll find an elevated aesthetic throughout our entire collection.
            Designed to make your everyday special and expressive, Super
            Stylist's clothes Ideas are an individualist's greatest style
            secret. And, the best part? Find Fashion Ideas that make you feel
            special.
            <br />
            <br />
            <b>SuperStylist</b> Provide you Fashion Styles for-Office look
            -Party look -Wedding look -Casual look -Winter look for both Male
            and Female look.
            <br />
            <br />
            Special about <b>Super Stylist</b> is we style you on the basis of
            feedback you have entered about yourself your height,body
            type,complexion etc. you can also get some tips and styling hacks.
            <br></br>
            <br></br>
            So, are you ready to rep special occasion dresses to stop traffic,
            beautiful to steal the spotlight, to rule the world in? Let your
            unique spirit shine with <b>SuperStylist</b> styling Ideas.
          </h4>
          <div className="explore">
            <b>**Explore more to Enhance your Personality!!**</b>
          </div>

          <div>
            <button className="btn" onClick={clickHandler}>
              Back
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default About;
