'use client'

import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import ColourfulText from './ui/ColourfulText';
import { CardSpotlight } from './ui/card-spotlight';
import ParticlesBackground from './ui/ParticlesBackground';
import { 
  UserGroupIcon,
  LanguageIcon,
  ChartBarIcon
} from '@heroicons/react/24/outline';

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { 
    opacity: 1, 
    y: 0,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 30
    }
  }
};

const gradientAnimation = `
  @keyframes gradientShift {
    0% { background-color: #ffffff; }
    50% { background-color: #B4C6EF10; }
    100% { background-color: #ffffff; }
  }
`;

const gradientStyle = "bg-gradient-to-r from-[#8A7FFB] to-[#B4C6EF] animate-[gradientShift_10s_ease-in-out_infinite]";

export default function ComplexitySection() {
  const ref = useRef(null);

  useEffect(() => {
    if (typeof window !== 'undefined' && !document.getElementById('gradient-animation')) {
      const style = document.createElement('style');
      style.id = 'gradient-animation';
      style.innerHTML = gradientAnimation;
      document.head.appendChild(style);
    }
  }, []);

  return (
    <section className="w-full py-24 relative overflow-hidden">
      <ParticlesBackground />
      {/* Background glow effect */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div 
          className="absolute top-1/4 right-1/4 w-96 h-96 bg-[#8A7FFB]/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center w-full"
        >
          <div className="space-y-4 max-w-4xl mx-auto">
            <motion.h2 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className={`font-inter text-3xl md:text-4xl font-semibold text-transparent bg-clip-text ${gradientStyle}`}
            >
              Entering the China market is complex
            </motion.h2>
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className={`font-inter text-3xl md:text-4xl font-semibold text-transparent bg-clip-text ${gradientStyle}`}
            >
              <ColourfulText text="We make it simple." variant="green" />
            </motion.div>
          </div>

          <motion.div 
            variants={container}
            initial="hidden"
            animate="show"
            className="grid grid-cols-1 lg:grid-cols-3 gap-12 mt-20 w-full max-w-[2000px] mx-auto px-8"
          >
            <motion.div variants={item} className="w-full">
              <CardSpotlight className="p-12">
                <div className="w-20 h-20 mx-auto mb-8 rounded-xl bg-[#0A0A0B] flex items-center justify-center">
                  <UserGroupIcon className="w-10 h-10 text-[#B4C6EF]" />
                </div>
                <div className={`font-inter text-2xl font-semibold text-transparent bg-clip-text ${gradientStyle} mb-6`}>📑 Co-Publishing, Simplified</div>
                <p className="font-inter text-xl text-gray-300">We negotiate deals, vet publishers, and secure the best partner—stress-free.</p>
              </CardSpotlight>
            </motion.div>

            <motion.div variants={item} className="w-full">
              <CardSpotlight className="p-12">
                <a href="/services/localisation" className="block cursor-pointer">
                  <div className="w-20 h-20 mx-auto mb-8 rounded-xl bg-[#0A0A0B] flex items-center justify-center">
                    <LanguageIcon className="w-10 h-10 text-[#B4C6EF]" />
                  </div>
                  <div className={`font-inter text-2xl font-semibold text-transparent bg-clip-text ${gradientStyle} mb-6`}>🌍 Localisation & Compliance</div>
                  <p className="font-inter text-xl text-gray-300">We connect you with top providers and guide the process to ensure top-tier quality and full approval.</p>
                </a>
              </CardSpotlight>
            </motion.div>

            <motion.div variants={item} className="w-full">
              <CardSpotlight className="p-12">
                <div className="w-20 h-20 mx-auto mb-8 rounded-xl bg-[#0A0A0B] flex items-center justify-center">
                  <ChartBarIcon className="w-10 h-10 text-[#B4C6EF]" />
                </div>
                <div className={`font-inter text-2xl font-semibold text-transparent bg-clip-text ${gradientStyle} mb-6`}>📈 Marketing & Growth</div>
                <p className="font-inter text-xl text-gray-300">We manage marketing, influencers, and player engagement with the co-publisher.</p>
              </CardSpotlight>
            </motion.div>
          </motion.div>

          <motion.div
            ref={ref}
            initial="hidden"
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mt-24 py-12 max-w-4xl mx-auto"
          >
            <div className="space-y-6">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="flex items-center justify-center space-x-4"
              >
                <span className="text-4xl">💰</span>
                <h2 className={`font-inter text-4xl md:text-5xl font-bold text-transparent bg-clip-text ${gradientStyle}`}>
                  Unlock China's $45B Gaming Market
                </h2>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="space-y-6"
              >
                <p className="font-inter text-xl md:text-2xl text-gray-300">
                  Tap into the world's largest gaming market with 700M+ players
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                  <div className="p-4 rounded-xl bg-[#0A0A0B]/50 border border-white/10">
                    <div className="text-2xl md:text-3xl font-bold text-[#B4C6EF] mb-2">700M+</div>
                    <div className="text-sm text-gray-400">Active Gamers</div>
                  </div>
                  <div className="p-4 rounded-xl bg-[#0A0A0B]/50 border border-white/10">
                    <div className="text-2xl md:text-3xl font-bold text-[#B4C6EF] mb-2">$45B</div>
                    <div className="text-sm text-gray-400">Market Size</div>
                  </div>
                  <div className="p-4 rounded-xl bg-[#0A0A0B]/50 border border-white/10">
                    <div className="text-2xl md:text-3xl font-bold text-[#B4C6EF] mb-2">15%</div>
                    <div className="text-sm text-gray-400">Annual Growth</div>
                  </div>
                </div>
                <p className="font-inter text-xl text-white mt-12 max-w-2xl mx-auto">
                  We handle the complexities while you focus on your game
                </p>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
} 