// lib/firebase.js
import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics, isSupported } from "firebase/analytics";

// ✅ Your Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyCfab9c6v5Ira853gtAFwZU3LKk7MEAk7c",
  authDomain: "patient-track-1ac8b.firebaseapp.com",
  projectId: "patient-track-1ac8b",
  storageBucket: "patient-track-1ac8b.appspot.com",
  messagingSenderId: "372401401812",
  appId: "1:372401401812:web:d19939fafc42bef7507041",
  measurementId: "G-R1P3MB0176"
};

// ✅ Prevent multiple initializations (important for Next.js)
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);

// ✅ Firestore export (required for register.js, patients.js)
export const db = getFirestore(app);

// ✅ Analytics (only if supported and in browser)
if (typeof window !== "undefined") {
  isSupported().then((yes) => {
    if (yes) getAnalytics(app);
  });
}