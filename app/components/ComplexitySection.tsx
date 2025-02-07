'use client'

import { motion } from 'framer-motion'
import { CardSpotlight } from './ui/CardSpotlight'
import { ArrowRightIcon } from '@heroicons/react/24/outline'

const challenges = [
  {
    title: "Cultural Differences",
    description: "Understanding and adapting to Chinese gaming preferences and cultural nuances is crucial for success.",
    emoji: "🎮"
  },
  {
    title: "Regulatory Compliance",
    description: "Navigating complex government regulations and obtaining necessary licenses can be challenging.",
    emoji: "📜"
  },
  {
    title: "Market Competition",
    description: "Standing out in China's highly competitive gaming market requires local expertise and strategic positioning.",
    emoji: "🎯"
  },
  {
    title: "Technical Requirements",
    description: "Meeting specific technical standards and integrating with local platforms demands specialized knowledge.",
    emoji: "⚙️"
  }
]

export default function ComplexitySection() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl" />
      </div>

      {/* Content */}
      <div className="relative container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-[#8A7FFB] to-[#B4B0FF] bg-clip-text text-transparent">
            Entering China is Complex
          </h2>
          <p className="text-xl text-white/80">
            The Chinese gaming market presents unique challenges that require expert navigation
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {challenges.map((challenge, index) => (
            <motion.div
              key={challenge.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <CardSpotlight className="h-full">
                <div className="flex flex-col items-center h-full">
                  <div className="flex flex-col items-center gap-3 mb-4">
                    <span className="text-3xl bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent filter drop-shadow-lg transform group-hover:scale-110 transition-transform duration-300">
                      {challenge.emoji}
                    </span>
                    <motion.h3 
                      className="text-xl font-bold text-white group-hover:text-indigo-400 transition-colors duration-300 text-center"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      {challenge.title}
                    </motion.h3>
                  </div>
                  <p className="text-white/80 mb-6 group-hover:text-white/90 transition-colors duration-300 text-center">
                    {challenge.description}
                  </p>
                  <div className="mt-auto flex items-center text-indigo-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="mr-2 text-sm font-medium">Learn more</span>
                    <ArrowRightIcon className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                </div>
              </CardSpotlight>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
} 