import firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {
    apiKey: "AIzaSyCg749axvXc7sEYMg5BCl19KZiMwVFU8M4",
    authDomain: "p71-e-ride-stage-4-943b6.firebaseapp.com",
    projectId: "p71-e-ride-stage-4-943b6",
    storageBucket: "p71-e-ride-stage-4-943b6.appspot.com",
    messagingSenderId: "1040346707166",
    appId: "1:1040346707166:web:206b75ea9058177e8bfe4f"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

export default firebase.firestore();
