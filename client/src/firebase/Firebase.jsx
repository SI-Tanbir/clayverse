

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth} from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDeR2vJAjF30BdfXp4V-DhuPaz8XzI-jAU",
  authDomain: "clayverse-bc767.firebaseapp.com",
  projectId: "clayverse-bc767",
  storageBucket: "clayverse-bc767.firebasestorage.app",
  messagingSenderId: "171160725577",
  appId: "1:171160725577:web:22e2ac7456b7edfeb4f798"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;