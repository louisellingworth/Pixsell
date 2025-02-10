'use client'

import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import ColourfulText from './ui/ColourfulText';
import { CardSpotlight } from './ui/card-spotlight';
import ParticlesBackground from './ui/ParticlesBackground';
import { 
  UserGroupIcon,
  LanguageIcon,
  ChartBarIcon,
  ArrowRightIcon
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
  @keyframes gradient {
    0% { background-position: 0% center; }
    100% { background-position: 200% center; }
  }
`;

export default function ComplexitySection() {
  const ref = useRef(null);

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="w-full py-32 md:py-48 relative overflow-hidden bg-gradient-to-b from-black to-[#0A0A0B]"
    >
      <style jsx>{gradientAnimation}</style>
      <ParticlesBackground />
      
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div 
          className="absolute top-1/4 right-1/4 w-[50vw] h-[50vw] bg-[#8A7FFB]/5 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute bottom-1/4 left-1/4 w-[50vw] h-[50vw] bg-[#B4C6EF]/5 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center w-full"
        >
          {/* Enhanced Section Header */}
          <div className="space-y-8 max-w-4xl mx-auto mb-24">
            <motion.h2 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative font-inter text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight"
            >
              <span 
                className="inline-block text-transparent bg-clip-text"
                style={{
                  backgroundImage: 'linear-gradient(to right, #8A7FFB, #B4C6EF, #8A7FFB)',
                  backgroundSize: '200% auto',
                  animation: 'gradient 3s linear infinite'
                }}
              >
                Entering the China market is complex
              </span>
            </motion.h2>
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="relative text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white"
            >
              <ColourfulText text="We make it simple." variant="green" />
            </motion.div>
          </div>

          {/* Enhanced Introductory Section */}
          <div className="text-center w-full mb-20">
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="font-inter text-xl md:text-2xl text-gray-300 leading-relaxed max-w-3xl mx-auto mb-12"
            >
              Navigating the complexities of the China market can be daunting, but we make it simple. Our comprehensive solutions are designed to streamline your entry into this lucrative market, ensuring a smooth and successful transition.
            </motion.p>
            <motion.ul 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-3xl mx-auto text-left"
            >
              <li className="flex items-center space-x-3 text-gray-300">
                <ArrowRightIcon className="w-5 h-5 text-[#B4C6EF]" />
                <span>Expert guidance on market entry strategies</span>
              </li>
              <li className="flex items-center space-x-3 text-gray-300">
                <ArrowRightIcon className="w-5 h-5 text-[#B4C6EF]" />
                <span>Seamless localization and compliance support</span>
              </li>
              <li className="flex items-center space-x-3 text-gray-300">
                <ArrowRightIcon className="w-5 h-5 text-[#B4C6EF]" />
                <span>Effective marketing and growth strategies</span>
              </li>
              <li className="flex items-center space-x-3 text-gray-300">
                <ArrowRightIcon className="w-5 h-5 text-[#B4C6EF]" />
                <span>Strong partnerships with local publishers</span>
              </li>
            </motion.ul>
          </div>

          {/* Enhanced Service Cards */}
          <motion.div 
            variants={container}
            initial="hidden"
            animate="show"
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12 mt-20 w-full max-w-7xl mx-auto"
          >
            {/* Enhanced Co-Publishing Card */}
            <motion.div variants={item} className="w-full">
              <CardSpotlight className="p-8 lg:p-10 h-full bg-[#0A0A0B]/90 backdrop-blur-xl border border-white/10 hover:border-white/20 transition-colors duration-300">
                <div className="w-16 h-16 md:w-20 md:h-20 mx-auto mb-8 rounded-2xl bg-gradient-to-br from-[#1a1a1a] to-[#2a2a2a] flex items-center justify-center transform hover:scale-105 transition-all duration-300 shadow-lg">
                  <UserGroupIcon className="w-8 h-8 md:w-10 md:h-10 text-[#B4C6EF]" />
                </div>
                <h3 className="font-inter text-2xl md:text-3xl font-semibold mb-6 text-white">
                  <span 
                    className="inline-block text-transparent bg-clip-text"
                    style={{
                      backgroundImage: 'linear-gradient(to right, #8A7FFB, #B4C6EF, #8A7FFB)',
                      backgroundSize: '200% auto',
                      animation: 'gradient 3s linear infinite'
                    }}
                  >
                    📑 Co-Publishing, Simplified
                  </span>
                </h3>
                <p className="font-inter text-lg md:text-xl text-gray-300 leading-relaxed">
                  We negotiate deals, vet publishers, and secure the best partner—stress-free.
                </p>
              </CardSpotlight>
            </motion.div>

            {/* Enhanced Localisation Card */}
            <motion.div variants={item} className="w-full">
              <CardSpotlight className="p-8 lg:p-10 h-full bg-[#0A0A0B]/90 backdrop-blur-xl border border-white/10 hover:border-white/20 transition-colors duration-300">
                <a href="/services/localisation" className="block cursor-pointer">
                  <div className="w-16 h-16 md:w-20 md:h-20 mx-auto mb-8 rounded-2xl bg-gradient-to-br from-[#1a1a1a] to-[#2a2a2a] flex items-center justify-center transform hover:scale-105 transition-all duration-300 shadow-lg">
                    <LanguageIcon className="w-8 h-8 md:w-10 md:h-10 text-[#B4C6EF]" />
                  </div>
                  <h3 className="font-inter text-2xl md:text-3xl font-semibold mb-6 text-white">
                    <span 
                      className="inline-block text-transparent bg-clip-text"
                      style={{
                        backgroundImage: 'linear-gradient(to right, #8A7FFB, #B4C6EF, #8A7FFB)',
                        backgroundSize: '200% auto',
                        animation: 'gradient 3s linear infinite'
                      }}
                    >
                      🌍 Localisation & Compliance
                    </span>
                  </h3>
                  <p className="font-inter text-lg md:text-xl text-gray-300 leading-relaxed">
                    We connect you with top providers and guide the process to ensure top-tier quality and full approval.
                  </p>
                </a>
              </CardSpotlight>
            </motion.div>

            {/* Enhanced Marketing Card */}
            <motion.div variants={item} className="w-full">
              <CardSpotlight className="p-8 lg:p-10 h-full bg-[#0A0A0B]/90 backdrop-blur-xl border border-white/10 hover:border-white/20 transition-colors duration-300">
                <div className="w-16 h-16 md:w-20 md:h-20 mx-auto mb-8 rounded-2xl bg-gradient-to-br from-[#1a1a1a] to-[#2a2a2a] flex items-center justify-center transform hover:scale-105 transition-all duration-300 shadow-lg">
                  <ChartBarIcon className="w-8 h-8 md:w-10 md:h-10 text-[#B4C6EF]" />
                </div>
                <h3 className="font-inter text-2xl md:text-3xl font-semibold mb-6 text-white">
                  <span 
                    className="inline-block text-transparent bg-clip-text"
                    style={{
                      backgroundImage: 'linear-gradient(to right, #8A7FFB, #B4C6EF, #8A7FFB)',
                      backgroundSize: '200% auto',
                      animation: 'gradient 3s linear infinite'
                    }}
                  >
                    📈 Marketing & Growth
                  </span>
                </h3>
                <p className="font-inter text-lg md:text-xl text-gray-300 leading-relaxed">
                  We manage marketing, influencers, and player engagement with the co-publisher.
                </p>
              </CardSpotlight>
            </motion.div>
          </motion.div>

          {/* Enhanced Stats Section */}
          <motion.div
            ref={ref}
            initial="hidden"
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mt-32 py-16 max-w-6xl mx-auto"
          >
            <div className="space-y-16">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="flex items-center justify-center space-x-4"
              >
                <span className="text-5xl md:text-6xl">💰</span>
                <h2 className="font-inter text-4xl md:text-5xl lg:text-6xl font-bold text-white">
                  <span 
                    className="inline-block text-transparent bg-clip-text"
                    style={{
                      backgroundImage: 'linear-gradient(to right, #8A7FFB, #B4C6EF, #8A7FFB)',
                      backgroundSize: '200% auto',
                      animation: 'gradient 3s linear infinite'
                    }}
                  >
                    Unlock China's $45B Gaming Market
                  </span>
                </h2>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="space-y-16"
              >
                <p className="font-inter text-2xl md:text-3xl text-gray-300">
                  Tap into the world's largest gaming market with 700M+ players
                </p>
                
                {/* Enhanced Stats Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
                  <motion.div 
                    whileHover={{ scale: 1.05 }}
                    className="p-8 md:p-10 rounded-2xl bg-gradient-to-br from-[#1a1a1a] to-[#2a2a2a] border border-white/10 shadow-xl hover:shadow-2xl transition-all duration-300"
                  >
                    <div className="text-4xl md:text-5xl font-bold text-[#B4C6EF] mb-4">700M+</div>
                    <div className="text-lg md:text-xl text-gray-300">Active Gamers</div>
                  </motion.div>
                  <motion.div 
                    whileHover={{ scale: 1.05 }}
                    className="p-8 md:p-10 rounded-2xl bg-gradient-to-br from-[#1a1a1a] to-[#2a2a2a] border border-white/10 shadow-xl hover:shadow-2xl transition-all duration-300"
                  >
                    <div className="text-4xl md:text-5xl font-bold text-[#B4C6EF] mb-4">$45B</div>
                    <div className="text-lg md:text-xl text-gray-300">Market Size</div>
                  </motion.div>
                  <motion.div 
                    whileHover={{ scale: 1.05 }}
                    className="p-8 md:p-10 rounded-2xl bg-gradient-to-br from-[#1a1a1a] to-[#2a2a2a] border border-white/10 shadow-xl hover:shadow-2xl transition-all duration-300"
                  >
                    <div className="text-4xl md:text-5xl font-bold text-[#B4C6EF] mb-4">15%</div>
                    <div className="text-lg md:text-xl text-gray-300">Annual Growth</div>
                  </motion.div>
                </div>

                <p className="font-inter text-xl md:text-2xl text-white mt-16 max-w-3xl mx-auto font-medium">
                  We handle the complexities while you focus on your game
                </p>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
} 