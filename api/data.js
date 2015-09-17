/**
 * 获取除点击统计以外的统计数据
 * getDetailData
 */
exports.getDetailData = function (req, res, next) {
    res.json({
        "PageId": 1,

        "List": {
            "Pv": [100, 21, 23, 34, 5, 62, 74, 98, 6, 13, 11, 12, 13, 14, 145, 32, 1657, 18, 39, 20, 61, 22, 23],
            "Uv": [540, 23, 343, 34, 54, 62, 74, 78, 999, 137, 171, 76, 13, 14, 145, 32, 89, 18, 99, 20, 41, 42, 323],
            "Ip": [60, 93, 53, 34, 54, 62, 74, 78, 69, 47, 21, 76, 93, 90, 321, 90, 90, 68, 39, 90, 21, 62, 23],
            "Page": [20, 33, 13, 25, 84, 22, 94, 28, 89, 37, 21, 126, 33, 74, 95, 12, 79, 28, 49, 10, 91, 10, 11],
            "Stop": ["00:12:12", "00:01:12", "00:02:32", "00:32:22", "00:12:02", "00:13:32", "00:13:12", "00:33:22", "00:13:32", "00:13:32", "00:13:32", "00:13:32", "00:13:32", "00:13:32", "00:13:32", "00:13:32", "00:13:32", "00:13:32", "00:13:32", "00:13:32", "00:13:32", "00:13:32", "00:13:32"]
        },

        "Response": {
            "Ack": "Success"
        }
    });

};

exports.getDetailButton = function (req, res, next) {

    res.json({
        "List": [
            {
                "Id": 12312,
                "Data": [1,2,3,34,5,62,74,8,9,13,11,12,13,14,145,32,17,18,39,20,61,22,23]
            },
            {
                "Id": 23344,
                "Data": [23,2,3,4,5,6,7,8,9,10,11,12,13,14,15,34,17,18,19,20,21,22,23]
            },
            {
                "Id": 23344,
                "Data": [1,34,3,445,5,6,7,8,9,10,11,12,13,14,15,56,17,18,19,20,98,22,23]
            },
            {
                "Id": 23344,
                "Data": [1,2,3,4,5,6,7,8,9,10,15,12,13,14,15,165,67,18,19,20,61,22,23]
            },
            {
                "Id": 23344,
                "Data": [1,2,3,4,5,6,7,8,9,34,11,92,13,14,35,46,54,18,19,78,21,22,23]
            },
            {
                "Id": 23344,
                "Data": [1,2,3,4,5,6,7,54,9,10,11,12,43,14,15,46,17,18,19,20,21,22,23]
            },
            {
                "Id": 23344,
                "Data": [1,2,3,4,25,6,7,8,9,19,11,12,73,14,15,19,97,18,19,45,21,22,23]
            },
            {
                "Id": 23344,
                "Data": [1,2,3,4,54,89,7,8,23,10,11,12,13,14,45,76,17,18,19,20,21,22,23]
            },
            {
                "Id": 23344,
                "Data": [13,2,3,4,5,6,7,8,89,10,11,82,13,14,15,65,17,18,43,65,21,22,23]
            }
        ],

        "Response": {
            "Ack": "Success"
        }
    });
};

exports.getPageModel = function (req, res, next) {

    res.json({
        "Page": [
            {
                "Id": 1,
                "Name": "活动"
            },
            {
                "Id": 2,
                "Name": "注册"
            },
            {
                "Id": 3,
                "Name": "认证"
            },
            {
                "Id": 4,
                "Name": "一起玩"
            },
            {
                "Id": 5,
                "Name": "邻里圈"
            },
            {
                "Id": 6,
                "Name": "消息"
            },
            {
                "Id": 7,
                "Name": "小区首页"
            }
        ],

        "Response": {
            "Ack": "Success"
        }
    });
};

exports.getPageList = function (req, res, next) {

    res.json({
        "List": [
            {
                "Id": 1,
                "PageId": 10000,
                "Name": "page name",
                "Url": "page url"
            },
            {
                "Id": 2,
                "PageId": 12000,
                "Name": "page name"
            },
            {
                "Id": 3,
                "PageId": 10003,
                "Name": "page name"
            },
            {
                "Id": 4,
                "PageId": 10004,
                "Name": "page name"
            },
            {
                "Id": 5,
                "PageId": 10030,
                "Name": "page name"
            },
            {
                "Id": 6,
                "PageId": 10050,
                "Name": "page name"
            },
            {
                "Id": 7,
                "PageId": 10080,
                "Name": "page name"
            }
        ],

        "Total": 100,

        "Response": {
            "Ack": "Success"
        }
    });
};