import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCj8mpD8Hor78P-63YRNaJQylYWIcYtDcQ",
  authDomain: "sparkle-pvd.firebaseapp.com",
  projectId: "sparkle-pvd",
  storageBucket: "sparkle-pvd.firebasestorage.app",
  messagingSenderId: "851310939356",
  appId: "1:851310939356:web:9860b5dcf851058b6a3819",
  measurementId: "G-XC0YB4FMS4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);