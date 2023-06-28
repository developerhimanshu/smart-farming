// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage} from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCdJjEHK0-fY38KGJwf-WlofmTz-1cigKc",
  authDomain: "smart-farming-184b3.firebaseapp.com",
  projectId: "smart-farming-184b3",
  storageBucket: "smart-farming-184b3.appspot.com",
  messagingSenderId: "594667019653",
  appId: "1:594667019653:web:191b22533011f58b6fb8ec",
  measurementId: "G-EGRD7KZQL3"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();