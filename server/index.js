/* eslint consistent-return:0 */
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const expressValidator = require('express-validator');
const logger = require('./logger');
const passport = require('passport');

const argv = require('minimist')(process.argv.slice(2));
const setup = require('./middlewares/frontendMiddleware');
const isDev = process.env.NODE_ENV !== 'production';
const ngrok = (isDev && process.env.ENABLE_TUNNEL) || argv.tunnel ? require('ngrok') : false;
const resolve = require('path').resolve;

// configurations
require('dotenv').config();

// connect to the database and load models
require('./models').connect(process.env.DB_URL);

const app = express();

// tell the app to parse HTTP body messages
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

// Validator
app.use(expressValidator());

// pass the passport middleware
app.use(passport.initialize());

// load passport strategies
const localSignupStrategy = require('./passport/local-signup');
const localLoginStrategy = require('./passport/local-login');

// load passport strategies
passport.use('local-signup', localSignupStrategy);
passport.use('local-login', localLoginStrategy);

// pass the authorization checker middleware
const authCheckMiddleware = require('./middleware/auth-check');

// custome validator
app.use(expressValidator({
 customValidators: {
    isArray: function(value) {
      return Array.isArray(value);
    }
 }
}));

app.use('/api', authCheckMiddleware);

// routes
const authRoutes = require('./routes/auth');
const apiRoutes = require('./routes/api');
const categoryRoutes = require('./routes/category.route');
const itemRoutes = require('./routes/item.route');
const subCategoryRoutes = require('./routes/subcategory.route');
const merchantRoutes = require('./routes/merchant.route');
const publicRoutes = require('./routes/api.public');
const catsAndsubsRoutes = require('./routes/catAndSub.route');
const bannerRoutes = require('./routes/banner.route');

// routes
app.use('/auth', authRoutes);
app.use('/api', apiRoutes);
app.use('/api/category', categoryRoutes);
app.use('/api/item', itemRoutes);
app.use('/api/subcategory', subCategoryRoutes);
app.use('/api/merchant', merchantRoutes);
app.use('/api/banner', bannerRoutes);
app.use('/public-api/all', catsAndsubsRoutes);
app.use('/public-api', publicRoutes);


// In production we need to pass these values in instead of relying on webpack
setup(app, {
  outputPath: resolve(process.cwd(), 'build'),
  publicPath: '/',
});

// get the intended host and port number, use localhost and port 3000 if not provided
const customHost = argv.host || process.env.HOST;
const host = customHost || null; // Let http.Server use its default IPv6/4 host
const prettyHost = customHost || 'localhost';

const port = argv.port || process.env.PORT || 3000;

// Start your app.
app.listen(port, host, (err) => {
  if (err) {
    return logger.error(err.message);
  }

  // Connect to ngrok in dev mode
  if (ngrok) {
    ngrok.connect(port, (innerErr, url) => {
      if (innerErr) {
        return logger.error(innerErr);
      }

      logger.appStarted(port, prettyHost, url);
    });
  } else {
    logger.appStarted(port, prettyHost);
  }
});
