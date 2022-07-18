// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBEy-ftvfFsxc6txSkP0d5h7Zpcxtiprfs",
  authDomain: "task-priority-e10e9.firebaseapp.com",
  projectId: "task-priority-e10e9",
  storageBucket: "task-priority-e10e9.appspot.com",
  messagingSenderId: "3237918683",
  appId: "1:3237918683:web:b668b1b2bc4615aea499fe",
  measurementId: "G-5GPQ62NTVT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const db = getFirestore(app)
const analytics = getAnalytics(app);

export {auth, db}