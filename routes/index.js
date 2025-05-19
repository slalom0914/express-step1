var express = require('express');
var router = express.Router();

/* GET home page. 
localhost:5000 엔터로 요청을 하면 인터셉트 해서 home.ejs요청된다.
*/
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home', pageName: 'pages/home.ejs' });
});
// 로그인 화면 추가
router.get('/login', function(req, res, next) {
  res.render('index', { title: '로그인', pageName: 'auth/login.ejs' });
});
module.exports = router;
