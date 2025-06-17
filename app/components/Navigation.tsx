'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import GradientButton from './ui/GradientButton'

// Navigation items with services submenu
const navItems = [
  { name: 'Home', href: '/' },
  { 
    name: 'Services', 
    href: '/services',
    submenu: [
      { name: 'Co-Publishing', href: '/services/co-publishing' },
      { name: 'Localisation', href: '/services/localisation' },
      { name: 'Marketing', href: '/services/marketing' },
      { name: 'How we Deliver', href: '/services/partnership' }
    ]
  },
  { name: 'About', href: '/about' },
  { name: 'Blog', href: '/blog' },
  { name: 'Contact', href: '/contact' },
]

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Basic scroll handler
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Toggle menu
  function toggleMobileMenu() {
    setMobileMenuOpen(!mobileMenuOpen);
  }

  // Close menu on window resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Lock body scroll when menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  return (
    <nav className={`fixed top-0 left-0 right-0 w-full px-4 sm:px-6 lg:px-8 backdrop-blur-xl bg-black/80 border-b border-purple-500/10 z-50 transition-all duration-300 ${scrolled ? 'py-1' : 'py-2 sm:py-3'}`}>
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <img 
            src="/Pixsell Logo.png" 
            alt="Pixsell" 
            className="h-24 md:h-32 w-auto" 
            style={{ 
              objectFit: 'cover',
              objectPosition: 'center',
              width: 'auto',
              maxWidth: 'none',
              marginTop: '-0.75rem',
              marginBottom: '-0.75rem'
            }}
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <div key={item.name} className="relative group">
              <Link
                href={item.href}
                className="text-gray-300 hover:text-white text-sm font-medium hover:bg-white/5 px-3 py-2 rounded-lg transition-colors duration-200 flex items-center"
              >
                {item.name}
                {item.submenu && (
                  <svg 
                    className="w-4 h-4 ml-1" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24" 
                    aria-hidden="true"
                    width="16"
                    height="16"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                )}
              </Link>
              {item.submenu && (
                <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-black/95 backdrop-blur-xl border border-purple-500/10 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                  <div className="py-1">
                    {item.submenu.map((subItem) => (
                      <Link
                        key={subItem.name}
                        href={subItem.href}
                        className="block px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-white/10"
                      >
                        {subItem.name}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
          <GradientButton href="/contact" variant="compact">
            Get Started
          </GradientButton>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            type="button"
            onClick={toggleMobileMenu}
            className="p-2 rounded-md text-white hover:bg-white/10 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-purple-500/50"
            aria-expanded={mobileMenuOpen}
          >
            <span className="sr-only">
              {mobileMenuOpen ? 'Close menu' : 'Open menu'}
            </span>
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              aria-hidden="true"
            >
              {mobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-x-0 top-[48px] bg-black/95 backdrop-blur-xl border-t border-purple-500/10 z-50 overflow-y-auto transition-all duration-300 animate-fadeIn"
             style={{height: 'calc(100vh - 48px)', boxShadow: '0 10px 25px -5px rgba(138, 75, 175, 0.2)'}}>
          <div className="px-4 py-8 space-y-2">
            {navItems.map((item) => (
              <div key={item.name} className="mb-2">
                <Link
                  href={item.href}
                  className="flex items-center justify-between px-4 py-4 text-base font-medium text-gray-200 hover:text-white hover:bg-white/5 rounded-lg transition-all duration-200 border-b border-purple-500/10"
                  onClick={() => !item.submenu && setMobileMenuOpen(false)}
                >
                  {item.name}
                  {item.submenu && (
                    <svg 
                      className="w-4 h-4 ml-1" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24" 
                      aria-hidden="true"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  )}
                </Link>
                
                {item.submenu && (
                  <div className="pl-4 mt-1 space-y-1 border-l border-purple-500/10 ml-4">
                    {item.submenu.map((subItem) => (
                      <Link
                        key={subItem.name}
                        href={subItem.href}
                        className="flex items-center px-4 py-3 text-sm font-medium text-gray-400 hover:text-white hover:bg-white/5 rounded-lg transition-all duration-200"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-purple-500/50 mr-2"></span>
                        {subItem.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="pt-6 pb-4 px-4">
              <GradientButton 
                href="/contact" 
                variant="wide" 
                onClick={() => setMobileMenuOpen(false)}
                className="w-full justify-center"
              >
                Get Started
              </GradientButton>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
} 
