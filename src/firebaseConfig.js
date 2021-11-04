import firebase from 'firebase/compat/app';
import "firebase/compat/firestore"
import "firebase/compat/auth";



const firebaseConfig = {
  apiKey: "AIzaSyACbnVzycAyXxhHlLqD-7ieECWUjmfzOzE",
  authDomain: "fir-71fcd.firebaseapp.com",
  projectId: "fir-71fcd",
  storageBucket: "fir-71fcd.appspot.com",
  messagingSenderId: "78636468746",
  appId: "1:78636468746:web:c67d40a44345282332adf3",
  measurementId: "G-0T4CX4WC9R"
  };
// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
// const db = firebase.firestore(firebaseApp);
const db = firebase.firestore();
const firestore = firebase.firestore();
const auth = firebase.auth();
export { auth, db ,firestore};
export default db;

export const createUserDocument = async (user, additionalData) => {
  if (!user) return;

  const userRef = firestore.doc(`users/${user.uid}`);

  const snapshot = await userRef.get();

  if (!snapshot.exists) {
    const { email } = user;
    const { displayName, surname, phoneNumber, dateOfBirth } = additionalData;

    try {
      await userRef.set({
        displayName,
        surname,
        phoneNumber,
        dateOfBirth,
        email,
        createdAt: new Date(),
      });
    } catch (error) {
      console.log('Error in creating user', error);
    }
  }
};