'use client'

import { useEffect } from 'react'
import { trackPerformance, monitorPerformance } from '../lib/analytics'

export default function PerformanceMonitor() {
  useEffect(() => {
    // Only run on client side
    if (typeof window !== 'undefined') {
      // Initialize performance monitoring
      trackPerformance()
      monitorPerformance()
    }
  }, [])

  return null // This component doesn't render anything
} 