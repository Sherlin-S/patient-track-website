import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyArG-vj72U_e8qNwwTq9XW9YA5C7BPJAd8",
  authDomain: "patient-track-app-2357e.firebaseapp.com",
  projectId: "patient-track-app-2357e",
  storageBucket: "patient-track-app-2357e.firebasestorage.app",
  messagingSenderId: "26907631592",
  appId: "1:26907631592:web:df364f4397249fffb64e5d",
  measurementId: "G-9E5Y1QJ5W5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export Storage
const storage = getStorage(app);
export { storage };