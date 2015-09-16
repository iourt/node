exports.home = function (req, res, next) {
    if (!req.session || !req.session.user) {
        return res.redirect("/login");
    }

    // res.render('subviews/manage.html');
    res.send('GET request to homepage');
};