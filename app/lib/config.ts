/**
 * Runtime configuration for the EightSix website
 * This centralizes key constants and settings used throughout the application
 */

export const siteConfig = {
  name: "EightSix Games",
  shortName: "EightSix",
  description: "Launch your game in China with trusted co-publishing partners. We handle game approvals, marketing, localization, and partnerships for Western developers entering the Chinese game market.",
  url: "https://eightsixgames.com",
  ogImageUrl: "https://eightsixgames.com/images/og-image.jpg",
  links: {
    twitter: "https://twitter.com/eightsixgames",
    linkedin: "https://linkedin.com/company/eightsixgames",
  },
  contact: {
    email: "contact@eightsixgames.com",
  },
  metaTags: {
    themeColor: "#000000",
  },
  // SEO Keywords
  keywords: [
    'game publishing China',
    'China game market entry', 
    'game localization China',
    'mobile game publishing China',
    'Western developers China',
    'Chinese game market',
    'game co-publishing China',
    'Steam China publishing',
    'game approval China',
    'Chinese game distribution',
    'game marketing China',
    'China game industry',
    'game partnership China',
    'Chinese player preferences',
    'game revenue China'
  ],
  // Google Analytics
  analytics: {
    measurementId: process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || 'GA_MEASUREMENT_ID',
    enabled: process.env.NEXT_PUBLIC_ENABLE_ANALYTICS !== 'false',
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