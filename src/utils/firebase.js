// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCYg4bcvl8MOyGhCNjKAHuLu9os0QA2du8",
  authDomain: "netflixgpt-74d43.firebaseapp.com",
  projectId: "netflixgpt-74d43",
  storageBucket: "netflixgpt-74d43.firebasestorage.app",
  messagingSenderId: "1054617044564",
  appId: "1:1054617044564:web:88a078190ddcfb19f5cfc1",
  measurementId: "G-6FMXN260HQ"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();