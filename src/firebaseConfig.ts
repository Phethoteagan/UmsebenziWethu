import firebase from "firebase";




const firebaseConfig = {
    apiKey: "AIzaSyD6ENwMbXXjHvzTFdkxSD0izmj8CVffol0",
    authDomain: "white-guy.firebaseapp.com",
    databaseURL: "https://white-guy-default-rtdb.firebaseio.com",
    projectId: "white-guy",
    storageBucket: "white-guy.appspot.com",
    messagingSenderId: "947399937368",
    appId: "1:947399937368:web:c9422f04ceb51c1a02692d",
    measurementId: "G-NJTYHST03S"
  };
// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore(firebaseApp);
const auth = firebase.auth();
export { auth, db };
export default db;

