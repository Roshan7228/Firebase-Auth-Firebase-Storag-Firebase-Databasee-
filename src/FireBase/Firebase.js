// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDvATe3rx0vqjPE6XlfBNyZGhACYB_0eZM",
  authDomain: "gogglelogin-da5e8.firebaseapp.com",
  projectId: "gogglelogin-da5e8",
  storageBucket: "gogglelogin-da5e8.firebasestorage.app",
  messagingSenderId: "114592558950",
  appId: "1:114592558950:web:7775a69fb22e52796e62a7",
  measurementId: "G-L7175NW427"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
// database 
 export const db = getFirestore(app);

const analytics = getAnalytics(app);