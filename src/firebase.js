import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
const firebaseApp = firebase.initializeApp({

    apiKey: "AIzaSyDMeIQInoVOihn_FU0fWz-auX1oICaAjRE",
    authDomain: "facebook-messenger-clone-a3f9f.firebaseapp.com",
    projectId: "facebook-messenger-clone-a3f9f",
    storageBucket: "facebook-messenger-clone-a3f9f.appspot.com",
    messagingSenderId: "67681402376",
    appId: "1:67681402376:web:a4a69a10517da720611bbd",
    measurementId: "G-7X4PMP50G2"
 
});

const db = firebaseApp.firestore();

export default db;
