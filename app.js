var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var layouts = require('express-ejs-layouts');
var dotenv = require('dotenv');
dotenv.config();

const mariadb = require('mariadb/callback');
const db = mariadb.createConnection({host: process.env.DB_HOST,
user: process.env.DB_USER,
password: process.env.DB_PASSWORD,
database: process.env.DB_DATABASE,
port: process.env.DB_PORT});

// connect to database
db.connect((err) => {
if (err) {
console.log("Unable to connect to database due to error: " + err);
} 
else {
console.log("Connected to DB");
    }
});
global.db = db;



var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var aboutRouter = require('./routes/about');
var contactRouter = require('./routes/contact');
var privacyRouter = require('./routes/privacy');
var helpRouter = require('./routes/help');
var CustomerRouter = require('./routes/Customer');
var ProductTypeRouter = require('./routes/ProductType');
var SaleRouter = require('./routes/Sale');
var RewardsRouter = require('./routes/Rewards');
var ReviewRouter = require('./routes/Review');
var searchRouter = require('./routes/search');
var reportRouter = require('./routes/report');


var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(layouts);

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/about', aboutRouter);
app.use('/contact', contactRouter);
app.use('/privacy', privacyRouter);
app.use('/help', helpRouter);
app.use('/Customer', CustomerRouter);
app.use('/ProductType', ProductTypeRouter);
app.use('/Sale', SaleRouter);
app.use('/Rewards', RewardsRouter);
app.use('/Review', ReviewRouter);
app.use('/search',searchRouter);
app.use('/report', reportRouter);


// catch 404 and forward to error handler
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

module.exports = app;
