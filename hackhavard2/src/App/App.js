import './App.css';
import React from 'react';
import Header from '../Header/Header';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Questions from '../Questions/Questions';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
//import Entrees from '../Recepies/Recepies';
//import Desserts from '../Dessert/Dessert';
import LandingPage from '../LandingPage/LandingPage';
//import Appetizers from '../Appetizers/Appetizers';
import Recepies from '../Recepies/Recepies';
import AllType from '../AllType/AllType';
import LoginForm from '../Login/LoginForm';

function App() {
  return (
    <div className="App">
      <Header />
      <Router>
        <Routes>
          <Route path="/login" element={<LoginForm />} />
          <Route path="/" element={<LandingPage />} />
          <Route path="/question" element={<Questions />} />
          <Route path="/Recepies" element={<Recepies />} />
          <Route path="/Appetizers" element={<Recepies />} />
          <Route path="/Desserts" element={<Recepies />} />
          <Route path="/All" element={<AllType />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
