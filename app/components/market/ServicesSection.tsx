'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRightIcon } from '@heroicons/react/24/outline'
import { services } from '@/lib/market-data'

export default function ServicesSection() {
  return (
    <section className="container mx-auto px-4 relative mt-32">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Our{' '}
            <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent animate-gradient">
              Services
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Comprehensive solutions to ensure your success in the Chinese gaming market
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              <Link href={service.href}>
                <div className="backdrop-blur-xl bg-black/40 border border-purple-500/20 rounded-2xl p-8 h-full hover:border-purple-500/40 transition-all duration-500 relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-transparent to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />

                  <div className="flex items-start gap-6">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500/20 to-pink-500/20 flex items-center justify-center group-hover:scale-110 transition-all duration-500">
                      <service.icon className="w-6 h-6 text-purple-400" />
                    </div>

                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-white mb-4 group-hover:text-purple-400 transition-colors duration-300">
                        {service.title}
                      </h3>

                      <p className="text-gray-300 mb-6 group-hover:text-gray-200 transition-colors duration-300">
                        {service.description}
                      </p>

                      <div className="mb-6">
                        <h4 className="text-sm font-semibold text-purple-400 mb-3">Key Features</h4>
                        <ul className="space-y-2">
                          {service.primaryFeatures.map((feature, idx) => (
                            <li key={idx} className="text-gray-300 flex items-center gap-2">
                              <span className="w-1.5 h-1.5 rounded-full bg-purple-400" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="flex items-center justify-between pt-6 border-t border-purple-500/20">
                        <div className="flex items-center gap-2">
                          <span className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                            {service.stats.value}
                          </span>
                          <span className="text-sm text-gray-400">{service.stats.label}</span>
                        </div>
                        <div className="flex items-center text-purple-400 group-hover:text-pink-400 transition-colors duration-300">
                          <span className="mr-2">Learn more</span>
                          <ArrowRightIcon className="w-4 h-4" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
