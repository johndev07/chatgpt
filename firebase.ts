import { initializeApp,getApps, getApp, } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCaqHz_TkbAphFxI5g8creSqZ_wIHhTqJk",
  authDomain: "chatgpt-f670b.firebaseapp.com",
  projectId: "chatgpt-f670b",
  storageBucket: "chatgpt-f670b.appspot.com",
  messagingSenderId: "457373756313",
  appId: "1:457373756313:web:46ae1100f9a97e72454108"
};

// Initialize Firebase
const app= getApps().length ? getApp : initializeApp(firebaseConfig);
const db = getFirestore(app);

export {db};