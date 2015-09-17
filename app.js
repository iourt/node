var fs         = require('fs');
var path       = require('path');
var express    = require('express');
var routes     = require('./routes');
var appConfig  = require("./config").config;
var bodyParser = require('body-parser');
var mysql      = require('mysql');
// var multer     = require('multer');

// var connection = mysql.createConnection(appConfig.mysql);
// connection.connect();

var app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: false })); // for parsing application/x-www-form-urlencoded
// app.use(multer()); // for parsing multipart/form-data

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'controllers')));

// routes(app);
app.use('/api', routes);

app.listen(appConfig.port);

console.log("the app server run at port :%d in %s mode. ", appConfig.port, app.settings.env);

module.exports = app;