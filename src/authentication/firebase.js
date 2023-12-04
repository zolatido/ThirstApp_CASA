// firebase.js
import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
  apiKey: "AIzaSyDZhjXPCmX7E7Q2XQNWgkXlvHhsdJI-HjA",
  authDomain: "thirstapp-42ed5.firebaseapp.com",
  databaseURL: "https://thirstapp-42ed5-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "thirstapp-42ed5",
  storageBucket: "thirstapp-42ed5.appspot.com",
  messagingSenderId: "365226247256",
  appId: "1:365226247256:web:42d0ae02349f8edfb9f62d",
  measurementId: "G-77WS1CFLPF"
};

const firebaseApp = initializeApp(firebaseConfig);
const database = getDatabase(firebaseApp);

export default database;
