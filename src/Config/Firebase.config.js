import { initializeApp } from "firebase/app";
// import { signOut } from "../Config/Firebase.config";
import {getAuth , createUserWithEmailAndPassword , signInWithEmailAndPassword ,signOut  } from 'firebase/auth'



// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC5Po1OwPQLjvR4VhKXSbLsqY1syO_MG1c",
  authDomain: "notesproject-53680.firebaseapp.com",
  projectId: "notesproject-53680",
  storageBucket: "notesproject-53680.firebasestorage.app",
  messagingSenderId: "462411612678",
  appId: "1:462411612678:web:b208fbbbef9eec351f3987"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// import { signOut } from "../Config/Firebase.config";
export {auth , createUserWithEmailAndPassword , signInWithEmailAndPassword , signOut }