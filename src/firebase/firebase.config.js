// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAy69YCz5NegYu1cdwLht3uiLKqvzlwDyE",
    authDomain: "b6a11-service-review-cli-b4678.firebaseapp.com",
    projectId: "b6a11-service-review-cli-b4678",
    storageBucket: "b6a11-service-review-cli-b4678.appspot.com",
    messagingSenderId: "485634144079",
    appId: "1:485634144079:web:12b099088027f7c2b9f73a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;