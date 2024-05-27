// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAaTg_qN9dVThM21Aoa3XG_VcpUHQE_WeA",
  authDomain: "vika-astro.firebaseapp.com",
  projectId: "vika-astro",
  storageBucket: "vika-astro.appspot.com",
  messagingSenderId: "794350439374",
  appId: "1:794350439374:web:c8730c03c1061ca977399f",
  measurementId: "G-6XWSFXPEM4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);