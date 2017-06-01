const options = { server: { socketOptions: { keepAlive: 300000, connectTimeoutMS: 30000 } }, 
                replset: { socketOptions: { keepAlive: 300000, connectTimeoutMS : 30000 } } };       
 
const mongoose = require('mongoose');

module.exports.connect = (uri) => {
  mongoose.connect(uri, options);
  // plug in the promise library:
  mongoose.Promise = global.Promise;


  mongoose.connection.on('error', (err) => {
    if (err) {
      console.error(`Mongoose connection error: ${err}`);
      process.exit(1);
    } else {
      console.log('Mongoose connection succeful.');
    }
  });

  // load models
  require('./user');
};
