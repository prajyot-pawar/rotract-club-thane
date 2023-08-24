
const config = {
     apiKey: "AIzaSyC_ook0potDtMWL9Yo1h9dyln6dHuBF8Q8",
     authDomain: "skillboard-e65ab.firebaseapp.com",
     projectId: "skillboard-e65ab",
     storageBucket: "skillboard-e65ab.appspot.com",
     messagingSenderId: "671740588465",
     appId: "1:671740588465:web:17136d15cc6fee8c9c4d90",
     measurementId: "G-NJRFF07MNP"
   };
 
   export function getFirebaseConfig() {
     if (!config || !config.apiKey) {
       throw new Error('No Firebase configuration object provided.' + '\n' +
       'Add your web app\'s configuration object to firebase-config.ts');
     } else {
       return config;
     }
   }    
   

   
  // const app = initializeApp(config);
  // const provider = new GoogleAuthProvider();
  
  
  // export const db = getFirestore(app);