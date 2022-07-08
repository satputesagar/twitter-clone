
import firebase from "firebase";


const firebaseConfig={
    apiKey: "AIzaSyAEUa1Ps-cY_a5_PAYPbkDR7r6DsUkFlWo",
    authDomain: "tweet-clone-9e98e.firebaseapp.com",
    projectId: "tweet-clone-9e98e",
    storageBucket: "tweet-clone-9e98e.appspot.com",
    messagingSenderId: "358443441613",
    appId: "1:358443441613:web:0458700d8638c5d5a37884",
    measurementId: "G-7XJHZCP66S"
};




const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
export default db;