'use client'

import { motion } from 'framer-motion'
import GradientButton from './ui/GradientButton'
import { GoogleGeminiEffectDemo } from './ui/google-gemini-effect-demo'

export default function Hero() {
  return (
    <section className="relative min-h-[100svh] flex items-center justify-center overflow-hidden py-16 sm:py-20">
      {/* Background glow effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-48 sm:w-96 h-48 sm:h-96 bg-primary-400/20 rounded-full blur-3xl animate-glow-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-48 sm:w-96 h-48 sm:h-96 bg-primary-400/20 rounded-full blur-3xl animate-glow-pulse [animation-delay:1s]" />
      </div>

      {/* Google Gemini Effect */}
      <div className="absolute inset-0">
        <GoogleGeminiEffectDemo />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 text-center">
        {/* Headline */}
        <motion.h1 
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-red-500 to-red-400 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Your Gateway to the Chinese Gaming Market
        </motion.h1>

        {/* Subheadline */}
        <motion.p 
          className="text-lg sm:text-xl md:text-2xl text-red-200 mb-8 sm:mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          We handle co-publishing, localization, and compliance. You focus on making great games.
        </motion.p>

        {/* Button */}
        <motion.div 
          className="mt-8 sm:mt-12 relative"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <GradientButton 
            href="/contact"
            className="text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 bg-black/50 backdrop-blur-sm border border-red-500/20 hover:border-red-400/40 transition-all"
          >
            Book a Free Consultation →
          </GradientButton>
        </motion.div>
      </div>
    </section>
  )
} 