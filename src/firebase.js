import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBRfmdQIq4cTVamY0IAMLUyg4hkaRXtFRI",
  authDomain: "chat-76e8d.firebaseapp.com",
  projectId: "chat-76e8d",
  storageBucket: "chat-76e8d.appspot.com",
  messagingSenderId: "186349104052",
  appId: "1:186349104052:web:d25574ab86abf26daee0e1"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();