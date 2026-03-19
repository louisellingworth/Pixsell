
        // Performance monitoring
        if ('performance' in window) {
          // Core Web Vitals
          const observer = new PerformanceObserver((list) => {
            for (const entry of list.getEntries()) {
              console.log('Performance metric:', entry.name, entry.value);
              
              // Send to analytics
              if (window.gtag) {
                gtag('event', 'performance', {
                  metric_name: entry.name,
                  metric_value: entry.value,
                });
              }
            }
          });
          
          observer.observe({ entryTypes: ['largest-contentful-paint', 'first-input', 'layout-shift'] });
          
          // Navigation timing
          window.addEventListener('load', () => {
            const navigation = performance.getEntriesByType('navigation')[0];
            console.log('Page load time:', navigation.loadEventEnd - navigation.loadEventStart);
          });
        }
      