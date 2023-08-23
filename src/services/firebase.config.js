import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
     apiKey: "AIzaSyC_ook0potDtMWL9Yo1h9dyln6dHuBF8Q8",
     authDomain: "skillboard-e65ab.firebaseapp.com",
     projectId: "skillboard-e65ab",
     storageBucket: "skillboard-e65ab.appspot.com",
     messagingSenderId: "671740588465",
     appId: "1:671740588465:web:17136d15cc6fee8c9c4d90",
     measurementId: "G-NJRFF07MNP"
   };

   
  const app = initializeApp(firebaseConfig);

  export const db = getFirestore(app);