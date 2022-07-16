
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyDr4B3uiungFk78hrwYYqnZ5XJBsUiybeY",
  authDomain: "fir-auth-a71aa.firebaseapp.com",
  projectId: "fir-auth-a71aa",
  storageBucket: "fir-auth-a71aa.appspot.com",
  messagingSenderId: "790588538231",
  appId: "1:790588538231:web:96de442b8a7c6077b8f572",
  measurementId: "G-PSHHG9RJ4L"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);