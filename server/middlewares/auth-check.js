const jwt = require("jsonwebtoken");
const User = require("mongoose").model("User");
const logger = require("../logger");

/**
 *  The Auth Checker middleware function.
 */
module.exports = (req, res, next) => {
  if (!req.headers.authorization) {
    const errors = { message: "You are not logged in!" };
    return res.json({
      confirmation: "fail",
      errors: errors
    });
  }

  // get the last part from a authorization header string like "bearer token-value"
  const token = req.headers.authorization.split(" ")[1];
  // decode the token using a secret key-phrase
  return jwt.verify(token, process.env.jwtSecret, (err, decoded) => {
    // the 401 code is for unauthorized status
    if (err) {
      const errors = { message: "Please login!" };
      res.json({
        confirmation: "fail",
        errors: errors
      });
      return;
    }

    const userId = decoded.sub;

    // check if a user exists
    return User.findById(userId, (userErr, user) => {
      const errors = { message: "User not found!" };
      if (userErr || !user) {
        res.json({
          confirmation: "fail",
          errors: errors
        });
        return;
      }
      return next();
    });
  });
};
