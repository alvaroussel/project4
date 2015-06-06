// ARCHIVO QUE CONTIENE LA RUTAS 


var express = require('express'),
    router = express.Router(),
    auth = require('../controllers/auth'),
    midleware = require('../midleware/midleware');

router.post('/signin', auth.signin);
router.post('/authenticate', auth.authenticate);
router.get('/check', midleware.ensureAuthenticated ,auth.check);

module.exports = router;