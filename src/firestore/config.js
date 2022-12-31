// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBqmPslQdhJuNKEGsI6noZAuKdtDT9jeEQ",
  authDomain: "darkmognet-store.firebaseapp.com",
  projectId: "darkmognet-store",
  storageBucket: "darkmognet-store.appspot.com",
  messagingSenderId: "693529574345",
  appId: "1:693529574345:web:2192472e8d3474cae38618"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const initFirestoreApp = () => {
    return app
}
