'use client'

import { motion } from 'framer-motion'
import { CardSpotlight } from './ui/CardSpotlight'
import { ArrowRightIcon } from '@heroicons/react/24/outline'

const services = [
  {
    title: "Co-Publishing",
    description: "Partner with trusted Chinese publishers to handle ISBN acquisition, marketing, and distribution—no upfront costs, pure revenue sharing.",
    emoji: "🤝"
  },
  {
    title: "Localisation",
    description: "Expert translation and cultural adaptation services to ensure your game resonates with Chinese players while maintaining its core appeal.",
    emoji: "🌏"
  },
  {
    title: "Marketing",
    description: "Comprehensive marketing strategies including social media, influencer partnerships, and performance advertising tailored for the Chinese market.",
    emoji: "📈"
  },
  {
    title: "Compliance",
    description: "Navigate complex Chinese gaming regulations with confidence. We handle all necessary approvals and ensure your game meets local standards.",
    emoji: "✅"
  },
  {
    title: "Player Support",
    description: "24/7 native Chinese player support and community management to ensure high player satisfaction and retention.",
    emoji: "👥"
  },
  {
    title: "IP Protection",
    description: "Safeguard your intellectual property in China with our comprehensive legal protection and anti-piracy measures.",
    emoji: "🛡️"
  }
]

export default function ServicesSection() {
  return (
    <section className="relative py-16 sm:py-20 md:py-24 overflow-hidden">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/80 pointer-events-none" />

      <div className="relative container mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <motion.h2 
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-white to-blue-400 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Our Services
          </motion.h2>
          <motion.p 
            className="text-base sm:text-lg text-white/80 px-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Everything you need to successfully launch and grow your game in China
          </motion.p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <CardSpotlight className="h-full">
                <div className="flex flex-col items-center h-full">
                  <div className="flex flex-col items-center gap-3 mb-4">
                    <span className="text-3xl bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent filter drop-shadow-lg transform group-hover:scale-110 transition-transform duration-300">
                      {service.emoji}
                    </span>
                    <motion.h3 
                      className="text-xl font-bold text-white group-hover:text-indigo-400 transition-colors duration-300 text-center"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      {service.title}
                    </motion.h3>
                  </div>
                  <p className="text-white/80 mb-6 group-hover:text-white/90 transition-colors duration-300 text-center">
                    {service.description}
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