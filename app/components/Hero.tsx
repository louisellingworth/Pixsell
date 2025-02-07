'use client'

import { motion } from 'framer-motion'
import GradientButton from './ui/GradientButton'
import { GoogleGeminiEffectDemo } from './ui/google-gemini-effect-demo'

export default function Hero() {
  return (
    <section className="relative min-h-[100svh] flex items-center justify-center overflow-hidden py-16 sm:py-20">
      {/* Gradient Background Effects */}
      <div className="fixed inset-0 -z-10 bg-black">
        {/* Primary radial gradients */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_60%_-20%,#1E1B4B,transparent_50%)] opacity-70" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_150%,#312E81,transparent_50%)] opacity-60" />
        
        {/* Accent gradients */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,#4F46E5,transparent_30%)] opacity-20 blur-2xl" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_40%_80%,#6366F1,transparent_30%)] opacity-20 blur-2xl" />
        
        {/* Subtle overlay for depth */}
        <div className="absolute inset-0 bg-black/20" />
        
        {/* Fine grain texture */}
        <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.02] mix-blend-overlay" />
      </div>

      {/* Floating orbs effect */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-indigo-600/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-blue-600/20 rounded-full blur-3xl animate-pulse [animation-delay:2s]" />
      </div>

      {/* Google Gemini Effect */}
      <div className="absolute inset-0">
        <GoogleGeminiEffectDemo />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 text-center pt-16 sm:pt-20">
        {/* Main Title */}
        <motion.h1 
          className="font-inter text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold mb-6 sm:mb-8 bg-gradient-to-b from-white to-blue-500 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Pixsell
        </motion.h1>

        {/* Subheadline */}
        <motion.h2 
          className="font-inter text-2xl sm:text-3xl md:text-4xl text-white mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          Your Gateway to the Chinese Gaming Market
        </motion.h2>

        {/* Button */}
        <motion.div 
          className="mt-8 sm:mt-12 relative"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <GradientButton 
            href="/contact"
            className="font-inter text-xl px-10 py-5 bg-black border-2 border-transparent text-white rounded-xl 
            shadow-[0_0_15px_rgba(0,0,0,0.2)] 
            hover:shadow-[0_0_30px_rgba(59,130,246,0.5)] 
            hover:border-blue-500 
            transition-all duration-300 ease-out"
          >
            Get Started →
          </GradientButton>
        </motion.div>
      </div>
    </section>
  )
} 