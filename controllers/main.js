// MAIN CONTROLLER

exports.index = function (req, res) {
    // res.send("BUENAS");
    res.sendFile(__dirname + "/index.html");
};

exports.signin = function (req, res) {
    // res.send("BUENAS");
    res.sendFile(__dirname + "/formulario.html");
};

exports.login = function (req, res) {
    // res.send("BUENAS");
    res.sendFile(__dirname + "/login.html");
};