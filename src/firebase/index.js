import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, updateProfile } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBuAU15sDBGFtKK4RNYOFH3_Eakmnkh-U4",
  authDomain: "chat-app-f146d.firebaseapp.com",
  projectId: "chat-app-f146d",
  storageBucket: "chat-app-f146d.appspot.com",
  messagingSenderId: "302268265733",
  appId: "1:302268265733:web:d09860fb4d5acdbc05b36c",
  measurementId: "G-6K4CZRMEGQ",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const storage = getStorage();
const db = getFirestore();
export { app, analytics, auth, storage, updateProfile, db };
