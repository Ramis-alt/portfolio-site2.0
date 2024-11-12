import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import Info from './components/Info';
import Contact from './components/Contact';
// import ErrorBoundary from './components/ErrorBoundary';

function App() {
  return (
    <Router basename="/portfolio-site2.0">
      <div className="container">
        <Routes>
          <Route path="/" element={<><Info /><Footer /></>} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;