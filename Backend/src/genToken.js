const jwt = require("jsonwebtoken");

const genToken = (id) => {
  return jwt.sign({ id }, "MY_SECRET", {
    expiresIn: "5d",
  });
};

module.exports = genToken;
