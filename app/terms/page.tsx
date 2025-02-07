'use client'

import { motion } from 'framer-motion'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'

export default function TermsAndConditionsPage() {
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
              Terms and Conditions
            </h1>
            <p className="text-xl text-white/80 mb-12">
              Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
            </p>

            <div className="prose prose-invert max-w-none">
              <section className="mb-12">
                <h2 className="text-2xl font-semibold mb-4">1. Agreement to Terms</h2>
                <p className="text-white/80 mb-4">
                  By accessing or using Systems That Scale's website and services, you agree to be bound by these Terms and Conditions. If you disagree with any part of these terms, you may not access our services.
                </p>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-semibold mb-4">2. Services</h2>
                <p className="text-white/80 mb-4">
                  Systems That Scale provides AI consulting and implementation services. We reserve the right to:
                </p>
                <ul className="list-disc pl-6 text-white/80 mb-4">
                  <li>Modify or withdraw our services without notice</li>
                  <li>Refuse service to anyone for any reason</li>
                  <li>Change our service fees upon notice</li>
                </ul>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-semibold mb-4">3. Intellectual Property</h2>
                <p className="text-white/80 mb-4">
                  The content on our website, including text, graphics, logos, and software, is the property of Systems That Scale and is protected by intellectual property laws. You may not:
                </p>
                <ul className="list-disc pl-6 text-white/80 mb-4">
                  <li>Use our content for commercial purposes without permission</li>
                  <li>Modify or copy our materials</li>
                  <li>Use any data mining or extraction methods</li>
                </ul>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-semibold mb-4">4. User Responsibilities</h2>
                <p className="text-white/80 mb-4">
                  When using our services, you agree to:
                </p>
                <ul className="list-disc pl-6 text-white/80 mb-4">
                  <li>Provide accurate information</li>
                  <li>Maintain the confidentiality of your account</li>
                  <li>Use our services legally and ethically</li>
                  <li>Not interfere with our services' security</li>
                </ul>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-semibold mb-4">5. Limitation of Liability</h2>
                <p className="text-white/80 mb-4">
                  Systems That Scale shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use or inability to use our services.
                </p>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-semibold mb-4">6. Termination</h2>
                <p className="text-white/80 mb-4">
                  We may terminate or suspend your access to our services immediately, without prior notice, for:
                </p>
                <ul className="list-disc pl-6 text-white/80 mb-4">
                  <li>Breach of these Terms</li>
                  <li>Fraudulent or illegal activities</li>
                  <li>Non-payment of fees</li>
                </ul>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-semibold mb-4">7. Changes to Terms</h2>
                <p className="text-white/80 mb-4">
                  We reserve the right to modify these terms at any time. We will notify users of any material changes via email or through our website.
                </p>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-semibold mb-4">8. Contact Information</h2>
                <p className="text-white/80 mb-4">
                  For questions about these Terms and Conditions, please contact us at:
                </p>
                <p className="text-white/80">
                  Email: legal@systemsthatscale.com<br />
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
