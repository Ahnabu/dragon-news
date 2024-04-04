// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBFh59YEeVd_Wou8uuYasL5GBlpKaNXmqo",
    authDomain: "dragon-new-120f5.firebaseapp.com",
    projectId: "dragon-new-120f5",
    storageBucket: "dragon-new-120f5.appspot.com",
    messagingSenderId: "818069412638",
    appId: "1:818069412638:web:330abc50e543dd6e00470f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)