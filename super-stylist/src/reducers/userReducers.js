export const loginreducer = (state = { user: {}, loggedIn: false }, action) => {
  switch (action.type) {
    case "LOGIN_SUCCESS":
      return { user: action.payload, loggedIn: true };
    case "LOGOUT":
      return { user: {}, loggedIn: false };
    default:
      return { ...state };
  }
};

export const setFav = (state = { fav: [] }, action) => {
  switch (action.type) {
    case "REQUEST_FAV":
      return { loading: true };
    case "FAV_SUCCESS":
      return { fav: action.payload, loading: false };
    case "DEL_FAV":
      return { fav: [], loading: false };
    default:
      return state;
  }
};

// export const delFav = ()

// export const registerreducer = (state = { user: {} }, action) => {
//   switch (action.type) {
//     case "LOGIN_SUCCESS":
//       return { user: action.payload };
//     default:
//       return {};
//   }
// };
