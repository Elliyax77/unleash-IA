import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

const CustomCursor = () => {
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  // El punto central sigue rápido
  const dotX = useSpring(cursorX, { damping: 30, stiffness: 400, mass: 0.2 });
  const dotY = useSpring(cursorY, { damping: 30, stiffness: 400, mass: 0.2 });

  // El anillo sigue con delay
  const ringX = useSpring(cursorX, { damping: 20, stiffness: 150, mass: 0.5 });
  const ringY = useSpring(cursorY, { damping: 20, stiffness: 150, mass: 0.5 });

  // El glow sigue aún más lento
  const glowX = useSpring(cursorX, { damping: 15, stiffness: 80, mass: 0.8 });
  const glowY = useSpring(cursorY, { damping: 15, stiffness: 80, mass: 0.8 });

  useEffect(() => {
    const moveCursor = (e) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseOver = (e) => {
      const target = e.target;
      if (
        target.tagName === 'A' ||
        target.tagName === 'BUTTON' ||
        target.closest('a') ||
        target.closest('button') ||
        target.classList.contains('project-card')
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);
    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', moveCursor);
    window.addEventListener('mouseover', handleMouseOver);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    document.documentElement.addEventListener('mouseleave', handleMouseLeave);
    document.documentElement.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('mouseover', handleMouseOver);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      document.documentElement.removeEventListener('mouseleave', handleMouseLeave);
      document.documentElement.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, [cursorX, cursorY, isVisible]);

  // No mostrar en móvil
  if (typeof window !== 'undefined' && window.matchMedia('(pointer: coarse)').matches) {
    return null;
  }

  return (
    <>
      {/* Glow grande de fondo - sigue muy lento */}
      <motion.div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          x: glowX,
          y: glowY,
          translateX: '-50%',
          translateY: '-50%',
          width: '200px',
          height: '200px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(201, 0, 0, 0.15) 0%, transparent 70%)',
          pointerEvents: 'none',
          zIndex: 9997,
          opacity: isVisible ? 1 : 0,
        }}
        animate={{
          scale: isHovering ? 1.5 : isClicking ? 0.8 : 1,
        }}
        transition={{ duration: 0.3 }}
      />

      {/* Anillo exterior - sigue con delay */}
      <motion.div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          x: ringX,
          y: ringY,
          translateX: '-50%',
          translateY: '-50%',
          width: isHovering ? '50px' : '36px',
          height: isHovering ? '50px' : '36px',
          borderRadius: '50%',
          border: `2px solid rgba(201, 0, 0, ${isHovering ? 0.8 : 0.4})`,
          pointerEvents: 'none',
          zIndex: 9998,
          opacity: isVisible ? 1 : 0,
          transition: 'width 0.3s ease, height 0.3s ease, border-color 0.3s ease',
        }}
        animate={{
          scale: isClicking ? 0.8 : 1,
        }}
        transition={{ duration: 0.15 }}
      />

      {/* Punto central - sigue rápido */}
      <motion.div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          x: dotX,
          y: dotY,
          translateX: '-50%',
          translateY: '-50%',
          width: isHovering ? '8px' : '6px',
          height: isHovering ? '8px' : '6px',
          borderRadius: '50%',
          backgroundColor: '#c90000',
          boxShadow: '0 0 10px rgba(201, 0, 0, 0.8), 0 0 20px rgba(201, 0, 0, 0.4)',
          pointerEvents: 'none',
          zIndex: 9999,
          opacity: isVisible ? 1 : 0,
          transition: 'width 0.2s ease, height 0.2s ease',
        }}
        animate={{
          scale: isClicking ? 0.5 : 1,
        }}
        transition={{ duration: 0.1 }}
      />
    </>
  );
};

export default CustomCursor;
