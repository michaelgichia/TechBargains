const express = require('express');
const validator = require('validator');
const passport = require('passport');

const router = new express.Router();

/**
 * Validate the sign up form
 *
 * @param {object} payload - the HTTP body message
 * @returns {object} The result of validation. Object contains a boolean validation result,
 *                   errors tips, and a global message for the whole form.
 */
function validateSignupForm(payload) {
  const errors = {};
  let isFormValid = true;
  let message = '';

  if (!payload || typeof payload.email !== 'string' || !validator.isEmail(payload.email)) {
    isFormValid = false;
    errors.email = 'Please provide a correct email address.';
  }

  if (!payload || typeof payload.password !== 'string' || payload.password.trim().length < 8) {
    isFormValid = false;
    errors.password = 'Password must have at least 8 characters.';
  }

  if (!payload || typeof payload.name !== 'string' || payload.name.trim().length === 0) {
    isFormValid = false;
    errors.name = 'Please provide your name.';
  }

  if (!isFormValid) {
    message = 'Check the form for errors.';
  }

  return {
    success: isFormValid,
    message,
    errors,
  };
}

/**
 * Validate the login form
 *
 * @param {object} payload - the HTTP body message
 * @returns {object} The result of validation. Object contains a boolean validation result,
 *                   errors tips, and a global message for the whole form.
 */
function validateLoginForm(payload) {
  const errors = {};
  let isFormValid = true;
  let message = '';

  if (!payload || typeof payload.email !== 'string' || payload.email.trim().length === 0) {
    isFormValid = false;
    errors.email = 'Please provide your email address.';
  }

  if (!payload || typeof payload.password !== 'string' || payload.password.trim().length === 0) {
    isFormValid = false;
    errors.password = 'Please provide your password.';
  }

  if (!isFormValid) {
    message = 'Check the form for errors.';
  }

  return {
    success: isFormValid,
    message,
    errors,
  };
}

router.post('/signup', (req, res, next) => {
  req.checkBody('name', 'Name cannot be empty.').notEmpty();
  req.checkBody('email', 'Email cannot be empty.').notEmpty();
  req.checkBody('email', 'valid email required.').isEmail();
  req.checkBody('password', '6 to 20 characters required').len(6, 20);
  req.sanitize('name').trim();
  req.sanitize('email').trim();
  req.sanitize('password').trim();

  // Errors
  const errors = req.validationErrors();
  if (errors.length > 0) {
    return res.json({
      success: false,
      message: 'Form has errors!',
      errors,
    }).end();
  }

  return passport.authenticate('local-signup', (err) => {
    if (err) {
      if (err.name === 'MongoError' && err.code === 11000) {
        // the 11000 Mongo code is for a duplication email error
        // the 409 HTTP status code is for conflict error
        return res.json({
          success: false,
          errors: 'This email is already taken.',
        }).end();
      }

      return res.json({
        success: false,
        message: 'Could not process the form.',
      }).end();
    }

    return res.json({
      success: true,
      message: 'You have successfully signed up! Now you should be able to log in.',
    }).end();
  })(req, res, next);
});

router.post('/login', (req, res, next) => {
  const validationResult = validateLoginForm(req.body);
  if (!validationResult.success) {
    return res.json({
      success: false,
      message: validationResult.message,
      errors: validationResult.errors,
    }).end();
  }


  return passport.authenticate('local-login', (err, token, userData) => {
    if (err) {
      if (err.name === 'IncorrectCredentialsError') {
        return res.json({
          success: false,
          message: err.message,
        });
      }

      return res.json({
        success: false,
        message: 'Could not process the form.',
      }).end();
    }

    return res.json({
      success: true,
      message: 'You have successfully logged in!',
      token,
      user: userData,
    });
  })(req, res, next);
});


module.exports = router;
