'use client'

import { useEffect } from 'react'

export default function CriticalCSS() {
  useEffect(() => {
    // Load non-critical CSS asynchronously
    const loadNonCriticalCSS = () => {
      const link = document.createElement('link')
      link.rel = 'stylesheet'
      link.href = '/_next/static/css/fe5366a9d8dfdb52.css'
      link.media = 'print'
      link.onload = () => {
        link.media = 'all'
      }
      document.head.appendChild(link)
    }

    // Load CSS after page load
    if (document.readyState === 'complete') {
      loadNonCriticalCSS()
    } else {
      window.addEventListener('load', loadNonCriticalCSS)
    }

    return () => {
      window.removeEventListener('load', loadNonCriticalCSS)
    }
  }, [])

  return null
} 