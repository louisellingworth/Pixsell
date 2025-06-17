'use client'

import { useState } from 'react'

export default function SurveyForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  
  return (
    <div className="w-full max-w-3xl mx-auto p-6 bg-black/50 backdrop-blur-lg rounded-xl border border-white/10 shadow-xl">
      <h2 className="text-2xl font-bold text-white mb-6">Game Developer Survey</h2>
      <p className="text-gray-300 mb-8">
        Please complete this short survey to help us understand your game publishing needs.
      </p>
      
      <form className="space-y-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-200 mb-1">
            Your Name
          </label>
          <input
            type="text"
            id="name"
            className="w-full px-4 py-3 bg-black/60 border border-gray-700 rounded-lg text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            placeholder="Enter your name"
          />
        </div>
        
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-200 mb-1">
            Email Address
          </label>
          <input
            type="email"
            id="email"
            className="w-full px-4 py-3 bg-black/60 border border-gray-700 rounded-lg text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            placeholder="Enter your email"
          />
        </div>
        
        <div>
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full py-3 px-6 text-white bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg font-medium transition-all duration-200 hover:from-purple-700 hover:to-blue-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-gray-900"
          >
            {isSubmitting ? 'Submitting...' : 'Submit Survey'}
          </button>
        </div>
      </form>
    </div>
  )
} 