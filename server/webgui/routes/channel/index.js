var express = require('express');
var router  = express.Router({mergeParams: true});

router.use('/',       require('./channel'));
router.use('/admin',  require('./admin'));

module.exports = router;
