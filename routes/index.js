const { default: axios } = require('axios');
var express = require('express');
var router = express.Router();

/* GET home page. 
localhost:5000 엔터로 요청을 하면 인터셉트 해서 home.ejs요청된다.
세션에 이메일 정보가 있다면 로그인을 한 사람이다. -> pages/home.ejs
이메일 정보가 없다면 로그인 화면으로 이동하기 -> auth/login.ejs
*/
router.get('/', function(req, res, next) {
  //아래는 세션에 저장된 이메일 정보를 출력하기 이다.
  console.log(req.session.email);
  if(req.session.email){
    res.render('index', { title: 'Home', pageName: 'pages/home.ejs', email:req.session.email });
  }else{
    res.render('index', { title: 'Home', pageName: 'auth/login.ejs', email: null });
  }
});
//구글계정이거나 비밀번호로 로그인 한 경우 home처리하기
//rendering할 때 마지막 자리에 email을 생략하면 페이지에 email undefined를 보게 된다.
router.get('/home', function(req, res, next){
  res.render('index',{ title: 'Home', pageName: 'pages/home.ejs', email: null})
})
// 로그인 화면 추가
router.get('/login', function(req, res, next) {
  res.render('index', { title: '로그인', pageName: 'auth/login.ejs', email: null });
});

/* 카카오 로그인 Redirect설정 */
router.get('/auth/kakao/callback', async(req,res, next)=>{
  //카카오 서버에서 카카오 로그인 이미지 버튼으로 요청시 붙인 redirect_url에
  // 쿼리스트링[?code=12345....]으로 인증코드를 보내준다.
  console.log(req.query.code);
  const code = req.query.code
  try {
    //Access Token 가져오기
    //Access Token으로 사용자 프로필 가져오기
    const res1 = await axios.post('https://kauth.kakao.com/oauth/token', null, {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
      },
      params:{
      grant_type: 'authorization_code',
      client_id: '본인키',
      redirect_uri: 'http://localhost:5000/auth/kakao/callback',
      code: code 
      }
    })
    const accessToken = res1.data.access_token
    console.log('Access Token:', accessToken);
  } catch (error) {
    console.error('에러',error);
  }
})
module.exports = router;
