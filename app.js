var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var passport = require('passport');
var sassMiddleware = require('node-sass-middleware');
require('./app_server/models/db');
require('./app_server/config/passport')
var index = require('./app_server/routes/index');
var users = require('./app_server/routes/users');
var studentsapi = require('./app_server/routes/studentsapi')
var admin = require('./app_server/routes/admin');
var standard = require('./app_server/routes/standardapi');
var attendance = require('./app_server/routes/attendance');
var test = require('./app_server/routes/testroutes');
var authenticateRouter = require('./app_server/routes/authenticationroutes');
var app = express();

// view engine setup
app.engine('html', require('ejs').renderFile);
app.set('views', path.join(__dirname,'public'));
app.set('view engine', 'html');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(sassMiddleware({
  src: path.join(__dirname, 'public'),
  dest: path.join(__dirname, 'public'),
  indentedSyntax: true, // true = .sass and false = .scss
  sourceMap: true
}));
app.use(express.static(path.join(__dirname, 'public')));
app.use(passport.initialize());
var jwt = require('express-jwt');
var auth = jwt({
  secret: 'MY_SECRET',
  userProperty: 'payload'
});
app.use('/', index);
app.use('/users', users);
app.use('/api/authenticate',authenticateRouter);
app.use('/api/students',auth,studentsapi);
app.use('/api/admin',auth,admin);
app.use('/api/standard',auth,standard);
app.use('/api/attendance',auth,attendance);
app.use('/api/test',auth,test);



// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
