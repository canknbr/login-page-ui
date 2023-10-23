// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDbSYAOynuMjAUlD5dWLmlIAuah3uhHbZA",
  authDomain: "rn-login-app-7d709.firebaseapp.com",
  projectId: "rn-login-app-7d709",
  storageBucket: "rn-login-app-7d709.appspot.com",
  messagingSenderId: "854438575103",
  appId: "1:854438575103:web:9ce9c365c08bb0aae045ca",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
