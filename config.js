import firebase from 'firebase';
require('@firebase/firestore')

var firebaseConfig = {
    apiKey: "AIzaSyDM1QNgtujAZgTQDZFUxb-LRYzAladsmfU",
    authDomain: "myapp-d56b7.firebaseapp.com",
    databaseURL: "https://myapp-d56b7.firebaseio.com",
    projectId: "myapp-d56b7",
    storageBucket: "myapp-d56b7.appspot.com",
    messagingSenderId: "594353320853",
    appId: "1:594353320853:web:3d25c771c6e1c701fc3c9c"
  };


// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
