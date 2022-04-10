// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDZR4ngPoqDCu21uPIGv_CI4-4vI1dyVBM",
    authDomain: "ema-john-simple-cb685.firebaseapp.com",
    projectId: "ema-john-simple-cb685",
    storageBucket: "ema-john-simple-cb685.appspot.com",
    messagingSenderId: "306283663749",
    appId: "1:306283663749:web:62af16a81aac3177b234ec"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;