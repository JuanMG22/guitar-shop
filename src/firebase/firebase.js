import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyDMKPd1LC8Q_xTgNslZLHJ2t65YnRw8kEs",
  authDomain: "guitar-shop-react.firebaseapp.com",
  projectId: "guitar-shop-react",
  storageBucket: "guitar-shop-react.appspot.com",
  messagingSenderId: "344803076879",
  appId: "1:344803076879:web:69cbb6d2b66dbfe4b86c7a",
  measurementId: "G-3F81XJ1T5C"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);