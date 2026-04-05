// ===== FIREBASE CONFIG (shared across all festivals) =====
const FIREBASE_CONFIG = {
  apiKey: "AIzaSyDLOpr--S_XauJfBz9pIxcMI3onuwHY_jY",
  authDomain: "monikers-pesach.firebaseapp.com",
  databaseURL: "https://monikers-pesach-default-rtdb.firebaseio.com",
  projectId: "monikers-pesach",
  storageBucket: "monikers-pesach.firebasestorage.app",
  messagingSenderId: "221937114178",
  appId: "1:221937114178:web:c570c358ac2996b553e1db"
};

let db = null, dbRef = null, dbBackRef = null, firebaseReady = false;
try {
  firebase.initializeApp(FIREBASE_CONFIG);
  db = firebase.database();
  firebaseReady = true;
} catch (e) { console.warn('Firebase init failed', e); }
