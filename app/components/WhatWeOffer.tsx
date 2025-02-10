import React from 'react';
import { motion } from 'framer-motion';
import { CardSpotlight } from './ui/card-spotlight';
import GradientButton from './ui/GradientButton';
import { 
  GlobeAltIcon, 
  ChartBarIcon, 
  LanguageIcon,
  DocumentCheckIcon,
  ChatBubbleBottomCenterTextIcon,
  PresentationChartLineIcon
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
    title: "Localisation",
    description: "Adapt your game for Chinese players while maintaining its core appeal.",
    Icon: LanguageIcon,
    href: "/services/localisation"
  },
  {
    title: "Compliance",
    description: "Navigate ISBN applications and regulatory requirements with confidence.",
    Icon: DocumentCheckIcon,
    href: "/services/compliance"
  },
  {
    title: "Community",
    description: "Build and engage your Chinese player base on local platforms.",
    Icon: ChatBubbleBottomCenterTextIcon,
    href: "/services/community"
  },
  {
    title: "Reporting",
    description: "Regular check-ins and detailed reports on campaign performance and market insights.",
    Icon: PresentationChartLineIcon,
    href: "/services/reporting"
  }
];

export default function WhatWeOffer() {
  return (
    <section className="relative py-16 sm:py-20 md:py-24 overflow-hidden bg-black">
      {/* Background glow effect */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div 
          className="absolute top-1/4 right-1/4 w-96 h-96 bg-[#B4C6EF]/10 rounded-full blur-3xl"
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

      <div className="relative container mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 sm:mb-6 text-[#B4C6EF]"
          >
            What We Offer
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl sm:text-2xl text-gray-400 px-4"
          >
            Everything you need to successfully launch your game in China
          </motion.p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div 
              key={index} 
              variants={item}
              className="group relative"
            >
              <a 
                href={service.href}
                className="block h-full group cursor-pointer"
              >
                <div className="h-full p-8 rounded-[24px] bg-[#0A0A0B] border border-white/10 transition-all duration-300 text-center group-hover:border-[#B4C6EF]/50 group-hover:shadow-lg">
                  <div className="w-12 h-12 mx-auto mb-6 rounded-xl bg-[#0A0A0B] flex items-center justify-center">
                    <service.Icon className="w-6 h-6 text-[#B4C6EF] group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <h3 className="text-2xl font-semibold mb-4 text-white group-hover:text-[#B4C6EF] transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-base text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                    {service.description}
                  </p>
                  <div className="mt-6 text-[#B4C6EF] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Learn more →
                  </div>
                </div>
              </a>
            </motion.div>
          ))}
        </div>

        {/* View All Services Button */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-12 text-center"
        >
          <a 
            href="/services"
            className="inline-flex items-center px-8 py-3 rounded-full bg-gradient-to-r from-[#B4C6EF] to-[#8A9FD9] text-black font-semibold hover:opacity-90 transition-opacity"
          >
            View All Services
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
} 
