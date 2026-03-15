'use client'

import { motion } from 'framer-motion'
import { RocketLaunchIcon } from '@heroicons/react/24/outline'
import { processSteps } from '@/lib/market-data'
import {
  timelineVariants,
  timelineContentVariants,
  timelineLineVariants,
  timelineDotVariants,
} from '@/lib/animation-variants'

export default function RoadmapSection() {
  return (
    <section className="container mx-auto px-4 py-24 relative">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-pink-500/10 blur-3xl"
      />

      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-block mb-6"
          >
            <div className="relative">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{
                  duration: 30,
                  repeat: Infinity,
                  ease: 'linear',
                  type: 'tween',
                }}
                className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 blur-xl"
                style={{ willChange: 'transform', backfaceVisibility: 'hidden' }}
              />
              <div className="relative z-10 w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500/20 to-pink-500/20 backdrop-blur-sm border border-purple-500/30 flex items-center justify-center transform-gpu">
                <RocketLaunchIcon className="w-8 h-8 text-purple-400" />
              </div>
            </div>
          </motion.div>

          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Co-Publishing{' '}
            <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-purple-400 bg-clip-text text-transparent animate-gradient">
              Roadmap
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            We&apos;ve laid out a structured timeline for securing the right co-publisher and executing a successful Steam Global launch in China
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline Line Container */}
          <div className="absolute left-[15%] sm:left-[50%] top-0 bottom-0 w-px">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-100px' }}
              variants={timelineLineVariants}
              className="w-full h-full bg-gradient-to-b from-purple-500/50 via-pink-500/50 to-purple-500/50 origin-top"
            >
              <motion.div
                animate={{
                  y: ['0%', '100%'],
                  opacity: [0, 1, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: 'linear',
                }}
                className="absolute w-2 h-2 -left-[3px] rounded-full bg-purple-400/50 blur-sm"
              />
            </motion.div>
          </div>

          {/* Timeline Steps */}
          <div className="space-y-24">
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-100px' }}
                variants={timelineVariants}
                custom={index}
                className="relative"
              >
                <div className={`flex flex-col ${index % 2 === 0 ? 'sm:flex-row' : 'sm:flex-row-reverse'} items-center gap-8`}>
                  <div className="w-full sm:w-[45%]">
                    <motion.div
                      variants={timelineContentVariants}
                      whileHover={{ scale: 1.02, y: -5 }}
                      className={`backdrop-blur-sm bg-black/30 border border-purple-500/20 rounded-2xl p-8 hover:border-purple-500/40 transition-all duration-300 relative group ${
                        index % 2 === 0 ? 'text-left' : 'text-left sm:text-right'
                      }`}
                    >
                      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-transparent to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      <div className="absolute -top-1 -left-1 w-8 h-8 border-t-2 border-l-2 border-purple-500/30 rounded-tl-lg group-hover:border-purple-400/60 transition-colors duration-300" />
                      <div className="absolute -bottom-1 -right-1 w-8 h-8 border-b-2 border-r-2 border-purple-500/30 rounded-br-lg group-hover:border-purple-400/60 transition-colors duration-300" />

                      <div className="relative">
                        <div className="text-purple-400 font-semibold mb-4 flex items-center gap-2">
                          <motion.span
                            whileHover={{ scale: 1.05 }}
                            className="bg-purple-500/20 px-4 py-2 rounded-full text-sm border border-purple-500/30 hover:border-purple-500/50 transition-colors duration-300"
                          >
                            {step.when}
                          </motion.span>
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-4 bg-gradient-to-r from-white to-gray-100 bg-clip-text">{step.what}</h3>
                        <div className="text-gray-300 space-y-3">
                          {step.details.split('\n').map((detail, i) => (
                            <motion.div
                              key={i}
                              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              transition={{ delay: i * 0.1 }}
                              className="flex items-start gap-3 group/item"
                            >
                              <span className="flex-shrink-0 w-2 h-2 rounded-full bg-purple-400/50 group-hover/item:bg-purple-400 transition-colors duration-300 mt-2" />
                              <p className="leading-relaxed group-hover/item:text-white transition-colors duration-300">{detail.substring(2)}</p>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  </div>

                  <div className="relative">
                    <motion.div
                      variants={timelineDotVariants}
                      whileHover={{ scale: 1.2, rotate: 360 }}
                      transition={{ duration: 0.5 }}
                      className="w-14 h-14 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center relative z-10 transform-gpu"
                    >
                      <span className="text-white text-xl font-bold">{index + 1}</span>
                      <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 animate-ping opacity-20" />
                      <div className="absolute inset-0 rounded-xl bg-purple-500/30 blur-xl" />
                    </motion.div>
                    <motion.div
                      animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.5, 0.8, 0.5],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: 'easeInOut',
                      }}
                      className="absolute inset-0 bg-gradient-to-r from-purple-500/30 to-pink-500/30 rounded-xl blur-xl"
                    />
                  </div>

                  <div className="hidden sm:block w-[45%]" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
