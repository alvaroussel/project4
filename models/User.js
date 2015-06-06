var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var User = new Schema({
    username: String,
    name: String,
    surname: String,
    email: String,
    password: String,
    token: String
});

module.exports = mongoose.model('User', User);