'use client'

import { useEffect } from 'react'

interface PerformanceOptimizerProps {
  disablePrefetch?: boolean
  lazyLoadImages?: boolean
  prioritizeLCP?: boolean
  interactionObserving?: boolean
}

export default function PerformanceOptimizer({
  disablePrefetch = false,
  lazyLoadImages = true,
  prioritizeLCP = true,
  interactionObserving = true
}: PerformanceOptimizerProps) {
  
  useEffect(() => {
    // Only run in browser
    if (typeof window === 'undefined') return
    
    // Disable Next.js prefetching if needed
    if (disablePrefetch) {
      const linkElements = document.querySelectorAll('link[rel="prefetch"]')
      linkElements.forEach(link => {
        link.remove()
      })
    }
    
    // Lazy load non-critical images
    if (lazyLoadImages) {
      const imgElements = document.querySelectorAll('img:not([loading])')
      imgElements.forEach(img => {
        // Don't apply to images in viewport or with priority attribute
        if (!img.hasAttribute('priority') && !img.hasAttribute('data-priority')) {
          img.setAttribute('loading', 'lazy')
          img.setAttribute('decoding', 'async')
        }
      })
    }
    
    // Prioritize LCP (Largest Contentful Paint) elements
    if (prioritizeLCP) {
      // Find potential LCP elements - hero images, large text blocks
      const potentialLCPElements = document.querySelectorAll(
        '.hero-image, h1 img, .hero-section img, .hero-section, h1'
      )
      
      potentialLCPElements.forEach(el => {
        if (el instanceof HTMLImageElement) {
          el.setAttribute('fetchpriority', 'high')
          el.setAttribute('loading', 'eager')
          el.setAttribute('decoding', 'sync')
        }
      })
    }
    
    // Interaction observing to optimize for low INP (Interaction to Next Paint)
    if (interactionObserving && 'PerformanceObserver' in window) {
      // Optimize click-heavy elements
      const clickableElements = document.querySelectorAll('button, a, [role="button"], input, select, textarea')
      
      clickableElements.forEach(el => {
        // Add touch-action: manipulation to improve mobile tapping
        if (el instanceof HTMLElement) {
          el.style.touchAction = 'manipulation'
        }
      })
      
      // Use requestIdleCallback (or polyfill) to do non-critical work
      const runWhenIdle = window.requestIdleCallback || 
        ((cb: IdleRequestCallback) => setTimeout(cb, 50))
      
      // Preconnect to expected domains on idle
      runWhenIdle(() => {
        const domains = [
          'https://fonts.googleapis.com',
          'https://fonts.gstatic.com',
          'https://www.googletagmanager.com',
          // Add other external domains as needed
        ]
        
        domains.forEach(domain => {
          const link = document.createElement('link')
          link.rel = 'preconnect'
          link.href = domain
          document.head.appendChild(link)
        })
      })
    }
    
  }, [disablePrefetch, lazyLoadImages, prioritizeLCP, interactionObserving])
  
  // This component doesn't render anything
  return null
} 