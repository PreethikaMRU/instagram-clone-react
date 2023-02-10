// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {getAuth} from 'firebase/auth';
import {getFirestore} from 'firebase/firestore';
import {getStorage} from 'firebase/storage';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD4rZa14pMZHVymFHN9rKo1E8d6dbhHsRk",
  authDomain: "instagram-clone-5f778.firebaseapp.com",
  projectId: "instagram-clone-5f778",
  storageBucket: "instagram-clone-5f778.appspot.com",
  messagingSenderId: "821453306186",
  appId: "1:821453306186:web:b610ee68a2301ae9c829b3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);