import './App.css';
import React from 'react';
import Header from '../Header/Header';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Questions from '../Questions/Questions';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import Entrees from '../Entrees/Entrees';
import Desserts from '../Dessert/Dessert';
import LandingPage from '../LandingPage/LandingPage';
import Appetizers from '../Appetizers/Appetizers';
import AllType from '../AllType/AllType';

function App() {
  return (
    <div className="App">
      <Header />
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/question" element={<Questions />} />
          <Route path="/Entrees" element={<Entrees />} />
          <Route path="/Appetizers" element={<Appetizers />} />
          <Route path="/Desserts" element={<Desserts />} />
          <Route path="/All" element={<AllType />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
