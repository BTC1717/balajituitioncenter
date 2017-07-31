/**
 * Created by gpalani on 17-05-2017.
 */
var mongoose = require('mongoose');
var gracefulShutdown;
//var dbURI =  'mongodb://localhost/btc';
var dbURI ='mongodb://goutham:goutham17@ds143362.mlab.com:43362/btc';
mongoose.connect(dbURI);

mongoose.connection.on('connected',function () {
  console.log('Mongoose connected '+ dbURI);
});

mongoose.connection.on('error',function (err) {
  console.log('Mongoose connection Error '+ dbURI);
});

mongoose.connection.on('disconnected',function () {
  console.log('Mongoose connection Ended '+ dbURI);
});


gracefulShutdown = function (msg,callback) {
  mongoose.connection.close(function () {
    console.log('Mongoose disconnected on '+ msg);
    callback();
  });
};


process.once('SIGUR2',function () {
  gracefulShutdown('nodemon restart',function(){
    prcoess.kill(process.pid,'SIGUR2');
  });
});

process.once('SIGINT',function () {
  gracefulShutdown('app termination',function(){
    prcoess.exit(0);
  });
});

process.once('SIGTERM',function () {
  gracefulShutdown('HEROKU app Shutdown',function(){
    prcoess.exit(0);
  });
});
require('./student');
require('./attendance');
require('./test');
require('./user');
