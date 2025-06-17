'use client'

import { useState, useRef } from 'react'

export default function SkipToContent() {
  const [isFocused, setIsFocused] = useState(false)
  const linkRef = useRef<HTMLAnchorElement>(null)

  const handleSkip = (e: React.MouseEvent<HTMLAnchorElement> | React.KeyboardEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    
    // Find the main content element
    const mainContent = document.getElementById('main-content')
    if (mainContent) {
      // Set focus to main content
      mainContent.setAttribute('tabindex', '-1')
      mainContent.focus()
      
      // Scroll to content with offset for fixed header
      window.scrollTo({ 
        top: mainContent.offsetTop - 120, 
        behavior: 'smooth' 
      })
      
      // Remove tabindex after focus
      setTimeout(() => {
        mainContent.removeAttribute('tabindex')
      }, 1000)
    }
  }

  return (
    <a
      ref={linkRef}
      href="#main-content"
      className={`
        fixed top-2 left-1/2 -translate-x-1/2 z-[100]
        bg-purple-600 text-white px-4 py-2 text-sm font-medium rounded
        transition-transform duration-200 focus:outline-none focus:ring-2 focus:ring-white
        ${isFocused ? 'translate-y-0' : '-translate-y-full'}
      `}
      onFocus={() => setIsFocused(true)}
      onBlur={() => setIsFocused(false)}
      onClick={handleSkip}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          handleSkip(e)
        }
      }}
    >
      Skip to main content
    </a>
  )
} 