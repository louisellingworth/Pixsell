// Performance monitoring and analytics utilities

declare global {
  interface Window {
    gtag?: (...args: any[]) => void
  }
}

// ── Metric batching ──────────────────────────────────────────────────────────

interface Metric {
  name: string
  value: number
  rating?: string
  timestamp?: number
}

let metricBatch: Metric[] = []
let batchTimer: ReturnType<typeof setTimeout> | null = null
const BATCH_DELAY_MS = 2000
const MAX_RETRIES = 2

async function sendBatch(metrics: Metric[], attempt = 0): Promise<void> {
  try {
    const res = await fetch('/api/analytics/performance', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(metrics),
    })
    if (!res.ok && attempt < MAX_RETRIES) {
      await new Promise(r => setTimeout(r, 500 * (attempt + 1)))
      return sendBatch(metrics, attempt + 1)
    }
    if (!res.ok) {
      console.error('[analytics] Failed to send batch after retries', { status: res.status })
    }
  } catch (err) {
    if (attempt < MAX_RETRIES) {
      await new Promise(r => setTimeout(r, 500 * (attempt + 1)))
      return sendBatch(metrics, attempt + 1)
    }
    console.error('[analytics] Network error sending batch', err)
  }
}

function queueMetric(metric: Metric): void {
  metricBatch.push({ ...metric, timestamp: metric.timestamp ?? Date.now() })
  if (batchTimer) clearTimeout(batchTimer)
  batchTimer = setTimeout(() => {
    const toSend = metricBatch.splice(0)
    batchTimer = null
    if (toSend.length > 0) sendBatch(toSend)
  }, BATCH_DELAY_MS)
}

// ── Public API ───────────────────────────────────────────────────────────────

export function trackPerformance() {
  if (typeof window !== 'undefined') {
    try {
      import('web-vitals').then(({ onCLS, onFCP, onLCP, onTTFB, onINP }) => {
        onCLS(m => queueMetric({ name: m.name, value: m.value, rating: m.rating }))
        onFCP(m => queueMetric({ name: m.name, value: m.value, rating: m.rating }))
        onLCP(m => queueMetric({ name: m.name, value: m.value, rating: m.rating }))
        onTTFB(m => queueMetric({ name: m.name, value: m.value, rating: m.rating }))
        onINP(m => queueMetric({ name: m.name, value: m.value, rating: m.rating }))
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
    console.log('Event tracked:', eventName, properties)
    if (window.gtag) {
      window.gtag('event', eventName, properties)
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

export function monitorPerformance() {
  if (typeof window !== 'undefined') {
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

    if ('memory' in performance) {
      try {
        setInterval(() => {
          const memory = (performance as any).memory
          if (memory.usedJSHeapSize > 50 * 1024 * 1024) {
            trackEvent('high_memory_usage', {
              used: memory.usedJSHeapSize,
              total: memory.totalJSHeapSize,
            })
          }
        }, 30000)
      } catch (error) {
        console.warn('Failed to monitor memory usage:', error)
      }
    }
  }
}

export function trackError(error: Error, context?: Record<string, any>) {
  trackEvent('error', {
    message: error.message,
    stack: error.stack,
    context,
  })
}

export function trackEngagement(action: string, value?: any) {
  trackEvent('engagement', { action, value })
}
