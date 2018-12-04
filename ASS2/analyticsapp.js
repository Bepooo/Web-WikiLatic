/**
 * The file to start a server
 *
*/

var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var session = require('express-session');

var indexRouter = require('./app/routes/index');
var usersRouter = require('./app/routes/users');
var login = require('./app/routes/login');
var register = require('./app/routes/register');
var logout= require('./app/routes/logout');
var analytics = require('./app/routes/analytics');
//var analyticsroutes = require('./app/routes/analytics.server.routes');

var app = express();
app.use(logger('dev'));
app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.json())
app.set('view engine', 'ejs');
app.use(cookieParser());

app.use(session({
    resave: false,
    saveUninitialized: true,
    secret: 'group_Assignment2',
    cookie:{
        maxAge: 15*60*1000,
        //secure: false
    }
}));

app.set('views', path.join(__dirname,'/app/views'));
app.use(express.static(path.join(__dirname, '/public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/login', login);
app.use('/register', register);
app.use('/logout', logout);
app.use('/analytics', analytics);
//app.use('/revision',analyticsroutes);

app.use(function(req, res, next) {
    next(createError(404));
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

app.listen(3000, function () {
	  console.log('Analytics app listening on port 3000!')
	});
	
module.exports = app;
