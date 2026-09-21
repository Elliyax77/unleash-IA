import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Calendar, MapPin, ExternalLink, CheckCircle, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import './Masterclass.css';

const fadeInLeft = {
  hidden: { opacity: 0, x: -60 },
  visible: { opacity: 1, x: 0 }
};

const fadeInRight = {
  hidden: { opacity: 0, x: 60 },
  visible: { opacity: 1, x: 0 }
};

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 }
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 }
};

const Masterclass = () => {
  const sectionRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const y2 = useTransform(scrollYProgress, [0, 1], [100, -100]);

  return (
    <section className="masterclass section-theme-red" id="masterclass" ref={sectionRef}>
      <div className="container">
        <div className="masterclass-grid">
          
          <motion.div
            className="mc-content glass-card"
            style={{ padding: '3rem', y: y1 }}
            variants={fadeInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <motion.h2
              className="mc-title"
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Más información sobre la <br />
              <span className="text-accent">Masterclass IA</span>
            </motion.h2>
            <motion.p
              className="mc-description"
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.35 }}
            >
              Aprende a dominar e integrar Inteligencia Artificial en tus proyectos y trabajo diario para automatizar procesos, potenciar tu creatividad y multiplicar resultados. Una formación intensiva diseñada para llevar tus habilidades al siguiente nivel.
            </motion.p>
            
            <div className="mc-details">
              <motion.div
                className="mc-detail-item"
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                <Calendar className="text-accent" size={24} />
                <div>
                  <h4>Fecha no definida</h4>
                  <p>Próximas fechas por anunciar</p>
                </div>
              </motion.div>
              <motion.div
                className="mc-detail-item"
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.65 }}
              >
                <MapPin className="text-accent" size={24} />
                <div>
                  <h4>100% Presencial</h4>
                  <p>San Diego, Big Low Center</p>
                </div>
              </motion.div>
            </div>
            
            <motion.div
              variants={scaleIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              <Link 
                to="/masterclass-2"
                className="btn-primary mc-btn"
              >
                Más información <ExternalLink size={18} />
              </Link>
            </motion.div>
          </motion.div>

          <motion.div
            className="mc-preview-wrapper glass-card"
            style={{ y: y2 }}
            variants={fadeInRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
          >
            <div className="preview-badge-container">
              <span className="preview-badge">CAPACITACIÓN INTENSIVA</span>
            </div>
            <motion.h3
              className="preview-title"
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              ¿Qué aprenderás en la Masterclass?
            </motion.h3>
            <ul className="preview-list">
              <li>
                <CheckCircle size={20} className="text-accent" />
                <span><strong>Fundamentos e impacto:</strong> Conceptos clave y panorama actual de la IA.</span>
              </li>
              <li>
                <CheckCircle size={20} className="text-accent" />
                <span><strong>Ingeniería de Prompts:</strong> El arte de comunicarte eficazmente con los modelos.</span>
              </li>
              <li>
                <CheckCircle size={20} className="text-accent" />
                <span><strong>Herramientas líderes:</strong> Uso práctico en tu flujo de trabajo y proyectos.</span>
              </li>
              <li>
                <CheckCircle size={20} className="text-accent" />
                <span><strong>Práctica guiada:</strong> Ejercicios paso a paso con casos reales.</span>
              </li>
            </ul>
            <motion.div
              className="preview-footer"
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              <Sparkles size={18} className="text-accent" />
              <span>Cupos limitados para garantizar una experiencia personalizada</span>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Masterclass;

