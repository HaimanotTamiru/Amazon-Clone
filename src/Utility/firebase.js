
import firebase from "firebase/compat/app";
import { getAuth } from "firebase/auth";
import "firebase/compat/firestore";
import "firebase/compat/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC3PcnqxzFV0t61mFBel4F-TuNIaSrWGqg",
  authDomain: "clone-1ed0a.firebaseapp.com",
  projectId: "clone-1ed0a",
  storageBucket: "clone-1ed0a.appspot.com",
  messagingSenderId: "34707756594",
  appId: "1:34707756594:web:fab70d1f6917484d690e2b",
};

// Initialize Firebase
const app =firebase.initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db=app.firestore()