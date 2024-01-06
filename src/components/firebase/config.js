// firebase/config.js
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAIvEbwx_nkk9X8eb6HqqQXzwKoaZBWgk4",
  authDomain: "ecommerce-celulares-3245f.firebaseapp.com",
  projectId: "ecommerce-celulares-3245f",
  storageBucket: "ecommerce-celulares-3245f.appspot.com",
  messagingSenderId: "7704696082",
  appId: "1:7704696082:web:01a937d7f775f540f70fcb"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { app, db };
