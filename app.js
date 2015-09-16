var fs        = require('fs');
var path      = require('path');
var express   = require('express');
var routes    = require('./routes');
var sets      = require('./set');
var appConfig = require("./appConfig").config;
var app       = express();

routes(app);

sets(app);

app.listen(appConfig.port);

console.log("the app server run at port :%d in %s mode. ", appConfig.port, app.settings.env);

module.exports = app;