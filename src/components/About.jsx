import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Globe, ShoppingCart, Brain, ArrowRight } from 'lucide-react';
import './About.css';

const pillars = [
  {
    icon: <Globe size={28} />,
    title: 'Páginas Web Premium',
    description:
      'Diseñamos sitios de catálogo y pedidos a medida para tu negocio: rápidos, visualmente impactantes y optimizados para convertir visitantes en clientes.',
  },
  {
    icon: <ShoppingCart size={28} />,
    title: 'Catálogos & Pedidos Online',
    description:
      'Tu tienda o menú siempre disponible 24/7. Tus clientes exploran, eligen y ordenan desde cualquier dispositivo, sin complicaciones.',
  },
  {
    icon: <Brain size={28} />,
    title: 'Masterclass de IA',
    description:
      'Para quienes quieren dar el primer paso en el mundo de la inteligencia artificial. Clases personalizadas, cupos limitados y contenido práctico desde cero.',
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.18 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const About = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section className="about" id="nosotros" ref={ref}>
      {/* Decorative line */}
      <div className="about-line" />

      <div className="container about-inner">
        {/* Header */}
        <motion.div
          className="about-header"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <span className="about-eyebrow">¿Quiénes somos?</span>
          <h2 className="about-title">
            Todo lo que tu negocio<br />
            <span className="text-accent">necesita en un solo lugar</span>
          </h2>
          <p className="about-subtitle">
            <strong>Unleash AI</strong> es una empresa especializada en transformar negocios
            mediante tecnología web e inteligencia artificial. Creamos la presencia digital
            que tu marca merece y abrimos las puertas de la IA para cualquiera que quiera
            aprovecharla.
          </p>
        </motion.div>

        {/* Pillar cards */}
        <motion.div
          className="about-cards"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          {pillars.map((p, i) => (
            <motion.div key={i} className="about-card glass-card" variants={cardVariants}>
              <div className="about-card-icon">{p.icon}</div>
              <h3 className="about-card-title">{p.title}</h3>
              <p className="about-card-desc">{p.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA strip */}
        <motion.div
          className="about-cta"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.55 }}
        >
          <p className="about-cta-text">
            ¿Listo para llevar tu negocio al siguiente nivel?
          </p>
          <a href="#catalogo" className="btn-primary">
            Ver nuestros servicios <ArrowRight size={18} />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
