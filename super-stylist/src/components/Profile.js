import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Redirect } from "react-router-dom";
import { delFav, getFav } from "../actions/userActions";
import "./profile.css";

const Profile = () => {
  const loggedUser = useSelector((state) => state.user);
  const { user, loggedIn } = loggedUser;
  const favourites = useSelector((state) => state.favourites);
  const { loading, fav } = favourites;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getFav());
  }, [dispatch]);

  const removeHandler = (id) => {
    // console.log(id);
    dispatch(delFav(id));
  };

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
      <h2 className="cross_text">favourite_items</h2>

      <div className="fav_item_container">
        {/* <h2 className="cross_text">favourite_items</h2> */}
        {loading || fav.length === 0 ? (
          <div className="heart_items">Heart Items To See Them Here</div>
        ) : (
          fav.map((el, idx) => (
            <div className="fav_item_card">
              <img src={el.img}></img>
              <i
                className="fas fa-heart remove_fav"
                onClick={() => removeHandler(el.product)}
              ></i>
              <p className="remove_fav_text">Click to remove from favs</p>
            </div>
          ))
        )}
      </div>
      <button
        className="btn del_account"
        style={{ backgroundColor: "crimson", color: "white" }}
      >
        Delete Account
      </button>
    </div>
  );
};

export default Profile;
