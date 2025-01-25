import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCAvUpkehkmZrKWf01Xg-jT8_UeSqrd9oU",
  authDomain: "social-media-a1730.firebaseapp.com",
  projectId: "social-media-a1730",
  storageBucket: "social-media-a1730.firebasestorage.app",
  messagingSenderId: "617953448775",
  appId: "1:617953448775:web:9895c64144b500e22a7262",
  measurementId: "G-84V5EJGM78"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider, signInWithPopup };