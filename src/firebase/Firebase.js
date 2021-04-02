import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDrPnhwjMxtPlIabjl-OvNxN0Q1gJeCPWE",
  authDomain: "uninav-406f7.firebaseapp.com",
  databaseURL: "https://uninav-406f7-default-rtdb.firebaseio.com",
  projectId: "uninav-406f7",
  storageBucket: "uninav-406f7.appspot.com",
  messagingSenderId: "125201920992",
  appId: "1:125201920992:web:a26c1f216b2e2a559c7185",
  measurementId: "G-5C9C2128QX",
};

// const firebaseConfig = {
//   apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
//   authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
//   databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
//   projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
//   storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
//   messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
//   appId: process.env.REACT_APP_FIREBASE_APP_ID,
//   measurementId: process.env.REACT_APP_FIREBASE_MEASURE_ID,
// };

// Initialize Firebase
try {
  firebase.initializeApp(firebaseConfig);
} catch (err) {
  // we skip the "already exists" message which is
  // not an actual error when we're hot-reloading
  if (!/already exists/.test(err.message)) {
    //console.error("Firebase initialization error", err.stack);
  }
}
// Get a reference to the database service
export const provider = new firebase.auth.GoogleAuthProvider();
export const auth = firebase.auth();
export default firebase;
