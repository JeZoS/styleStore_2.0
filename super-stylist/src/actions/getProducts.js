import axios from "axios";

export const getMensSummer = () => async (dispatch) => {
  try {
    dispatch({
      type: "SUMMER_REQUEST",
    });
    const { data } = await axios.get("/products/men_summer");
    dispatch({
      type: "SUMMER_PRODUCT_LIST_SUCCESS",
      payload: data,
    });
  } catch (err) {
    console.log(err);
  }
};

export const getMensWinter = () => async (dispatch) => {
  dispatch({
    type: "WINTER_REQUEST",
  });
  try {
    const { data } = await axios.get("/products/men_winter");
    dispatch({
      type: "WINTER_PRODUCT_LIST_SUCCESS",
      payload: data,
    });
  } catch (err) {
    console.log(err);
  }
};

export const getMensOffice = () => async (dispatch) => {
  dispatch({
    type: "OFFICE_REQUEST",
  });
  try {
    const { data } = await axios.get("/products/men_office");
    dispatch({
      type: "OFFICE_PRODUCT_LIST_SUCCESS",
      payload: data,
    });
  } catch (err) {
    console.log(err);
  }
};

export const getMensWedding = () => async (dispatch) => {
  dispatch({
    type: "WEDDING_REQUEST",
  });
  try {
    const { data } = await axios.get("/products/men_wedding");
    dispatch({
      type: "WEDDING_PRODUCT_LIST_SUCCESS",
      payload: data,
    });
  } catch (err) {
    console.log(err);
  }
};
//
//
//
//
//
//
//WOMENS SECTION
//
//
//
//
//
//
export const getWomensSummer = () => async (dispatch) => {
  try {
    dispatch({
      type: "WOMEN_SUMMER_REQUEST",
    });
    const { data } = await axios.get("/products/women_summer");
    dispatch({
      type: "WOMEN_SUMMER_PRODUCT_LIST_SUCCESS",
      payload: data,
    });
  } catch (err) {
    console.log(err);
  }
};

export const getWomensWinter = () => async (dispatch) => {
  dispatch({
    type: "WOMEN_WINTER_REQUEST",
  });
  try {
    const { data } = await axios.get("/products/women_winter");
    dispatch({
      type: "WOMEN_WINTER_PRODUCT_LIST_SUCCESS",
      payload: data,
    });
  } catch (err) {
    console.log(err);
  }
};

export const getWomensOffice = () => async (dispatch) => {
  dispatch({
    type: "WOMEN_OFFICE_REQUEST",
  });
  try {
    const { data } = await axios.get("/products/women_office");
    dispatch({
      type: "WOMEN_OFFICE_PRODUCT_LIST_SUCCESS",
      payload: data,
    });
  } catch (err) {
    console.log(err);
  }
};

export const getWomensWedding = () => async (dispatch) => {
  dispatch({
    type: "WOMEN_WEDDING_REQUEST",
  });
  try {
    const { data } = await axios.get("/products/women_wedding");
    dispatch({
      type: "WOMEN_WEDDING_PRODUCT_LIST_SUCCESS",
      payload: data,
    });
  } catch (err) {
    console.log(err);
  }
};
