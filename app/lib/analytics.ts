// Performance monitoring and analytics utilities

export function trackPerformance() {
  if (typeof window !== 'undefined') {
    // Track Core Web Vitals - make it optional to prevent SSR issues
    try {
      import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
        getCLS(console.log)
        getFID(console.log)
        getFCP(console.log)
        getLCP(console.log)
        getTTFB(console.log)
      }).catch((error) => {
        console.warn('Web Vitals not available:', error)
      })
    } catch (error) {
      console.warn('Failed to load web-vitals:', error)
    }
  }
}

export function trackEvent(eventName: string, properties?: Record<string, any>) {
  if (typeof window !== 'undefined') {
    // Send to analytics service (replace with your preferred analytics)
    console.log('Event tracked:', eventName, properties)
    
    // Example: Google Analytics 4
    if (window.gtag) {
      window.gtag('event', eventName, properties)
    }
    
    // Example: Custom analytics endpoint
    try {
      fetch('/api/analytics', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ event: eventName, properties, timestamp: Date.now() })
      }).catch(console.error)
    } catch (error) {
      console.warn('Failed to send analytics:', error)
    }
  }
}

export function trackPageView(url: string) {
  trackEvent('page_view', { page_url: url })
}

export function trackButtonClick(buttonName: string, location?: string) {
  trackEvent('button_click', { button_name: buttonName, location })
}

export function trackFormSubmission(formName: string) {
  trackEvent('form_submission', { form_name: formName })
}

export function trackScrollDepth(depth: number) {
  trackEvent('scroll_depth', { depth })
}

// Performance monitoring
export function monitorPerformance() {
  if (typeof window !== 'undefined') {
    // Monitor long tasks
    if ('PerformanceObserver' in window) {
      try {
        const observer = new PerformanceObserver((list) => {
          for (const entry of list.getEntries()) {
            if (entry.duration > 50) {
              console.warn('Long task detected:', entry)
              trackEvent('long_task', { duration: entry.duration })
            }
          }
        })
        observer.observe({ entryTypes: ['longtask'] })
      } catch (error) {
        console.warn('Failed to set up performance observer:', error)
      }
    }
    
    // Monitor memory usage
    if ('memory' in performance) {
      try {
        setInterval(() => {
          const memory = (performance as any).memory
          if (memory.usedJSHeapSize > 50 * 1024 * 1024) { // 50MB threshold
            trackEvent('high_memory_usage', { 
              used: memory.usedJSHeapSize,
              total: memory.totalJSHeapSize 
            })
          }
        }, 30000) // Check every 30 seconds
      } catch (error) {
        console.warn('Failed to monitor memory usage:', error)
      }
    }
  }
}

// Error tracking
export function trackError(error: Error, context?: Record<string, any>) {
  trackEvent('error', { 
    message: error.message, 
    stack: error.stack,
    context 
  })
}

// User engagement tracking
export function trackEngagement(action: string, value?: any) {
  trackEvent('engagement', { action, value })
} 