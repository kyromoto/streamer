var express = require('express');
var router  = express.Router();

router.use('/', require('./admin'));

module.exports = router;
