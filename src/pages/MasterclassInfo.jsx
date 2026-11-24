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
      icon: <Code size={26} />,
      badge: "Desarrollo Acelerado",
      description: "Aprende a programar software, scripts de automatización y aplicaciones web multiplicando tu velocidad x10 utilizando herramientas y entornos de desarrollo 100% gratuitos. De la idea al código funcional sin trabas técnicas ni pagos de suscripciones."
    },
    {
      id: 2,
      title: "Ingeniería de Prompts",
      icon: <MessageSquare size={26} />,
      badge: "Técnica Avanzada",
      description: "Domina las metodologías de comunicación de alto impacto: Zero-Shot, Few-Shot, Chain-of-Thought, Meta-Prompting y control de contexto para extraer respuestas de máxima precisión, estructuradas y sin alucinaciones en modelos 100% gratuitos."
    },
    {
      id: 3,
      title: "Arsenal de Herramientas",
      icon: <Wrench size={26} />,
      badge: "Stack 100% Gratuito",
      description: "Explora y domina un arsenal completo de herramientas de Inteligencia Artificial 100% gratuitas para generación de texto, imágenes de alta calidad, clonación de audio/voz, video generativo y automatizaciones prácticas sin gastar en suscripciones."
    },
    {
      id: 4,
      title: "HISTORIA DE LA IA",
      icon: <Landmark size={26} />,
      badge: "Bases & Evolución",
      description: "Un recorrido fascinante desde los fundamentos matemáticos pioneros y el test de Turing hasta el Big Data, la arquitectura Transformer y los modelos fundacionales. Conocer el origen para entender con claridad hacia dónde va el futuro."
    },
    {
      id: 5,
      title: "Ecosistema de IA",
      icon: <Network size={26} />,
      badge: "Arquitectura & Agentes",
      description: "Comprende cómo interactúan las piezas del rompecabezas: modelos abiertos, alternativas locales y plataformas 100% gratuitas, bases de datos vectoriales (RAG) y agentes autónomos colaborativos sin depender de servicios pagos."
    },
    {
      id: 6,
      title: "Vías de Monetización",
      icon: <TrendingUp size={26} />,
      badge: "Modelos de Negocio",
      description: "Estrategias reales y validadas para capitalizar la IA aplicando herramientas 100% gratis: creación de soluciones digitales, consultoría e implementación para empresas, automatización de procesos y servicios de alto valor."
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
          <span className="section-subtitle text-accent">PRÓXIMA EDICIÓN PRESENCIAL</span>
          <h1 className="mc-title">Master Class <br/><span className="gradient-text">de Inteligencia Artificial</span></h1>
          <p className="mc-intro">
            Aprende a dominar las herramientas que están transformando el mundo. Un entrenamiento intensivo de 2 días diseñado para potenciar tu perfil profesional, automatizar tus proyectos y abrir nuevas fuentes de ingresos.
          </p>
        </motion.div>

        {/* Status Banner con Reloj */}
        <motion.div 
          className="mc-status-banner glass-card"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <div className="status-badge-row">
            <span className="status-live-dot"></span>
            <span className="status-badge-text">CONVOCATORIA CONFIRMADA • 14 Y 16 DE DICIEMBRE • 4:00 PM A 7:00 PM</span>
          </div>
          
          <div className="status-content-row">
            <div className="status-main-info">
              <h2 className="status-heading">Clases de 4:00 PM a 7:00 PM</h2>
              <p className="status-subtext">
                Dos sesiones intensivas (14 y 16 de Diciembre) con práctica en tiempo real. Los cupos son estrictamente limitados para garantizar asesoría personalizada a cada asistente.
              </p>
            </div>
            
            <a 
              href={WHATSAPP_RESERVATION_URL}
              target="_blank"
              rel="noreferrer"
              className="btn-primary status-action-btn"
            >
              <Sparkles size={18} />
              <span>Apartar Cupo por $5</span>
            </a>
          </div>

          <div className="status-clock-box">
            <FlipClock targetDate="2026-12-14T16:00:00" />
          </div>
        </motion.div>

        {/* ============================================================== */}
        {/* CAJA ULTRA LLAMATIVA: APARTA TU CUPO CON SOLO $5 USD           */}
        {/* ============================================================== */}
        <motion.div
          className="vip-reservation-card"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="vip-glow-effect"></div>
          
          <div className="vip-card-content">
            <div className="vip-left-col">
              <div className="vip-offer-tag">
                <Zap size={16} className="zap-icon" />
                <span>OFERTA DE RESERVA ANTICIPADA</span>
              </div>
              
              <h2 className="vip-title">
                ¡Aparta tu Cupo hoy con solo <span className="highlight-price">$5 USD</span>!
              </h2>
              
              <p className="vip-desc">
                No dejes pasar tu lugar en esta edición presencial. Puedes congelar tu asiento ahora mismo abonando únicamente <strong>$5 USD</strong>, y el monto restante de <strong>$30 USD</strong> lo cancelas el primer día de clase para completar la <strong>inversión total de $35 USD</strong>.
              </p>

              <div className="vip-features-list">
                <div className="vip-feature-item">
                  <CheckCircle size={18} className="vip-check" />
                  <span><strong>Inversión Total:</strong> $35 USD (incluye los $5 de reservación).</span>
                </div>
                <div className="vip-feature-item">
                  <CheckCircle size={18} className="vip-check" />
                  <span><strong>Horario Confirmado:</strong> 4:00 PM a 7:00 PM (3 hrs por día).</span>
                </div>
                <div className="vip-feature-item">
                  <CheckCircle size={18} className="vip-check" />
                  <span><strong>Garantía de Asiento:</strong> Cupo 100% asegurado al apartar.</span>
                </div>
                <div className="vip-feature-item">
                  <CheckCircle size={18} className="vip-check" />
                  <span><strong>Herramientas 100% Gratis:</strong> Todo el software y modelos explicados serán gratuitos, sin costos ocultos.</span>
                </div>
                <div className="vip-feature-item">
                  <CheckCircle size={18} className="vip-check" />
                  <span><strong>Acceso Completo:</strong> Material descargable, prompts y certificados.</span>
                </div>
              </div>
            </div>

            <div className="vip-right-col">
              <div className="pricing-box">
                <span className="price-label">Inversión Total</span>
                <div className="price-total-strikethrough">$35 USD</div>
                
                <div className="reserve-box">
                  <span className="reserve-caption">RESERVA INICIAL</span>
                  <div className="reserve-amount">
                    <span className="currency">$</span>5<span className="usd-text">USD</span>
                  </div>
                  <span className="reserve-sub">Congela tu cupo hoy</span>
                </div>

                <a 
                  href={WHATSAPP_RESERVATION_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-vip-reserve pulse-btn"
                >
                  <Sparkles size={20} />
                  <span>Apartar mi Cupo por $5</span>
                </a>

                <div className="pricing-guarantee">
                  <ShieldCheck size={16} />
                  <span>Cupos limitados por orden de reserva</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Detalles del Evento (Grid 4 items) */}
        <motion.div 
          className="mc-info-details-strip"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div className="info-detail-box glass-card" variants={fadeInUp}>
            <div className="detail-icon-circle"><Calendar size={22} /></div>
            <div>
              <span className="detail-label">Fechas</span>
              <h4 className="detail-value text-accent">14 y 16 de Diciembre, 2026</h4>
              <p className="detail-note">2 Días Intensivos</p>
            </div>
          </motion.div>

          <motion.div className="info-detail-box glass-card" variants={fadeInUp}>
            <div className="detail-icon-circle"><Clock size={22} /></div>
            <div>
              <span className="detail-label">Horario de Clases</span>
              <h4 className="detail-value">4:00 PM a 7:00 PM</h4>
              <p className="detail-note">3 horas diarias (6 hrs totales)</p>
            </div>
          </motion.div>

          <motion.div className="info-detail-box glass-card" variants={fadeInUp}>
            <div className="detail-icon-circle"><MapPin size={22} /></div>
            <div>
              <span className="detail-label">Ubicación</span>
              <h4 className="detail-value">San Diego, Big Low Center</h4>
              <p className="detail-note">100% Presencial</p>
            </div>
          </motion.div>

          <motion.div className="info-detail-box glass-card" variants={fadeInUp}>
            <div className="detail-icon-circle"><DollarSign size={22} /></div>
            <div>
              <span className="detail-label">Costo e Inscripción</span>
              <h4 className="detail-value">$35 USD Total</h4>
              <p className="detail-note text-accent font-semibold">Aparta con solo $5 USD</p>
            </div>
          </motion.div>
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
              Una ruta formativa estructurada para llevarte desde la comprensión profunda de la inteligencia artificial hasta su aplicación práctica y monetización en el mundo real.
            </p>

            <div className="curriculum-free-banner glass-card">
              <Sparkles size={20} className="free-banner-icon" />
              <div className="free-banner-text">
                <strong>Herramientas 100% Gratuitas:</strong> Todo el software, plataformas y modelos que utilizaremos y aprenderás en la clase serán completamente gratuitos y accesibles. No requerirás pagar ninguna suscripción adicional.
              </div>
            </div>
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
                whileHover={{ y: -6, transition: { duration: 0.25 } }}
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
                
                <div className="module-footer-pill">
                  <CheckCircle size={15} />
                  <span>Herramientas 100% Gratis • Práctica Guiada</span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* ============================================================== */}
        {/* SECCIÓN DE REQUISITOS (CON ÉNFASIS EN LAPTOP PREFERIBLEMENTE)  */}
        {/* ============================================================== */}
        <section className="mc-requirements-section">
          <motion.div 
            className="requirements-header text-center"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <span className="section-subtitle text-accent">PREPARACIÓN</span>
            <h2 className="requirements-title">Requisitos para Asistir</h2>
            <p className="requirements-desc">
              Todo lo que necesitas para aprovechar al máximo esta formación presencial. Diseñada para que cualquier persona pueda comenzar sin barreras técnicas.
            </p>
          </motion.div>

          <motion.div 
            className="requirements-grid"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {/* 1. Laptop (Preferiblemente) - Tarjeta Destacada */}
            <motion.div 
              className="requirement-card glass-card req-featured"
              variants={fadeInUp}
              whileHover={{ y: -6, transition: { duration: 0.25 } }}
            >
              <div className="req-card-topbar">
                <div className="req-icon-badge req-laptop-badge">
                  <Laptop size={28} />
                </div>
                <span className="req-tag-highlight">★ RECOMENDADO</span>
              </div>
              <h3 className="req-card-title">
                Laptop <span className="req-subtitle-accent">(Preferiblemente)</span>
              </h3>
              <p className="req-card-description">
                Te sugerimos llevar tu computadora portátil (Windows, Mac o Linux) con su cargador para que realices las prácticas, pruebes las herramientas y configures tus flujos de trabajo en vivo junto al instructor.
              </p>
              <div className="req-note-banner">
                <CheckCircle size={16} className="req-note-icon" />
                <span>Si no dispones de laptop, igualmente puedes asistir, ver todas las demostraciones en pantalla grande y tomar apuntes.</span>
              </div>
            </motion.div>

            {/* 2. Cero experiencia requerida */}
            <motion.div 
              className="requirement-card glass-card"
              variants={fadeInUp}
              whileHover={{ y: -6, transition: { duration: 0.25 } }}
            >
              <div className="req-card-topbar">
                <div className="req-icon-badge">
                  <Sparkles size={26} />
                </div>
                <span className="req-tag-neutral">NIVEL INICIAL</span>
              </div>
              <h3 className="req-card-title">Cero Experiencia Previa</h3>
              <p className="req-card-description">
                No requieres conocimientos previos de programación, matemáticas complejas ni experiencia técnica con IA. El entrenamiento parte desde las bases fundamentales con explicaciones sencillas y paso a paso.
              </p>
              <div className="req-pill-footer">
                <CheckCircle size={15} />
                <span>Apto para principiantes y entusiastas</span>
              </div>
            </motion.div>

            {/* 3. Cuenta de correo activa */}
            <motion.div 
              className="requirement-card glass-card"
              variants={fadeInUp}
              whileHover={{ y: -6, transition: { duration: 0.25 } }}
            >
              <div className="req-card-topbar">
                <div className="req-icon-badge">
                  <Mail size={26} />
                </div>
                <span className="req-tag-neutral">ACCESO RÁPIDO</span>
              </div>
              <h3 className="req-card-title">Correo Electrónico Activo</h3>
              <p className="req-card-description">
                Tener una cuenta de correo personal o de trabajo activa (preferiblemente Gmail) para poder registrarte al instante en las herramientas y plataformas 100% gratuitas que usaremos en la clase.
              </p>
              <div className="req-pill-footer">
                <CheckCircle size={15} />
                <span>Registro 100% gratuito en plataformas</span>
              </div>
            </motion.div>

            {/* 4. Navegador web moderno */}
            <motion.div 
              className="requirement-card glass-card"
              variants={fadeInUp}
              whileHover={{ y: -6, transition: { duration: 0.25 } }}
            >
              <div className="req-card-topbar">
                <div className="req-icon-badge">
                  <Globe size={26} />
                </div>
                <span className="req-tag-neutral">SOFTWARE BÁSICO</span>
              </div>
              <h3 className="req-card-title">Navegador Web Actualizado</h3>
              <p className="req-card-description">
                Cualquier navegador moderno instalado (Google Chrome, Microsoft Edge, Brave o Safari). Las herramientas funcionan en la nube directamente desde el navegador, sin necesidad de instalaciones pesadas.
              </p>
              <div className="req-pill-footer">
                <CheckCircle size={15} />
                <span>Sin instalaciones complejas</span>
              </div>
            </motion.div>

            {/* 5. Cuaderno o libreta */}
            <motion.div 
              className="requirement-card glass-card"
              variants={fadeInUp}
              whileHover={{ y: -6, transition: { duration: 0.25 } }}
            >
              <div className="req-card-topbar">
                <div className="req-icon-badge">
                  <BookOpen size={26} />
                </div>
                <span className="req-tag-neutral">OPCIONAL</span>
              </div>
              <h3 className="req-card-title">Cuaderno o Libreta de Notas</h3>
              <p className="req-card-description">
                Recomendado para plasmar fórmulas de prompts, estructuras de automatización, ideas de modelos de negocio y notas estratégicas que surjan durante las sesiones.
              </p>
              <div className="req-pill-footer">
                <CheckCircle size={15} />
                <span>Apuntes de alto valor</span>
              </div>
            </motion.div>

            {/* 6. Ganas de aprender y curiosidad */}
            <motion.div 
              className="requirement-card glass-card"
              variants={fadeInUp}
              whileHover={{ y: -6, transition: { duration: 0.25 } }}
            >
              <div className="req-card-topbar">
                <div className="req-icon-badge">
                  <Zap size={26} />
                </div>
                <span className="req-tag-neutral">FUNDAMENTAL</span>
              </div>
              <h3 className="req-card-title">Ganas de Aprender y Curiosidad</h3>
              <p className="req-card-description">
                La mejor disposición para hacer preguntas, probar cosas nuevas y descubrir cómo la inteligencia artificial puede ahorrarte horas de trabajo semanal y abrir nuevas fuentes de ingresos.
              </p>
              <div className="req-pill-footer">
                <CheckCircle size={15} />
                <span>Mentalidad de crecimiento</span>
              </div>
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
          <h2>¿Listo para liderar con Inteligencia Artificial?</h2>
          <p>
            No te quedes atrás en la mayor revolución tecnológica de nuestra era. Aparta tu lugar hoy con tan solo <strong>$5 USD</strong> y cancela el resto el día de la clase.
          </p>
          
          <div className="cta-actions-wrap">
            <a 
              href={WHATSAPP_RESERVATION_URL} 
              target="_blank" 
              rel="noreferrer" 
              className="btn-primary large pulse-btn"
            >
              <Sparkles size={20} />
              <span>Apartar mi Cupo por $5 USD en WhatsApp</span>
            </a>
          </div>

          <p className="cta-hours-reminder">
            📅 14 y 16 de Diciembre • ⏰ 4:00 PM a 7:00 PM • 📍 Big Low Center, San Diego
          </p>
        </motion.div>

      </div>
    </div>
  );
};

export default MasterclassInfo;
