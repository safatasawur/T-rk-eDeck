// firebase.js

import { initializeApp } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-firestore.js";

// Your Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyDwcQBWqbk3IdfpTNCvUT0nuE764rPSCz8",
  authDomain: "turkcedesk.firebaseapp.com",
  projectId: "turkcedesk",
  storageBucket: "turkcedesk.appspot.com", // ✅ fixed domain here
  messagingSenderId: "988340427610",
  appId: "1:988340427610:web:633c0c4efa918f5faff163"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export Auth and Firestore
export const auth = getAuth(app);
export const db = getFirestore(app);
