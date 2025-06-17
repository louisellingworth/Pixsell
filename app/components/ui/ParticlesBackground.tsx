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

const ParticlesBackground = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Reduce number of particles and optimize animation settings
  const smallParticles = useMemo(() => Array.from({ length: 20 }, () => ({
    width: Math.random() * 3 + 2,
    height: Math.random() * 3 + 2,
    left: `${Math.random() * 100}%`,
    top: `${Math.random() * 100}%`,
    duration: Math.random() * 3 + 2
  })), []);

  const largeParticles = useMemo(() => Array.from({ length: 10 }, () => ({
    width: Math.random() * 6 + 3,
    height: Math.random() * 6 + 3,
    left: `${Math.random() * 100}%`,
    top: `${Math.random() * 100}%`,
    duration: Math.random() * 4 + 3
  })), []);

  if (!mounted) return null;

  return (
    <div className="absolute inset-0 overflow-hidden select-none" style={{ pointerEvents: 'none' }}>
      {/* Background particles */}
      {smallParticles.map((particle, i) => (
        <motion.div
          key={`particle-${i}`}
          className="absolute bg-gradient-to-b from-[#8B5CF6] to-[#6D28D9] rounded-full"
          style={{
            width: particle.width,
            height: particle.height,
            left: particle.left,
            top: particle.top,
            filter: 'blur(1.5px)',
            willChange: 'transform',
            pointerEvents: 'none',
            userSelect: 'none',
          }}
          initial={{ scale: 0, opacity: 0, y: 100 }}
          animate={{
            scale: [1, 2, 1],
            opacity: [0, 0.8, 0],
            y: [-50, -200],
            x: i % 2 === 0 ? [0, 40, 0] : [0, -40, 0],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.2,
          }}
        />
      ))}
      {/* Larger background particles */}
      {largeParticles.map((particle, i) => (
        <motion.div
          key={`large-particle-${i}`}
          className="absolute bg-gradient-to-b from-[#C4B5FD] to-[#8B5CF6] rounded-full opacity-40"
          style={{
            width: particle.width,
            height: particle.height,
            left: particle.left,
            top: particle.top,
            filter: 'blur(2.5px)',
            willChange: 'transform',
            pointerEvents: 'none',
            userSelect: 'none',
          }}
          initial={{ scale: 0, opacity: 0, y: 100 }}
          animate={{
            scale: [1, 2.5, 1],
            opacity: [0, 0.6, 0],
            y: [-70, -250],
            x: i % 2 === 0 ? [0, 70, 0] : [0, -70, 0],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.3,
            repeatType: "reverse"
          }}
        />
      ))}
    </div>
  );
}

export default ParticlesBackground; 