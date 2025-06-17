'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'

export default function PublisherMatchingContent() {
  const benefits = [
    {
      title: "Extensive Network",
      description: "Access to our network of 50+ trusted Chinese publishers across all game genres",
    },
    {
      title: "Perfect Match",
      description: "Strategic partner matching based on your game's genre, style, and business goals",
    },
    {
      title: "Negotiation Support",
      description: "Expert guidance throughout the negotiation process to secure optimal terms",
    },
    {
      title: "Long-term Success",
      description: "Ongoing relationship management and support for sustainable partnerships",
    },
  ]

  const process = [
    {
      step: "1",
      title: "Publisher Analysis",
      description: "We evaluate potential publishers based on your specific requirements"
    },
    {
      step: "2",
      title: "Initial Introductions",
      description: "Facilitate meetings with selected publishing partners"
    },
    {
      step: "3",
      title: "Proposal Review",
      description: "Analyse and compare partnership proposals"
    },
    {
      step: "4",
      title: "Partnership Launch",
      description: "Finalise agreements and begin the collaboration"
    }
  ]

  const successMetrics = [
    {
      value: "50+",
      label: "Publisher Partners",
      description: "Trusted relationships with China's top publishers"
    },
    {
      value: "95%",
      label: "Success Rate",
      description: "Of games successfully matched with ideal partners"
    },
    {
      value: "100M+",
      label: "Revenue Generated",
      description: "Through our publisher partnerships"
    }
  ]

  return (
    <div className="min-h-screen py-32 relative">
      <div className="max-w-7xl mx-auto px-4">
        {/* Hero Section */}
        <div className="text-center mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
                Publisher Matching
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-white/60 max-w-3xl mx-auto">
              Connect with the perfect Chinese publishing partner for your game's success
            </p>
          </motion.div>
        </div>

        {/* Success Metrics */}
        <div className="mb-24">
          <div className="grid md:grid-cols-3 gap-8">
            {successMetrics.map((metric, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 sm:p-8 text-center"
              >
                <div className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent mb-2">
                  {metric.value}
                </div>
                <div className="text-lg sm:text-xl font-medium text-white mb-2">{metric.label}</div>
                <p className="text-white/60">{metric.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Benefits Section */}
        <div className="mb-24">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">
            <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
              Key Benefits
            </span>
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 sm:p-8"
              >
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-4">{benefit.title}</h3>
                <p className="text-white/60">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
                Find Your Perfect Match
              </span>
            </h2>
            <p className="text-lg sm:text-xl text-white/60 mb-8 max-w-2xl mx-auto">
              Let us connect you with the ideal Chinese publishing partner for your game
            </p>
            <Link
              href="/contact"
              className="inline-block px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-xl hover:opacity-90 transition-all"
            >
              Start Matching Process
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  )
} 