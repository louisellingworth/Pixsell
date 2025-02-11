'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import GradientButton from './ui/GradientButton'
import ContactModal from './ui/ContactModal'

const Navigation = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [isContactModalOpen, setIsContactModalOpen] = useState(false)
  
  const navItems = [
    { name: 'Process', href: '/#process' },
    { name: 'Services', href: '/services' },
    { name: 'FAQ', href: '/#faq' }
  ]

  const menuItems = [
    { label: 'Home', href: '/' },
    { 
      label: 'Services', 
      href: '/services',
      submenu: [
        { label: 'Co-Publishing', href: '/services/co-publishing' },
        { label: 'Localization', href: '/services/localization' },
        { label: 'Marketing', href: '/services/marketing' },
        { label: 'Reporting', href: '/services/reporting' }
      ]
    },
    { label: 'FAQ', href: '/#faq' }
  ]

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50">
        <div className="backdrop-blur-md bg-black/30 border-b border-white/10">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="flex items-center justify-between h-16 sm:h-20">
              {/* Logo */}
              <Link 
                href="/"
                className="group relative flex items-center font-space-grotesk text-white font-bold text-2xl tracking-tight"
              >
                <span className="bg-gradient-to-r from-[#6366F1] via-[#8B5CF6] to-[#6366F1] bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient">
                  Pix
                </span>
                <span className="bg-gradient-to-r from-[#8B5CF6] via-[#6366F1] to-[#8B5CF6] bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient [animation-delay:0.2s]">
                  sell
                </span>
                <div className="absolute -inset-x-4 -inset-y-2 group-hover:bg-gradient-to-r from-[#6366F1]/10 via-[#8B5CF6]/10 to-[#6366F1]/10 rounded-lg transition-all duration-300 opacity-0 group-hover:opacity-100 blur-xl"></div>
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

                {/* Contact Button */}
                <button
                  onClick={() => setIsContactModalOpen(true)}
                  className="text-white/90 hover:text-blue-400 font-inter text-sm font-medium transition-colors duration-200"
                >
                  Contact
                </button>
              </div>

              {/* Mobile Menu Button */}
              <div className="md:hidden flex items-center space-x-4">
                <button
                  onClick={() => setIsContactModalOpen(true)}
                  className="text-white/90 hover:text-blue-400 font-inter text-sm font-medium transition-colors duration-200"
                >
                  Contact
                </button>
                <button 
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                  className="text-white hover:text-blue-400 transition-colors duration-200"
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
        </div>
      </nav>

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

      <ContactModal
        isOpen={isContactModalOpen}
        onClose={() => setIsContactModalOpen(false)}
      />
    </>
  )
}

export default Navigation 
