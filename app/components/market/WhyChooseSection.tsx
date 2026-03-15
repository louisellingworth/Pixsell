'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { SparklesIcon } from '@heroicons/react/24/outline'
import { comparisonData, uniqueFeatures } from '@/lib/market-data'
import { tableRowVariants } from '@/lib/animation-variants'

export default function WhyChooseSection() {
  return (
    <section className="container mx-auto px-4 relative mt-32">
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
                <SparklesIcon className="w-8 h-8 text-purple-400" />
              </div>
            </div>
          </motion.div>

          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Why Choose{' '}
            <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent animate-gradient">
              Pixsell Games
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Compare different approaches to entering the Chinese gaming market and discover why developers choose us:
          </p>
        </motion.div>

        {/* Market Entry Comparison Table */}
        <div className="overflow-x-auto w-full mb-16 max-w-6xl mx-auto">
          {/* Desktop Table */}
          <div className="hidden md:block">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative backdrop-blur-xl bg-black/40 border border-purple-500/20 rounded-2xl overflow-hidden shadow-2xl shadow-purple-500/10"
            >
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b border-purple-500/20">
                    <th className="p-6 bg-black/40 w-48 border-r border-purple-500/20">
                      <div className="text-lg font-bold text-transparent bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text">
                        Comparison
                      </div>
                    </th>
                    {comparisonData.map((option, index) => (
                      <th
                        key={index}
                        className={`p-6 ${
                          option.highlight
                            ? 'bg-gradient-to-br from-purple-500/10 to-pink-500/10'
                            : 'bg-black/40'
                        }`}
                      >
                        <div className="relative">
                          {option.highlight && (
                            <span className="absolute -top-3 right-0 px-3 py-1 text-xs bg-gradient-to-r from-purple-500 to-pink-500 rounded-full font-medium">
                              Developer Choice
                            </span>
                          )}
                          <div className="flex items-center justify-center gap-4 pt-6">
                            <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-2xl ${
                              option.highlight
                                ? 'bg-gradient-to-br from-purple-500/20 to-pink-500/20 border border-purple-500/30'
                                : 'bg-black/20 border border-purple-500/20'
                            }`}>
                              {option.icon}
                            </div>
                            <div>
                              <h3 className="text-lg font-bold text-white">{option.name}</h3>
                              <p className="text-sm text-gray-400">{option.subtitle}</p>
                            </div>
                          </div>
                        </div>
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-purple-500/20">
                  {[
                    { key: 'Technical Freedom', index: 0 },
                    { key: 'Market Entry', index: 1 },
                    { key: 'Revenue Model', index: 2 },
                    { key: 'Local Support', index: 3 },
                  ].map(({ key, index }) => (
                    <motion.tr
                      key={key}
                      variants={tableRowVariants}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                    >
                      <th className="p-6 bg-black/60 text-left border-r border-purple-500/20">
                        <div className="font-semibold text-gray-200">{key}</div>
                      </th>
                      {comparisonData.map((option, optionIndex) => {
                        const currentFeature = option.features[index]
                        return (
                          <td
                            key={optionIndex}
                            className={`p-6 relative ${
                              option.highlight
                                ? 'bg-gradient-to-br from-purple-500/10 to-pink-500/10'
                                : 'bg-black/40'
                            }`}
                          >
                            <div className="relative group">
                              <div className="flex flex-col items-center justify-center text-center space-y-2">
                                <div className={`flex items-center justify-center gap-2 ${
                                  currentFeature.status === 'best' ? 'text-emerald-400' :
                                  currentFeature.status === 'bad' ? 'text-red-400' :
                                  'text-yellow-400'
                                }`}>
                                  <div className={`w-6 h-6 rounded-lg flex items-center justify-center text-sm ${
                                    currentFeature.status === 'best' ? 'bg-emerald-500/10 border border-emerald-500/30' :
                                    currentFeature.status === 'bad' ? 'bg-red-500/10 border border-red-500/30' :
                                    'bg-yellow-500/10 border border-yellow-500/30'
                                  }`}>
                                    {currentFeature.status === 'best' ? '✓' :
                                     currentFeature.status === 'bad' ? '✕' :
                                     '⚠'}
                                  </div>
                                  <span className="text-sm font-medium">{currentFeature.value}</span>
                                </div>
                              </div>
                              {/* Tooltip */}
                              <div className="opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 absolute left-1/2 -translate-x-1/2 -translate-y-2 bottom-full mb-2 w-64 p-4 bg-black/95 backdrop-blur-lg rounded-xl border border-purple-500/20 text-sm text-gray-300 shadow-xl shadow-purple-500/10 z-50">
                                <div className="text-center space-y-2">
                                  <div className="font-semibold text-white/90">{currentFeature.label}</div>
                                  <div className="text-gray-300 leading-relaxed">{currentFeature.detail}</div>
                                </div>
                                <div className="absolute bottom-[-6px] left-1/2 -translate-x-1/2 w-3 h-3 bg-black/95 border-r border-b border-purple-500/20 transform rotate-45" />
                              </div>
                            </div>
                          </td>
                        )
                      })}
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </motion.div>
          </div>

          {/* Mobile Accordion */}
          <div className="md:hidden space-y-4">
            {comparisonData.map((option, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`backdrop-blur-xl rounded-xl border ${
                  option.highlight
                    ? 'border-purple-500/40 bg-gradient-to-br from-purple-500/10 to-pink-500/10'
                    : 'border-purple-500/20 bg-black/40'
                } shadow-lg shadow-purple-500/5`}
              >
                <div className="p-4">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className={`w-10 h-10 rounded-lg flex items-center justify-center text-xl ${
                        option.highlight
                          ? 'bg-gradient-to-br from-purple-500/20 to-pink-500/20 border border-purple-500/30'
                          : 'bg-black/20 border border-purple-500/20'
                      }`}>
                        {option.icon}
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-white">{option.name}</h3>
                        <p className="text-sm text-gray-400">{option.subtitle}</p>
                      </div>
                    </div>
                    {option.highlight && (
                      <span className="px-2 py-1 text-xs bg-gradient-to-r from-purple-500 to-pink-500 rounded-full font-medium">
                        Developer Choice
                      </span>
                    )}
                  </div>
                  <div className="space-y-3">
                    {option.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="border-t border-purple-500/20 pt-3">
                        <div className="space-y-2">
                          <div className="flex items-center justify-between">
                            <span className="text-sm font-medium text-gray-300">{feature.label}</span>
                            <div className={`flex items-center gap-2 ${
                              feature.status === 'best' ? 'text-emerald-400' :
                              feature.status === 'bad' ? 'text-red-400' :
                              'text-yellow-400'
                            }`}>
                              <div className={`w-6 h-6 rounded-lg flex items-center justify-center text-sm ${
                                feature.status === 'best' ? 'bg-emerald-500/10 border border-emerald-500/30' :
                                feature.status === 'bad' ? 'bg-red-500/10 border border-red-500/30' :
                                'bg-yellow-500/10 border border-yellow-500/30'
                              }`}>
                                {feature.status === 'best' ? '✓' :
                                 feature.status === 'bad' ? '✕' :
                                 '⚠'}
                              </div>
                              <span className="text-sm font-semibold">{feature.value}</span>
                            </div>
                          </div>
                          <p className="text-sm text-gray-400 leading-relaxed text-center">{feature.detail}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Comparison CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto my-16 relative"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-pink-500/10 to-purple-500/10 blur-3xl" />
          <div className="relative backdrop-blur-xl bg-black/40 rounded-2xl p-8 md:p-12 border border-purple-500/20 overflow-hidden group hover:border-purple-500/40 transition-all duration-500">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-transparent to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                  Thinking about entering the{' '}
                  <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent animate-gradient">
                    Chinese Market
                  </span>
                  ?
                </h3>
                <p className="text-gray-300 text-lg max-w-xl">
                  Whether you&apos;re just exploring your options or actively planning your entry, we can show you the revenue potential of your game and the best strategy to maximise success. Let&apos;s have a chat.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl font-semibold text-white transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20 group whitespace-nowrap"
                >
                  Schedule a Call
                  <svg
                    className="w-5 h-5 ml-2 transform transition-transform group-hover:translate-x-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Unique Features Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-4xl mx-auto mb-24"
        >
          <div className="flex items-center justify-center gap-6 mb-12">
            <div className="h-px w-24 bg-gradient-to-r from-transparent to-purple-500/50" />
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              className="relative"
            >
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
                <SparklesIcon className="w-8 h-8 text-purple-400" />
              </div>
            </motion.div>
            <div className="h-px w-24 bg-gradient-to-l from-transparent to-purple-500/50" />
          </div>

          <h3 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white via-purple-100 to-white bg-clip-text text-transparent">
            How we help you succeed
          </h3>
          <p className="text-gray-300 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto mb-16">
            We&apos;re committed to helping Western developers navigate and succeed in the Chinese gaming market through strategic partnerships and local expertise
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {uniqueFeatures.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-50px' }}
              variants={{
                hidden: { opacity: 0, y: 20, scale: 0.95 },
                visible: {
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  transition: {
                    type: 'spring',
                    duration: 0.8,
                    delay: index * 0.15,
                    bounce: 0.2,
                  },
                },
              }}
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-pink-500/10 to-purple-500/10 translate-y-1/2 blur-3xl rounded-2xl group-hover:translate-y-0 group-hover:scale-125 transition-all duration-700" />
              <div className="relative backdrop-blur-xl bg-black/40 border border-purple-500/20 rounded-2xl p-8 h-full transition-all duration-700 group-hover:border-purple-500/40 group-hover:translate-y-[-4px] group-hover:shadow-2xl group-hover:shadow-purple-500/20">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-transparent to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-2xl" />
                <div className="flex flex-col items-center text-center gap-4 mb-6">
                  <div className="relative flex-shrink-0">
                    <div className="absolute -inset-2 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-all duration-700 transform-gpu" />
                    <div className="relative flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-500/20 group-hover:border-purple-500/40 group-hover:scale-110 transition-all duration-700">
                      <motion.div
                        initial={{ scale: 0.8, rotate: -15 }}
                        whileInView={{ scale: 1, rotate: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl transform group-hover:scale-110 transition-transform duration-700 text-purple-400"
                        style={{ filter: 'hue-rotate(240deg) saturate(70%) brightness(150%)' }}
                      >
                        {feature.icon === 'trophy' ? '🏆' :
                         feature.icon === 'target' ? '🎯' :
                         feature.icon === 'shield' ? '🛡️' :
                         feature.icon === 'chart' ? '📈' :
                         feature.icon === 'check' ? '✅' :
                         '⭐'}
                      </motion.div>
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-transparent bg-gradient-to-r from-white via-purple-100 to-white bg-clip-text group-hover:from-purple-200 group-hover:via-white group-hover:to-purple-200 transition-all duration-700">
                    {feature.title}
                  </h3>
                </div>
                <p className="text-gray-300 text-base leading-relaxed group-hover:text-gray-200 transition-colors duration-500 min-h-[100px] mb-8 text-center">
                  {feature.description}
                </p>
                <div className="relative mt-auto pt-6 border-t border-purple-500/20">
                  <div className="flex items-center justify-center gap-4">
                    <span className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent group-hover:from-purple-300 group-hover:to-pink-300 transition-all duration-700">
                      {feature.stats.value}
                    </span>
                    <span className="text-base text-gray-400 group-hover:text-gray-300 transition-colors duration-500">
                      {feature.stats.label}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
