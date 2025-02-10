'use client'

import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import ColourfulText from './ui/ColourfulText';
import { CardSpotlight } from './ui/card-spotlight';
import ParticlesBackground from './ui/ParticlesBackground';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
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
  @keyframes gradient {
    0% { background-position: 0% center; }
    100% { background-position: 200% center; }
  }
`;

const gradientStyle = "bg-gradient-to-r from-[#6366F1] via-[#8B5CF6] to-[#6366F1] bg-clip-text bg-[length:200%_100%] animate-gradient";

export default function ComplexitySection() {
  const router = useRouter();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const ref = useRef(null);

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="w-full py-20 lg:py-32 relative overflow-hidden bg-gradient-to-b from-[#0F0F1A] to-[#1A1A2E]"
    >
      <style jsx>{gradientAnimation}</style>
      {isMounted && <ParticlesBackground />}
      
      {/* Background Effects - Enhanced for better visual depth */}
      <div className="absolute inset-0 overflow-hidden">
        {isMounted && (
          <>
            <motion.div 
              className="absolute top-1/4 right-1/4 w-[50vw] h-[50vw] bg-[#6366F1]/5 rounded-full blur-[120px]"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.05, 0.15, 0.05],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            <motion.div 
              className="absolute bottom-1/4 left-1/4 w-[50vw] h-[50vw] bg-[#8B5CF6]/5 rounded-full blur-[120px]"
              animate={{
                scale: [1.2, 1, 1.2],
                opacity: [0.05, 0.15, 0.05],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </>
        )}
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1200px]">
        {/* Section 1: What We Do - Enhanced Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center w-full mb-24 lg:mb-40"
        >
          <div className="space-y-6 max-w-3xl mx-auto mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight"
            >
              <span className={`${gradientStyle} inline-block mb-2`}>
                Your China Market Entry
              </span>
              <br />
              <span className="text-white">Specialists</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg md:text-xl text-gray-300 leading-relaxed"
            >
              China has 700M+ gamers, but launching successfully requires a trusted co-publisher to handle compliance, localisation, and marketing. We connect you with the right partner and oversee the process.
            </motion.p>
          </div>

          <motion.div 
            variants={container}
            initial="hidden"
            animate="show"
            className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto"
          >
            {/* Service Cards with enhanced styling */}
            <motion.div variants={item} className="group relative p-8 rounded-2xl bg-gradient-to-br from-[#1A1A2E]/90 to-[#2A2A3F]/90 backdrop-blur-sm border border-[#6366F1]/10 hover:border-[#6366F1]/20 transition-all duration-300">
              <div className="w-16 h-16 mx-auto mb-6 rounded-xl bg-gradient-to-br from-[#6366F1]/10 to-[#8B5CF6]/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <UserGroupIcon className="w-8 h-8 text-[#8B5CF6]" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Find & Negotiate the Best Co-Publishing Deal</h3>
              <p className="text-gray-300 text-sm leading-relaxed">We leverage our relationships to secure a trusted partner who aligns with your game's vision.</p>
            </motion.div>

            <motion.div variants={item} className="group relative p-8 rounded-2xl bg-gradient-to-br from-[#1A1A2E]/90 to-[#2A2A3F]/90 backdrop-blur-sm border border-[#6366F1]/10 hover:border-[#6366F1]/20 transition-all duration-300">
              <div className="w-16 h-16 mx-auto mb-6 rounded-xl bg-gradient-to-br from-[#6366F1]/10 to-[#8B5CF6]/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <LanguageIcon className="w-8 h-8 text-[#8B5CF6]" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Publisher-Funded Localisation</h3>
              <p className="text-gray-300 text-sm leading-relaxed">Your co-publisher will pay for localisation, recouping costs before splitting revenue.</p>
            </motion.div>

            <motion.div variants={item} className="group relative p-8 rounded-2xl bg-gradient-to-br from-[#1A1A2E]/90 to-[#2A2A3F]/90 backdrop-blur-sm border border-[#6366F1]/10 hover:border-[#6366F1]/20 transition-all duration-300">
              <div className="w-16 h-16 mx-auto mb-6 rounded-xl bg-gradient-to-br from-[#6366F1]/10 to-[#8B5CF6]/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <ChartBarIcon className="w-8 h-8 text-[#8B5CF6]" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Marketing & Performance Tracking</h3>
              <p className="text-gray-300 text-sm leading-relaxed">We work with your publisher to execute campaigns and provide you with regular reports.</p>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-12"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <button
                onClick={() => router.push('/services/co-publishing')}
                className="group inline-flex items-center px-8 py-4 bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] rounded-lg text-white font-semibold text-lg transition-all duration-300 hover:opacity-90 cursor-pointer"
              >
                <span className="flex items-center">
                  🛠 See How Co-Publishing Works
                  <svg 
                    className="w-5 h-5 ml-2 transform transition-transform duration-300 group-hover:translate-x-1" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24" 
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M9 5l7 7-7 7" 
                    />
                  </svg>
                </span>
              </button>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Section 2: Why You Need a Co-Publisher - Enhanced comparison cards */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-24 lg:mb-40"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-16">
            Why You Can't (and Shouldn't) Go It Alone
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <CardSpotlight className="p-8 bg-gradient-to-br from-[#1A1A2E]/90 to-[#2A2A3F]/90 backdrop-blur-sm border border-[#6366F1]/10 rounded-2xl">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 rounded-full bg-red-500/10 flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                </div>
                <h3 className="text-2xl font-semibold text-white">Without a Co-Publisher</h3>
              </div>
              <ul className="text-gray-300 space-y-4">
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">•</span>
                  <span>You can sell on Steam Global, but visibility is limited</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">•</span>
                  <span>No access to local platforms like WeGame & TapTap</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">•</span>
                  <span>You cover all costs yourself (marketing, localisation, compliance)</span>
                </li>
              </ul>
            </CardSpotlight>

            <CardSpotlight className="p-8 bg-gradient-to-br from-[#1A1A2E]/90 to-[#2A2A3F]/90 backdrop-blur-sm border border-[#6366F1]/10 rounded-2xl">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 rounded-full bg-green-500/10 flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                </div>
                <h3 className="text-2xl font-semibold text-white">With a Co-Publisher</h3>
              </div>
              <ul className="text-gray-300 space-y-4">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">•</span>
                  <span>They handle localisation & regulatory approvals (funding upfront)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">•</span>
                  <span>They provide marketing budgets & distribution power</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">•</span>
                  <span>They recoup costs first, then revenue is split profitably</span>
                </li>
              </ul>
            </CardSpotlight>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center mt-12"
          >
            <a href="/contact" className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] rounded-lg text-white font-semibold text-lg hover:opacity-90 transition-all duration-300 hover:scale-105">
              📞 Let's Discuss Your Best Option
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
            </a>
          </motion.div>
        </motion.div>

        {/* Section 3: Revenue Model - Enhanced with timeline visualization */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-24 lg:mb-40"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-16">
            How Revenue is Shared & Costs Are Covered
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-16">
            <motion.div 
              whileHover={{ scale: 1.03 }}
              className="relative p-8 rounded-2xl bg-gradient-to-br from-[#1A1A2E]/90 to-[#2A2A3F]/90 backdrop-blur-sm border border-[#6366F1]/10 group hover:border-[#6366F1]/20 transition-all duration-300"
            >
              <div className="absolute -top-4 -left-4 w-8 h-8 rounded-full bg-[#6366F1] flex items-center justify-center text-white font-bold">1</div>
              <h3 className="text-xl font-semibold text-white mb-4">Publisher Funds Everything</h3>
              <p className="text-gray-300 text-sm leading-relaxed">You don't pay upfront – they invest in your game</p>
            </motion.div>

            <motion.div 
              whileHover={{ scale: 1.03 }}
              className="relative p-8 rounded-2xl bg-gradient-to-br from-[#1A1A2E]/90 to-[#2A2A3F]/90 backdrop-blur-sm border border-[#6366F1]/10 group hover:border-[#6366F1]/20 transition-all duration-300"
            >
              <div className="absolute -top-4 -left-4 w-8 h-8 rounded-full bg-[#6366F1] flex items-center justify-center text-white font-bold">2</div>
              <h3 className="text-xl font-semibold text-white mb-4">Cost Recouping</h3>
              <p className="text-gray-300 text-sm leading-relaxed">Revenue first goes toward covering their initial investment</p>
            </motion.div>

            <motion.div 
              whileHover={{ scale: 1.03 }}
              className="relative p-8 rounded-2xl bg-gradient-to-br from-[#1A1A2E]/90 to-[#2A2A3F]/90 backdrop-blur-sm border border-[#6366F1]/10 group hover:border-[#6366F1]/20 transition-all duration-300"
            >
              <div className="absolute -top-4 -left-4 w-8 h-8 rounded-full bg-[#6366F1] flex items-center justify-center text-white font-bold">3</div>
              <h3 className="text-xl font-semibold text-white mb-4">Profit Sharing</h3>
              <p className="text-gray-300 text-sm leading-relaxed">Once recouped, you start receiving your share of the revenue</p>
            </motion.div>
          </div>

          <div className="max-w-3xl mx-auto">
            <CardSpotlight className="p-8 bg-gradient-to-br from-[#1A1A2E]/90 to-[#2A2A3F]/90 backdrop-blur-sm border border-[#6366F1]/10 rounded-2xl">
              <h3 className="text-2xl font-semibold text-white mb-6 text-center">Standard Revenue Share Models</h3>
              <div className="space-y-6">
                <div className="p-4 rounded-lg bg-[#6366F1]/5">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-white font-semibold">High-Potential Games</span>
                    <span className="text-[#8B5CF6] font-bold">70/30</span>
                  </div>
                  <p className="text-sm text-gray-300">Developer 70%, Publisher 30% – When the game is high-potential and publisher risk is lower</p>
                </div>
                <div className="p-4 rounded-lg bg-[#6366F1]/5">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-white font-semibold">Standard Split</span>
                    <span className="text-[#8B5CF6] font-bold">50/50</span>
                  </div>
                  <p className="text-sm text-gray-300">Equal split when the publisher is covering all upfront localisation and marketing costs</p>
                </div>
              </div>
            </CardSpotlight>
          </div>
        </motion.div>

        {/* Section 4: Why Choose Pixsell - Enhanced with better visual hierarchy */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-5xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-16">
            Why Choose Pixsell Games?
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="group p-8 rounded-2xl bg-gradient-to-br from-[#1A1A2E]/90 to-[#2A2A3F]/90 backdrop-blur-sm border border-[#6366F1]/10 hover:border-[#6366F1]/20 transition-all duration-300"
            >
              <div className="w-16 h-16 mx-auto mb-6 rounded-xl bg-gradient-to-br from-[#6366F1]/10 to-[#8B5CF6]/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-[#8B5CF6]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Exclusive Publisher Network</h3>
              <p className="text-gray-300 text-sm leading-relaxed">We only work with proven, trusted co-publishers</p>
            </motion.div>

            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="group p-8 rounded-2xl bg-gradient-to-br from-[#1A1A2E]/90 to-[#2A2A3F]/90 backdrop-blur-sm border border-[#6366F1]/10 hover:border-[#6366F1]/20 transition-all duration-300"
            >
              <div className="w-16 h-16 mx-auto mb-6 rounded-xl bg-gradient-to-br from-[#6366F1]/10 to-[#8B5CF6]/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-[#8B5CF6]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Best Deals for You</h3>
              <p className="text-gray-300 text-sm leading-relaxed">We negotiate the most favourable revenue share & terms</p>
            </motion.div>

            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="group p-8 rounded-2xl bg-gradient-to-br from-[#1A1A2E]/90 to-[#2A2A3F]/90 backdrop-blur-sm border border-[#6366F1]/10 hover:border-[#6366F1]/20 transition-all duration-300"
            >
              <div className="w-16 h-16 mx-auto mb-6 rounded-xl bg-gradient-to-br from-[#6366F1]/10 to-[#8B5CF6]/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-[#8B5CF6]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Full Transparency</h3>
              <p className="text-gray-300 text-sm leading-relaxed">We provide regular updates and performance reports</p>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-12"
          >
            <a href="/contact" className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] rounded-lg text-white font-semibold text-lg hover:opacity-90 transition-all duration-300 hover:scale-105">
              📩 Let's Get Started
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
            </a>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
} 