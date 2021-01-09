import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Redirect } from "react-router-dom";
import "./profile.css";

const Profile = () => {
  const loggedUser = useSelector((state) => state.user);
  const { user, loggedIn } = loggedUser;

  const dispatch = useDispatch();

  if (!loggedIn) {
    return <Redirect to="/login" />;
  }

  const logOutHandler = () => {
    dispatch({
      type: "LOGOUT",
    });
    // return <Redirect to="/" />;
  };

  return (
    <div className="profile_main">
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <h1 className="profile_username">{user.username}</h1>
        <button className="btn" onClick={() => logOutHandler()}>
          Logout
        </button>
      </div>
      <button
        className="btn"
        style={{ backgroundColor: "crimson", color: "white" }}
      >
        Delete Account
      </button>
    </div>
  );
};

export default Profile;
