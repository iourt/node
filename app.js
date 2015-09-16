var fs        = require('fs');
var path      = require('path');
var express   = require('express');
var routes    = require('./routes');
var sets      = require('./set');
var appConfig = require("./appConfig").config;

var app = express();

// app.configure(function () {
//     app.set('views', path.join(__dirname, 'views'));
// });

routes(app);

app.set('views', './views')

app.listen(appConfig.port);

console.log("the app server run at port :%d in %s mode. ", appConfig.port, app.settings.env);

module.exports = app;