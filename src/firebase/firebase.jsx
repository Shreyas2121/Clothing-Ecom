import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const config = {
  apiKey: "AIzaSyAYwvsChHcU4FOrNXykDu_EYzny3vzD_zA",
  authDomain: "ecom-clothing-50308.firebaseapp.com",
  projectId: "ecom-clothing-50308",
  storageBucket: "ecom-clothing-50308.appspot.com",
  messagingSenderId: "990166066924",
  appId: "1:990166066924:web:9fdc7eabdd5a31ce4067c9",
  measurementId: "G-0WW9EFZFDB",
};

export const createUserProfileDoc = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({ displayName, email, createdAt, ...additionalData });
    } catch (err) {
      console.log(err.message);
    }
  }

  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
