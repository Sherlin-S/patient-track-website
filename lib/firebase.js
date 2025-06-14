// lib/firebase.js
import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics, isSupported } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyArG-vj72U_e8qNwwTq9XW9YA5C7BPJAd8",
  authDomain: "patient-track-app-2357e.firebaseapp.com",
  projectId: "patient-track-app-2357e",
  storageBucket: "patient-track-app-2357e.appspot.com",
  messagingSenderId: "26907631592",
  appId: "1:26907631592:web:df364f4397249fffb64e5d",
  measurementId: "G-9E5Y1QJ5W5",
};

// ✅ Initialize app only if it hasn't been initialized
const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();

// ✅ Firestore
export const db = getFirestore(app);

// ✅ Analytics (client-only)
export const analytics =
  typeof window !== "undefined"
    ? isSupported().then((yes) => (yes ? getAnalytics(app) : null))
    : null;
