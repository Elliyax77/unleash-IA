import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import FloatingShapes from './components/FloatingShapes';
import Home from './pages/Home';
import MasterclassInfo from './pages/MasterclassInfo';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app-container">
        <FloatingShapes />
        <main style={{ position: 'relative', zIndex: 10 }}>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/masterclass-2" element={<MasterclassInfo />} />
          </Routes>
          <Footer />
        </main>
      </div>
    </Router>
  );
}

export default App;
