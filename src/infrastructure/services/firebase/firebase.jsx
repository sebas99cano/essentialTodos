import firebase from "firebase";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDE5nI_fSeVykcMXdf5DMhpn6wTacgb6zE",
    authDomain: "todos-19a17.firebaseapp.com",
    projectId: "todos-19a17",
    storageBucket: "todos-19a17.appspot.com",
    messagingSenderId: "154970864628",
    appId: "1:154970864628:web:96af1a6a43713c6bfc57a1",
    measurementId: "G-8QBK9ZLFV1"
};

firebase.initializeApp(firebaseConfig);
firebase.analytics();

export const auth = firebase.auth;
export const firestore = firebase.firestore;