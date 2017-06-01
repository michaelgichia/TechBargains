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
      message: 'You are not logged in.',
    });
  }

  // get the last part from a authorization header string like "bearer token-value"
  const token = req.headers.authorization.split(' ')[1];

  // decode the token using a secret key-phrase
  return jwt.verify(token, process.env.jwtSecret, (err, decoded) => {
    // the 401 code is for unauthorized status
    if (err) {
      return res.json({
        confirmation: 'fail',
        message: 'You are not logged in.',
      }).end();
    }

    const userId = decoded.sub;

    // check if a user exists
    return User.findById(userId, (userErr, user) => {
      if (userErr || !user) {
        return res.json({
          confirmation: 'fail',
          message: 'You are not logged in.',
        }).end();
      }

      return next();
    });
  });
};
