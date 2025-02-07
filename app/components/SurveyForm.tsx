'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'

interface SurveyData {
  hasOnlineBusiness: boolean | null
  monthlyRevenue: string | null
  firstName: string
  lastName: string
  phoneNumber: string
  email: string
  websiteUrl: string
}

interface ValidationErrors {
  email?: string
  phoneNumber?: string
  websiteUrl?: string
}

const steps = [
  'Business Type',
  'Revenue',
  'Contact Details'
]

// SVG Icons as components for better organization
const BusinessIcon = () => (
  <svg className="w-8 h-8 text-[#8A7FFB]" viewBox="0 0 24 24" fill="none" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </svg>
)

const PersonIcon = () => (
  <svg className="w-8 h-8 text-[#8A7FFB]" viewBox="0 0 24 24" fill="none" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
  </svg>
)

const revenueIcons = {
  'Under $6k': (
    <svg className="w-8 h-8 text-[#8A7FFB]" viewBox="0 0 24 24" fill="none" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
    </svg>
  ),
  '$6k to $12k': (
    <svg className="w-8 h-8 text-[#8A7FFB]" viewBox="0 0 24 24" fill="none" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
    </svg>
  ),
  '$12k to $30k': (
    <svg className="w-8 h-8 text-[#8A7FFB]" viewBox="0 0 24 24" fill="none" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 11l3-3m0 0l3 3m-3-3v8m0-13a9 9 0 110 18 9 9 0 010-18z" />
    </svg>
  ),
  '$30k to $50k': (
    <svg className="w-8 h-8 text-[#8A7FFB]" viewBox="0 0 24 24" fill="none" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
    </svg>
  ),
  '$50k to $100k': (
    <svg className="w-8 h-8 text-[#8A7FFB]" viewBox="0 0 24 24" fill="none" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
    </svg>
  ),
  '$100k+': (
    <svg className="w-8 h-8 text-[#8A7FFB]" viewBox="0 0 24 24" fill="none" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
    </svg>
  )
}

const validateEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

const validateUrl = (url: string): boolean => {
  if (!url) return true // Allow empty URL
  
  // Add http:// or https:// if not present
  const urlWithProtocol = url.match(/^https?:\/\//) ? url : `https://${url}`
  
  try {
    // Basic URL structure validation
    const urlPattern = /^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([/\w .-]*)*\/?$/
    return urlPattern.test(urlWithProtocol)
  } catch {
    return false
  }
}

export default function SurveyForm() {
  const router = useRouter()
  const [currentStep, setCurrentStep] = useState(1)
  const [formData, setFormData] = useState<SurveyData>({
    hasOnlineBusiness: null,
    monthlyRevenue: null,
    firstName: '',
    lastName: '',
    phoneNumber: '',
    email: '',
    websiteUrl: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [validationErrors, setValidationErrors] = useState<ValidationErrors>({})
  const [touched, setTouched] = useState({
    email: false,
    phoneNumber: false,
    websiteUrl: false
  })

  const progress = ((currentStep - 1) / (steps.length - 1)) * 100

  const handleYesNo = (value: boolean) => {
    setFormData(prev => ({ ...prev, hasOnlineBusiness: value }))
    setCurrentStep(2)
  }

  const handleRevenue = (value: string) => {
    setFormData(prev => ({ ...prev, monthlyRevenue: value }))
    setCurrentStep(3)
  }

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
    }
  }

  const handlePhoneChange = (value: string, country: any) => {
    setFormData(prev => ({ ...prev, phoneNumber: value }))
    setTouched(prev => ({ ...prev, phoneNumber: true }))
    
    if (value.length < 10) {
      setValidationErrors(prev => ({
        ...prev,
        phoneNumber: 'Phone number must be at least 10 digits'
      }))
    } else {
      setValidationErrors(prev => {
        const { phoneNumber, ...rest } = prev
        return rest
      })
    }
  }

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const email = e.target.value
    setFormData(prev => ({ ...prev, email }))
    setTouched(prev => ({ ...prev, email: true }))

    if (!validateEmail(email)) {
      setValidationErrors(prev => ({
        ...prev,
        email: 'Please enter a valid email address'
      }))
    } else {
      setValidationErrors(prev => {
        const { email, ...rest } = prev
        return rest
      })
    }
  }

  const handleUrlChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const url = e.target.value
    setFormData(prev => ({ ...prev, websiteUrl: url }))
    setTouched(prev => ({ ...prev, websiteUrl: true }))

    if (url && !validateUrl(url)) {
      setValidationErrors(prev => ({
        ...prev,
        websiteUrl: 'Please enter a valid website URL (e.g., www.example.com)'
      }))
    } else {
      setValidationErrors(prev => {
        const { websiteUrl, ...rest } = prev
        return rest
      })
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    // Validate all fields before submission
    const errors: ValidationErrors = {}
    if (!validateEmail(formData.email)) {
      errors.email = 'Please enter a valid email address'
    }
    if (formData.phoneNumber.length < 10) {
      errors.phoneNumber = 'Phone number must be at least 10 digits'
    }
    if (formData.websiteUrl && !validateUrl(formData.websiteUrl)) {
      errors.websiteUrl = 'Please enter a valid website URL'
    }

    if (Object.keys(errors).length > 0) {
      setValidationErrors(errors)
      setTouched({ email: true, phoneNumber: true, websiteUrl: true })
      return
    }

    if (isSubmitting) return

    setIsSubmitting(true)
    try {
      const response = await fetch('/api/survey', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const result = await response.json()

      if (!response.ok) {
        throw new Error(result.details || result.error || 'Failed to submit survey')
      }

      router.push('/survey/thank-you')
    } catch (error: any) {
      console.error('Error submitting survey:', error)
      // Create a toast notification component instead of using alert
      const errorMessage = error.message || 'Failed to submit survey. Please try again.'
      alert(errorMessage)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="bg-[#131316] rounded-xl border border-white/10 p-8 relative">
      {/* Progress Bar */}
      <div className="absolute top-0 left-0 w-full h-1 bg-white/5 rounded-t-xl overflow-hidden">
        <motion.div
          className="h-full bg-gradient-to-r from-[#8A7FFB] to-[#B4B0FF]"
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.5 }}
        />
      </div>

      {/* Step Indicators */}
      <div className="flex justify-between mb-12 relative">
        {steps.map((step, index) => (
          <div key={step} className="flex flex-col items-center relative">
            <div 
              className={`w-8 h-8 rounded-full flex items-center justify-center mb-2 transition-colors
                ${currentStep > index + 1 ? 'bg-[#8A7FFB]' : 
                  currentStep === index + 1 ? 'bg-gradient-to-r from-[#8A7FFB] to-[#B4B0FF]' : 
                  'bg-white/10'}`}
            >
              {currentStep > index + 1 ? (
                <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              ) : (
                <span className="text-sm text-white">{index + 1}</span>
              )}
            </div>
            <span className={`text-sm ${currentStep === index + 1 ? 'text-white' : 'text-white/60'}`}>
              {step}
            </span>
          </div>
        ))}
        {/* Progress Line */}
        <div className="absolute top-4 left-0 w-full h-[2px] bg-white/10 -z-10">
          <motion.div
            className="h-full bg-gradient-to-r from-[#8A7FFB] to-[#B4B0FF]"
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.5 }}
          />
        </div>
      </div>

      <AnimatePresence mode="wait">
        {currentStep === 1 && (
          <motion.div
            key="step1"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="space-y-6"
          >
            <h2 className="text-2xl font-semibold mb-6">Do you run an online business?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { value: true, label: 'Yes', Icon: BusinessIcon },
                { value: false, label: 'No', Icon: PersonIcon }
              ].map(({ value, label, Icon }) => (
                <motion.button
                  key={label}
                  onClick={() => handleYesNo(value)}
                  className="p-8 rounded-lg border border-white/10 hover:border-[#8A7FFB]/30 bg-white/5 hover:bg-white/10 transition-all group"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="flex flex-col items-center">
                    <div className="mb-4 transform group-hover:scale-110 transition-transform">
                      <Icon />
                    </div>
                    <div className="text-xl font-semibold group-hover:text-white/90">{label}</div>
                  </div>
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}

        {currentStep === 2 && (
          <motion.div
            key="step2"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="space-y-6"
          >
            <h2 className="text-2xl font-semibold mb-6">What's your current monthly revenue?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {Object.entries(revenueIcons).map(([value, icon]) => (
                <motion.button
                  key={value}
                  onClick={() => handleRevenue(value)}
                  className="p-8 rounded-lg border border-white/10 hover:border-[#8A7FFB]/30 bg-white/5 hover:bg-white/10 transition-all group"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="flex flex-col items-center">
                    <div className="mb-4 transform group-hover:scale-110 transition-transform">
                      {icon}
                    </div>
                    <div className="text-xl font-semibold group-hover:text-white/90">{value}</div>
                  </div>
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}

        {currentStep === 3 && (
          <motion.form
            key="step3"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            onSubmit={handleSubmit}
            className="space-y-6"
          >
            <h2 className="text-2xl font-semibold mb-6">
              Drop your contact details so that we can give you a personalized recommendation for your next steps.
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="firstName" className="block text-sm font-medium text-white/80 mb-2">
                  First name
                </label>
                <input
                  type="text"
                  id="firstName"
                  required
                  value={formData.firstName}
                  onChange={(e) => setFormData(prev => ({ ...prev, firstName: e.target.value }))}
                  className="w-full p-3 rounded-lg bg-white/5 border border-white/10 focus:border-white/20 focus:outline-none focus:ring-2 focus:ring-primary-500/20 text-white"
                />
              </div>
              <div>
                <label htmlFor="lastName" className="block text-sm font-medium text-white/80 mb-2">
                  Last name
                </label>
                <input
                  type="text"
                  id="lastName"
                  required
                  value={formData.lastName}
                  onChange={(e) => setFormData(prev => ({ ...prev, lastName: e.target.value }))}
                  className="w-full p-3 rounded-lg bg-white/5 border border-white/10 focus:border-white/20 focus:outline-none focus:ring-2 focus:ring-primary-500/20 text-white"
                />
              </div>
              <div>
                <label htmlFor="phoneNumber" className="block text-sm font-medium text-white/80 mb-2">
                  Phone number
                </label>
                <div className="relative">
                  <PhoneInput
                    country={'us'}
                    value={formData.phoneNumber}
                    onChange={handlePhoneChange}
                    inputClass="!w-full !h-12 !p-3 !pl-12 !rounded-lg !bg-white/5 !border !border-white/10 focus:!border-white/20 !outline-none focus:!ring-2 focus:!ring-primary-500/20 !text-white"
                    containerClass="!w-full"
                    buttonClass="!bg-white/5 !border-white/10 hover:!bg-white/10 !transition-colors !h-12 !-mr-[1px]"
                    dropdownClass="!bg-[#131316] !text-white"
                    searchClass="!bg-white/5 !text-white"
                    buttonStyle={{ backgroundColor: 'rgba(255, 255, 255, 0.05)' }}
                    inputStyle={{ height: '48px', lineHeight: '48px' }}
                  />
                  {touched.phoneNumber && validationErrors.phoneNumber && (
                    <p className="mt-1 text-sm text-red-400">{validationErrors.phoneNumber}</p>
                  )}
                </div>
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-white/80 mb-2">
                  Email
                </label>
                <div>
                  <input
                    type="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={handleEmailChange}
                    onBlur={() => setTouched(prev => ({ ...prev, email: true }))}
                    className="w-full p-3 rounded-lg bg-white/5 border border-white/10 focus:border-white/20 focus:outline-none focus:ring-2 focus:ring-primary-500/20 text-white"
                  />
                  {touched.email && validationErrors.email && (
                    <p className="mt-1 text-sm text-red-400">{validationErrors.email}</p>
                  )}
                </div>
              </div>
              <div className="col-span-2">
                <label htmlFor="websiteUrl" className="block text-sm font-medium text-white/80 mb-2">
                  Website URL {formData.hasOnlineBusiness ? '(required)' : '(optional)'}
                </label>
                <div>
                  <input
                    type="text"
                    id="websiteUrl"
                    placeholder="www.example.com"
                    required={formData.hasOnlineBusiness === true}
                    value={formData.websiteUrl}
                    onChange={handleUrlChange}
                    onBlur={() => setTouched(prev => ({ ...prev, websiteUrl: true }))}
                    className={`w-full p-3 rounded-lg bg-white/5 border focus:outline-none focus:ring-2 transition-colors
                      ${touched.websiteUrl && validationErrors.websiteUrl 
                        ? 'border-red-500/50 focus:border-red-500/50 focus:ring-red-500/20' 
                        : 'border-white/10 focus:border-white/20 focus:ring-primary-500/20'
                      }
                      text-white`}
                  />
                  {touched.websiteUrl && validationErrors.websiteUrl && (
                    <motion.p
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="mt-1 text-sm text-red-400 flex items-center gap-2"
                    >
                      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      {validationErrors.websiteUrl}
                    </motion.p>
                  )}
                </div>
              </div>
            </div>
            <div className="flex justify-between items-center mt-8">
              <button
                type="button"
                onClick={handleBack}
                className="px-6 py-2 text-white/80 hover:text-white transition-colors"
              >
                ← Back
              </button>
              <button
                type="submit"
                disabled={isSubmitting || Object.keys(validationErrors).length > 0}
                className="px-8 py-3 bg-gradient-to-r from-[#8A7FFB] to-[#B4B0FF] rounded-lg font-semibold text-white hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Submitting...' : 'Submit'}
              </button>
            </div>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  )
} 
