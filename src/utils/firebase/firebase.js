import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyB-U1sXmfK1jmXQsnE4t5FM7S1eo6HyPFQ",
  authDomain: "jewel-showcase.firebaseapp.com",
  databaseURL: "https://jewel-showcase.firebaseio.com",
  projectId: "jewel-showcase",
  storageBucket: "jewel-showcase.appspot.com",
  messagingSenderId: "215813034824",
  appId: "1:215813034824:web:e65d6e5c28eb9efafdd97d",
  measurementId: "G-Y560MVR9QN",
};

export const createUserProfile = async (user, addtionalData) => {
  if (!user) return;

  const userRef = firestore.doc(`users/${user.uid}`);
  const snapshot = await userRef.get();

  if (!snapshot.exists) {
    const { displayName, email } = user;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...addtionalData,
      });
    } catch (error) {
      console.log(error.message);
    }
  }

  return userRef;
};

export const addCollection = async (key, collection) => {
  const collectionRef = firestore.collection(key);

  const batch = firestore.batch();
  collection.forEach((item) => {
    const itemRef = collectionRef.doc();
    batch.set(itemRef, item);
  });

  return await batch.commit();
};

export const convertCollectSnapshotToMap = (collections) => {
  const modifiedCollections = collections.docs.map((doc) => {
    const { title, items } = doc.data();

    return {
      route: encodeURI(title.toLowerCase()),
      id: doc.id,
      items,
      title,
    };
  });

  return modifiedCollections.reduce((acc, collection) => {
    acc[collection.title.toLowerCase()] = collection;
    return acc;
  }, {});
};

export const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      unsubscribe();
      resolve(userAuth);
    }, reject);
  });
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

export const googleProvider = new firebase.auth.GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(googleProvider);

export default firebase;
