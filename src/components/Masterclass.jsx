import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Calendar, MapPin, Clock, ExternalLink, Sparkles, Zap, CheckCircle, Laptop } from 'lucide-react';
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

  const WHATSAPP_RESERVATION_URL = "https://wa.me/584244980621?text=Hola!%20Quiero%20apartar%20mi%20cupo%20para%20la%20Masterclass%20de%20IA%20(14%20y%2016%20de%20diciembre)%20con%20solo%20%245%20USD.";

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
              Masterclass <br />
              <span className="text-accent">Inteligencia Artificial</span>
            </motion.h2>

            <motion.p
              className="mc-description"
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.35 }}
            >
              Aprende a dominar e integrar Inteligencia Artificial en tus proyectos y trabajo diario para automatizar procesos, potenciar tu productividad x10 y abrir nuevas vías de monetización. Formación 100% presencial y práctica.
            </motion.p>

            <div className="mc-details">
              <motion.div
                className="mc-detail-item"
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.45 }}
              >
                <Calendar className="text-accent" size={24} />
                <div>
                  <h4>14 y 16 de Diciembre, 2026</h4>
                  <p>Próxima edición confirmada (2 días)</p>
                </div>
              </motion.div>

              <motion.div
                className="mc-detail-item"
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.55 }}
              >
                <Clock className="text-accent" size={24} />
                <div>
                  <h4>Horario: 4:00 PM a 7:00 PM</h4>
                  <p>3 horas intensivas por sesión (6 horas totales)</p>
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
                  <p>San Diego, Big Low Center (Valencia, Carabobo)</p>
                </div>
              </motion.div>

              <motion.div
                className="mc-detail-item"
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.7 }}
              >
                <Laptop className="text-accent" size={24} />
                <div>
                  <h4>Laptop (Preferiblemente)</h4>
                  <p>Para prácticas guiadas en vivo (no limitativo)</p>
                </div>
              </motion.div>
            </div>

            {/* Banner llamativo: Aparta con solo $5 USD */}
            <motion.div
              className="mc-price-highlight-banner"
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.7 }}
            >
              <div className="mc-banner-top-row">
                <span className="badge-reserve-promo">
                  <Zap size={14} className="zap-icon" /> OFERTA ESPECIAL
                </span>
                <span className="mc-total-tag">Inversión Total: $35 USD</span>
              </div>

              <div className="mc-reserve-callout">
                <span>¡Aparta tu Cupo hoy con solo </span>
                <strong className="callout-amount">$5 USD</strong>!
              </div>

              <p className="callout-note">
                Congela tu lugar con $5 USD y abonas los $30 restantes el primer día de clase.
              </p>
            </motion.div>

            {/* Botones de acción */}
            <motion.div
              className="mc-cta-buttons-row"
              variants={scaleIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              <a
                href={WHATSAPP_RESERVATION_URL}
                target="_blank"
                rel="noreferrer"
                className="btn-primary mc-btn btn-reserve-instant"
              >
                <Sparkles size={18} />
                <span>Apartar por $5 USD</span>
              </a>

              <Link
                to="/masterclass-2"
                className="btn-secondary mc-btn btn-view-curriculum"
              >
                <span>Ver Temario Completo</span>
                <ExternalLink size={16} />
              </Link>
            </motion.div>
          </motion.div>

          {/* Columna Derecha: Contador y Preview de los 6 Temas */}
          <motion.div
            className="mc-timer-wrapper glass-card"
            style={{ y: y2 }}
            variants={fadeInRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
          >
            <div className="preview-badge-container">
              <span className="preview-badge">🔥 EDICIÓN PRESENCIAL • 14 Y 16 DE DICIEMBRE • 4 A 7 PM</span>
            </div>

            <motion.h3
              className="timer-title"
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              El tiempo se agota
            </motion.h3>

            <FlipClock targetDate="2026-12-14T16:00:00" className="mc-home-clock" />

            {/* Preview de los 6 Temas */}
            <motion.div
              className="mc-topics-preview-card"
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <h4 className="topics-preview-title">Contenido de la Masterclass (Herramientas 100% Gratis):</h4>
              <div className="topics-mini-chips-grid">
                <span className="mini-chip">💻 Programación con IA</span>
                <span className="mini-chip">🧠 Ingeniería de Prompts</span>
                <span className="mini-chip">🛠️ Arsenal de Herramientas</span>
                <span className="mini-chip">📜 HISTORIA DE LA IA</span>
                <span className="mini-chip">🌐 Ecosistema de IA</span>
                <span className="mini-chip">💰 Vías de Monetización</span>
              </div>
            </motion.div>

            <motion.div
              className="timer-footer"
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              <Sparkles size={18} className="text-accent" />
              <span>Cupos estrictamente limitados para garantizar asesoría práctica</span>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Masterclass;
