import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyASnD9GRS9PlFOn9YBIXIAefqV-NAATexc",
    authDomain: "clonealadin.firebaseapp.com",
    databaseURL: "https://clonealadin.firebaseio.com",
    projectId: "clonealadin",
    storageBucket: "clonealadin.appspot.com",
    messagingSenderId: "4273819489",
    appId: "1:4273819489:web:59608a7e3f975e75beff20",
    measurementId: "G-QG750N8WTR",
});

const auth = firebase.auth();

export { auth };