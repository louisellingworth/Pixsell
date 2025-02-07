'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import GradientButton from './ui/GradientButton'

const Navigation = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  
  const navItems = [
    { name: 'Process', href: '/#process' },
    { name: 'Testimonials', href: '/#testimonials' },
    { name: 'Success Stories', href: '/success-stories' },
    { name: 'FAQ', href: '/#faq' }
  ]

  return (
    <div className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-auto">
      <nav className="px-4 py-2 bg-[#0F0F0F]/90 backdrop-blur-md rounded-lg border border-[#2E2E2E]">
        <div className="flex items-center justify-between space-x-6">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <div className="w-6 h-6 rounded-full bg-primary-500 transition-transform duration-200 hover:scale-110" />
            <span className="sr-only">Home</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-[15px] font-medium text-[#A1A1A1] hover:text-white transition-colors duration-200"
              >
                {item.name}
              </Link>
            ))}
            <GradientButton href="/survey" variant="compact">
              Get Price
            </GradientButton>
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <span className="sr-only">Open main menu</span>
              {mobileMenuOpen ? (
                <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full mt-2 bg-[#0F0F0F]/95 backdrop-blur-md rounded-lg border border-[#2E2E2E]">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block px-3 py-2 text-[15px] font-medium text-[#A1A1A1] hover:text-white hover:bg-white/5 rounded-md"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="px-2">
                <GradientButton 
                  href="/survey" 
                  variant="wide"
                  showArrow={false}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Get Price
                </GradientButton>
              </div>
            </div>
          </div>
        )}
      </nav>
    </div>
  )
}

export default Navigation 
