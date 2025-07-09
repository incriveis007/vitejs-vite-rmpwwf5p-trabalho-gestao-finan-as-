import { initializeApp } from 'firebase/app';
import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyBIQYIrUZSxOscHRWYw6K4aYFYHvYC5DEw",
  authDomain: "trabalhoplinio-84ac0.firebaseapp.com",
  projectId: "trabalhoplinio-84ac0",
  storageBucket: "trabalhoplinio-84ac0.firebasestorage.app",
  messagingSenderId: "198062315769",
  appId: "1:198062315769:web:8663928fbf0188d9216a28",
  measurementId: "G-CKT5W421Q0"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
