// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDS0M4AEKRa-48_DP7H2jxhgf9RUlB1HfY",
  authDomain: "your-travel-planner-b135e.firebaseapp.com",
  projectId: "your-travel-planner-b135e",
  storageBucket: "your-travel-planner-b135e.appspot.com",
  messagingSenderId: "922712006039",
  appId: "1:922712006039:web:8566460fac169fbad538d2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)