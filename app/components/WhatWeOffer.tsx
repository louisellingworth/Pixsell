import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { CardSpotlight } from './ui/card-spotlight';
import GradientButton from './ui/GradientButton';
import ParticlesBackground from './ui/ParticlesBackground';
import { 
  GlobeAltIcon, 
  ChartBarIcon, 
  LanguageIcon,
  DocumentCheckIcon,
  ChatBubbleBottomCenterTextIcon,
  PresentationChartLineIcon
} from '@heroicons/react/24/outline';
import Link from 'next/link';

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

const services = [
  {
    title: "Co-Publishing",
    description: "Connect with trusted Chinese publishers and secure revenue-optimized deals.",
    Icon: GlobeAltIcon,
    href: "/services/co-publishing"
  },
  {
    title: "Marketing",
    description: "Reach Chinese gamers through KOLs, social media, and targeted campaigns.",
    Icon: ChartBarIcon,
    href: "/services/marketing"
  },
  {
    title: "Localization",
    description: "Adapt your game for Chinese players while maintaining its core appeal.",
    Icon: LanguageIcon,
    href: "/services/localization"
  },
  {
    title: "Reporting",
    description: "Regular check-ins and detailed reports on campaign performance and market insights.",
    Icon: PresentationChartLineIcon,
    href: "/services/reporting"
  }
];

const gradientAnimation = `
  @keyframes gradient {
    0% { background-position: 0% center; }
    100% { background-position: 200% center; }
  }
`;

const gradientStyle = "bg-gradient-to-r from-[#6366F1] via-[#8B5CF6] to-[#6366F1] bg-clip-text bg-[length:200%_100%] animate-gradient";

export default function WhatWeOffer() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="w-full py-20 lg:py-32 relative overflow-hidden bg-gradient-to-b from-[#0F0F1A] to-[#1A1A2E]"
    >
      <style jsx>{gradientAnimation}</style>
      {isMounted && <ParticlesBackground />}
      
      {/* Background glow effect */}
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
        {/* Section Header */}
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
              <span className={gradientStyle}>
                What We Offer
              </span>
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg md:text-xl text-gray-300 leading-relaxed"
            >
              Everything you need to successfully launch your game in China
            </motion.p>
          </div>

          {/* Services Grid */}
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto"
          >
            {services.map((service, index) => (
              <CardSpotlight
                key={service.title}
                className="p-8 bg-gradient-to-br from-[#1A1A2E]/90 to-[#2A2A3F]/90 backdrop-blur-sm border border-[#6366F1]/10 rounded-2xl"
              >
                <Link href={service.href} className="block">
                  <div className="w-16 h-16 mx-auto mb-6 rounded-xl bg-gradient-to-br from-[#6366F1]/10 to-[#8B5CF6]/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <service.Icon className="w-8 h-8 text-[#8B5CF6]" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-4 text-center">{service.title}</h3>
                  <p className="text-gray-300 text-sm leading-relaxed text-center">{service.description}</p>
                </Link>
              </CardSpotlight>
            ))}
          </motion.div>

          {/* Book a Consultation Button */}
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
                onClick={() => window.location.href = '/contact'}
                className="group inline-flex items-center px-8 py-4 bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] rounded-lg text-white font-semibold text-lg transition-all duration-300 hover:opacity-90 cursor-pointer"
              >
                <span className="flex items-center">
                  🛠 Book a Consultation
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
      </div>
    </motion.section>
  );
} 
