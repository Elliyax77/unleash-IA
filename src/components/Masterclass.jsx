import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Calendar, Clock, MapPin, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';
import FlipClock from './FlipClock';
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
    <section className="masterclass" id="masterclass" ref={sectionRef}>
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
              Próxima <span className="text-accent">Masterclass IA</span>
            </motion.h2>
            <motion.p
              className="mc-description"
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.35 }}
            >
              Descubre cómo integrar Inteligencia Artificial en tus proyectos web para automatizar procesos, mejorar la experiencia de usuario y multiplicar tus conversiones. Una sesión exclusiva donde revelaremos nuestros secretos.
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
                  <h4>15 de Octubre, 2026</h4>
                  <p>Guarda la fecha</p>
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
                  <p>Una experiencia en vivo e interactiva</p>
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
            className="mc-timer-wrapper glass-card"
            style={{ y: y2 }}
            variants={fadeInRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
          >
            <motion.h3
              className="timer-title"
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              El tiempo se agota
            </motion.h3>
            <FlipClock targetDate="2026-10-15T09:00:00" className="mc-home-clock" />
            <motion.div
              className="timer-footer"
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 1.0 }}
            >
              <Clock size={16} /> Cupos limitados
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Masterclass;

