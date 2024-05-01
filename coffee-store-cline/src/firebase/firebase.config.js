// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCIy5ahqhiSlKI6b89lYO7ekVoW2Ppf_0c",
  authDomain: "coffee-store-117dd.firebaseapp.com",
  projectId: "coffee-store-117dd",
  storageBucket: "coffee-store-117dd.appspot.com",
  messagingSenderId: "635325853868",
  appId: "1:635325853868:web:7ddc787b9296865c3daf09"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export default auth