/*
 * Criado em Mon Aug 08 2022
 *
 * Copyright (c) 2022 André Augusto - AETEC Tecnologia Ltda.
 */
require('dotenv').config();

var express = require('express');
var cors = require('cors')
var path = require('path');
var cookieParser = require('cookie-parser');

var { config } = require('./src/config')

var api = require('./src/api')
var app = express();

var { mongoManager } = require('./src/mongo')

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(cors())

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

mongoManager.connect();

app.use('/api/v1', api( config ))
app.use('/doc',express.static('doc'))

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

app.listen = function() {
  var server = http.createServer( this );
  console.log( server.address );
};

module.exports = app;
