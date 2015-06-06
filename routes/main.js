// ARCHIVO QUE CONTIENE LA RUTAS 


var express = require('express'),
    router = express.Router(),
    authRoutes = require('./auth'),
    mainController = require('../controllers/main');

/**
*   SE CARGA EL MODULO AUTH
*
**/
router.use('/', authRoutes);
router.get('/', mainController.index);
router.get('/signin', mainController.signin);
router.get('/login', mainController.login);

module.exports = router;