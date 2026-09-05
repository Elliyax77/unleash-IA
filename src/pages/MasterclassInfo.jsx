import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Clock, BookOpen, CheckCircle, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import FlipClock from '../components/FlipClock';
import './MasterclassInfo.css';

const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const MasterclassInfo = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="mc-info-page">
      <div className="container">
        
        <motion.div 
          className="back-nav"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Link to="/" className="back-link">
            <ArrowLeft size={20} /> Volver al Inicio
          </Link>
        </motion.div>

        <motion.div 
          className="mc-header"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <span className="section-subtitle text-accent">PRÓXIMO EVENTO</span>
          <h1 className="mc-title">2da Master Class <br/>de Inteligencia Artificial</h1>
          <p className="mc-intro">
            Aprende a dominar las herramientas que están cambiando el mundo. Un evento intensivo diseñado para llevar tus habilidades al siguiente nivel.
          </p>
        </motion.div>

        <motion.div 
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          {/* Configura aquí la fecha de la masterclass. Por ahora tiene una fecha futura de prueba */}
          <FlipClock targetDate="2026-10-15T09:00:00" />
        </motion.div>

        <div className="mc-details-grid">
          <motion.div 
            className="mc-card glass-card"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h3 className="card-heading">Detalles del Evento</h3>
            
            <motion.div className="detail-item" variants={fadeInUp}>
              <div className="detail-icon"><Calendar size={24} /></div>
              <div>
                <h4>Duración</h4>
                <p>2 Días Intensivos</p>
              </div>
            </motion.div>

            <motion.div className="detail-item" variants={fadeInUp}>
              <div className="detail-icon"><MapPin size={24} /></div>
              <div>
                <h4>Modalidad</h4>
                <p>100% Presencial</p>
              </div>
            </motion.div>
            
            <motion.div className="detail-item" variants={fadeInUp}>
              <div className="detail-icon"><Clock size={24} /></div>
              <div>
                <h4>Próximamente</h4>
                <p>Fechas por anunciar</p>
              </div>
            </motion.div>

            <motion.div className="detail-item" variants={fadeInUp}>
              <div className="detail-icon"><MapPin size={24} /></div>
              <div>
                <h4>Ubicación</h4>
                <p>San Diego, Big Low Center</p>
              </div>
            </motion.div>
          </motion.div>

          <motion.div 
            className="mc-card glass-card"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h3 className="card-heading">Temario <BookOpen size={20} className="inline-icon" /></h3>
            <ul className="topics-list">
              <motion.li variants={fadeInUp}>
                <CheckCircle size={20} className="text-accent" />
                <span><strong>Historia de la IA:</strong> Evolución y conceptos clave.</span>
              </motion.li>
              <motion.li variants={fadeInUp}>
                <CheckCircle size={20} className="text-accent" />
                <span><strong>La IA en el mundo hoy:</strong> Impacto, tendencias y aplicaciones reales.</span>
              </motion.li>
              <motion.li variants={fadeInUp}>
                <CheckCircle size={20} className="text-accent" />
                <span><strong>Ingeniería de Prompts:</strong> El arte de comunicarte efectivamente con la IA.</span>
              </motion.li>
              <motion.li variants={fadeInUp}>
                <CheckCircle size={20} className="text-accent" />
                <span><strong>Herramientas de IA:</strong> Cuáles son y cómo utilizarlas en tu día a día.</span>
              </motion.li>
              <motion.li variants={fadeInUp}>
                <CheckCircle size={20} className="text-accent" />
                <span><strong>Prácticas guiadas:</strong> Todo lo aprendido aplicado con ejercicios reales.</span>
              </motion.li>
            </ul>
          </motion.div>
        </div>

        <motion.div 
          className="mc-gallery"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="gallery-header">
            <h2>Nuestra 1era Edición</h2>
            <p>Así vivimos la Primera Master Class</p>
          </div>
          <div className="gallery-image-wrapper">
            <img 
              src="/Primera-master-class/Foto-1-master.jpeg" 
              alt="Primera Master Class" 
              className="gallery-image"
              onError={(e) => {
                e.target.src = "https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=1000&auto=format&fit=crop";
              }}
            />
            <div className="image-caption">Primera Master Class - Un éxito total</div>
          </div>
        </motion.div>
        
        <motion.div 
          className="mc-cta-section"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h2>¿Listo para dar el salto tecnológico?</h2>
          <p>Los cupos son limitados para asegurar una experiencia personalizada.</p>
          <a 
            href="https://wa.me/584244980621?text=Hola!%20Quiero%20más%20información%20y%20reservar%20mi%20lugar%20para%20la%202da%20Masterclass%20de%20IA" 
            target="_blank" 
            rel="noreferrer" 
            className="btn-primary large"
          >
            Reservar mi lugar ahora
          </a>
        </motion.div>

      </div>
    </div>
  );
};

export default MasterclassInfo;
