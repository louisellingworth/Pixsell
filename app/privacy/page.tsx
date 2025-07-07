'use client'

import { motion } from 'framer-motion'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-[#0A0A0B] text-white">
      {/* Fixed Navigation */}
      <div 
        className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-xl border-b border-white/5"
        style={{ 
          transform: 'translateZ(0)',
          willChange: 'transform',
          contain: 'layout paint style'
        }}
      >
        <Navigation />
      </div>
      
      {/* Spacer to prevent content from being hidden behind the fixed navbar */}
      <div className="h-12 md:h-16"></div>
      
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        {/* Background glow effects */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl" />
        </div>

        {/* Content */}
        <div className="relative z-10 container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent animate-gradient">
              Privacy Policy
            </h1>
            <p className="text-xl text-purple-200/80 mb-12">
              Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
            </p>

            <div className="prose prose-invert max-w-none space-y-8">
              <section className="relative backdrop-blur-xl bg-black/40 border border-purple-500/20 rounded-2xl p-8 transition-all duration-300 hover:border-purple-500/40 group">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-transparent to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-2xl" />
                <h2 className="text-2xl font-semibold mb-4 text-purple-200">1. Introduction</h2>
                <p className="text-white/80 mb-4">
                  Welcome to Pixsell Games! We're committed to protecting your privacy while providing you with an amazing gaming experience. This Privacy Policy explains how we collect, use, and protect your information when you play our games or use our services.
                </p>
              </section>

              <section className="relative backdrop-blur-xl bg-black/40 border border-purple-500/20 rounded-2xl p-8 transition-all duration-300 hover:border-purple-500/40 group">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-transparent to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-2xl" />
                <h2 className="text-2xl font-semibold mb-4 text-purple-200">2. Information We Collect</h2>
                <h3 className="text-xl font-semibold mb-3 text-purple-300">2.1 Game-Related Information</h3>
                <p className="text-white/80 mb-4">
                  When you play our games, we may collect:
                </p>
                <ul className="list-disc pl-6 text-white/80 mb-4 space-y-2">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-purple-400" />
                    Game progress and achievements
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-purple-400" />
                    In-game purchases and transaction history
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-purple-400" />
                    Gaming preferences and settings
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-purple-400" />
                    Player username and profile information
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-purple-400" />
                    Game performance and interaction data
                  </li>
                </ul>

                <h3 className="text-xl font-semibold mb-3 text-purple-300">2.2 Technical Information</h3>
                <p className="text-white/80 mb-4">
                  To ensure optimal gaming experience, we automatically collect:
                </p>
                <ul className="list-disc pl-6 text-white/80 mb-4 space-y-2">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-purple-400" />
                    Device information (type, model, operating system)
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-purple-400" />
                    IP address and general location
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-purple-400" />
                    Connection quality and performance metrics
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-purple-400" />
                    Crash reports and debugging information
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-purple-400" />
                    Gaming session duration and frequency
                  </li>
                </ul>
              </section>

              <section className="relative backdrop-blur-xl bg-black/40 border border-purple-500/20 rounded-2xl p-8 transition-all duration-300 hover:border-purple-500/40 group">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-transparent to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-2xl" />
                <h2 className="text-2xl font-semibold mb-4 text-purple-200">3. How We Use Your Information</h2>
                <p className="text-white/80 mb-4">
                  We use your information to:
                </p>
                <ul className="list-disc pl-6 text-white/80 mb-4 space-y-2">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-purple-400" />
                    Provide and improve our games and services
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-purple-400" />
                    Personalize your gaming experience
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-purple-400" />
                    Process in-game purchases and rewards
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-purple-400" />
                    Prevent cheating and ensure fair gameplay
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-purple-400" />
                    Send game updates and important notifications
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-purple-400" />
                    Provide player support and resolve issues
                  </li>
                </ul>
              </section>

              <section className="relative backdrop-blur-xl bg-black/40 border border-purple-500/20 rounded-2xl p-8 transition-all duration-300 hover:border-purple-500/40 group">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-transparent to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-2xl" />
                <h2 className="text-2xl font-semibold mb-4 text-purple-200">4. Data Security</h2>
                <p className="text-white/80 mb-4">
                  We take game security seriously and use industry-standard measures to protect your data. This includes encryption of sensitive information, secure server infrastructure, and regular security audits. While we implement strong security measures, please be aware that no online service is entirely immune to security risks.
                </p>
              </section>

              <section className="relative backdrop-blur-xl bg-black/40 border border-purple-500/20 rounded-2xl p-8 transition-all duration-300 hover:border-purple-500/40 group">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-transparent to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-2xl" />
                <h2 className="text-2xl font-semibold mb-4 text-purple-200">5. Children's Privacy</h2>
                <p className="text-white/80 mb-4">
                  We are committed to protecting children's privacy. Our games are designed for players aged 13 and above. We do not knowingly collect personal information from children under 13. If you believe we have inadvertently collected such information, please contact us immediately.
                </p>
              </section>

              <section className="relative backdrop-blur-xl bg-black/40 border border-purple-500/20 rounded-2xl p-8 transition-all duration-300 hover:border-purple-500/40 group">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-transparent to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-2xl" />
                <h2 className="text-2xl font-semibold mb-4 text-purple-200">6. Your Gaming Rights</h2>
                <p className="text-white/80 mb-4">
                  As a Pixsell player, you have the right to:
                </p>
                <ul className="list-disc pl-6 text-white/80 mb-4 space-y-2">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-purple-400" />
                    Access your game data and profile information
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-purple-400" />
                    Request correction of inaccurate data
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-purple-400" />
                    Delete your game account and associated data
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-purple-400" />
                    Opt-out of non-essential communications
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-purple-400" />
                    Control your privacy settings in-game
                  </li>
                </ul>
              </section>

              <section className="relative backdrop-blur-xl bg-black/40 border border-purple-500/20 rounded-2xl p-8 transition-all duration-300 hover:border-purple-500/40 group">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-transparent to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-2xl" />
                <h2 className="text-2xl font-semibold mb-4 text-purple-200">7. Contact Us</h2>
                <p className="text-white/80 mb-4">
                  If you have any questions about your privacy while playing our games, please reach out to us at:
                </p>
                <p className="text-purple-300">
                  Email: privacy@pixsellgames.com<br />
Support: support@pixsellgames.com
                </p>
              </section>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
} 
