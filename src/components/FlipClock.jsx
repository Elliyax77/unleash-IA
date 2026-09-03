import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './FlipClock.css';

const AnimatedDigit = ({ value, label }) => {
  // Asegurar que el valor tenga dos dígitos
  const formattedValue = value < 10 ? `0${value}` : value;
  
  return (
    <div className="flip-unit-container">
      <div className="flip-card">
        <AnimatePresence mode="popLayout">
          <motion.div
            key={formattedValue}
            initial={{ rotateX: -90, opacity: 0, y: -20 }}
            animate={{ rotateX: 0, opacity: 1, y: 0 }}
            exit={{ rotateX: 90, opacity: 0, y: 20 }}
            transition={{ type: "spring", stiffness: 120, damping: 20 }}
            className="flip-digit"
          >
            {formattedValue}
          </motion.div>
        </AnimatePresence>
      </div>
      <span className="flip-label">{label}</span>
    </div>
  );
};

const FlipClock = ({ targetDate, className = "" }) => {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  function calculateTimeLeft() {
    const difference = +new Date(targetDate) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    } else {
      timeLeft = { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    return timeLeft;
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <div className={`flip-clock-wrapper ${className}`}>
      <AnimatedDigit value={timeLeft.days} label="Días" />
      <span className="flip-separator">:</span>
      <AnimatedDigit value={timeLeft.hours} label="Horas" />
      <span className="flip-separator">:</span>
      <AnimatedDigit value={timeLeft.minutes} label="Minutos" />
      <span className="flip-separator">:</span>
      <AnimatedDigit value={timeLeft.seconds} label="Segundos" />
    </div>
  );
};

export default FlipClock;
