'use client'

import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import FloatingConsultButton from '../components/FloatingConsultButton'
import { BackgroundBeams } from '../components/ui/BackgroundBeams'
import { motion } from 'framer-motion'

const services = [
  {
    title: "Co-Publishing Solutions",
    description: "Partner with us to bring your game to the Chinese market. Our co-publishing service ensures your game reaches the right audience while maintaining the highest publishing standards.",
    features: ["Publisher Partnerships", "Market Strategy", "Revenue Optimization", "Launch Support"],
    link: "/services/co-publishing"
  },
  {
    title: "Marketing & Promotion",
    description: "Reach Chinese gamers through strategic marketing campaigns. Our expertise in local platforms and influencer networks helps your game stand out.",
    features: ["KOL Partnerships", "Social Media Strategy", "Platform Optimization", "Community Building"],
    link: "/services/marketing"
  },
  {
    title: "Localization Services",
    description: "Adapt your game for Chinese players with our comprehensive localization services. We ensure cultural authenticity while maintaining your game's core appeal.",
    features: ["Cultural Adaptation", "Text Translation", "Asset Localization", "Quality Assurance"],
    link: "/services/localization"
  },
  {
    title: "Analytics & Reporting",
    description: "Make data-driven decisions with our comprehensive analytics and reporting tools. Track your game's performance and understand your audience better.",
    features: ["Real-time Analytics", "Performance Metrics", "Market Insights", "Regular Updates"],
    link: "/services/reporting"
  }
]

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-[#0A0A0B] text-white overflow-x-hidden relative">
      <Navigation />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 relative z-10">
        <div className="text-center mb-20">
          <h1 className="text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-cyan-500">
            Our Services
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Discover how we can help you maximize the impact of your academic publications
            through our comprehensive suite of services.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-8 hover:bg-gray-800/50 transition-all duration-300"
            >
              <h3 className="text-2xl font-semibold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
                {service.title}
              </h3>
              <p className="text-gray-400 mb-6">
                {service.description}
              </p>
              <ul className="space-y-2 mb-6">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center text-gray-300">
                    <svg
                      className="w-5 h-5 mr-2 text-cyan-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
              <a
                href={service.link}
                className="inline-block bg-gradient-to-r from-purple-500 to-cyan-500 text-white font-semibold px-6 py-2 rounded-lg hover:opacity-90 transition-opacity"
              >
                Learn More
              </a>
            </motion.div>
          ))}
        </div>
      </div>

      <BackgroundBeams />
      <Footer />
      <FloatingConsultButton />
    </main>
  )
} 