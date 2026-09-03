import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import './Navbar.css';

const Logo = () => (
  <div className="logo-container">
    <div className="logo-text-top">
      <span>UNL</span>
      <div className="logo-e">
        <div></div>
        <div></div>
        <div></div>
      </div>
      <span>ASH</span>
    </div>
    <div className="logo-text-bottom">
      SOLUCIONES CON <span>AI</span>
    </div>
  </div>
);

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);


  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav 
      className={`navbar ${scrolled ? 'glass' : ''}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="container navbar-content">
        <a href="#" className="navbar-brand">
          <Logo />
        </a>

        <div className="navbar-links desktop-only">
          <a href="#masterclass" className="nav-link">Masterclass</a>
          <a href="#catalogo" className="nav-link">Catálogo Web</a>
          <a href="#contacto" className="nav-btn text-accent">Contactar</a>
        </div>

        <div className="mobile-only">
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="mobile-toggle">
            {mobileMenuOpen ? <X size={28} color="#f0f0f0" /> : <Menu size={28} color="#f0f0f0" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <motion.div 
          className="mobile-menu glass"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <a href="#masterclass" onClick={() => setMobileMenuOpen(false)}>Masterclass</a>
          <a href="#catalogo" onClick={() => setMobileMenuOpen(false)}>Catálogo Web</a>
          <a href="#contacto" onClick={() => setMobileMenuOpen(false)} className="text-accent">Contactar</a>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;

