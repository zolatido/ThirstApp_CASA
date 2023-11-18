import { initializeApp } from 'firebase/app';
import { signInAnonymously } from 'firebase/auth';
import { getFirestore, collection, getDoc, addDoc } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDZhjXPCmX7E7Q2XQNWgkXlvHhsdJI-HjA",
  authDomain: "thirstapp-42ed5.firebaseapp.com",
  projectId: "thirstapp-42ed5",
  storageBucket: "thirstapp-42ed5.appspot.com",
  messagingSenderId: "365226247256",
  appId: "1:365226247256:web:42d0ae02349f8edfb9f62d",
  measurementId: "G-77WS1CFLPF"
};

const firebaseApp = initializeApp(firebaseConfig);

// Authentication function to sign in anonymously
export const authenticateUser = async () => {
  try {
    const authResult = await signInAnonymously();
    const user = authResult.user;

    if (user) {
      console.log('User signed in anonymously:', user.uid);
      const usernameExists = await checkUsernameExists(user.uid);

      if (usernameExists) {
        console.log('User already exists in Firestore:', user.uid);
      } else {
        await createUser(user.uid);
        console.log('User created in Firestore:', user.uid);
      }
    }
  } catch (error) {
    console.error('Authentication failed:', error.message);
  }
};

// Check if the username (UID) exists in Firestore
export const checkUsernameExists = async (userId) => {
  const docRef = doc(collection(getFirestore(), 'users'), userId);
  const snapshot = await getDoc(docRef);
  console.log('Username exists:', snapshot.exists());
  return snapshot.exists();
};

// Save user data to Firestore
export const createUser = async (username) => {
  const userRef = doc(collection(getFirestore(), 'users'));
  await addDoc(userRef, {
    username,
    // Add other user-related data as needed
  });
  console.log('User created:', username);
};
