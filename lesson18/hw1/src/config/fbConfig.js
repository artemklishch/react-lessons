import firebase from 'firebase/app'
import 'firebase/firestore' 
import 'firebase/auth' 

var firebaseConfig = {
  apiKey: "AIzaSyDnbZPrZXInvkKKU9iomQOXWfJrbQmNb_U",
  authDomain: "add-ninja-mario-plan.firebaseapp.com",
  databaseURL: "https://add-ninja-mario-plan.firebaseio.com",
  projectId: "add-ninja-mario-plan",
  storageBucket: "add-ninja-mario-plan.appspot.com",
  messagingSenderId: "695245800055",
  appId: "1:695245800055:web:b2ea32a270c8aebd3e3c72",
  measurementId: "G-MWME5BYNZ8"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.firestore().settings({timestampsInSnapshots: true});
// firebase.analytics();
export default firebase;