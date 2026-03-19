'use client'

import { Suspense, memo, useEffect } from 'react'
import dynamic from 'next/dynamic'
import Footer from './components/Footer'
import MarketContent from './components/MarketContent'
import LoadingSkeleton from './components/LoadingSkeleton'
import { trackPageView } from './lib/analytics'

// Dynamically import FloatingConsultButton with no SSR
const FloatingConsultButton = dynamic(
  () => import('./components/FloatingConsultButton'),
  { 
    ssr: false,
    loading: () => null
  }
)

// Optimized loading fallback with accessibility
const MarketContentFallback = memo(() => (
  <div 
    className="min-h-[600px] w-full grid place-items-center" 
    style={{ 
      contain: 'strict', 
      containIntrinsicSize: '0 600px',
      contentVisibility: 'auto'
    }}
    role="status"
    aria-label="Loading market content"
  >
    <div className="space-y-4 w-full max-w-md">
      <LoadingSkeleton variant="card" />
      <LoadingSkeleton lines={4} />
    </div>
  </div>
))

// Memoize the home component to prevent unnecessary re-renders
const Home = () => {
  // Track page view on mount
  useEffect(() => {
    if (typeof window !== 'undefined') {
      trackPageView(window.location.pathname)
    }
  }, [])

  return (
    <main
      className="min-h-screen bg-black text-white overflow-x-hidden relative"
    >
      {/* Skip to main content link for accessibility */}
      <a 
        href="#main-content" 
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-purple-600 text-white px-4 py-2 rounded-lg z-50"
      >
        Skip to main content
      </a>

      {/* Background gradient - optimized to avoid repaints */}
      <div 
        className="absolute inset-0 bg-gradient-to-b from-black via-black to-[#0A0118] pointer-events-none"
        style={{ 
          transform: 'translateZ(0)',
          willChange: 'transform',
          backfaceVisibility: 'hidden',
          contain: 'paint',
        }} 
        aria-hidden="true"
      />
      
      {/* Content - optimized with content-visibility */}
      <div id="main-content" className="relative z-10">
        {/* Market Content - Optimized with contain and content-visibility */}
        <section
          className="relative pt-10 sm:pt-14 px-4 sm:px-6 lg:px-8"
        >
          <Suspense fallback={<MarketContentFallback />}>
            <MarketContent />
          </Suspense>
        </section>
        
        {/* Footer - Static content optimized with content-visibility */}
        <div
          className="relative bg-black/80 backdrop-blur-xl mt-10"
        >
          <div 
            className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"
            aria-hidden="true"
          />
          <Footer />
        </div>
      </div>
      
      {/* Floating button - Client-side only */}
      <div 
        className="fixed bottom-4 right-4 z-50 sm:bottom-8 sm:right-8"
        style={{ 
          contain: 'layout style paint',
          transform: 'translateZ(0)',
          touchAction: 'manipulation',
        }}
      >
        <FloatingConsultButton />
      </div>
    </main>
  )
}

export default memo(Home) 
