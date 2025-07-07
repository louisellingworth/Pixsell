'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import Navigation from '../components/Navigation'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    gameTitle: '',
    message: ''
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false)
      setSubmitStatus('success')
      
      // Reset form after successful submission
      setFormData({
        name: '',
        email: '',
        company: '',
        gameTitle: '',
        message: ''
      })
    }, 1500)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  return (
    <div className="min-h-screen py-32 relative">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'ContactPage',
        name: 'Contact Pixsell Games',
        description: 'Contact Pixsell Games to discuss your project, get expert advice, or start your journey to publishing success in China.',
        url: 'https://pixsell.games/contact',
        publisher: {
          '@type': 'Organization',
          name: 'Pixsell Games',
          logo: {
            '@type': 'ImageObject',
            url: 'https://pixsell.games/favicon_io/android-chrome-192x192.png'
          }
        }
      })}} />
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

      {/* Background Effects */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-[#0A0A0B]" />
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black/50 to-black" />
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.3, 0.2] 
          }} 
          transition={{ 
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut" 
          }}
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full filter blur-[100px]" 
        />
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.3, 0.2] 
          }} 
          transition={{ 
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2 
          }}
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-br from-pink-500/20 to-purple-500/20 rounded-full filter blur-[100px]" 
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-purple-400 bg-clip-text text-transparent animate-gradient">
              Get in Touch
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Ready to explore opportunities in the Chinese gaming market? We're here to help you navigate your journey to success.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="backdrop-blur-xl bg-black/40 rounded-2xl p-8 border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-white mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-purple-500/10 border border-purple-500/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-purple-500/40 transition-colors"
                  placeholder="Your name"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-white mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-purple-500/10 border border-purple-500/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-purple-500/40 transition-colors"
                  placeholder="your@email.com"
                  required
                />
              </div>

              <div>
                <label htmlFor="company" className="block text-white mb-2">Company</label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-purple-500/10 border border-purple-500/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-purple-500/40 transition-colors"
                  placeholder="Your company name"
                />
              </div>

              <div>
                <label htmlFor="gameTitle" className="block text-white mb-2">Game Title</label>
                <input
                  type="text"
                  id="gameTitle"
                  name="gameTitle"
                  value={formData.gameTitle}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-purple-500/10 border border-purple-500/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-purple-500/40 transition-colors"
                  placeholder="Your game's title"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-white mb-2">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 bg-purple-500/10 border border-purple-500/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-purple-500/40 transition-colors"
                  placeholder="Tell us about your project and goals"
                  required
                />
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-8 py-4 bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500 text-white rounded-xl font-medium disabled:opacity-50 group relative overflow-hidden"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "100%" }}
                  transition={{ duration: 0.7 }}
                />
              </motion.button>

              {submitStatus === 'success' && (
                <p className="text-emerald-400 text-center">Message sent successfully!</p>
              )}
              {submitStatus === 'error' && (
                <p className="text-red-400 text-center">Error sending message. Please try again.</p>
              )}
            </form>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-8"
          >
            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="backdrop-blur-xl bg-black/40 rounded-2xl p-8 border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300"
            >
              <h3 className="text-2xl font-bold text-white mb-4">Contact Information</h3>
              <div className="space-y-4">
                <div>
                  <p className="text-gray-400">Email</p>
                  <a href="mailto:info@pixsellgames.com" className="text-purple-400 hover:text-purple-300 transition-colors">
                    info@pixsellgames.com
                  </a>
                </div>
                <div>
                  <p className="text-gray-400">Location</p>
                  <p className="text-white">Sydney, Australia</p>
                </div>
              </div>
            </motion.div>

            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="backdrop-blur-xl bg-black/40 rounded-2xl p-8 border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300"
            >
              <h3 className="text-2xl font-bold text-white mb-4">Office Hours</h3>
              <div className="space-y-4">
                <div>
                  <p className="text-purple-400 font-medium">Sydney (AEST/AEDT)</p>
                  <p className="text-white">9:00 AM - 6:00 PM</p>
                </div>
                <div>
                  <p className="text-purple-400 font-medium">China (CST)</p>
                  <p className="text-white">7:00 AM - 4:00 PM</p>
                </div>
                <div>
                  <p className="text-purple-400 font-medium">London (BST/GMT)</p>
                  <p className="text-white">6:00 AM - 11:00 AM</p>
                </div>
                <p className="text-sm text-gray-400 mt-4">
                  Monday - Friday
                </p>
              </div>
            </motion.div>

            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="backdrop-blur-xl bg-black/40 rounded-2xl p-8 border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300"
            >
              <h3 className="text-2xl font-bold text-white mb-4">Quick Response</h3>
              <p className="text-gray-300">
                We aim to respond to all inquiries within 24 hours during business days. For urgent matters, please indicate in your message.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  )
} 