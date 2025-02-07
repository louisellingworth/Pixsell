'use client'

import React from 'react'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import { motion } from 'framer-motion'
import CaseStudyPreview from '../components/success-stories/CaseStudyPreview'

const caseStudies = [
  {
    title: "Game Title XYZ's Successful China Launch",
    description: "We helped Game Title XYZ launch in China, resulting in 500,000 downloads and $1M in revenue within the first 6 months. Our co-publishing partner handled marketing and compliance, while we focused on localization and player engagement.",
    company: "Game Title XYZ",
    metrics: [
      {
        label: "Downloads",
        value: "500K"
      },
      {
        label: "Revenue",
        value: "$1M"
      }
    ],
    imageUrl: "/case-studies/game-xyz-hero.jpg",
    href: "/success-stories/game-xyz"
  },
  {
    title: "How We Helped Kluster Scale and Secure a Series A",
    description: "From operational chaos to securing $5M in Series A funding, discover how we transformed Kluster's business operations through AI-driven systems and strategic improvements.",
    company: "Kluster",
    metrics: [
      {
        label: "Series A Funding",
        value: "$5M"
      },
      {
        label: "Lead Quality",
        value: "3x"
      }
    ],
    imageUrl: "/case-studies/kluster-hero.jpg",
    href: "/success-stories/kluster"
  }
  // More case studies can be added here
]

export default function SuccessStoriesPage() {
  return (
    <main className="min-h-screen bg-[#0A0A0B] text-white overflow-x-hidden">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        {/* Background glow effects */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl" />
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
              Success Stories
            </h1>
            <p className="text-xl text-white/80 mb-8">
              Discover how we've helped Western game developers successfully enter and thrive in the Chinese market through our comprehensive publishing and localization services.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {caseStudies.map((study, index) => (
              <motion.div
                key={study.company}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <CaseStudyPreview {...study} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
} 
