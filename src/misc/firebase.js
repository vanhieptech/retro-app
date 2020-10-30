import firebase from "firebase/app";
import "firebase/firestore";

const config = {
    apiKey: "AIzaSyB_BMemPgLXgaL7Ph_3pb5Awo45xHWSss8",
    authDomain: "retro-lvh.firebaseapp.com",
    databaseURL: "https://retro-lvh.firebaseio.com",
    projectId: "retro-lvh",
    storageBucket: "retro-lvh.appspot.com",
    messagingSenderId: "846312670366",
    appId: "1:846312670366:web:112b3b187789e3c16a678f",
    measurementId: "G-GT0ML5NQ1C",
};
const app = firebase.initializeApp(config);

const db = firebase.firestore();

const boardsRef = db.collection("Boards");
const columnsRef = db.collection("Columns");
const cardsRef = db.collection("Cards");

export { app, boardsRef, columnsRef, cardsRef };