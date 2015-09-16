var index = require('./controllers/index');
var login = require('./controllers/login');

module.exports = function (app) {
    app.get('/', index.home);

    app.get('/login', login.showLogin);

    app.use(function(req, res, next) {
        res.status(404).send('Sorry cant find that!');
    });

    app.use(function(err, req, res, next) {
        console.error(err.stack);
        res.status(500).send('Something broke!');
    });
};