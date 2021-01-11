const jwt = require("jsonwebtoken");
const User = require("../userSchema");

const verifyToken = async (req, res, next) => {
  let token;
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      // console.log(req.headers.authorization);
      token = req.headers.authorization.split(" ")[1];
      //   console.log(token);
      const decode = jwt.verify(token, "MY_SECRET");
      //   console.log(decode);
      req.user = await User.findById(decode.id).select("-password");
      //   console.log(req.user);
      next();
    } catch (err) {
      console.log(err);
    }
  } else {
    res.send("401");
    console.log("Not authorized");
  }
};

module.exports = verifyToken;
