
import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCJgISLW8Cn_-1HA4NsTHztTRYgpIBZer8",
  authDomain: "crud2023-f6cf9.firebaseapp.com",
  projectId: "crud2023-f6cf9",
  storageBucket: "crud2023-f6cf9.appspot.com",
  messagingSenderId: "1068575066284",
  appId: "1:1068575066284:web:63fc7d6602705de99cf709"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app); 