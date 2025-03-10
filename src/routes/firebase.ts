import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyA_B2dt5m1PM-1ezzyHr1C1ydjZS1vS-00',
  authDomain: 'twitter-b75e2.firebaseapp.com',
  projectId: 'twitter-b75e2',
  storageBucket: 'twitter-b75e2.firebasestorage.app',
  messagingSenderId: '229923891399',
  appId: '1:229923891399:web:1d2fab38092290809d76e2',
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
