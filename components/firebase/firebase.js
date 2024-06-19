import { initializeApp } from "firebase/app";
import {
  initializeFirestore,
  collection,
  addDoc,
  setDoc,
  getDoc,
  doc,
  serverTimestamp,
} from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAX_1wmBXgbWi0P9p_eyWwH_xtO5PsRLms",
  authDomain: "careerdekho-ai.firebaseapp.com",
  projectId: "careerdekho-ai",
  storageBucket: "careerdekho-ai.appspot.com",
  messagingSenderId: "988311283290",
  appId: "1:988311283290:web:250c82acd043e2d8b5da63",
  measurementId: "G-1XBK6LVFPG",
};

const app = initializeApp(firebaseConfig);
const db = initializeFirestore(app, { useFetchStreams: false });
const auth = getAuth();
const provider = new GoogleAuthProvider();
export {
  db,
  auth,
  provider,
  collection,
  addDoc,
  setDoc,
  doc,
  serverTimestamp,
  getDoc,
};
