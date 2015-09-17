module.exports = {
    setReponse: function () {
        var obj = {
            Ack: 'success',
            State: true,
            Time: new Date().getTime()
        };

        return obj;
    }
};