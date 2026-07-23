'use client'

import { useState } from 'react'
import { submitLead } from '../lib/submitLead'

export default function SurveyForm() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      await submitLead({ ...formData, source: 'survey' })
      setSubmitStatus('success')
      setFormData({ name: '', email: '', message: '' })
    } catch {
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="w-full max-w-3xl mx-auto p-6 bg-black/50 backdrop-blur-lg rounded-xl border border-white/10 shadow-xl">
      <h2 className="text-2xl font-bold text-white mb-6">Game Developer Survey</h2>
      <p className="text-gray-300 mb-8">
        Please complete this short survey to help us understand your game publishing needs.
      </p>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-200 mb-1">
            Your Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-black/60 border border-gray-700 rounded-lg text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            placeholder="Enter your name"
            required
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-200 mb-1">
            Email Address
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-black/60 border border-gray-700 rounded-lg text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            placeholder="Enter your email"
            required
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-200 mb-1">
            Tell us about your game
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={4}
            className="w-full px-4 py-3 bg-black/60 border border-gray-700 rounded-lg text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            placeholder="Genre, platform, current status, and your goals for China"
          />
        </div>

        <div>
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full py-3 px-6 text-white bg-violet-600 rounded-lg font-medium transition-all duration-200 hover:bg-violet-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-gray-900 disabled:opacity-50"
          >
            {isSubmitting ? 'Submitting...' : 'Submit Survey'}
          </button>
        </div>

        {submitStatus === 'success' && (
          <p className="text-emerald-400 text-center">Thanks — we&apos;ll be in touch within 24 hours.</p>
        )}
        {submitStatus === 'error' && (
          <p className="text-red-400 text-center">Something went wrong. Please try again or email info@eightsixgames.com.</p>
        )}
      </form>
    </div>
  )
}
