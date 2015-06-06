var settings = require('../settings'),
    jwt = require('jsonwebtoken'),
    moment = require('moment');

exports.ensureAuthenticated = function (req, res, next) {
    if (!req.headers.authorization) {
        return res
            .status(403)
            .send({message: "Tu peticion no tiene cabecera"});
    }
    var token = req.headers.authorization.split(" ")[1];
    var payload = jwt.decode(token, settings.TOKEN_SECRET);
    if (payload.exp <= moment().unix()) {
        return res
            .status(401)
            .send({message: "El token ha espirado"});
    }
    req.user = payload.sub;
    next();
};