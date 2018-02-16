var express = require('express');
var router  = express.Router({mergeParams: true});

router.get('/', (req, res) => {
  res.render('channel', {
      path : req.originalUrl
  });
});

module.exports = router;
