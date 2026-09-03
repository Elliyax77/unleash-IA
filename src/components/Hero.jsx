import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import './Hero.css';

const Hero = () => {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section className="hero" id="inicio" ref={heroRef}>
      <div className="hero-background">
        <div className="gradient-sphere"></div>
        <div className="gradient-sphere secondary"></div>
      </div>
      
      <motion.div className="container hero-content" style={{ y, opacity }}>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="hero-title"
        >
          Llevamos tu Negocio al <br />
          <span className="text-gradient">Siguiente Nivel con AI</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="hero-subtitle"
        >
          Diseños premium, rendimiento extremo y soluciones basadas en inteligencia artificial. Tu web será tu mayor activo.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="hero-actions"
        >
          <a href="#catalogo" className="btn-primary">
            Ver Catálogo <ArrowRight size={18} />
          </a>
          <a href="#masterclass" className="btn-secondary glass">
            Próxima Masterclass
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;

