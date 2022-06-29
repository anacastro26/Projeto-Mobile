import Firebase from 'firebase';
let config = {
  apiKey: "AIzaSyCR-dcvvVYoNDEpkzufUf1E1zqUx8PTnCc",
  authDomain: "mobile01-5842d.firebaseapp.com",
  databaseURL: "https://mobile01-5842d-default-rtdb.firebaseio.com",
  projectId: "mobile01-5842d",
  storageBucket: "mobile01-5842d.appspot.com",
  messagingSenderId: "586659818594",
  appId: "1:586659818594:web:fa6620a2a92f1f539cb53b",
  measurementId: "G-9LLFBYD26C",
};

let app = Firebase.initializeApp(config);
export const db = app.database();
