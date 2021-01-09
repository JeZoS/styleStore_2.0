import React from "react";

import "./HomePage.css";
import Home from "../Home";

class HomePage extends React.Component {
  constructor() {
    super();
    this.state = {
      questionaire: false,
    };
    this.clickHandler = this.clickHandler.bind(this);
  }

  clickHandler() {
    this.setState({
      questionaire: true,
    });
    console.log(this.state.questionaire);
  }
  render() {
    return (
      <div>
        {this.state.questionaire ? (
          <Home />
        ) : (
          <div className="bbgg">
            <div
              // className="set"
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "start",
                alignItems: "center",
              }}
            >
              <div className="containers">
                <p className="welcome">
                  <b>Welcome to Your Stylist!</b>
                </p>
                <p className="heading">
                  <p>Get your Favrioute Styles for your Favrioute Ocassions</p>
                </p>
                <p className="tag">
                  <b>
                    <i>" Clothes that will talk on your behalf"</i>
                  </b>
                </p>
                <button className="start" onClick={this.clickHandler}>
                  Get Started
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
}
export default HomePage;
