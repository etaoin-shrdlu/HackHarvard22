import './App.css';
import React from 'react';
import Header from './Header';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Questions from './Questions';
import TinderCards from './TinderCards';
import ErrorBoundary from './ErrorBoundary';

function App() {
  return (
    <div className="App">
      <Header />
      <Router>
        <Routes>
          <Route path="/question" element={<Questions />} />
          <Route path="/" element={
            <ErrorBoundary>
              <TinderCards />
            </ErrorBoundary>
          } />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
