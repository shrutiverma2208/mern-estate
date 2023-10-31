// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-74130.firebaseapp.com",
  projectId: "mern-estate-74130",
  storageBucket: "mern-estate-74130.appspot.com",
  messagingSenderId: "175243218251",
  appId: "1:175243218251:web:8762fb8befc3c585606cce"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);