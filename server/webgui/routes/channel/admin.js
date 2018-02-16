var path    = require('path');
var express = require('express');

var checkLogin = require(path.join(__dirname, '..', '..', '..', 'middleware', 'check-login'));

var router  = express.Router({mergeParams: true});


router.get('/', checkLogin('/login'), (req, res) => {
  res.render('channel-admin', {
      path : req.originalUrl
  });
});

router.get('/login', (req, res) => {
  res.render('login', {});
});

module.exports = router;
