'use client'

import { Suspense, lazy, memo } from 'react'
import dynamic from 'next/dynamic'

// Lazy load non-critical components
const Navigation = lazy(() => import('./Navigation'))
const Footer = lazy(() => import('./Footer'))
const FloatingConsultButton = dynamic(() => import('./FloatingConsultButton'), {
  ssr: false,
  loading: () => null
})

// Optimized loading fallback
const LoadingFallback = memo(() => (
  <div 
    className="min-h-screen bg-black flex items-center justify-center"
    style={{ 
      contain: 'strict',
      contentVisibility: 'auto'
    }}
  >
    <div className="animate-pulse space-y-4">
      <div className="w-32 h-8 bg-gray-800 rounded"></div>
      <div className="w-48 h-4 bg-gray-800 rounded"></div>
    </div>
  </div>
))

LoadingFallback.displayName = 'LoadingFallback'

interface OptimizedLayoutProps {
  children: React.ReactNode
  showNavigation?: boolean
  showFooter?: boolean
  showFloatingButton?: boolean
}

const OptimizedLayout = memo(({
  children,
  showNavigation = true,
  showFooter = true,
  showFloatingButton = true
}: OptimizedLayoutProps) => {
  return (
    <div 
      className="min-h-screen bg-black text-white overflow-x-hidden relative"
      style={{ 
        contentVisibility: 'auto',
        containIntrinsicSize: '0 100vh',
        transform: 'translateZ(0)',
        willChange: 'transform',
      }}
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
      
      {/* Navigation - Lazy loaded */}
      {showNavigation && (
        <div 
          className="relative z-20"
          style={{ 
            contain: 'layout style paint',
            transform: 'translateZ(0)',
          }}
        >
          <Suspense fallback={<div className="h-16 bg-black/80" />}>
            <Navigation />
          </Suspense>
        </div>
      )}
      
      {/* Main content - optimized with content-visibility */}
      <main 
        id="main-content" 
        className="relative z-10"
        style={{ 
          contentVisibility: 'auto',
          containIntrinsicSize: '0 100vh',
          transform: 'translateZ(0)',
          contain: 'layout paint style',
        }}
      >
        {children}
      </main>
      
      {/* Footer - Lazy loaded */}
      {showFooter && (
        <div 
          className="relative bg-black/80 backdrop-blur-xl"
          style={{ 
            contentVisibility: 'auto',
            containIntrinsicSize: '0 300px',
            transform: 'translateZ(0)',
            contain: 'layout paint',
          }}
        >
          <div 
            className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"
            aria-hidden="true"
          />
          <Suspense fallback={<div className="h-64 bg-black/80" />}>
            <Footer />
          </Suspense>
        </div>
      )}
      
      {/* Floating button - Client-side only */}
      {showFloatingButton && (
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
      )}
    </div>
  )
})

OptimizedLayout.displayName = 'OptimizedLayout'

export default OptimizedLayout 