'use client'

import React, { useEffect, useState, useMemo } from 'react';
import { motion } from 'framer-motion';

interface Particle {
  width: string;
  height: string;
  left: string;
  top: string;
  duration: number;
}

const easePremium = [0.77, 0, 0.175, 1]; // custom cubic-bezier for premium feel

const ParticlesBackground = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Make the animation more prominent
  const smallParticles = useMemo(() => Array.from({ length: 20 }, () => ({
    width: Math.random() * 6 + 4,
    height: Math.random() * 6 + 4,
    left: `${Math.random() * 100}%`,
    top: `${Math.random() * 100}%`,
    duration: Math.random() * 10 + 4,
    phase: Math.random() * Math.PI * 2, // for sine/cosine movement
    blur: Math.random() * 2 + 1.5, // more depth
  })), []);

  const largeParticles = useMemo(() => Array.from({ length: 8 }, () => ({
    width: Math.random() * 12 + 6,
    height: Math.random() * 12 + 6,
    left: `${Math.random() * 100}%`,
    top: `${Math.random() * 100}%`,
    duration: Math.random() * 14 + 6,
    phase: Math.random() * Math.PI * 2,
    blur: Math.random() * 3 + 2.5,
  })), []);

  if (!mounted) return null;

  return (
    <div className="absolute inset-0 overflow-hidden select-none z-20" style={{ pointerEvents: 'none' }}>
      {/* Background particles */}
      {smallParticles.map((particle, i) => (
        <motion.div
          key={`particle-${i}`}
          className="absolute rounded-full"
          style={{
            width: particle.width,
            height: particle.height,
            left: particle.left,
            top: particle.top,
            background: 'radial-gradient(circle at 60% 40%, #a78bfa 0%, #7c3aed 80%, #4f46e5 100%)',
            filter: `blur(${particle.blur}px)`,
            boxShadow: '0 0 16px 4px #a78bfa55, 0 0 32px 8px #7c3aed33',
            willChange: 'transform',
            pointerEvents: 'none',
            userSelect: 'none',
          }}
          initial={{ scale: 0, opacity: 0, y: 60 }}
          animate={{
            scale: [1, 2.8 + Math.random(), 1.1 + Math.random() * 0.5, 2.8 + Math.random(), 1],
            opacity: [0, 0.95, 0.7, 0.95, 0],
            y: [
              -40,
              -120 + Math.sin(particle.phase) * 30,
              -80 + Math.cos(particle.phase) * 20,
              -120 + Math.sin(particle.phase + Math.PI / 2) * 30,
              -40
            ],
            x: [
              0,
              (i % 2 === 0 ? 40 : -40) + Math.cos(particle.phase) * 20,
              (i % 2 === 0 ? -20 : 20) + Math.sin(particle.phase) * 10,
              (i % 2 === 0 ? 40 : -40) + Math.cos(particle.phase + Math.PI / 2) * 20,
              0
            ],
            rotate: i % 2 === 0 ? [0, 15, -15, 0] : [0, -15, 15, 0],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            ease: easePremium,
            delay: i * 0.15,
          }}
        />
      ))}
      {/* Larger background particles */}
      {largeParticles.map((particle, i) => (
        <motion.div
          key={`large-particle-${i}`}
          className="absolute rounded-full opacity-70"
          style={{
            width: particle.width,
            height: particle.height,
            left: particle.left,
            top: particle.top,
            background: 'radial-gradient(circle at 60% 40%, #f0abfc 0%, #a78bfa 60%, #7c3aed 100%)',
            filter: `blur(${particle.blur}px)`,
            boxShadow: '0 0 32px 8px #f0abfc44, 0 0 64px 16px #a78bfa22',
            willChange: 'transform',
            pointerEvents: 'none',
            userSelect: 'none',
          }}
          initial={{ scale: 0, opacity: 0, y: 60 }}
          animate={{
            scale: [1, 3.5 + Math.random(), 1.5 + Math.random() * 0.7, 3.5 + Math.random(), 1],
            opacity: [0, 0.95, 0.5, 0.95, 0],
            y: [
              -60,
              -180 + Math.sin(particle.phase) * 40,
              -120 + Math.cos(particle.phase) * 30,
              -180 + Math.sin(particle.phase + Math.PI / 2) * 40,
              -60
            ],
            x: [
              0,
              (i % 2 === 0 ? 60 : -60) + Math.cos(particle.phase) * 30,
              (i % 2 === 0 ? -30 : 30) + Math.sin(particle.phase) * 15,
              (i % 2 === 0 ? 60 : -60) + Math.cos(particle.phase + Math.PI / 2) * 30,
              0
            ],
            rotate: i % 2 === 0 ? [0, 20, -20, 0] : [0, -20, 20, 0],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            ease: easePremium,
            delay: i * 0.18,
            repeatType: "reverse"
          }}
        />
      ))}
    </div>
  );
}

export default ParticlesBackground; 