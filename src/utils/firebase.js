import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAw-sdZ5gN36eqygBSqwCoLRtAhML4elHg",
  authDomain: "netflix-94d63.firebaseapp.com",
  projectId: "netflix-94d63",
  storageBucket: "netflix-94d63.appspot.com",
  messagingSenderId: "1043755437651",
  appId: "1:1043755437651:web:393ed2f131a021e17500a6",
  measurementId: "G-M8F559JQKE",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const auth = getAuth(app);
export { auth };
