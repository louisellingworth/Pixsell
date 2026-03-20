'use client'

import { motion } from 'framer-motion'
import { useState, useRef, FormEvent } from 'react'
import { ArrowRightIcon } from '@heroicons/react/24/outline'
import { SectionProps } from './types'

export const CtaSection = ({ registerSectionRef }: SectionProps) => {
  const formRef = useRef<HTMLFormElement>(null)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submissionStatus, setSubmissionStatus] = useState<'idle' | 'success' | 'error'>('idle')
  
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulating form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setSubmissionStatus('success')
      
      // Reset form
      if (formRef.current) {
        formRef.current.reset()
      }
      
      // Reset status after 5 seconds
      setTimeout(() => {
        setSubmissionStatus('idle')
      }, 5000)
    }, 1500)
  }
  
  return (
    <section 
      ref={registerSectionRef('contact')}
      id="contact"
      className="section container-wide relative z-10"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px 0px" }}
          transition={{ duration: 1.4 }}
          className="space-y-6"
        >
          <h2 className="section-title text-left">
            Ready to Launch in China?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-xl">
            Join the developers who are seeing record growth in the world's largest gaming market.
          </p>
          
          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <div className="bg-purple-500/20 p-3 rounded-lg text-purple-400">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Full Compliance</h3>
                <p className="text-gray-300">We handle all regulatory requirements and ensure your game meets local standards.</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="bg-purple-500/20 p-3 rounded-lg text-purple-400">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Marketing Success</h3>
                <p className="text-gray-300">Our specialized marketing strategies reach and engage with Chinese players effectively.</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="bg-purple-500/20 p-3 rounded-lg text-purple-400">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Revenue Maximization</h3>
                <p className="text-gray-300">Optimize your monetization strategy specifically for the Chinese market.</p>
              </div>
            </div>
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px 0px" }}
          transition={{ duration: 2.5, delay: 0.2 }}
        >
          <form 
            ref={formRef}
            onSubmit={handleSubmit}
            className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 shadow-xl"
          >
            <h3 className="text-2xl font-semibold mb-6">Get in touch</h3>
            
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">Your Name</label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-3 bg-black/40 border border-white/10 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                placeholder="Jane Smith"
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">Email Address</label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-3 bg-black/40 border border-white/10 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                placeholder="jane@yourstudio.com"
              />
            </div>
            
            <div>
              <label htmlFor="company" className="block text-sm font-medium text-gray-300 mb-1">Company / Studio</label>
              <input
                type="text"
                id="company"
                className="w-full px-4 py-3 bg-black/40 border border-white/10 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                placeholder="Awesome Games Inc."
              />
            </div>
            
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">Tell us about your game</label>
              <textarea
                id="message"
                rows={4}
                className="w-full px-4 py-3 bg-black/40 border border-white/10 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                placeholder="A brief description of your game, current status, and what you're looking to achieve in China."
              />
            </div>
            
            <div className="mt-8">
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full btn btn-primary rounded-xl px-8 py-4 text-base font-semibold flex items-center justify-center transition-all duration-300 ${
                  isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
                }`}
              >
                {isSubmitting ? (
                  <span className="flex items-center">
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Processing...
                  </span>
                ) : submissionStatus === 'success' ? (
                  <span className="flex items-center">
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    Message Sent!
                  </span>
                ) : (
                  <span className="flex items-center">
                    Send Message
                    <ArrowRightIcon className="ml-2 h-5 w-5" />
                  </span>
                )}
              </button>
            </div>
            
            <p className="text-xs text-gray-400 text-center mt-4">
              We'll get back to you within 24 hours to schedule a consultation.
            </p>
          </form>
        </motion.div>
      </div>
    </section>
  )
} 