'use client'

import { useEffect } from 'react'
import { onCLS, onFCP, onINP, onLCP, onTTFB } from 'web-vitals'

interface PerformanceMonitorProps {
  onMetrics?: (metrics: any) => void;
  debug?: boolean;
}

const PerformanceMonitor: React.FC<PerformanceMonitorProps> = ({ 
  onMetrics, 
  debug = false 
}) => {
  useEffect(() => {
    // Function to send metrics to analytics
    const sendToAnalytics = (metric: any) => {
      if (debug) {
        console.log('Performance Metric:', metric);
      }

      // Send to Google Analytics if available
      if (typeof window !== 'undefined' && (window as any).gtag) {
        (window as any).gtag('event', metric.name, {
          event_category: 'Web Vitals',
          value: Math.round(metric.name === 'CLS' ? metric.value * 1000 : metric.value),
          event_label: metric.id,
          non_interaction: true,
        });
      }

      // Send to custom analytics endpoint
      if (onMetrics) {
        onMetrics(metric);
      }

      // Send to internal analytics
      fetch('/api/analytics/performance', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: metric.name,
          value: metric.value,
          id: metric.id,
          rating: metric.rating,
          delta: metric.delta,
          navigationType: metric.navigationType,
          timestamp: Date.now(),
        }),
      }).catch(() => {
        // Silently fail if analytics endpoint is not available
      });
    };

    // Monitor Core Web Vitals (web-vitals v5+)
    onCLS(sendToAnalytics);
    onFCP(sendToAnalytics);
    onINP(sendToAnalytics);
    onLCP(sendToAnalytics);
    onTTFB(sendToAnalytics);

    // Monitor additional performance metrics
    if (typeof window !== 'undefined' && 'performance' in window) {
      // Monitor First Paint (FP)
      const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (entry.name === 'first-paint') {
            sendToAnalytics({
              name: 'FP',
              value: entry.startTime,
              id: 'fp',
              rating: entry.startTime < 1000 ? 'good' : entry.startTime < 3000 ? 'needs-improvement' : 'poor',
            });
          }
        }
      });
      observer.observe({ entryTypes: ['paint'] });

      // Monitor Largest Contentful Paint (LCP) elements
      const lcpObserver = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (entry.entryType === 'largest-contentful-paint') {
            const lcpEntry = entry as unknown as LargestContentfulPaint;
            const lcpElement = lcpEntry.element;
            if (lcpElement) {
              // Add data attribute to LCP element for debugging
              lcpElement.setAttribute('data-lcp', 'true');
              
              if (debug) {
                console.log('LCP Element:', lcpElement);
                // console.log('LCP URL:', entry.url); // url may not exist
                // console.log('LCP Size:', entry.size); // size may not exist
              }
            }
          }
        }
      });
      lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });

      // Monitor resource loading performance
      const resourceObserver = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (entry.entryType === 'resource') {
            const resourceEntry = entry as PerformanceResourceTiming;
            
            // Track slow resources
            if (resourceEntry.duration > 1000) {
              sendToAnalytics({
                name: 'SLOW_RESOURCE',
                value: resourceEntry.duration,
                id: resourceEntry.name,
                rating: 'poor',
                resourceType: resourceEntry.initiatorType,
                resourceName: resourceEntry.name,
              });
            }

            // Track image loading performance
            if (resourceEntry.initiatorType === 'img') {
              sendToAnalytics({
                name: 'IMAGE_LOAD',
                value: resourceEntry.duration,
                id: resourceEntry.name,
                rating: resourceEntry.duration < 500 ? 'good' : resourceEntry.duration < 1000 ? 'needs-improvement' : 'poor',
                resourceName: resourceEntry.name,
              });
            }
          }
        }
      });
      resourceObserver.observe({ entryTypes: ['resource'] });

      // Monitor layout shifts
      const layoutShiftObserver = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (entry.entryType === 'layout-shift' && !(entry as any).hadRecentInput) {
            const layoutShiftEntry = entry as any;
            sendToAnalytics({
              name: 'LAYOUT_SHIFT',
              value: layoutShiftEntry.value,
              id: 'layout-shift',
              rating: layoutShiftEntry.value < 0.1 ? 'good' : layoutShiftEntry.value < 0.25 ? 'needs-improvement' : 'poor',
              sources: layoutShiftEntry.sources,
            });
          }
        }
      });
      layoutShiftObserver.observe({ entryTypes: ['layout-shift'] });

      // Monitor long tasks
      const longTaskObserver = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (entry.entryType === 'longtask') {
            const longTaskEntry = entry as any;
            sendToAnalytics({
              name: 'LONG_TASK',
              value: longTaskEntry.duration,
              id: 'long-task',
              rating: longTaskEntry.duration < 50 ? 'good' : longTaskEntry.duration < 100 ? 'needs-improvement' : 'poor',
              startTime: longTaskEntry.startTime,
              attribution: longTaskEntry.attribution,
            });
          }
        }
      });
      longTaskObserver.observe({ entryTypes: ['longtask'] });

      // Cleanup observers on unmount
      return () => {
        observer.disconnect();
        lcpObserver.disconnect();
        resourceObserver.disconnect();
        layoutShiftObserver.disconnect();
        longTaskObserver.disconnect();
      };
    }
  }, [onMetrics, debug]);

  // This component doesn't render anything
  return null;
};

export default PerformanceMonitor; 