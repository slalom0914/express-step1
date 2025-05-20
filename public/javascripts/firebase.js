import { initializeApp } from "https://www.gstatic.com/firebasejs/11.7.3/firebase-app.js";
const firebaseConfig = {
  apiKey: "AIzaSyC-L1F_gW4rj75DXfvlce7y77bQlwz0yAM",
  authDomain: "kosmo250520.firebaseapp.com",
  databaseURL: "https://kosmo250520-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "kosmo250520",
  storageBucket: "kosmo250520.firebasestorage.app",
  messagingSenderId: "866099520808",
  appId: "1:866099520808:web:797d61891d717ce2f79c1d"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);