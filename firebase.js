import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBc_uHCEcFXro7e3DuWyd97f2DWzBLeXJU",
  authDomain: "clone-12b2a.firebaseapp.com",
  projectId: "clone-12b2a",
  storageBucket: "clone-12b2a.appspot.com",
  messagingSenderId: "964246693278",
  appId: "1:964246693278:web:05cb520258f894c169a28f",
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();

export default db;
