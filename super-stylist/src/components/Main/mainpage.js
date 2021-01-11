import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./mainpage.css";

const MainPage = () => {
  const [token, setToken] = useState(false);
  const Loggeduser = useSelector((state) => state.user);
  const [userName, setUserName] = useState("");
  const { user, loggedIn } = Loggeduser;

  useEffect(() => {
    if (!loggedIn) {
      setToken(false);
    } else {
      setToken(true);
      setUserName(user.username);
    }
  }, [Loggeduser]);

  return (
    <div
      className="fixed_nav"
      style={{ position: "fixed", zIndex: "10", width: "100%" }}
    >
      <header className="deskstop-container">
        <nav className="navb">
          <div className="options_Login">
            <div className="navbar-bran">
              <span className="super">
                <h2 style={{ marginLeft: "4%" }}>SuperStylist</h2>
              </span>
            </div>
            <div className="all_links">
              <Link className="profile" to="/profile">
                <div>
                  <i className="fas fa-user"></i>
                </div>
              </Link>
              <Link
                className="Login"
                to="/login"
                style={{
                  display: token ? "none" : "",
                }}
              >
                <h4>Login/SignUp</h4>
              </Link>
              <div className="Login" style={{ display: token ? "" : "none" }}>
                <h4>{userName}</h4>
              </div>

              <Link className="About" to="/About">
                <h4>About Us</h4>
              </Link>
              <Link className="Contact" to="/Contact">
                <h4>Contact</h4>
              </Link>
            </div>
          </div>
        </nav>
      </header>
      <div className="options" style={{ display: "flex" }}>
        <div>
          <Link className="Men" to="/Men">
            Men
          </Link>
          <Link className="Women" to="/Women">
            Women
          </Link>
          <Link className="LookBook" to="/LookBook">
            LookBook
          </Link>
          <Link className="FashionTips" to="/FashionTips">
            FashionTips
          </Link>
        </div>
        <div style={{ marginRight: "10px" }}>
          <Link className="Home" to="/">
            Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
