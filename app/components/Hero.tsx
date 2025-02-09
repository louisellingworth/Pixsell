'use client'

import { motion } from 'framer-motion'
import { AuroraBackground } from './ui/aurora-background'

export default function Hero() {
  return (
    <section className="min-h-screen bg-black relative overflow-hidden flex items-center justify-center">
      {/* Gradient Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_60%_-20%,#1E1B4B,transparent_50%)] opacity-30" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_150%,#312E81,transparent_50%)] opacity-30" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,#4F46E5,transparent_30%)] opacity-10 blur-xl" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_40%_80%,#6366F1,transparent_30%)] opacity-10 blur-xl" />
      </div>

      {/* Floating orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 sm:w-64 sm:h-64 bg-indigo-600/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-32 h-32 sm:w-64 sm:h-64 bg-blue-600/20 rounded-full blur-3xl animate-pulse [animation-delay:2s]" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 text-center relative z-10">
        <motion.h1 
          className="font-inter text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold mb-4 sm:mb-6 md:mb-8 bg-gradient-to-b from-white to-blue-500 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Pixsell
        </motion.h1>

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