'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import {
  ChartBarIcon,
  ShieldCheckIcon,
  UserGroupIcon,
  CogIcon,
  CheckCircleIcon,
  SparklesIcon,
} from '@heroicons/react/24/outline'

const steps = [
  {
    title: 'Find the Right Partner',
    description: "We carefully select a co-publisher that fits your game's needs and secure the most favourable deal for you.",
    icon: UserGroupIcon,
  },
  {
    title: 'Marketing & Localisation',
    description: 'We work directly with the co-publisher to ensure they invest in effective Chinese marketing, social media, and player engagement—all while keeping your interests protected.',
    icon: ChartBarIcon,
  },
  {
    title: 'Revenue Sharing',
    description: 'We negotiate a performance-based revenue split that maximises your earnings while ensuring the co-publisher delivers results.',
    icon: SparklesIcon,
  },
  {
    title: 'Ongoing Support',
    description: 'The co-publisher provides local customer support and continuously optimises game performance, with us ensuring they meet their obligations.',
    icon: CogIcon,
  },
]

const benefits = [
  { text: 'No IP Loss – You keep full control of your game.', icon: ShieldCheckIcon },
  { text: 'Best Deal Negotiation – We secure the most favourable terms on your behalf.', icon: SparklesIcon },
  { text: 'Risk-Free Entry – No upfront investment, just a performance-based revenue share.', icon: ChartBarIcon },
  { text: 'Local Expertise – Your game gets top-tier marketing and support in China.', icon: CheckCircleIcon },
  { text: 'No ISBN Needed – We focus on Steam Global to avoid complex regulations.', icon: CheckCircleIcon },
]

export default function CoPublishingWorks() {
  return (
    <section className="container mx-auto px-4 relative mt-32">
      <div className="max-w-7xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            How Our{' '}
            <span className="bg-gradient-to-r from-pink-400 to-pink-500 bg-clip-text text-transparent animate-gradient">
              Co-Publishing
            </span>
            {' '}Model Works
          </h2>
          <p className="text-xl text-gray-100 leading-relaxed max-w-3xl mx-auto">
            We match you with the right Chinese co-publisher and negotiate the best possible terms — from revenue share to marketing commitments — so you stay in control while ensuring your success.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-12 text-left"
          >
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="flex gap-6 group"
              >
                <div className="relative">
                  <div className="w-12 h-12 rounded-xl backdrop-blur-sm bg-black/10 border border-purple-500/30 flex items-center justify-center relative z-10 group-hover:border-purple-500/50 transition-all duration-300">
                    <span className="text-xl font-bold text-purple-400 group-hover:text-purple-300">{index + 1}</span>
                  </div>
                  {index < steps.length - 1 && (
                    <div className="absolute top-12 left-1/2 w-px h-16 bg-gradient-to-b from-purple-500/50 to-transparent transform -translate-x-1/2" />
                  )}
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <step.icon className="w-6 h-6 text-purple-400" />
                    <h4 className="text-xl font-bold text-white group-hover:text-purple-300 transition-colors duration-300">
                      {step.title}
                    </h4>
                  </div>
                  <p className="text-gray-100 leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-green-900/80 border border-green-500/30 rounded-2xl p-8 hover:border-green-500/50 transition-all duration-300 h-fit sticky top-24 shadow-xl shadow-green-500/10 group"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-green-900/5 opacity-0 group-hover:opacity-100 transition-all duration-300 rounded-2xl" />
            <h3 className="text-3xl font-bold text-green-100 mb-8 relative">
              Why Choose This Model?
              <div className="h-1 w-20 bg-gradient-to-r from-green-500 to-green-400 rounded-full mt-4" />
            </h3>
            <div className="space-y-6 relative">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  className="flex items-center gap-4"
                >
                  <div className="w-8 h-8 rounded-lg bg-green-500/10 border border-green-500/30 flex items-center justify-center">
                    <benefit.icon className="w-4 h-4 text-green-400" />
                  </div>
                  <span className="text-green-100">{benefit.text}</span>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-10 text-center"
            >
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-green-500 hover:bg-green-600 rounded-xl font-semibold text-white transition-all duration-300 hover:shadow-lg hover:shadow-green-500/20 group transform hover:scale-[1.02]"
              >
                🔍 Explore Co-Publishing Options
                <svg
                  className="w-5 h-5 ml-2 transform transition-transform group-hover:translate-x-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
