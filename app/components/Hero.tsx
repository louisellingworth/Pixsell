'use client'

import { motion } from 'framer-motion'
import GradientButton from './ui/GradientButton'
import { GoogleGeminiEffectDemo } from './ui/google-gemini-effect-demo'
import ParticlesBackground from './ui/ParticlesBackground'
import { Suspense } from 'react'

export default function Hero() {
  return (
    <section className="relative min-h-[100svh] flex items-center justify-center overflow-hidden py-12 sm:py-16 md:py-20">
      {/* Gradient Background Effects */}
      <div className="fixed inset-0 -z-20 bg-black">
        {/* Primary radial gradients - optimized for mobile */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_60%_-20%,#1E1B4B,transparent_50%)] opacity-70 transform scale-y-75 sm:scale-100" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_150%,#312E81,transparent_50%)] opacity-60 transform scale-y-75 sm:scale-100" />
        
        {/* Accent gradients - adjusted for better mobile performance */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,#4F46E5,transparent_30%)] opacity-20 blur-xl" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_40%_80%,#6366F1,transparent_30%)] opacity-20 blur-xl" />
        
        {/* Subtle overlay for depth */}
        <div className="absolute inset-0 bg-black/20" />
        
        {/* Fine grain texture - lazy loaded */}
        <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.02] mix-blend-overlay" />
      </div>

      {/* Floating particles animation */}
      <div className="absolute inset-0 z-0 w-full h-full">
        <ParticlesBackground />
      </div>

      {/* Floating orbs effect - optimized size for mobile */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 sm:w-64 sm:h-64 bg-indigo-600/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-32 h-32 sm:w-64 sm:h-64 bg-blue-600/20 rounded-full blur-3xl animate-pulse [animation-delay:2s]" />
      </div>

      {/* Google Gemini Effect - lazy loaded */}
      <Suspense fallback={null}>
        <div className="absolute inset-0 pt-40">
          <GoogleGeminiEffectDemo />
        </div>
      </Suspense>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 text-center pt-16 sm:pt-20">
        {/* Main Title - responsive font sizes */}
        <motion.h1 
          className="font-inter text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold mb-4 sm:mb-6 md:mb-8 bg-gradient-to-b from-white to-blue-500 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Pixsell
        </motion.h1>

        {/* Subheadline - adjusted spacing and font sizes */}
        <motion.h2 
          className="font-inter text-xl sm:text-2xl md:text-3xl lg:text-4xl text-white mb-8 sm:mb-12 md:mb-16 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          Your Gateway to the Chinese Gaming Market
        </motion.h2>
      </div>
    </section>
  )
} 