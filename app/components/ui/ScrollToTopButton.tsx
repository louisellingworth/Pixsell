'use client'

import { useState, useEffect } from 'react'
import { ArrowUpIcon } from '@heroicons/react/24/outline'

export default function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false)

  // Show button when page is scrolled down
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener('scroll', toggleVisibility, { passive: true })
    return () => window.removeEventListener('scroll', toggleVisibility)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-20 right-4 sm:bottom-24 sm:right-6 z-40 w-10 h-10 sm:w-12 sm:h-12 rounded-full 
                   bg-black/80 backdrop-blur-sm border border-white/10 hover:border-white/20
                   flex items-center justify-center shadow-lg
                   transition-all duration-300"
          aria-label="Scroll to top"
        >
          <ArrowUpIcon className="w-5 h-5 text-purple-400 hover:text-purple-300 transition-colors duration-200" />
        </button>
      )}
    </>
  )
} 