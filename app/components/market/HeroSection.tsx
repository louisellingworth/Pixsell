'use client'

import { motion, useReducedMotion } from 'framer-motion'
import Link from 'next/link'
import { cardVariants, containerVariants, sectionClasses, containerClasses } from '@/lib/animation-variants'

export default function HeroSection() {
  const shouldReduceMotion = useReducedMotion()

  return (
    <section className={sectionClasses}>
      <div className={containerClasses}>
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center max-w-7xl mx-auto w-full translate-y-[-8vh] sm:translate-y-[-12vh]">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="flex flex-col items-center md:items-start text-center md:text-left space-y-6 md:pr-8 order-2 md:order-1"
          >
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="space-y-4 w-full"
            >
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight px-4 sm:px-0 text-center md:text-left pt-2">
                <motion.span
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  whileHover={{
                    scale: 1.02,
                    transition: { duration: 0.3 },
                  }}
                  className="inline-block bg-gradient-to-r from-purple-400 via-pink-500 to-blue-400 bg-clip-text text-transparent"
                  style={{
                    backgroundSize: '200% 200%',
                    animation: 'premiumGradient 3s ease-in-out infinite',
                  }}
                >
                  Streamlining
                </motion.span>
                <motion.span
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="block text-white"
                >
                  Your Entry to China&apos;s Gaming Market
                </motion.span>
              </h1>

              <motion.p
                variants={cardVariants}
                className="text-base sm:text-lg text-gray-300 leading-relaxed max-w-xl mx-auto md:mx-0 text-center md:text-left px-4 sm:px-0"
              >
                Bringing your game to China doesn&apos;t have to be hard. We take care of the messy bits - partners, neogtations, approvals, marketing - so you can stay focused on making great games.
              </motion.p>
            </motion.div>

            {/* Stats Grid */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 border-t border-purple-500/20 w-full px-4 sm:px-0"
            >
              {[
                { value: '320M+', label: 'PC Gamers' },
                { value: '$15.21B', label: 'Market Size' },
                { value: '100%', label: 'Developer-First' },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  variants={cardVariants}
                  whileHover={shouldReduceMotion ? {} : { scale: 1.05 }}
                  className="space-y-1 bg-purple-900/10 p-4 rounded-xl border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 text-center"
                >
                  <h3 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                    {stat.value}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-400">{stat.label}</p>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="flex flex-col sm:flex-row gap-4 pt-6 w-full px-4 sm:px-0"
            >
              <motion.div variants={cardVariants} className="w-full sm:w-auto">
                <Link
                  href="/contact"
                  className="flex w-full sm:w-auto justify-center items-center px-6 py-4 sm:py-3 bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500 rounded-xl font-semibold text-base transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20 group"
                  role="button"
                  aria-label="Book a free consultation"
                >
                  <span>Book a Free Consultation</span>
                  <svg
                    className="w-4 h-4 ml-2 transform transition-transform group-hover:translate-x-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Link>
              </motion.div>
              <motion.div variants={cardVariants} className="w-full sm:w-auto">
                <Link
                  href="/services/co-publishing"
                  className="flex w-full sm:w-auto justify-center items-center px-6 py-4 sm:py-3 border border-purple-500/20 hover:border-purple-500/40 rounded-xl font-semibold text-base transition-all duration-300 hover:bg-purple-500/10"
                  role="button"
                  aria-label="Learn how it works"
                >
                  See How It Works
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Hero Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative flex items-center justify-center h-full order-1 md:order-2 pt-20 sm:pt-32"
          >
            <motion.div
              animate={shouldReduceMotion ? {} : {
                y: [-5, 5, -5],
                x: [0, 10, 0],
                rotate: [0, 2, -2, 0],
                scale: [1, 1.02, 1],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="relative w-[220px] h-[220px] sm:w-[350px] sm:h-[350px] md:w-[420px] md:h-[420px] lg:w-[520px] lg:h-[520px] max-w-full"
            >
              <motion.div
                animate={shouldReduceMotion ? {} : {
                  scale: [1, 1.1, 1],
                  opacity: [0.5, 0.7, 0.5],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
                className="absolute inset-0 rounded-full animate-pulse opacity-75 md:opacity-100"
              />
              <div className="relative z-10 steam-hero-logo-wrapper">
                <img
                  src="/steam Logo .gif"
                  alt="Steam Platform Logo"
                  width={400}
                  height={400}
                  loading="eager"
                  className="steam-hero-logo object-contain w-[120px] h-[120px] sm:w-[210px] sm:h-[210px] md:w-[250px] md:h-[250px] lg:w-[310px] lg:h-[310px] max-w-full mx-auto"
                />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
