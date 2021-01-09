import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import { userlogin, userregister } from "../../actions/userActions";
import "./login.css";

function Login() {
  const [redirect, setRedirect] = React.useState(false);
  const [login, setLogin] = useState(true);
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");

  const dispatch = useDispatch();

  const loggeduser = useSelector((state) => state.user);

  const { user } = loggeduser;

  if (user && user.username) {
    return <Redirect to="/" />;
  }

  const conpasswordChange = (e) => {
    setUsername(e.target.value);
  };
  const passwordChange = (e) => {
    setPassword(e.target.value);
  };
  const userChange = (e) => {
    setEmail(e.target.value);
  };
  const loginHandler = async () => {
    if (email.length && password.length) {
      dispatch(userlogin(email, password));
    } else {
      return;
    }
  };

  const registerHandler = async () => {
    if (email.length && password.length && username.length) {
      dispatch(userregister(email, password, username));
    } else {
      return;
    }
  };

  function clickHandler() {
    setRedirect(true);
  }

  return (
    <>
      <div>
        {redirect ? (
          <Redirect to="/" />
        ) : (
          <div className="login">
            <span className="close" onClick={clickHandler}>
              <i className="fas fa-times"></i>
            </span>
            <div className="left">
              <h1>Welcome To Super Stylist!</h1>
              <h4>
                <b>Login/SignUp</b> To quickly find your favourites styles,
                saved your collections.
              </h4>
              <img src="http://clipart-library.com/data_images/308739.jpg" />
            </div>
            <div className="right" style={{ backgroundColor: "crimson" }}>
              <h4 style={{ color: "white" }}>
                <b>Login/SignUp</b> To quickly find your favourites styles,
                saved your collections.
              </h4>
              <div className="frm_input">
                <div>
                  <label for="username" style={{ color: "white" }}>
                    Email :
                  </label>
                  <input
                    type="text"
                    name="username"
                    value={email}
                    onChange={(e) => userChange(e)}
                    style={{ margin: "5px 4px" }}
                  ></input>
                </div>
                <div>
                  <label for="password" style={{ color: "white" }}>
                    Password :
                  </label>
                  <input
                    minLength="8"
                    type="password"
                    // name="password"
                    onChange={(e) => passwordChange(e)}
                    value={password}
                    style={{ margin: "5px 4px" }}
                  ></input>
                </div>
                {!login && (
                  <div>
                    <label for="text" style={{ color: "white" }}>
                      Username :
                    </label>
                    <input
                      type="text"
                      onChange={(e) => conpasswordChange(e)}
                      value={username}
                      style={{ margin: "5px 4px" }}
                    ></input>
                  </div>
                )}
              </div>
              <div>
                {login ? (
                  <button
                    className="login_btn btn"
                    style={{
                      margin: "10px 5px",
                      backgroundColor: "black",
                      color: "white",
                      padding: "4px 7px",
                    }}
                    onClick={() => loginHandler()}
                  >
                    Login
                  </button>
                ) : (
                  <button
                    className="register btn"
                    style={{
                      margin: "10px 5px",
                      backgroundColor: "black",
                      color: "white",
                      padding: "4px 7px",
                    }}
                    onClick={() => registerHandler()}
                  >
                    Register
                  </button>
                )}
              </div>
              <p>
                {login ? "Already have an acoount?" : "Already Registered?"}
                <button
                  className="btn_login_register"
                  onClick={() => setLogin(!login)}
                  style={{
                    backgroundColor: "transparent",
                    color: "white",
                    border: "none",
                  }}
                >
                  {" "}
                  {login ? "Register" : "Login"}
                </button>
              </p>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default Login;
