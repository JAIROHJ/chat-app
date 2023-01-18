// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {getStorage} from 'firebase/storage'
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCCRIKerXyttuHP8rSKpWZVCATlTEqCfI4",
  authDomain: "chat-e3feb.firebaseapp.com",
  projectId: "chat-e3feb",
  storageBucket: "chat-e3feb.appspot.com",
  messagingSenderId: "161955775538",
  appId: "1:161955775538:web:dbdeb540b0d51035e3682b"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth()
export const storage = getStorage()
export const db = getFirestore()