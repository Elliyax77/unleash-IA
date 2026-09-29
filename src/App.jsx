import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import FloatingShapes from './components/FloatingShapes';
import Home from './pages/Home';
import MasterclassInfo from './pages/MasterclassInfo';
import CookieBanner from './components/CookieBanner';
import LegalModals from './components/LegalModals';
import './App.css';

function App() {
  const [activeLegalDoc, setActiveLegalDoc] = useState(null);
  const [forceCookieSettings, setForceCookieSettings] = useState(false);

  const handleOpenLegal = (docKey) => {
    setActiveLegalDoc(docKey);
  };

  const handleCloseLegal = () => {
    setActiveLegalDoc(null);
  };

  const handleSwitchLegalDoc = (newDocKey) => {
    setActiveLegalDoc(newDocKey);
  };

  const handleOpenCookieSettings = () => {
    setForceCookieSettings(true);
  };

  const handleCloseCookieSettings = () => {
    setForceCookieSettings(false);
  };

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
          <Footer 
            onOpenLegal={handleOpenLegal} 
            onOpenCookieSettings={handleOpenCookieSettings} 
          />
        </main>

        {/* Modal de Documentos Legales Accesible */}
        <LegalModals 
          activeLegalDoc={activeLegalDoc} 
          onClose={handleCloseLegal} 
          onSwitchDoc={handleSwitchLegalDoc} 
        />

        {/* Banner de Consentimiento y Preferencias de Cookies */}
        <CookieBanner 
          onOpenLegal={handleOpenLegal}
          forceOpenSettings={forceCookieSettings}
          onCloseSettings={handleCloseCookieSettings}
        />
      </div>
    </Router>
  );
}

export default App;

