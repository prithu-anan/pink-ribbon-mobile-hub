import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAzoa5h3Db-HCEiPVUfLNfYmPubH_OxR14",
  authDomain: "breast-cancer-app-c9845.firebaseapp.com",
  projectId: "breast-cancer-app-c9845",
  storageBucket: "breast-cancer-app-c9845.firebasestorage.app",
  messagingSenderId: "799609372094",
  appId: "1:799609372094:web:3bcc2180fe39cf8b604def"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app; 