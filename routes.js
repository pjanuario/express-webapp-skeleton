var express = require('express'),
    router = express.Router(),
    controllers = require('./controllers');

router.get('/', controllers.index);

module.exports = router;
