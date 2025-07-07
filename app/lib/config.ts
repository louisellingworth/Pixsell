/**
 * Runtime configuration for the Pixsell website
 * This centralizes key constants and settings used throughout the application
 */

export const siteConfig = {
  name: "Pixsell Games",
  shortName: "Pixsell",
  description: "Game Publishing in China - Helping Western developers enter the Chinese market",
  url: "https://pixsellgames.com",
  ogImageUrl: "https://pixsellgames.com/images/og-image.jpg",
  links: {
    twitter: "https://twitter.com/pixsellgames",
    linkedin: "https://linkedin.com/company/pixsellgames",
  },
  contact: {
    email: "contact@pixsellgames.com",
  },
  metaTags: {
    themeColor: "#000000",
  },
}

// Performance configuration
export const performanceConfig = {
  // Prefetch strategy - controls which links to prefetch
  prefetch: {
    enabled: true,
    delay: 5000, // ms to wait after page load before prefetching
    routes: [
      '/',
      '/about',
      '/services',
      '/contact',
      '/blog',
    ],
  },
  // Image optimization settings
  images: {
    quality: 80,
    lazyBoundary: '200px',
    useSuspense: true,
  },
  // Animation settings
  animations: {
    reduced: false, // Will be set to true based on user preference
    enableHeavyAnimations: true, // For intensive animations
  },
  // Feature flags - control which features are enabled
  features: {
    serviceWorker: true,
    offlineSupport: true,
    analytics: true,
  },
}

// For slow connections and data-saving modes, adjust performance settings
export function getOptimizedPerformanceConfig() {
  // Use safe type checking for the connection API which isn't standard across all browsers
  const connection = typeof navigator !== 'undefined' 
    ? (navigator as any).connection || (navigator as any).mozConnection || (navigator as any).webkitConnection
    : null;
    
  const saveData = connection?.saveData || false;
  const slowConnection = connection?.effectiveType === '2g' || 
                         connection?.effectiveType === 'slow-2g' || 
                         false;
    
  return {
    ...performanceConfig,
    prefetch: {
      ...performanceConfig.prefetch,
      enabled: !(saveData || slowConnection),
      routes: saveData || slowConnection 
        ? ['/'] // Only prefetch homepage on slow connections
        : performanceConfig.prefetch.routes,
    },
    images: {
      ...performanceConfig.images,
      quality: saveData || slowConnection ? 60 : 80,
    },
    animations: {
      ...performanceConfig.animations,
      enableHeavyAnimations: !(saveData || slowConnection),
    }
  };
}

// Debounce function for performance optimization
export function debounce<T extends (...args: any[]) => any>(
  func: T,
  wait: number
): (...args: Parameters<T>) => void {
  let timeout: ReturnType<typeof setTimeout> | null = null;
  
  return function(...args: Parameters<T>) {
    const later = () => {
      timeout = null;
      func(...args);
    };
    
    if (timeout !== null) {
      clearTimeout(timeout);
    }
    timeout = setTimeout(later, wait);
  };
}

// Throttle function for performance optimization
export function throttle<T extends (...args: any[]) => any>(
  func: T,
  limit: number
): (...args: Parameters<T>) => void {
  let inThrottle = false;
  
  return function(...args: Parameters<T>) {
    if (!inThrottle) {
      func(...args);
      inThrottle = true;
      setTimeout(() => {
        inThrottle = false;
      }, limit);
    }
  };
} 