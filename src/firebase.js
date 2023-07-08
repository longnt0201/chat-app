import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  // apiKey: "AIzaSyAPKjBGHl99y5u4MbV9USEvuksk6MzvHDc",
  // authDomain: "chat-app-9eea2.firebaseapp.com",
  // projectId: "chat-app-9eea2",
  // storageBucket: "chat-app-9eea2.appspot.com",
  // messagingSenderId: "819226343773",
  // appId: "1:819226343773:web:2c651fc57f1332380050b4"
  apiKey: "AIzaSyCPg062RtWW1QrdQG9J-zOtXI8wDwWxn0c",
  authDomain: "chatt-e9f95.firebaseapp.com",
  projectId: "chatt-e9f95",
  storageBucket: "chatt-e9f95.appspot.com",
  messagingSenderId: "62357645999",
  appId: "1:62357645999:web:a5a0765dc500a9fe9e025a"
}


// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()
