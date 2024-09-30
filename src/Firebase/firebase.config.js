// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCXuMmhpT9t9Mf3pS3f2oXDubRDhYl8OMQ",
  authDomain: "yourtravelplaner-c5d61.firebaseapp.com",
  projectId: "yourtravelplaner-c5d61",
  storageBucket: "yourtravelplaner-c5d61.appspot.com",
  messagingSenderId: "206298431747",
  appId: "1:206298431747:web:57e3a502a991b67c6f2936",
  measurementId: "G-PWVWZRNQSH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)