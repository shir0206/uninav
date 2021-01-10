import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCNBo_uYAaTiPKlK6JcuNdw8kxaK269tyI",
  authDomain: "uninav-30080.firebaseapp.com",
  databaseURL: "https://uninav-30080.firebaseio.com",
  projectId: "uninav-30080",
  storageBucket: "uninav-30080.appspot.com",
  messagingSenderId: "662958231812",
  appId: "1:662958231812:web:127bf2d07b291077f40051",
  measurementId: "G-C7TR96X7EH",
};

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
var database = firebase.database();
export const provider = new firebase.auth.GoogleAuthProvider();
export const auth = firebase.auth();
export default firebase;
