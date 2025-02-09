'use client'

import { motion } from 'framer-motion'
import { SVGs } from './ui/PulseBeams'
import VariableFontHoverByRandomLetter from './ui/VariableFontHoverByRandomLetter'
import { BackgroundBeams } from './ui/BackgroundBeams'
import ParticlesBackground from './ui/ParticlesBackground'

export default function Hero() {
  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden bg-[#0A0A0B]">
      {/* Particles Background */}
      <div className="absolute inset-0" style={{ zIndex: 1 }}>
        <ParticlesBackground />
      </div>

      {/* Background Beams */}
      <BackgroundBeams />

      {/* Floating orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" style={{ zIndex: 1 }}>
        <div className="absolute top-1/4 left-1/4 w-32 h-32 sm:w-64 sm:h-64 bg-indigo-600/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-32 h-32 sm:w-64 sm:h-64 bg-blue-600/5 rounded-full blur-3xl animate-pulse [animation-delay:2s]" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 text-center relative flex flex-col items-center justify-center min-h-screen" style={{ zIndex: 3 }}>
        <div className="relative flex flex-col items-center justify-center h-screen">
          {/* Pulse Beams */}
          <div className="absolute left-1/2 -translate-x-1/2 scale-75 md:scale-100 w-full max-w-[600px]">
            <SVGs />
          </div>
          
          <div className="relative">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="relative z-20"
            >
              <VariableFontHoverByRandomLetter
                label="Pixsell"
                className="font-inter text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold mb-4 sm:mb-6 md:mb-8 bg-gradient-to-b from-white to-blue-500 bg-clip-text text-transparent cursor-pointer"
                staggerDuration={0.04}
                fromFontVariationSettings="'wght' 400"
                toFontVariationSettings="'wght' 800"
              />
            </motion.div>

            <motion.h2 
              className="font-inter text-xl sm:text-2xl md:text-3xl lg:text-4xl text-white mb-8 sm:mb-12 md:mb-16 max-w-3xl mx-auto relative z-20"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              Your Gateway to the Chinese Gaming Market
            </motion.h2>
          </div>
        </div>
      </div>
    </div>
  )
} 