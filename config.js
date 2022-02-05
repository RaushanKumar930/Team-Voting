import firebase from 'firebase';

// add SDK Firebase
var firebaseConfig = {
    apiKey: "AIzaSyBHB2XjG9p83q67JBr0YYBo8O3mK5MR3Hg",
    authDomain: "project-67-6687b.firebaseapp.com",
    databaseURL: "https://project-67-6687b-default-rtdb.firebaseio.com",
    projectId: "project-67-6687b",
    storageBucket: "project-67-6687b.appspot.com",
    messagingSenderId: "1028128389428",
    appId: "1:1028128389428:web:b76901cd73e6a360c84d61"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();