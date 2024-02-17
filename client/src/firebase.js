// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "my-blog-53b74.firebaseapp.com",
  projectId: "my-blog-53b74",
  storageBucket: "my-blog-53b74.appspot.com",
  messagingSenderId: "443226412102",
  appId: "1:443226412102:web:fc3a3202a1f8c29c4be647"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);