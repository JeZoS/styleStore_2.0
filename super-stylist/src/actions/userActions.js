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
