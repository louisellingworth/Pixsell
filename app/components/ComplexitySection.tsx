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

const gradientStyle = "bg-gradient-to-r from-[#8A7FFB] via-[#B4C6EF] to-[#8A7FFB] bg-[length:200%_100%] animate-gradient";

export default function ComplexitySection() {
  const ref = useRef(null);

  return (
    <section className="w-full py-32 relative overflow-hidden">
      <ParticlesBackground />
      
      {/* Background Effects */}
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
        <motion.div 
          className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-[#B4C6EF]/10 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
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
          {/* Section Header */}
          <div className="space-y-6 max-w-4xl mx-auto mb-24">
            <motion.h2 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="font-inter text-4xl md:text-5xl font-bold"
            >
              <span className={`text-transparent bg-clip-text ${gradientStyle}`}>
                Entering the China market is complex
              </span>
            </motion.h2>
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-4xl md:text-5xl font-bold"
            >
              <ColourfulText text="We make it simple." variant="green" />
            </motion.div>
          </div>

          {/* Service Cards */}
          <motion.div 
            variants={container}
            initial="hidden"
            animate="show"
            className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-20 w-full max-w-[2000px] mx-auto px-4 lg:px-8"
          >
            {/* Co-Publishing Card */}
            <motion.div variants={item} className="w-full">
              <CardSpotlight className="p-8 lg:p-12 h-full bg-[#0A0A0B]/80 backdrop-blur-sm border border-white/5">
                <div className="w-20 h-20 mx-auto mb-8 rounded-xl bg-gradient-to-br from-[#1a1a1a] to-[#2a2a2a] flex items-center justify-center transform hover:scale-105 transition-transform duration-300">
                  <UserGroupIcon className="w-10 h-10 text-[#B4C6EF]" />
                </div>
                <h3 className={`font-inter text-2xl font-semibold text-transparent bg-clip-text ${gradientStyle} mb-6`}>
                  📑 Co-Publishing, Simplified
                </h3>
                <p className="font-inter text-lg text-gray-300 leading-relaxed">
                  We negotiate deals, vet publishers, and secure the best partner—stress-free.
                </p>
              </CardSpotlight>
            </motion.div>

            {/* Localisation Card */}
            <motion.div variants={item} className="w-full">
              <CardSpotlight className="p-8 lg:p-12 h-full bg-[#0A0A0B]/80 backdrop-blur-sm border border-white/5">
                <a href="/services/localisation" className="block cursor-pointer">
                  <div className="w-20 h-20 mx-auto mb-8 rounded-xl bg-gradient-to-br from-[#1a1a1a] to-[#2a2a2a] flex items-center justify-center transform hover:scale-105 transition-transform duration-300">
                    <LanguageIcon className="w-10 h-10 text-[#B4C6EF]" />
                  </div>
                  <h3 className={`font-inter text-2xl font-semibold text-transparent bg-clip-text ${gradientStyle} mb-6`}>
                    🌍 Localisation & Compliance
                  </h3>
                  <p className="font-inter text-lg text-gray-300 leading-relaxed">
                    We connect you with top providers and guide the process to ensure top-tier quality and full approval.
                  </p>
                </a>
              </CardSpotlight>
            </motion.div>

            {/* Marketing Card */}
            <motion.div variants={item} className="w-full">
              <CardSpotlight className="p-8 lg:p-12 h-full bg-[#0A0A0B]/80 backdrop-blur-sm border border-white/5">
                <div className="w-20 h-20 mx-auto mb-8 rounded-xl bg-gradient-to-br from-[#1a1a1a] to-[#2a2a2a] flex items-center justify-center transform hover:scale-105 transition-transform duration-300">
                  <ChartBarIcon className="w-10 h-10 text-[#B4C6EF]" />
                </div>
                <h3 className={`font-inter text-2xl font-semibold text-transparent bg-clip-text ${gradientStyle} mb-6`}>
                  📈 Marketing & Growth
                </h3>
                <p className="font-inter text-lg text-gray-300 leading-relaxed">
                  We manage marketing, influencers, and player engagement with the co-publisher.
                </p>
              </CardSpotlight>
            </motion.div>
          </motion.div>

          {/* Stats Section */}
          <motion.div
            ref={ref}
            initial="hidden"
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mt-32 py-12 max-w-5xl mx-auto"
          >
            <div className="space-y-12">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="flex items-center justify-center space-x-4"
              >
                <span className="text-5xl">💰</span>
                <h2 className={`font-inter text-4xl md:text-5xl font-bold text-transparent bg-clip-text ${gradientStyle}`}>
                  Unlock China's $45B Gaming Market
                </h2>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="space-y-12"
              >
                <p className="font-inter text-xl md:text-2xl text-gray-300">
                  Tap into the world's largest gaming market with 700M+ players
                </p>
                
                {/* Stats Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <motion.div 
                    whileHover={{ scale: 1.05 }}
                    className="p-6 rounded-xl bg-gradient-to-br from-[#1a1a1a] to-[#2a2a2a] border border-white/10 shadow-lg"
                  >
                    <div className="text-3xl md:text-4xl font-bold text-[#B4C6EF] mb-2">700M+</div>
                    <div className="text-sm text-gray-400">Active Gamers</div>
                  </motion.div>
                  <motion.div 
                    whileHover={{ scale: 1.05 }}
                    className="p-6 rounded-xl bg-gradient-to-br from-[#1a1a1a] to-[#2a2a2a] border border-white/10 shadow-lg"
                  >
                    <div className="text-3xl md:text-4xl font-bold text-[#B4C6EF] mb-2">$45B</div>
                    <div className="text-sm text-gray-400">Market Size</div>
                  </motion.div>
                  <motion.div 
                    whileHover={{ scale: 1.05 }}
                    className="p-6 rounded-xl bg-gradient-to-br from-[#1a1a1a] to-[#2a2a2a] border border-white/10 shadow-lg"
                  >
                    <div className="text-3xl md:text-4xl font-bold text-[#B4C6EF] mb-2">15%</div>
                    <div className="text-sm text-gray-400">Annual Growth</div>
                  </motion.div>
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