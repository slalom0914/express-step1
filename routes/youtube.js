var express = require('express');
var router = express.Router();

/* GET youtube page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Youtube' });
});
// 버전1
router.get('/step1', function(req, res, next){
  res.render('index', { title: "유튜브-버전1", pageName: "pages/youtube/step1.ejs", email: null })
})
// 버전2
router.get('/step2', function(req, res, next){
  res.render('index', { title: "유튜브-버전2", pageName: "pages/youtube/step2.ejs", email: null })
})
// 버전3
router.get('/step3', function(req, res, next){
  res.render('index', { title: "유튜브-버전3", pageName: "pages/youtube/step3.ejs", email: null })
})

module.exports = router;