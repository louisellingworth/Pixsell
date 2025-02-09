'use client'

import React from 'react';
import { motion } from 'framer-motion';
import ColourfulText from './ui/ColourfulText';
import { CardSpotlight } from './ui/card-spotlight';
import { AuroraBackground } from './ui/aurora-background';
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

export default function ComplexitySection() {
  return (
    <AuroraBackground>
      <section className="w-full py-24 relative overflow-hidden">
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
                className="font-inter text-4xl md:text-5xl font-bold text-white"
              >
                Entering the China market is complex
              </motion.h2>
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="font-inter text-4xl md:text-5xl font-bold"
              >
                <ColourfulText text="We make it simple." />
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
                  <div className="font-inter text-2xl font-bold text-white mb-6">Established Co-Publishing Partnerships</div>
                  <p className="font-inter text-xl text-gray-300">We secure you the best possible deal and manage your China launch from start to finish.</p>
                </CardSpotlight>
              </motion.div>

              <motion.div variants={item} className="w-full">
                <CardSpotlight className="p-12">
                  <div className="w-20 h-20 mx-auto mb-8 rounded-xl bg-[#0A0A0B] flex items-center justify-center">
                    <LanguageIcon className="w-10 h-10 text-[#B4C6EF]" />
                  </div>
                  <div className="font-inter text-2xl font-bold text-white mb-6">Full-Service Localisation & Compliance</div>
                  <p className="font-inter text-xl text-gray-300">Your game, adapted for China—seamlessly translated, culturally localised, and fully compliant.</p>
                </CardSpotlight>
              </motion.div>

              <motion.div variants={item} className="w-full">
                <CardSpotlight className="p-12">
                  <div className="w-20 h-20 mx-auto mb-8 rounded-xl bg-[#0A0A0B] flex items-center justify-center">
                    <ChartBarIcon className="w-10 h-10 text-[#B4C6EF]" />
                  </div>
                  <div className="font-inter text-2xl font-bold text-white mb-6">Expert-Led Marketing & Growth Strategy</div>
                  <p className="font-inter text-xl text-gray-300">We manage all marketing, influencer campaigns, and player engagement to maximise success.</p>
                </CardSpotlight>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </AuroraBackground>
  );
} 