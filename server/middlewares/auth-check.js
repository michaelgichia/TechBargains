const jwt = require('jsonwebtoken');
const User = require('mongoose').model('User');
const logger = require('../logger');


/**
 *  The Auth Checker middleware function.
 */
module.exports = (req, res, next) => {
  if (!req.headers.authorization) {
    return res.json({
      confirmation: 'fail',
      errros: 'You are not logged in.',
    });
  }

  // get the last part from a authorization header string like "bearer token-value"
  const token = req.headers.authorization.split(' ')[1];
  // decode the token using a secret key-phrase
  return jwt.verify(token, process.env.jwtSecret, (err, decoded) => {
    // the 401 code is for unauthorized status
    if (err) {
      res.json({
        confirmation: 'fail',
        errors: 'Please login!',
      })
      return;
    }

    const userId = decoded.sub;

    // check if a user exists
    return User.findById(userId, (userErr, user) => {
      if (userErr || !user) {
        res.json({
          confirmation: 'fail',
          errors: 'User not found!',
        })
        return;
      }
      return next();
    });
  });
};
