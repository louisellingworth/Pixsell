'use client'

import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import FloatingConsultButton from '../components/FloatingConsultButton'
import { motion } from 'framer-motion'
import Link from 'next/link'

const services = [
  {
    title: "Co-Publishing Solutions",
    description: "Partner with us to bring your game to the Chinese market. Our co-publishing service ensures your game reaches the right audience while maintaining the highest publishing standards.",
    features: ["Publisher Partnerships", "Market Strategy", "Revenue Optimisation", "Launch Support"],
    href: "/services/co-publishing"
  },
  {
    title: "Marketing & Promotion",
    description: "Reach Chinese gamers through strategic marketing campaigns. Our expertise in local platforms and influencer networks helps your game stand out.",
    features: ["KOL Partnerships", "Social Media Strategy", "Platform Optimisation", "Community Building"],
    href: "/services/marketing"
  },
  {
    title: "Localisation Services",
    description: "Adapt your game for Chinese players with our comprehensive localisation services. We ensure cultural authenticity while maintaining your game's core appeal.",
    features: ["Cultural Adaptation", "Text Translation", "Asset Localisation", "Quality Assurance"],
    href: "/services/localisation"
  },
  {
    title: "How we Deliver",
    description: "Discover our approach to ensuring your success in the Chinese market through dedicated support, regular communication, and comprehensive reporting.",
    features: ["Regular Strategy Meetings", "Comprehensive Reports", "Dedicated Support", "Market Insights"],
    href: "/services/partnership"
  }
]

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Fixed Navigation */}
      <div 
        className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-xl border-b border-white/5"
        style={{ 
          transform: 'translateZ(0)',
          willChange: 'transform',
          contain: 'layout paint style'
        }}
      >
        <Navigation />
      </div>
      
      {/* Spacer for fixed navbar */}
      <div className="h-12 md:h-16"></div>

      {/* Background Effects */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black/50 to-black" />
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.3, 0.2] 
          }} 
          transition={{ 
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut" 
          }}
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full filter blur-[100px]" 
        />
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.3, 0.2] 
          }} 
          transition={{ 
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2 
          }}
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-br from-pink-500/20 to-purple-500/20 rounded-full filter blur-[100px]" 
        />
      </div>

      <div className="relative z-10">
        {/* Hero Section */}
        <section className="relative py-32 md:py-40">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8"
              >
                <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-purple-400 bg-clip-text text-transparent animate-gradient">
                  Our Services
                </span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto"
              >
                Comprehensive solutions for publishing and marketing your games in China
              </motion.p>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-8 max-w-7xl mx-auto">
              {services.map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Link href={service.href}>
                    <div className="group h-full p-8 rounded-2xl backdrop-blur-xl bg-black/40 border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 text-center">
                      <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                        {service.title}
                      </h3>
                      <p className="text-gray-300 mb-8 text-lg mx-auto max-w-lg">{service.description}</p>
                      <div className="grid grid-cols-2 gap-6 max-w-md mx-auto mb-8">
                        {service.features.map((feature) => (
                          <div
                            key={feature}
                            className="flex items-center justify-center text-sm text-gray-300 group-hover:text-white transition-colors duration-200"
                          >
                            <svg
                              className="w-4 h-4 mr-2 text-purple-400 group-hover:text-pink-400 transition-colors duration-200 flex-shrink-0"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M5 13l4 4L19 7"
                              />
                            </svg>
                            <span className="text-center">{feature}</span>
                          </div>
                        ))}
                      </div>
                      <motion.div 
                        className="flex items-center justify-center text-purple-400 group-hover:text-pink-400 transition-colors duration-200"
                        whileHover={{ x: 5 }}
                      >
                        <span className="font-medium">Learn more</span>
                        <svg
                          className="w-5 h-5 ml-2"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 5l7 7-7 7"
                          />
                        </svg>
                      </motion.div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </div>

      <Footer />
      <FloatingConsultButton />
    </main>
  )
} 