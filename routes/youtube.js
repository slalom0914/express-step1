var express = require('express');
var router = express.Router();

/* GET youtube page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Youtube' });
});

module.exports = router;