import "./men.css";
import React from "react";
import MainPage from "../Main/mainpage";
import { Link } from "react-router-dom";
class MenCollection extends React.Component {
  render() {
    return (
      <>
        <MainPage />
        <div
          style={{
            alignItems: "center",
            // justifyContent: "center",
            paddingTop: "100px",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <div className="mensCollection">
            <b>Men's Collections</b>
          </div>
          <div className="wears">
            <Link to="/men_summer">
              <div
                className="hola"
                style={{
                  backgroundImage:
                    "url(" +
                    "https://www.thefashionisto.com/wp-content/uploads/2019/07/Latin-Male-Model-Double-Denim-Style.jpg" +
                    ")",
                }}
              >
                <h2 className="TAG">Men's Summer Wear</h2>
              </div>
            </Link>
            <Link to="/men_winter">
              <div
                className="hola"
                style={{
                  backgroundImage:
                    "url(" +
                    "https://images.unsplash.com/photo-1515664069236-68a74c369d97?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80" +
                    ")",
                }}
              >
                <h2 className="TAG">Men's Winter Collection</h2>
              </div>
            </Link>
            <Link to="/men_office">
              <div
                className="hola"
                style={{
                  backgroundImage:
                    "url(" +
                    "https://images.unsplash.com/photo-1543132220-4bf3de6e10ae?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=634&q=80" +
                    ")",
                }}
              >
                <h2 className="TAG">Men's Office Collection</h2>
              </div>
            </Link>
            <Link to="/men_wedding">
              <div
                className="hola"
                style={{
                  backgroundImage:
                    "url(" +
                    "https://static01.manyavar.com/uploads/dealimages/11774/listimages/MLOSK305-328_MLOSK305-328.jpg" +
                    ")",
                }}
              >
                <h2 className="TAG">Men's Wedding Wear</h2>
              </div>
            </Link>
          </div>
        </div>
      </>
    );
  }
}
export default MenCollection;
