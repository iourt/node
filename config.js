var path = require("path");

exports.config = {
    name         : '数据接口API',
    description  : '连接MYSQL、抛除API',
    version      : '0.0.1',
    port         : 3000,
    mysql        : {
        host     : 'localhost',
        // port     : 3306,
        user     : '',
        password : '',
        database : ''
    }
}