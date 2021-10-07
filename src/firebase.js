import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCU-v0ctHpEjb5JSux-y7TnHZJ2CZCU3DQ",
  authDomain: "reduxauth-7c525.firebaseapp.com",
  projectId: "reduxauth-7c525",
  storageBucket: "reduxauth-7c525.appspot.com",
  messagingSenderId: "791714307208",
  appId: "1:791714307208:web:19ed3f0f08f334e213933d",
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const auth = firebase.auth();

export { db, auth };
