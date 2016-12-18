var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var mysql = require('mysql');
var mongoose = require('mongoose');
var methodOverride = require('method-override');
var flash = require('connect-flash');
var session = require('express-session');
var passport = require('passport');

//routes 부분 선언
var routes = require('./routes/index');
var city = require('./routes/city');
var posts = require('./routes/posts');

var app = express();

//몽고디비 연결
mongoose.connect('mongodb://younhun:yh0705@ds017736.mlab.com:17736/hun');
mongoose.connection.on('error', console.log);

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
if (app.get('env') === 'development') {
  app.locals.pretty = true;
}

app.locals.moment = require('moment');
// uncomment after placing your favicon in /public

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/bower_components',  express.static(path.join(__dirname, '/bower_components')));
app.use(methodOverride('_method', {methods: ['POST', 'GET']}));

//routes 부분 사용
app.use('/', routes);
app.use('/city', city);
app.use('/posts', posts);
app.use(session({ 
   resave: true, 
   saveUninitialized: true, 
   secret: 'long-long-long-secret-string-1313513tefgwdsvbjkvasd' 
 })); 
app.use(flash()); 

app.use(passport.initialize());//
app.use(passport.session());//

app.use(function(req, res, next) { //
  console.log("REQ USER", req.user);
  res.locals.currentUser = req.user; 
  res.locals.flashMessages = req.flash(); 
  next(); 
}); 


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
