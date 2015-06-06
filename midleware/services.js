var jwt = require('jsonwebtoken'),
    moment = require('moment'),
    settings = require('../settings');

exports.createToken = function (user) {
    var payload = {
        sub: user._id,
        iat: moment().unix(),
        exp: moment().add(14, "days").unix(),
    };
    return jwt.encode(payload, settings.TOKEN_SECRET);
};
    