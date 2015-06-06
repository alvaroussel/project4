var express = require('express'),
    bodyParser = require('body-parser'),
    app = express(),
    settings = require('./settings'),
    mongoose = require('mongoose'),
    routes = require('./routes/main');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(routes);

mongoose.connect('mongodb://localhost/test', function (err) {
    app.listen(settings.PORT, function () {
        console.log('Se ha levantado el servidor en http://localhost:%s', settings.PORT);
    });
});