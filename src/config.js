import firebase from "firebase/compat/app"
import "firebase/compat/firestore"
import "firebase/compat/auth"
const firebaseConfig = {
    apiKey: "AIzaSyDJQ7PExeyJ1MVaCjphrNYOOp-cUOFIjik",
    authDomain: "expensesmap-b64af.firebaseapp.com",
    projectId: "expensesmap-b64af",
    storageBucket: "expensesmap-b64af.appspot.com",
    messagingSenderId: "775138823279",
    appId: "1:775138823279:web:bcc8b7471e142b1cfe519a",
    measurementId: "G-0QP59G1DGN"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export const db = firebase.firestore()