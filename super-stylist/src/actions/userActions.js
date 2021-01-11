import axios from "axios";

export const userlogin = (email, password) => async (dispatch) => {
  try {
    const { data } = await axios.post("/user/login", { email, password });
    // localStorage.setItem("user", data);
    dispatch({
      type: "LOGIN_SUCCESS",
      payload: data,
    });
  } catch (err) {
    console.log(err);
  }
};

export const userregister = (email, password, username) => async (dispatch) => {
  try {
    const { data } = await axios.post("/user/register", {
      email,
      password,
      username,
    });
    // localStorage.setItem("user", data);
    dispatch({
      type: "LOGIN_SUCCESS",
      payload: data,
    });
  } catch (err) {
    console.log(err);
  }
};

export const getFav = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: "REQUEST_FAV",
    });
    const {
      user: { user },
    } = getState();
    const config = {
      headers: {
        Authorization: `Bearer ${user.token}`,
      },
    };
    const { data } = await axios.get("/fav", config);
    dispatch({
      type: "FAV_SUCCESS",
      payload: data,
    });
  } catch (err) {
    console.log(err);
  }
};

export const delFav = (id) => async (dispatch, getState) => {
  try {
    dispatch({
      type: "REQUEST_FAV",
    });
    const {
      user: { user },
    } = getState();
    const config = {
      headers: {
        Authorization: `Bearer ${user.token}`,
      },
    };
    const { data } = await axios.get(`/fav/${id}`, config);
    dispatch({
      type: "FAV_SUCCESS",
      payload: data,
    });
  } catch (err) {
    console.log(err);
  }
};
