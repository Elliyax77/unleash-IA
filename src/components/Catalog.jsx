import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, ChevronRight } from 'lucide-react';
import './Catalog.css';

const projects = [
  {
    id: 1,
    title: "Eli Sushi",
    category: "Menú Digital & E-commerce",
    description: "Una experiencia gastronómica digital. Sistema de pedidos optimizado con diseño apetecible y moderno, pensado para la retención de clientes.",
    image: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?q=80&w=1000&auto=format&fit=crop", // placeholder premium
    link: "https://elisushi-kappa.vercel.app/"
  },
  {
    id: 2,
    title: "Suplevit",
    category: "Tienda Online Especializada",
    description: "Tienda online especializada en la venta de suplementos y vitaminas para niños con condiciones. Diseño accesible e intuitivo para facilitar la experiencia de compra.",
    image: "/projects/suplevit.png",
    link: "https://suplevit-ve.vercel.app/"
  }
];

const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 }
};

const fadeInLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0 }
};

const fadeInRight = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0 }
};

const cardReveal = {
  hidden: { opacity: 0, y: 80, scale: 0.9 },
  visible: { opacity: 1, y: 0, scale: 1 }
};

const Catalog = () => {
  return (
    <section className="catalog" id="catalogo">
      <div className="container">
        <div className="catalog-header">
          <motion.div
            variants={fadeInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <span className="section-subtitle text-accent">NUESTRO TRABAJO</span>
            <h2 className="section-title">Catálogo de <br/>Experiencias Web</h2>
          </motion.div>
          <motion.p 
            className="catalog-intro"
            variants={fadeInRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
          >
            No hacemos simples páginas web. Creamos activos digitales diseñados para vender, escalar e impactar. Explora algunos de nuestros casos de éxito.
          </motion.p>
        </div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <motion.div 
              key={project.id}
              className="project-card glass-card"
              variants={cardReveal}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, delay: index * 0.25, ease: "easeOut" }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
            >
              <div className="project-image-container">
                <img src={project.image} alt={project.title} className="project-image" />
                <div className="project-overlay">
                  <a href={project.link} target="_blank" rel="noreferrer" className="project-link-btn">
                    Visitar Web <ExternalLink size={18} />
                  </a>
                </div>
              </div>
              <div className="project-info">
                <motion.span
                  className="project-category"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.2 }}
                >
                  {project.category}
                </motion.span>
                <motion.h3
                  className="project-title"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.2 }}
                >
                  {project.title}
                </motion.h3>
                <motion.p
                  className="project-description"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.5 + index * 0.2 }}
                >
                  {project.description}
                </motion.p>
                <motion.a
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                  className="project-link-text"
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.6 + index * 0.2 }}
                  whileHover={{ x: 5 }}
                >
                  Ver caso completo <ChevronRight size={16} />
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          className="catalog-footer"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <p>¿Quieres que tu negocio sea el próximo caso de éxito?</p>
          <motion.a
            href="#contacto"
            className="btn-primary"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Cotizar mi Web
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Catalog;

