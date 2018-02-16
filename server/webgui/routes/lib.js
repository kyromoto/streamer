var path    = require('path');
var express = require('express');

var router  = express.Router();

var nodeModules = path.join(__dirname, '..', '..', 'node_modules');

router.use('/bootstrap',  express.static(path.join(nodeModules, 'bootstrap', 'dist')));
router.use('/jquery',     express.static(path.join(nodeModules, 'jquery', 'dist')));

module.exports = router;
