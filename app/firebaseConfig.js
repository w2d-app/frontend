// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDbupSgO0V8gxquPJqaMGQZ9rzY7oXEoA8",
  authDomain: "w2dapp.firebaseapp.com",
  projectId: "w2dapp",
  storageBucket: "w2dapp.appspot.com",
  messagingSenderId: "1081340134333",
  appId: "1:1081340134333:web:0fd1421a8c11d7faa708d4",
  measurementId: "G-L9GXGXS9CN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export {auth};