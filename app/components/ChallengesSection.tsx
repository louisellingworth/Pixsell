'use client'

import { motion } from 'framer-motion'
import Card from './ui/Card'
import RotatingText from './RotatingText'

const solutions = [
  {
    title: 'Automate the mundane',
    description: 'Repetitive tasks are handled automatically.'
  },
  {
    title: 'Convert more leads',
    description: 'AI nurtures prospects 24/7.'
  },
  {
    title: 'Unlock your time',
    description: 'Focus on strategy, not busywork.'
  },
  {
    title: 'Custom Built',
    description: 'We don\'t do off-the-shelf solutions.'
  }
]

const problems = [
  'Leads get lost.',
  'Time disappears into a black hole of tasks.',
  'Scaling feels like a distant dream.'
]

const dreamTexts = [
  'create something meaningful',
  'have true freedom',
  'grow without limits'
]

export default function ChallengesSection() {
  return (
    <section className="relative py-8 sm:py-12 px-4 sm:px-6">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-900/10 to-transparent" />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto">
        {/* Dream Section */}
        <motion.div 
          className="max-w-3xl mx-auto text-center mb-8 sm:mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.h2 
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2 sm:mb-4 bg-gradient-to-r from-[#8A7FFB] to-[#B4B0FF] bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            You Built Your Business on a Dream
          </motion.h2>
          <RotatingText />
        </motion.div>

        {/* Two-column layout */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {/* Left Column - Problems */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Card className="h-full p-4 sm:p-6 md:p-8 bg-black/40">
              <h3 className="text-2xl font-semibold mb-3 sm:mb-4 bg-gradient-to-r from-[#8A7FFB] to-[#B4B0FF] bg-clip-text text-transparent">
                But somewhere along the way, growth became a complex beast.
              </h3>
              <ul className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
                {problems.map((problem, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-start space-x-3"
                  >
                    <span className="text-red-400/80 mt-1">•</span>
                    <span className="text-lg text-white/80">{problem}</span>
                  </motion.li>
                ))}
              </ul>
              <p className="text-white/60 italic border-l-2 border-purple-500/30 pl-4">
                Many businesses get stuck here, not for a lack of vision but because of inefficient systems.
              </p>
            </Card>
          </motion.div>

          {/* Right Column - Solutions */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Card className="h-full p-4 sm:p-6 md:p-8 bg-black/40">
              <h3 className="text-2xl font-semibold mb-4 sm:mb-6 bg-gradient-to-r from-[#8A7FFB] to-[#B4B0FF] bg-clip-text text-transparent">
                This Is Where We Come In
              </h3>
              <div className="space-y-4 sm:space-y-6 mb-6 sm:mb-8">
                {solutions.map((solution, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="border-l-2 border-purple-500/30 pl-4"
                  >
                    <h4 className="text-lg font-medium text-white/90 mb-1">
                      {solution.title}
                    </h4>
                    <p className="text-white/60">
                      {solution.description}
                    </p>
                  </motion.div>
                ))}
              </div>
              <p className="text-white/80 text-lg font-light italic">
                We provide the automation and AI tools to get you unstuck.
              </p>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
} 