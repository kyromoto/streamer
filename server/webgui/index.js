var path    = require ('path');
var express = require('express');
var router  = express.Router();

router.use('/lib',      require(path.join(__dirname, 'routes', 'lib')));
router.use('/admin',    require(path.join(__dirname, 'routes', 'streamer-admin')));
router.use('/',         require(path.join(__dirname, 'routes', 'channels')));
router.use('/:channel', require(path.join(__dirname, 'routes', 'channel')));

module.exports = router;
