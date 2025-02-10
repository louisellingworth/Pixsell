'use client'

import VariableFontHoverByRandomLetter from './ui/VariableFontHoverByRandomLetter'
import PixelTrail from './ui/PixelTrail'
import ColourfulText from './ui/ColourfulText'
import ParticlesBackground from './ui/ParticlesBackground'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <div className="min-h-[90vh] lg:min-h-screen flex flex-col items-center justify-center relative overflow-hidden">
      <ParticlesBackground />
      
      {/* Enhanced pixel trail effect */}
      <div className="absolute inset-0 pointer-events-none">
        <PixelTrail 
          pixelSize={16}
          fadeDuration={2000}
          delay={0}
          pixelClassName="bg-blue-500/60 blur-[2px]"
        />
      </div>
      
      {/* Decorative gradient beams */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] opacity-30">
          <div className="absolute inset-0 rotate-45 bg-gradient-to-r from-transparent via-blue-500/10 to-transparent transform -skew-x-12" />
          <div className="absolute inset-0 -rotate-45 bg-gradient-to-r from-transparent via-purple-500/10 to-transparent transform skew-x-12" />
        </div>
      </div>
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="relative flex flex-col items-center justify-center px-4 z-10"
      >
        {/* Main Title with enhanced effects */}
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ 
            duration: 0.8, 
            delay: 0.2,
            ease: [0.19, 1, 0.22, 1]
          }}
          className="relative"
        >
          <h1 
            className={`
              font-press-start-2p text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl 2xl:text-[10rem] 
              cursor-pointer hover:scale-105 transition-all duration-500 ease-out
              tracking-tight leading-none text-center
              drop-shadow-[0_0_25px_rgba(255,255,255,0.2)]
              relative
            `}
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-b from-white via-blue-400 to-blue-600 animate-gradient-y">
              PIXSELL
            </span>
            <div className="absolute inset-0 bg-gradient-to-b from-white/20 to-transparent blur-xl opacity-50 -z-10" />
          </h1>
        </motion.div>

        {/* Enhanced Subtitle with gradient */}
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="
            font-press-start-2p text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl 
            bg-gradient-to-b from-white via-white/90 to-blue-200/80
            bg-clip-text text-transparent tracking-tight 
            max-w-3xl text-center mt-8 sm:mt-10 md:mt-12 lg:mt-14
            px-4 leading-relaxed
            drop-shadow-[0_4px_8px_rgba(0,0,0,0.3)]
          "
        >
          YOUR GATEWAY TO THE CHINA VIDEO GAME MARKET
        </motion.h2>

        {/* Enhanced Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 relative group"
        >
          <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg blur opacity-30 group-hover:opacity-60 transition duration-500" />
          <button className="
            relative px-10 py-5 rounded-lg
            bg-gradient-to-r from-blue-600/90 to-purple-600/90
            hover:from-blue-500 hover:to-purple-500
            transform hover:scale-105 transition-all duration-500
            font-press-start-2p text-sm sm:text-base
            shadow-xl
            border border-white/10
            flex items-center gap-2
          ">
            <span>Start Your Journey</span>
            <motion.span
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            >
              →
            </motion.span>
          </button>
        </motion.div>
      </motion.div>
    </div>
  )
} 