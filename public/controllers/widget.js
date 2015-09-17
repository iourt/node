module.exports = {
    setReponse: function () {
        var obj = {
            Ack: 'success',
            State: true,
            Time: new Date().getTime()
        };

        return obj;
    },

    /**
     * 通过类型拿时间
     */
    getDate: function (type) {
        switch (type) {
            case 'today':
            break;
        }
    }
};