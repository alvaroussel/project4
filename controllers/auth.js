// CONTROLLER AUTH


var User = require('../models/User'),
    settings = require('../settings'),
    jwt = require('jsonwebtoken');

exports.signin = function (req, res) {
    console.log('POST request to /signin');
    query = {
        email: req.body.email,
        username: req.body.username,
        password: req.body.password    
    };
    User.findOne(query, function (err, user) {
        if (err) res.json({type: false, data: "Error ocurred " + err});
        else if (user) res.json({type: false, data: "User already exists"});
        else {
            var newUser = new User();
            newUser.username = req.body.username;
            newUser.name = req.body.name;
            newUser.surname = req.body.surname;
            newUser.email = req.body.email;
            newUser.password = req.body.password;
            newUser.save( function (err, user) {
                user.token = jwt.sign(user, settings.TOKEN_SECRET, {
                    expiresInMinutes: 1440
                });
                user.save( function (err, user1) {
                    res.json({type: true, data: user1, token: user.token});
                });
            });
        }
    });
};

exports.authenticate = function (req, res) {
    query = {
        email: req.body.email,
        username: req.body.username,
        password: req.body.password
    };
    User.findOne(query, function (err, user) {
        if (err) res.json({type: false, data: "Error ocurred " + err});
        else if (user) res.json({type: true, token: user.token});
        else res.json({type: false, data: "Incorrect email/password"});
    });
};

exports.check = function(req, res) {
	res.json(req.decoded);
};
