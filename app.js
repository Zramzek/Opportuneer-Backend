var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
const cors = require('cors');
var logger = require('morgan');
const fileUpload = require('express-fileupload');
const mongoose = require('mongoose');

// var userRouter = require('./routes/user.routes');
var authRouter = require('./routes/auth.routes'); 
var dashboardRouter = require('./routes/dashboard.routes'); 
var profileRouter = require('./routes/profile.routes'); 
var courseRouter = require('./routes/course.routes'); 
// var bookmarkRouter = require('./routes/bookmark.routes'); 
var jobRouter = require('./routes/jobsearch.routes');
var jobManagerRouter = require('./routes/jobmanagement.routes');
var tesMinatRouter = require('./routes/tesminat.routes');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');
app.use(logger('dev'));
app.use(fileUpload());
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/auth', authRouter);
app.use('/', dashboardRouter);
app.use('/profile', profileRouter);
app.use('/course', courseRouter);
// app.use('/bookmark', bookmarkRouter);
app.use('/jobsearch', jobRouter);
app.use('/jobmanager', jobManagerRouter);
app.use('/tesminat', tesMinatRouter);

app.use(function(req, res, next) {
  next(createError(404));
});

const MONGO_URL = process.env.MONGO_URL ;

mongoose.connect(MONGO_URL).then(() => {
  console.log('Connected to MongoDB')}).catch((err) => {console.log('Failed to connect to MongoDB', err)}); 

app.use(function(err, req, res, next) {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
