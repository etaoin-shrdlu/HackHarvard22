import './App.css';
import React from 'react';
import Header from '../Header/Header';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Questions from '../Questions/Questions';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import Cards from '../Cards/Cards';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAJI5DaQrQCALhpCjhJ0qQTwE8SHtdBde0",
  authDomain: "hack22-recipie-magic.firebaseapp.com",
  projectId: "hack22-recipie-magic",
  storageBucket: "hack22-recipie-magic.appspot.com",
  messagingSenderId: "979812257518",
  appId: "1:979812257518:web:246bdd86cef0ea532badff",
  measurementId: "G-1LRBGG2DWB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

function App() {
  return (
    <div className="App">
      <Header />
      <Router>
        <Routes>
          <Route path="/question" element={<Questions />} />
          <Route path="/" element={<Cards />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
