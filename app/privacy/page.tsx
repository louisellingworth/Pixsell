'use client'

import { motion } from 'framer-motion'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-[#0A0A0B] text-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        {/* Background glow effects */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl" />
        </div>

        {/* Content */}
        <div className="relative z-10 container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-[#8A7FFB] to-[#B4B0FF] bg-clip-text text-transparent">
              Privacy Policy
            </h1>
            <p className="text-xl text-white/80 mb-12">
              Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
            </p>

            <div className="prose prose-invert max-w-none">
              <section className="mb-12">
                <h2 className="text-2xl font-semibold mb-4">1. Introduction</h2>
                <p className="text-white/80 mb-4">
                  At Systems That Scale, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
                </p>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-semibold mb-4">2. Information We Collect</h2>
                <h3 className="text-xl font-semibold mb-3">2.1 Personal Information</h3>
                <p className="text-white/80 mb-4">
                  We may collect personal information that you voluntarily provide to us when you:
                </p>
                <ul className="list-disc pl-6 text-white/80 mb-4">
                  <li>Fill out forms on our website</li>
                  <li>Create an account</li>
                  <li>Subscribe to our newsletter</li>
                  <li>Request a consultation</li>
                  <li>Contact us for support</li>
                </ul>

                <h3 className="text-xl font-semibold mb-3">2.2 Automatically Collected Information</h3>
                <p className="text-white/80 mb-4">
                  When you visit our website, we automatically collect certain information about your device, including:
                </p>
                <ul className="list-disc pl-6 text-white/80 mb-4">
                  <li>IP address</li>
                  <li>Browser type</li>
                  <li>Operating system</li>
                  <li>Pages visited</li>
                  <li>Time and date of visits</li>
                </ul>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-semibold mb-4">3. How We Use Your Information</h2>
                <p className="text-white/80 mb-4">
                  We use the information we collect to:
                </p>
                <ul className="list-disc pl-6 text-white/80 mb-4">
                  <li>Provide and maintain our services</li>
                  <li>Improve our website and user experience</li>
                  <li>Communicate with you about our services</li>
                  <li>Send you marketing and promotional materials (with your consent)</li>
                  <li>Analyze usage patterns and trends</li>
                  <li>Protect against unauthorized access</li>
                </ul>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-semibold mb-4">4. Data Security</h2>
                <p className="text-white/80 mb-4">
                  We implement appropriate technical and organizational security measures to protect your personal information. However, no method of transmission over the Internet is 100% secure, and we cannot guarantee absolute security.
                </p>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-semibold mb-4">5. Your Rights</h2>
                <p className="text-white/80 mb-4">
                  You have the right to:
                </p>
                <ul className="list-disc pl-6 text-white/80 mb-4">
                  <li>Access your personal information</li>
                  <li>Correct inaccurate information</li>
                  <li>Request deletion of your information</li>
                  <li>Object to processing of your information</li>
                  <li>Withdraw consent</li>
                </ul>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-semibold mb-4">6. Contact Us</h2>
                <p className="text-white/80 mb-4">
                  If you have any questions about this Privacy Policy, please contact us at:
                </p>
                <p className="text-white/80">
                  Email: privacy@systemsthatscale.com<br />
                  Address: [Your Business Address]
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
