// firebaseConfig.js
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, addDoc, getDocs } from 'firebase/firestore';
import { getStorage } from 'firebase/storage'; // Import Firebase Storage


const firebaseConfig = {
    apiKey: "AIzaSyAfmP-jfVYiXwH-vRVlTsdFRTQDE5Eqlj0",
    authDomain: "portfolioblogstorage.firebaseapp.com",
    projectId: "portfolioblogstorage",
    storageBucket: "portfolioblogstorage.appspot.com",
    messagingSenderId: "86237005460",
    appId: "1:86237005460:web:e4dd338c1429ea65455681",
    measurementId: "G-W194DZVWM6"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app); // Initialize Firebase Storage


export { db, collection, addDoc, getDocs ,storage};
