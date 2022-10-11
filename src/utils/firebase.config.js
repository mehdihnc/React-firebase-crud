import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import { getFirestore } from "@firebase/firestore";

const app = firebase.initializeApp({
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: "react-firebase-redux-308f0.firebaseapp.com",
  projectId: "react-firebase-redux-308f0",
  storageBucket: "react-firebase-redux-308f0.appspot.com",
  messagingSenderId: "448162356427",
  appId: "1:448162356427:web:20f5fe2caa44ce60310f4e",
});

export const auth = app.auth();
export const db = getFirestore();
export default app;
