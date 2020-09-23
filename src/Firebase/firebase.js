import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyAFY3VE-Lab66r87vyUcqr0b5-VsmHntek",
  authDomain: "amazncloneweb.firebaseapp.com",
  databaseURL: "https://amazncloneweb.firebaseio.com",
  projectId: "amazncloneweb",
  storageBucket: "amazncloneweb.appspot.com",
  messagingSenderId: "601804193460",
  appId: "1:601804193460:web:c72a0a8479cffb6f0261e1",
  measurementId: "G-GCGFCEFGTZ"
};
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  
  export { db,auth };
