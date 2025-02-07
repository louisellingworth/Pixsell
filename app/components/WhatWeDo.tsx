import React from 'react';
import { motion } from 'framer-motion';
import { CardSpotlight } from './ui/card-spotlight';
import GradientButton from './ui/GradientButton';
import { 
  GlobeAltIcon, 
  ChartBarIcon, 
  LanguageIcon,
  DocumentCheckIcon,
  ChatBubbleBottomCenterTextIcon
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
    title: "Co-Publishing Deal Facilitation",
    description: "We connect Western developers with trusted Chinese publishers and negotiate deals that maximise revenue while protecting your interests. Get favourable contract terms, reliable partners who align with your goals, and the best possible revenue share.",
    Icon: GlobeAltIcon
  },
  {
    title: "Marketing & Campaign Management",
    description: "We develop comprehensive marketing strategies including influencer partnerships with Chinese KOLs on Bilibili, Douyin, and Weibo. Our services cover social media management, performance marketing, and paid advertising campaigns targeting Chinese gamers.",
    Icon: ChartBarIcon
  },
  {
    title: "Localisation & Cultural Adaptation",
    description: "Beyond translation, we fully culturally localize your game to resonate with Chinese players. This includes adapting text, UI, voiceovers, art style, and themes to match Chinese preferences while ensuring regulatory compliance.",
    Icon: LanguageIcon
  },
  {
    title: "Regulatory Guidance & ISBN",
    description: "Navigate China's strict regulatory environment with our guidance through ISBN application, government approvals, content restrictions, and data privacy compliance requirements.",
    Icon: DocumentCheckIcon
  },
  {
    title: "Social Media & Community",
    description: "Build and engage your Chinese player base through WeChat management, social CRM, community engagement strategies, and advertising campaigns on platforms like Douyin, Bilibili, and Weibo.",
    Icon: ChatBubbleBottomCenterTextIcon
  }
];

export default function WhatWeDo() {
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
            Your one-stop solution for Western PC game developers looking to successfully launch in China
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
              <div className="h-full p-8 rounded-[24px] bg-[#0A0A0B] border border-white/10 transition-all duration-300 text-center">
                <div className="w-12 h-12 mx-auto mb-6 rounded-xl bg-[#0A0A0B] flex items-center justify-center">
                  <service.Icon className="w-6 h-6 text-[#B4C6EF]" />
                </div>
                <h3 className="text-2xl font-semibold mb-4 text-white">
                  {service.title}
                </h3>
                <p className="text-base text-gray-400 leading-relaxed">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 
