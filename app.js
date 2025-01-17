const createError = require('http-errors');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv/config');

const express = require('express');
const path =require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const triviaRouter = require('./routes/trivia');
const debugLib = require('debug');
const debug = debugLib('server:server');

var app = express();

const DB = process.env.DATABASE;

mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false 
  })
  .then(() => console.log('DB connnection successful!'));

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());


app.use(express.static(path.join(__dirname, 'client/build')));

app.use('/', indexRouter);
// app.use('/users', usersRouter);
app.use('/api/trivia', triviaRouter);

app.use(function(req, res) {
  res.sendFile(path.join(__dirname, '../client/build/index.html'));
});


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
