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

  const menuItems = [
    { label: 'Home', href: '/' },
    { 
      label: 'Services', 
      href: '/services',
      submenu: [
        { label: 'Co-Publishing', href: '/services/co-publishing' },
        { label: 'Localisation', href: '/services/localisation' },
        { label: 'Marketing', href: '/services/marketing' },
        // Add other services here as needed
      ]
    },
    { label: 'Testimonials', href: '/testimonials' },
    { label: 'Case Studies', href: '/case-studies' },
    { label: 'FAQ', href: '/faq' },
    { label: 'Contact', href: '/contact' }
  ]

  return (
    <nav className="fixed top-0 left-0 right-0 z-50">
      <div className="backdrop-blur-md bg-black/30 border-b border-white/10">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-16 sm:h-20">
            {/* Logo */}
            <Link 
              href="/"
              className="relative text-white font-inter text-xl font-bold transition-colors duration-200
                after:content-[''] after:absolute after:inset-0 after:-z-10 
                after:bg-gradient-to-r after:from-[#fc00ff]/20 after:to-[#00dbde]/20
                after:blur-[10px] after:opacity-0 hover:after:opacity-100
                after:transition-all after:duration-300"
            >
              Pixsell
            </Link>

            {/* Navigation Links */}
            <div className="hidden md:flex items-center space-x-8">
              {menuItems.map((item) => (
                <div key={item.label} className="relative group">
                  <Link
                    href={item.href}
                    className="text-white/90 hover:text-blue-400 font-inter text-sm font-medium transition-colors duration-200"
                  >
                    {item.label}
                  </Link>
                  
                  {/* Submenu */}
                  {item.submenu && (
                    <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-black/90 backdrop-blur-md border border-white/10 opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-200">
                      {item.submenu.map((subItem) => (
                        <Link
                          key={subItem.label}
                          href={subItem.href}
                          className="block px-4 py-2 text-sm text-white/90 hover:text-blue-400 hover:bg-white/5 transition-colors duration-200"
                        >
                          {subItem.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden text-white hover:text-blue-400 transition-colors duration-200"
            >
              {mobileMenuOpen ? (
                <XMarkIcon className="h-6 w-6" />
              ) : (
                <Bars3Icon className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-black/95 backdrop-blur-md border-b border-white/10">
          <div className="container mx-auto px-4 py-4">
            {menuItems.map((item) => (
              <div key={item.label}>
                <Link
                  href={item.href}
                  className="block py-2 text-white/90 hover:text-blue-400 font-inter text-sm font-medium transition-colors duration-200"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
                {item.submenu && (
                  <div className="pl-4 space-y-2">
                    {item.submenu.map((subItem) => (
                      <Link
                        key={subItem.label}
                        href={subItem.href}
                        className="block py-2 text-white/70 hover:text-blue-400 font-inter text-sm transition-colors duration-200"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {subItem.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navigation 
