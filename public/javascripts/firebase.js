  import { initializeApp } from "https://www.gstatic.com/firebasejs/11.7.3/firebase-app.js";
  const firebaseConfig = {
    apiKey: "AIzaSyDQZjj89X09q-8p4bG1rl1XG_ZXZbWCfBA",
    authDomain: "react2022-kh-996b6.firebaseapp.com",
    databaseURL: "https://react2022-kh-996b6-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "react2022-kh-996b6",
    storageBucket: "react2022-kh-996b6.appspot.com",
    messagingSenderId: "176454691131",
    appId: "1:176454691131:web:eb791cd483ed95e5816f1e",
    measurementId: "G-JTVQT3FC92"
  };
  // Initialize Firebase
  // module방식을 적용하고 있어서 import 로컬 파일 참조가 안됨.
  // 모듈방식에서 기본 내보내기 -default사용 가능함.  한번만 사용이 가능함.
  export const app = initializeApp(firebaseConfig);