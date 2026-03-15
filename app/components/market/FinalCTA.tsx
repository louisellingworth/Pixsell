'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { finalCTAVariants } from '@/lib/animation-variants'

export default function FinalCTA() {
  return (
    <section className="container mx-auto px-4 py-32 relative">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2 }}
        className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-pink-500/10 to-purple-500/10 blur-3xl"
      />

      <div className="max-w-7xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={finalCTAVariants}
          className="backdrop-blur-xl bg-black/40 rounded-3xl p-20 border border-purple-500/20 relative overflow-hidden group transform-gpu hover:scale-[1.01] transition-transform duration-700"
        >
          <motion.div
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
            className="absolute inset-0 bg-gradient-to-r from-purple-500/5 via-pink-500/5 to-purple-500/5 transition-opacity duration-700"
          />

          <motion.div
            className="relative z-10 text-center max-w-3xl mx-auto"
            animate={{
              scale: [1, 1.02, 1],
              opacity: [0.95, 1, 0.95],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          >
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-5xl md:text-6xl font-bold mb-10 text-white tracking-tight"
            >
              Thinking about{' '}
              <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent animate-gradient">
                launching
              </span>
              {' '}in China?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-2xl text-gray-100 mb-14 leading-relaxed"
            >
              Whether you&apos;re just exploring your options or actively planning your entry, we can show you the revenue potential of your game and the best strategy to maximise success. Let&apos;s have a chat.
            </motion.p>

            <motion.div whileHover={{ scale: 1.05 }} className="inline-block">
              <Link
                href="/contact"
                className="inline-flex items-center px-10 py-5 bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500 rounded-xl font-semibold text-xl tracking-wide transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/20 group relative overflow-hidden transform-gpu"
              >
                <motion.div
                  initial={{ x: '-100%', opacity: 0.5 }}
                  whileHover={{ x: '100%' }}
                  transition={{ duration: 0.7 }}
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                />
                <span className="relative flex items-center justify-center gap-3">
                  Get Started
                  <svg className="w-6 h-6 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
