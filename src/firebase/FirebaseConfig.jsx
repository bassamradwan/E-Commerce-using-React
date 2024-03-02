// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC85h6WTbuDlvm9n_6FkwEzsKqd5-2oJ_8",
  authDomain: "tawfir-2bf9c.firebaseapp.com",
  projectId: "tawfir-2bf9c",
  storageBucket: "tawfir-2bf9c.appspot.com",
  messagingSenderId: "632076315717",
  appId: "1:632076315717:web:afc0c2aaf4404bb44a072c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const fireDB = getFirestore(app);
const auth = getAuth(app)

export {fireDB,auth } ;