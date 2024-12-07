// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAPYh8ClinGUAH2Yp7WgpQAbFt6P9JjYhU",
  authDomain: "better-work-2bd59.firebaseapp.com",
  projectId: "better-work-2bd59",
  storageBucket: "better-work-2bd59.firebasestorage.app",
  messagingSenderId: "531626822870",
  appId: "1:531626822870:web:1be8ff15fb913dcaf8cd77",
  measurementId: "G-Y0VP9329BJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);