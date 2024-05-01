import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCRRRz7_roUZWNHnjrmO0aVAmchjEkFrik",
    authDomain: "linkedin-clone-6efb3.firebaseapp.com",
    projectId: "linkedin-clone-6efb3",
    storageBucket: "linkedin-clone-6efb3.appspot.com",
    messagingSenderId: "1040511093811",
    appId: "1:1040511093811:web:a6ee8a2b7c2bcad79da746",
    measurementId: "G-09EZLL59DK"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore(); // Access firestore from firebaseApp
const auth = firebaseApp.auth(); // Access auth from firebaseApp

export { db, auth };