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

// export const registerreducer = (state = { user: {} }, action) => {
//   switch (action.type) {
//     case "LOGIN_SUCCESS":
//       return { user: action.payload };
//     default:
//       return {};
//   }
// };
