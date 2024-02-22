// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDkJL2BKhtHhh3ugFOFDetxXXCT-IyeaN4",
  authDomain: "netflix-gpt-85a4f.firebaseapp.com",
  projectId: "netflix-gpt-85a4f",
  storageBucket: "netflix-gpt-85a4f.appspot.com",
  messagingSenderId: "478041912466",
  appId: "1:478041912466:web:6eacafbe59e3141765a24b",
  measurementId: "G-94CTY09PV5",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
