var express = require('express');
var router  = express.Router();

router.get('/', (req, res) => {
  res.render('channels', {
      path : req.originalUrl
  });
});

module.exports = router;
