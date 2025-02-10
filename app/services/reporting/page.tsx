'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Navigation from '../../components/Navigation'
import Footer from '../../components/Footer'
import { CardSpotlight } from '../../components/ui/card-spotlight'
import GradientButton from '../../components/ui/GradientButton'

const features = [
  {
    title: "Regular Check-ins",
    description: "Scheduled meetings to discuss campaign performance, market trends, and strategic adjustments."
  },
  {
    title: "Performance Analytics",
    description: "Detailed reports on user acquisition, retention, and revenue metrics across all channels."
  },
  {
    title: "Market Insights",
    description: "Stay informed about Chinese market trends, competitor analysis, and growth opportunities."
  },
  {
    title: "Campaign Tracking",
    description: "Track the effectiveness of marketing campaigns, influencer partnerships, and community initiatives."
  }
]

export default function ReportingPage() {
  return (
    <main className="min-h-screen bg-[#0A0A0B] text-white overflow-x-hidden">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        {/* Background glow effects */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#B4C6EF]/10 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#B4C6EF]/10 rounded-full blur-3xl" />
        </div>

        {/* Content */}
        <div className="relative z-10 container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-[#8A7FFB] to-[#B4B0FF] bg-clip-text text-transparent">
              Reporting & Analytics
            </h1>
            <p className="text-xl text-white/80 mb-8">
              Stay informed with regular check-ins and comprehensive reports on your game's performance in China.
            </p>
            <GradientButton href="/contact" className="text-lg px-8 py-4">
              Schedule a Call →
            </GradientButton>
          </motion.div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <CardSpotlight className="h-full p-8">
                  <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                  <p className="text-white/80">{feature.description}</p>
                </CardSpotlight>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What You Get Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8">What You Get</h2>
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-[#B4C6EF] flex items-center justify-center flex-shrink-0">1</div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Monthly Performance Reports</h3>
                  <p className="text-white/80">Comprehensive reports covering user metrics, revenue data, and campaign performance.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-[#B4C6EF] flex items-center justify-center flex-shrink-0">2</div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Bi-weekly Check-ins</h3>
                  <p className="text-white/80">Regular meetings to discuss progress, address concerns, and adjust strategies as needed.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-[#B4C6EF] flex items-center justify-center flex-shrink-0">3</div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Real-time Updates</h3>
                  <p className="text-white/80">Immediate notifications about important developments or opportunities in the Chinese market.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
} 