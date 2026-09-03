import React, { useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import './FloatingShapes.css';

const FloatingShapes = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const { scrollY } = useScroll();

  const y1 = useTransform(scrollY, [0, 3000], [0, -500]);
  const y2 = useTransform(scrollY, [0, 3000], [0, -900]);
  const y3 = useTransform(scrollY, [0, 3000], [0, -300]);
  const y4 = useTransform(scrollY, [0, 3000], [0, -700]);
  const y5 = useTransform(scrollY, [0, 3000], [0, -400]);

  useEffect(() => {
    const updateMousePosition = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', updateMousePosition);
    return () => window.removeEventListener('mousemove', updateMousePosition);
  }, []);

  return (
    <div className="floating-shapes-container">
      
      {/* Gran orbe rojo pulsante - arriba izquierda */}
      <motion.div
        className="shape shape-orb-large"
        style={{ y: y1 }}
        animate={{
          x: mousePosition.x * 0.02,
          scale: [1, 1.1, 1],
        }}
        transition={{ 
          x: { type: 'spring', damping: 50, stiffness: 20 },
          scale: { duration: 6, repeat: Infinity, ease: "easeInOut" }
        }}
      />

      {/* Anillo brillante flotante - derecha */}
      <motion.div
        className="shape shape-ring-large"
        style={{ y: y2 }}
        animate={{
          x: mousePosition.x * -0.03,
          rotate: [0, 360],
        }}
        transition={{ 
          x: { type: 'spring', damping: 40, stiffness: 10 },
          rotate: { duration: 40, repeat: Infinity, ease: "linear" }
        }}
      />

      {/* Anillo pequeño - centro izquierda */}
      <motion.div
        className="shape shape-ring-small"
        style={{ y: y5 }}
        animate={{
          x: mousePosition.x * 0.015,
          rotate: [0, -360],
        }}
        transition={{ 
          x: { type: 'spring', damping: 60, stiffness: 15 },
          rotate: { duration: 30, repeat: Infinity, ease: "linear" }
        }}
      />

      {/* Resplandor horizontal medio - centro */}
      <motion.div
        className="shape shape-glow-line"
        style={{ y: y3 }}
        animate={{
          opacity: [0.3, 0.8, 0.3],
          scaleX: [0.8, 1, 0.8],
        }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Orbe tenue gigante - abajo */}
      <motion.div
        className="shape shape-orb-bottom"
        style={{ y: y4 }}
      />

      {/* Punto de luz - arriba derecha */}
      <motion.div
        className="shape shape-dot-1"
        style={{ y: y5 }}
        animate={{
          opacity: [0.4, 1, 0.4],
          scale: [1, 1.5, 1],
        }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Punto de luz 2 - centro */}
      <motion.div
        className="shape shape-dot-2"
        style={{ y: y3 }}
        animate={{
          opacity: [0.2, 0.8, 0.2],
          scale: [1, 2, 1],
        }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
      />

      {/* Punto de luz 3 - abajo izquierda */}
      <motion.div
        className="shape shape-dot-3"
        style={{ y: y1 }}
        animate={{
          opacity: [0.3, 0.9, 0.3],
          scale: [1, 1.8, 1],
        }}
        transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
      />
    </div>
  );
};

export default FloatingShapes;
