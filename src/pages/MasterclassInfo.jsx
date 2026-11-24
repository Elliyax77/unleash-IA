import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  Calendar,
  MapPin,
  Clock,
  BookOpen,
  CheckCircle,
  ArrowLeft,
  Users,
  Sparkles,
  Zap,
  Code,
  Terminal,
  MessageSquare,
  Wrench,
  Landmark,
  Network,
  TrendingUp,
  ShieldCheck,
  DollarSign,
  Laptop,
  Mail,
  Globe
} from 'lucide-react';
import { Link } from 'react-router-dom';
import FlipClock from '../components/FlipClock';
import './MasterclassInfo.css';

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};

const MasterclassInfo = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const WHATSAPP_RESERVATION_URL = "https://wa.me/584244980621?text=Hola!%20Quiero%20apartar%20mi%20cupo%20para%20la%20Masterclass%20de%20IA%20(14%20y%2016%20de%20diciembre)%20con%20solo%20%245%20USD.";

  const modules = [
    {
      id: 1,
      title: "Programación con IA",
      icon: <Code size={24} />,
      badge: "Desarrollo",
      description: "Crea software, scripts y páginas web x10 más rápido con asistentes 100% gratuitos y sin saber programar."
    },
    {
      id: 2,
      title: "Ingeniería de Prompts",
      icon: <MessageSquare size={24} />,
      badge: "Técnica",
      description: "Fórmulas clave para comunicarte con la IA y extraer respuestas exactas, profesionales y sin errores."
    },
    {
      id: 3,
      title: "Arsenal de Herramientas",
      icon: <Wrench size={24} />,
      badge: "Gratis",
      description: "Las mejores plataformas 100% gratuitas para generar texto, imágenes de alta calidad, clonación de voz y video."
    },
    {
      id: 4,
      title: "Historia de la IA",
      icon: <Landmark size={24} />,
      badge: "Fundamentos",
      description: "Recorrido dinámico desde Turing hasta los modelos actuales para entender hacia dónde va el futuro."
    },
    {
      id: 5,
      title: "Ecosistema de IA",
      icon: <Network size={24} />,
      badge: "Agentes",
      description: "Aprende cómo interactúan modelos abiertos, asistentes y bases de datos en proyectos prácticos."
    },
    {
      id: 6,
      title: "Vías de Monetización",
      icon: <TrendingUp size={24} />,
      badge: "Negocios",
      description: "Modelos de negocio reales para generar ingresos vendiendo servicios, automatizaciones y soluciones con IA."
    }
  ];

  return (
    <div className="mc-info-page">
      <div className="container">
        
        {/* Navegación de retorno */}
        <motion.div 
          className="back-nav"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <Link to="/" className="back-link">
            <ArrowLeft size={20} /> Volver al Inicio
          </Link>
        </motion.div>

        {/* Header Principal */}
        <motion.div 
          className="mc-header"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <span className="section-subtitle text-accent">EDICIÓN PRESENCIAL • VALENCIA, VENEZUELA</span>
          <h1 className="mc-title">Master Class <br/><span className="gradient-text">de Inteligencia Artificial</span></h1>
          <p className="mc-intro">
            2 días intensivos de entrenamiento práctico. Domina herramientas de IA 100% gratuitas para acelerar tu trabajo y generar ingresos.
          </p>
        </motion.div>

        {/* Tarjeta Unificada de Convocatoria & Reserva */}
        <motion.div 
          className="mc-unified-booking-card glass-card"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="booking-top-badges">
            <span className="badge-live"><span className="status-live-dot"></span> 14 Y 16 DE DICIEMBRE • 4 A 7 PM</span>
            <span className="badge-tools">⚡ HERRAMIENTAS 100% GRATIS</span>
          </div>

          <div className="booking-clock-row">
            <FlipClock targetDate="2026-12-14T16:00:00" />
          </div>

          <div className="booking-price-row">
            <div className="booking-price-info">
              <span className="price-tag-sub">Inversión Total: $35 USD</span>
              <div className="price-main-callout">
                Aparta hoy con solo <strong className="text-highlight">$5 USD</strong>
              </div>
              <p className="price-mini-note">Congelas tu cupo con $5 y abonas los $30 restantes el día de la clase.</p>
            </div>

            <a 
              href={WHATSAPP_RESERVATION_URL}
              target="_blank"
              rel="noreferrer"
              className="btn-primary booking-cta-btn pulse-btn"
            >
              <Sparkles size={18} />
              <span>Apartar Cupo por $5</span>
            </a>
          </div>

          <div className="booking-quick-pills">
            <span>📅 14 y 16 Dic (2 días)</span>
            <span>⏰ 4:00 PM a 7:00 PM (6 hrs)</span>
            <span>📍 Big Low Center, San Diego</span>
            <span>👥 Cupos Estrictamente Limitados</span>
          </div>
        </motion.div>

        {/* ============================================================== */}
        {/* TEMARIO OFICIAL COMPLETO (LOS 6 PUNTOS CLAVE)                   */}
        {/* ============================================================== */}
        <section className="mc-curriculum-section">
          <motion.div 
            className="curriculum-header text-center"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <span className="section-subtitle text-accent">PROGRAMA ACADÉMICO</span>
            <h2 className="curriculum-title">Contenido de la Master Class</h2>
            <p className="curriculum-desc">
              6 módulos prácticos diseñados para aprender sin enredos y con herramientas 100% gratuitas.
            </p>
          </motion.div>

          <motion.div 
            className="curriculum-modules-grid"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {modules.map((mod) => (
              <motion.div 
                key={mod.id} 
                className="curriculum-module-card glass-card"
                variants={fadeInUp}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
              >
                <div className="module-topbar">
                  <div className="module-icon-badge">
                    {mod.icon}
                  </div>
                  <span className="module-tag">{mod.badge}</span>
                </div>

                <div className="module-number">Módulo 0{mod.id}</div>
                <h3 className="module-title">{mod.title}</h3>
                <p className="module-description">{mod.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* ============================================================== */}
        {/* REQUISITOS (SINTETIZADOS PARA MÓVIL)                           */}
        {/* ============================================================== */}
        <section className="mc-requirements-section">
          <motion.div 
            className="curriculum-header text-center"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <span className="section-subtitle text-accent">PREPARACIÓN</span>
            <h2 className="curriculum-title">Requisitos Básicos</h2>
            <p className="curriculum-desc">
              Lo indispensable para asistir. Diseñado para que cualquier persona participe sin complicaciones.
            </p>
          </motion.div>

          <motion.div 
            className="requirements-compact-grid"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div className="req-compact-card glass-card req-featured" variants={fadeInUp}>
              <div className="req-compact-header">
                <div className="req-compact-icon req-laptop-badge"><Laptop size={24} /></div>
                <span className="req-tag-highlight">RECOMENDADO</span>
              </div>
              <h3 className="req-compact-title">Laptop (Preferiblemente)</h3>
              <p className="req-compact-desc">
                Para hacer las prácticas en vivo junto al instructor. Si no tienes laptop, igualmente puedes asistir y tomar notas.
              </p>
            </motion.div>

            <motion.div className="req-compact-card glass-card" variants={fadeInUp}>
              <div className="req-compact-header">
                <div className="req-compact-icon"><Sparkles size={24} /></div>
                <span className="req-tag-neutral">PARA TODOS</span>
              </div>
              <h3 className="req-compact-title">Cero Experiencia</h3>
              <p className="req-compact-desc">
                No necesitas saber programar ni tener conocimientos previos. Iniciamos desde cero paso a paso.
              </p>
            </motion.div>

            <motion.div className="req-compact-card glass-card" variants={fadeInUp}>
              <div className="req-compact-header">
                <div className="req-compact-icon"><Mail size={24} /></div>
                <span className="req-tag-neutral">ACCESO</span>
              </div>
              <h3 className="req-compact-title">Correo Activo</h3>
              <p className="req-compact-desc">
                Para registrarte al instante en las herramientas y plataformas 100% gratuitas que usaremos.
              </p>
            </motion.div>
          </motion.div>
        </section>

        {/* Galería de la 1era Edición */}
        <motion.div 
          className="mc-gallery"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="gallery-header">
            <span className="section-subtitle text-accent">TRAYECTORIA & ÉXITO</span>
            <h2>Nuestra 1era Edición</h2>
            <p>Así vivimos la Primera Master Class con cupos agotados</p>
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
            <div className="image-caption">Primera Master Class - Comunidad, Aprendizaje y Transformación Digital</div>
          </div>
        </motion.div>
        
        {/* Llamada a la acción final */}
        <motion.div 
          className="mc-cta-section"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="cta-fire-badge">🔥 ÚLTIMOS CUPOS DISPONIBLES</div>
          <h2>¿Listo para liderar con IA?</h2>
          <p>
            Aparta tu lugar con solo <strong>$5 USD</strong> y cancela los $30 restantes el día de la clase.
          </p>
          
          <div className="cta-actions-wrap">
            <a 
              href={WHATSAPP_RESERVATION_URL} 
              target="_blank" 
              rel="noreferrer" 
              className="btn-primary large pulse-btn"
            >
              <Sparkles size={20} />
              <span>Apartar mi Cupo por $5 USD</span>
            </a>
          </div>

          <p className="cta-hours-reminder">
            📅 14 y 16 Dic • ⏰ 4:00 PM a 7:00 PM • 📍 Big Low Center, San Diego
          </p>
        </motion.div>

      </div>
    </div>
  );
};

export default MasterclassInfo;
