'use client'

import { useState, useEffect, useCallback } from 'react'
import Link from 'next/link'
import GradientButton from './ui/GradientButton'

// Navigation items with services submenu
const navItems = [
  { name: 'Home', href: '/' },
  {
    name: 'Services',
    href: '/services',
    submenu: [
      { name: 'Steam Publishing', href: '/services/co-publishing' },
      { name: 'Mobile Publishing', href: '/services/mobile-publishing' },
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
  const [isScrolling, setIsScrolling] = useState(false);

  // Optimized scroll handler with throttling
  const handleScroll = useCallback(() => {
    const scrollY = window.scrollY;
    setScrolled(scrollY > 20);
    
    // Track scroll depth for analytics
    const scrollDepth = Math.round((scrollY / (document.body.scrollHeight - window.innerHeight)) * 100);
    if (scrollDepth % 25 === 0) { // Track at 25%, 50%, 75%, 100%
      // trackScrollDepth(scrollDepth);
    }
  }, []);

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;
    
    const throttledScrollHandler = () => {
      setIsScrolling(true);
      handleScroll();
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => setIsScrolling(false), 150);
    };

    window.addEventListener('scroll', throttledScrollHandler, { passive: true });
    return () => {
      window.removeEventListener('scroll', throttledScrollHandler);
      clearTimeout(timeoutId);
    };
  }, [handleScroll]);

  // Toggle menu with keyboard support
  const toggleMobileMenu = useCallback(() => {
    setMobileMenuOpen(prev => !prev);
  }, []);

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
      // Focus management for accessibility
      const firstFocusableElement = document.querySelector('[data-mobile-menu] button, [data-mobile-menu] a') as HTMLElement;
      firstFocusableElement?.focus();
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  // Handle escape key to close mobile menu
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    
    if (mobileMenuOpen) {
      document.addEventListener('keydown', handleEscape);
      return () => document.removeEventListener('keydown', handleEscape);
    }
  }, [mobileMenuOpen]);

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 w-full px-4 sm:px-6 lg:px-8 backdrop-blur-xl border-b border-white/10 z-50 transition-all duration-300 ${
        scrolled ? 'py-1' : 'py-2 sm:py-3'
      } ${isScrolling ? 'bg-black/95' : 'bg-black/80'}`}
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center focus:outline-none focus:ring-2 focus:ring-purple-500 rounded-lg">
          <img
            src="/6ight-games-logo-160h.webp"
            alt="EightSix Games - Game Publishing in China"
            className="h-16 md:h-20 w-auto"
            style={{
              objectFit: 'contain',
              width: 'auto',
              maxWidth: 'none',
              marginTop: '-0.25rem',
              marginBottom: '-0.25rem'
            }}
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-5">
          {navItems.map((item) => (
            <div key={item.name} className="relative group">
              <Link
                href={item.href}
                className="relative text-gray-300 hover:text-white text-sm font-medium px-3 py-2 rounded-lg transition-colors duration-200 flex items-center focus:outline-none focus:ring-2 focus:ring-purple-500 nav-link-underline"
                aria-expanded={item.submenu ? undefined : undefined}
                aria-haspopup={item.submenu ? 'true' : undefined}
              >
                {item.name}
                {item.submenu && (
                  <svg
                    className="w-4 h-4 ml-1 transition-transform duration-200 group-hover:rotate-180"
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
                {/* Sliding underline */}
                <span
                  className="absolute bottom-0.5 left-3 right-3 h-px scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300"
                  style={{ background: 'linear-gradient(90deg, #c4b5fd, #8b5cf6)' }}
                  aria-hidden="true"
                />
              </Link>
              {item.submenu && (
                <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-black/95 backdrop-blur-xl border border-white/10 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                  <div className="py-1">
                    {item.submenu.map((subItem) => (
                      <Link
                        key={subItem.name}
                        href={subItem.href}
                        className="block px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:bg-white/10"
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
            className="p-2 rounded-md text-white hover:bg-white/10 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-purple-500/50 touch-target"
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-menu"
            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
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
        <div 
          id="mobile-menu"
          data-mobile-menu
          className="md:hidden absolute inset-x-0 top-full bg-[#0A0A0B] border-t border-white/10 z-50 overflow-y-auto transition-all duration-300 animate-fadeIn"
          style={{
            /* 100% resolves to the fixed nav's height, so the panel fills
               exactly from the nav's bottom edge to the viewport bottom
               regardless of logo size or scroll-collapsed padding. */
            height: 'calc(100dvh - 100%)',
            boxShadow: '0 10px 25px -5px rgba(138, 75, 175, 0.2)'
          }}
          role="dialog"
          aria-modal="true"
          aria-label="Mobile navigation menu"
        >
          <div className="px-4 py-8 space-y-2">
            {navItems.map((item) => (
              <div key={item.name} className="mb-2">
                <Link
                  href={item.href}
                  className="flex items-center justify-between px-4 py-4 text-base font-medium text-gray-200 hover:text-white hover:bg-white/5 rounded-lg transition-all duration-200 border-b border-white/10 focus:outline-none focus:ring-2 focus:ring-purple-500 touch-target"
                  onClick={() => !item.submenu && setMobileMenuOpen(false)}
                  aria-expanded={item.submenu ? undefined : undefined}
                  aria-haspopup={item.submenu ? 'true' : undefined}
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
                  <div className="pl-4 mt-1 space-y-1 border-l border-white/10 ml-4">
                    {item.submenu.map((subItem) => (
                      <Link
                        key={subItem.name}
                        href={subItem.href}
                        className="flex items-center px-4 py-3 text-sm font-medium text-gray-400 hover:text-white hover:bg-white/5 rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-purple-500 touch-target"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {subItem.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            
            {/* Mobile CTA */}
            <div className="pt-4 border-t border-white/10">
              <GradientButton href="/contact" variant="compact" className="w-full justify-center">
                Get Started
              </GradientButton>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
} 
