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

export default function ParticlesBackground() {
  const [mounted, setMounted] = useState(false);

  const smallParticles = useMemo(() => {
    return Array.from({ length: 80 }, () => ({
      width: `${Math.random() * 3 + 2}px`,
      height: `${Math.random() * 3 + 2}px`,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      duration: Math.random() * 3 + 4
    }));
  }, []);

  const largeParticles = useMemo(() => {
    return Array.from({ length: 40 }, () => ({
      width: `${Math.random() * 4 + 3}px`,
      height: `${Math.random() * 4 + 3}px`,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      duration: Math.random() * 4 + 6
    }));
  }, []);

  useEffect(() => {
    setMounted(true);
  }, []);

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
            filter: 'blur(1px)',
            pointerEvents: 'none',
            userSelect: 'none',
          }}
          initial={{ 
            scale: 0,
            opacity: 0,
            y: 100,
          }}
          animate={{
            scale: [1, 2, 1],
            opacity: [0, 0.8, 0],
            y: [-50, -200],
            x: i % 2 === 0 ? [0, 50, 0] : [0, -50, 0],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.1,
            type: "tween"
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
            filter: 'blur(2px)',
            pointerEvents: 'none',
            userSelect: 'none',
          }}
          initial={{ 
            scale: 0,
            opacity: 0,
            y: 100,
          }}
          animate={{
            scale: [1, 3, 1],
            opacity: [0, 0.6, 0],
            y: [-100, -300],
            x: i % 2 === 0 ? [0, 100, 0] : [0, -100, 0],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.2,
            type: "tween"
          }}
        />
      ))}
    </div>
  );
} 