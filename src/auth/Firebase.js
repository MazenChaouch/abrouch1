// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBz0iwsyLcnx7aDD3jpbD_dVHiRRH_Qycw",
  authDomain: "abrouch-b8bdd.firebaseapp.com",
  projectId: "abrouch-b8bdd",
  storageBucket: "abrouch-b8bdd.appspot.com",
  messagingSenderId: "1089015028050",
  appId: "1:1089015028050:web:2e2a5645f7098e54ae028b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const fireStore=getFirestore(app);