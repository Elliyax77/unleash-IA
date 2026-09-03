import React from 'react';
import { motion } from 'framer-motion';
import { Mail, MessageCircle, ChevronUp } from 'lucide-react';

const InstagramIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
  </svg>
);
import './Footer.css';

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 }
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.5 },
  visible: { opacity: 1, scale: 1 }
};

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer" id="contacto">
      <div className="container footer-content">
        <motion.div
          className="footer-brand"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
        >
          <div className="logo-text-top" style={{ fontSize: '1.8rem', marginBottom: '10px' }}>
            <span>UNL</span>
            <div className="logo-e" style={{ height: '1.2rem', gap: '3px' }}>
              <div style={{ width: '16px', height: '4px' }}></div>
              <div style={{ width: '16px', height: '4px' }}></div>
              <div style={{ width: '16px', height: '4px' }}></div>
            </div>
            <span>ASH</span>
          </div>
          <p className="footer-desc">Soluciones con Inteligencia Artificial. Elevamos los estándares del desarrollo web.</p>
        </motion.div>

        <motion.div
          className="footer-links"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          <h4>Navegación</h4>
          <motion.a
            href="#inicio"
            whileHover={{ x: 5, color: '#c90000' }}
            transition={{ duration: 0.2 }}
          >
            Inicio
          </motion.a>
          <motion.a
            href="#masterclass"
            whileHover={{ x: 5, color: '#c90000' }}
            transition={{ duration: 0.2 }}
          >
            Masterclass IA
          </motion.a>
          <motion.a
            href="#catalogo"
            whileHover={{ x: 5, color: '#c90000' }}
            transition={{ duration: 0.2 }}
          >
            Catálogo Web
          </motion.a>
        </motion.div>

        <motion.div
          className="footer-contact"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <h4>Conecta con nosotros</h4>
          <div className="social-links">
            {[
              { href: "https://www.instagram.com/unleash_ia?utm_source=qr", icon: <InstagramIcon />, cls: "" },
              { href: "mailto:contacto@unleash.com", icon: <Mail size={20} />, cls: "" },
              { href: "https://wa.me/584244980621?text=Hola!%20Vengo%20de%20la%20página%20web", icon: <MessageCircle size={20} />, cls: "whatsapp" }
            ].map((social, idx) => (
              <motion.a
                key={idx}
                href={social.href}
                target={social.href.startsWith('http') ? "_blank" : undefined}
                rel={social.href.startsWith('http') ? "noreferrer" : undefined}
                className={`social-icon ${social.cls}`}
                variants={scaleIn}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.4 + idx * 0.1 }}
                whileHover={{ scale: 1.2, y: -3 }}
                whileTap={{ scale: 0.9 }}
              >
                {social.icon}
              </motion.a>
            ))}
          </div>
          <motion.p
            className="contact-number"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.7 }}
          >
            +58 424 498 0621
          </motion.p>
        </motion.div>
      </div>

      <motion.div
        className="footer-bottom border-top"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <div className="container bottom-content">
          <p>&copy; 2026 UNLEASH - Soluciones con AI. Todos los derechos reservados.</p>
          <motion.button
            onClick={scrollToTop}
            className="scroll-top"
            whileHover={{ y: -3, color: '#c90000' }}
            whileTap={{ scale: 0.9 }}
          >
            <ChevronUp size={20} /> Volver arriba
          </motion.button>
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;

