var express = require('express');
var router  = express.Router();;
var datas   = require('./api/data');

router.use(function setheader(req, res, next) {

    // res.header("Content-Type", "text/plain");
    // res.header("Access-Control-Allow-Origin", "http://localhost:7777");
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With");
    res.header("Access-Control-Allow-Methods", "POST, GET, OPTIONS");
    res.header("Content-Type", "application/json");
    res.header("X-Powered-By", "Express");

    // console.log(req.params);
    // console.log(req.hostname);
    // console.log(req.method);

    if (req.method == "OPTIONS") {
        res.sendStatus(200);
    } else {
        var params = req.body;

        // if (!params.Header.UserId) {
        //     res.json({
        //         Response: {
        //             Ack: 'failure',
        //             State: false,
        //             Time: new Date().getTime()
        //         }
        //     })
        // } else {
        //     next();
        // }

        next();
    }
});

router.all('/getDetailData', datas.getDetailData);
router.all('/getDetailButton', datas.getDetailButton);
router.all('/getPageModel', datas.getPageModel);
router.all('/getPageList', datas.getPageList);

module.exports = router;

// module.exports = function (app) {

//     app.all('/api/getDetailData', datas.getDetailData);

//     app.all('/api/getDetailButton', datas.getDetailButton);
    
//     app.all('/api/getPageModel', datas.getPageModel);
    
//     app.all('/api/getPageList', datas.getPageList);

//     // app.use(function(req, res, next) {
//     //     res.status(404).send('Sorry cant find that!');
//     // });

//     // app.use(function(err, req, res, next) {
//     //     console.error(err.stack);
//     //     res.status(500).send('Something broke!');
//     // });



//     app.use(function(req, res, next) {
//         res.status(404).send('Sorry cant find that!');
//     });

//     // development error handler
//     // will print stacktrace
//     if (app.get('env') === 'development') {
//         app.use(function(err, req, res, next) {
//             res.status(err.status || 500);
//             res.render('error', {
//                 message: err.message,
//                 error: err
//             });
//         });
//     }

//     // production error handler
//     // no stacktraces leaked to user
//     app.use(function(err, req, res, next) {
//         res.status(err.status || 500);

//         res.render('error', {
//             message: err.message,
//             error: {}
//         });
//     });
// };