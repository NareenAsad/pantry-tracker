// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDP-MywtrKi4QcNbztQuTLVhpMarVdx4lM",
  authDomain: "pantry-tracker-f2632.firebaseapp.com",
  projectId: "pantry-tracker-f2632",
  storageBucket: "pantry-tracker-f2632.appspot.com",
  messagingSenderId: "517884735751",
  appId: "1:517884735751:web:408d9a8ff66fc6037355a2",
  measurementId: "G-9GB8TXGGCZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export {db};