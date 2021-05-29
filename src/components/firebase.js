import firebase from "firebase/app";
import "firebase/auth";

export const auth = firebase
  .initializeApp({
    apiKey: "AIzaSyBFQiRzW9cUaGurD9okqilrpihged-lpU0",
    authDomain: "unichat-d3562.firebaseapp.com",
    projectId: "unichat-d3562",
    storageBucket: "unichat-d3562.appspot.com",
    messagingSenderId: "1076581553909",
    appId: "1:1076581553909:web:e950e2fb6107c092f5d7bc",
  })
  .auth();
