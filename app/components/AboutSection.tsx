'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

export default function AboutSection() {
  const sectionRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  })

  const y = useTransform(scrollYProgress, [0, 1], [100, -100])

  const steamBenefits = [
    {
      title: "Global Access",
      description: "Steam Global remains accessible in China despite increasing regulations.",
      icon: "🌍"
    },
    {
      title: "No ISBN Required",
      description: "Unlike WeGame and other Chinese platforms, Steam does not require government licensing.",
      icon: "📜"
    },
    {
      title: "Massive Player Base",
      description: "China is one of Steam's largest markets, with millions of active players.",
      icon: "👥"
    },
    {
      title: "Strong Sales Potential",
      description: "Many Western PC games perform exceptionally well in China with the right marketing approach.",
      icon: "📈"
    }
  ]

  const expertise = [
    {
      title: "Co-Publishing Partnerships",
      description: "We connect you with reliable Chinese publishers to handle distribution and compliance.",
      icon: "🤝"
    },
    {
      title: "Developer-Friendly Deals",
      description: "We negotiate transparent agreements that ensure fair revenue shares.",
      icon: "📝"
    },
    {
      title: "Strategic Market Entry",
      description: "We provide comprehensive support to help you maximize success on Steam in China.",
      icon: "🎯"
    }
  ]

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
  }

  return (
    <div ref={sectionRef} className="container mx-auto px-4">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-24"
        >
          <div className="inline-block mb-4 px-6 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm">
            <span className="text-sm text-white/80">About EightSix Games</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-white">
            Steam-First China Publishing
          </h2>
          <p className="text-lg md:text-xl text-white/70 max-w-3xl mx-auto leading-relaxed">
            We are a specialist consultancy helping developers successfully publish and market PC games on Steam in China, 
            without the complexities of ISBN licensing.
          </p>
        </motion.div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Column - Why Steam */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="relative">
              <motion.div style={{ y }} className="absolute -left-8 top-0 w-1 h-full bg-gradient-to-b from-white/0 via-white/10 to-white/0" />
              <h3 className="text-2xl font-semibold mb-8 text-white inline-flex items-center">
                <span className="mr-3">Why Steam in China?</span>
                <motion.div
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="w-6 h-6"
                >
                  🎮
                </motion.div>
              </h3>
            </div>
            <div className="grid gap-6">
              {steamBenefits.map((benefit, index) => (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                  className="group relative"
                >
                  <div className="absolute inset-0 bg-white/5 rounded-2xl blur-xl transform group-hover:scale-105 transition-transform duration-300" />
                  <div className="relative p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm flex items-start gap-4">
                    <div className="text-3xl">{benefit.icon}</div>
                    <div>
                      <h4 className="text-lg font-medium text-white/90 mb-2">{benefit.title}</h4>
                      <p className="text-white/70">{benefit.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Column - Our Expertise */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="relative">
              <motion.div style={{ y }} className="absolute -left-8 top-0 w-1 h-full bg-gradient-to-b from-white/0 via-white/10 to-white/0" />
              <h3 className="text-2xl font-semibold mb-8 text-white inline-flex items-center">
                <span className="mr-3">Our Core Expertise</span>
                <motion.div
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="w-6 h-6"
                >
                  ⚡
                </motion.div>
              </h3>
            </div>
            <div className="space-y-6">
              {expertise.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                  className="group relative"
                >
                  <div className="absolute inset-0 bg-white/5 rounded-2xl blur-xl transform group-hover:scale-105 transition-transform duration-300" />
                  <div className="relative p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm flex items-start gap-4">
                    <div className="text-3xl">{item.icon}</div>
                    <div>
                      <h4 className="text-lg font-medium text-white/90 mb-2">{item.title}</h4>
                      <p className="text-white/70">{item.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="relative mt-12 group"
            >
              <div className="absolute inset-0 bg-white/5 rounded-2xl blur-xl transform group-hover:scale-105 transition-transform duration-300" />
              <div className="relative p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-2xl">💡</span>
                  <h4 className="text-lg font-medium text-white/90">Our Approach</h4>
                </div>
                <p className="text-white/70">
                  We do not handle ISBN licensing. Instead, we focus on alternative distribution strategies that allow developers 
                  to legally access the Chinese market without requiring government approvals.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  )
} 