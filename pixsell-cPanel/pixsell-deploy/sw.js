// Pixsell Games Service Worker - Enhanced Performance Version
const CACHE_VERSION = 'v2';
const CACHE_NAMES = {
  static: `static-${CACHE_VERSION}`,
  images: `images-${CACHE_VERSION}`,
  pages: `pages-${CACHE_VERSION}`,
  fonts: `fonts-${CACHE_VERSION}`,
  api: `api-${CACHE_VERSION}`,
};

// Assets to precache immediately
const PRECACHE_ASSETS = [
  '/',
  '/index.html',
  '/manifest.json',
  '/favicon_io/favicon.ico',
  '/favicon_io/apple-touch-icon.png',
  '/favicon_io/android-chrome-192x192.png',
  '/favicon_io/android-chrome-512x512.png',
];

// Cache duration in milliseconds
const CACHE_DURATIONS = {
  static: 30 * 24 * 60 * 60 * 1000, // 30 days
  images: 14 * 24 * 60 * 60 * 1000, // 14 days
  pages: 1 * 24 * 60 * 60 * 1000,   // 1 day
  fonts: 90 * 24 * 60 * 60 * 1000,  // 90 days
  api: 5 * 60 * 1000,               // 5 minutes
};

// Helper functions
const isUrlMatch = (url, patterns) => {
  return patterns.some(pattern => url.includes(pattern));
};

const getCacheForUrl = (url) => {
  const urlObj = new URL(url);
  const pathname = urlObj.pathname;

  // Determine appropriate cache based on URL pattern
  if (isUrlMatch(pathname, ['.jpg', '.jpeg', '.png', '.gif', '.webp', '.avif', '.svg'])) {
    return CACHE_NAMES.images;
  } else if (isUrlMatch(pathname, ['.woff', '.woff2', '.ttf', '.otf'])) {
    return CACHE_NAMES.fonts;
  } else if (isUrlMatch(pathname, ['.js', '.css'])) {
    return CACHE_NAMES.static;
  } else if (isUrlMatch(url, ['/api/'])) {
    return CACHE_NAMES.api;
  } else {
    return CACHE_NAMES.pages;
  }
};

// Install event - precache critical assets
self.addEventListener('install', event => {
  event.waitUntil(
    Promise.all([
      caches.open(CACHE_NAMES.static).then(cache => cache.addAll(PRECACHE_ASSETS)),
      self.skipWaiting()
    ])
  );
});

// Activate event - clean up old caches
self.addEventListener('activate', event => {
  const validCacheNames = Object.values(CACHE_NAMES);
  
  event.waitUntil(
    caches.keys()
      .then(cacheNames => {
        return Promise.all(
          cacheNames
            .filter(cacheName => !validCacheNames.includes(cacheName))
            .map(cacheName => caches.delete(cacheName))
        );
      })
      .then(() => self.clients.claim())
  );
});

// Fetch event with sophisticated caching strategies
self.addEventListener('fetch', event => {
  // Skip non-GET requests or those that aren't from our origin
  if (event.request.method !== 'GET' || !event.request.url.startsWith(self.location.origin)) {
    return;
  }

  const requestUrl = event.request.url;
  const cacheName = getCacheForUrl(requestUrl);
  
  // Choose strategy based on resource type
  if (cacheName === CACHE_NAMES.static || cacheName === CACHE_NAMES.fonts) {
    // Cache-first strategy for static assets and fonts
    event.respondWith(cacheFirst(event.request, cacheName));
  } else if (cacheName === CACHE_NAMES.images) {
    // Stale-while-revalidate for images
    event.respondWith(staleWhileRevalidate(event.request, cacheName));
  } else if (cacheName === CACHE_NAMES.api) {
    // Network-first for API calls
    event.respondWith(networkFirst(event.request, cacheName));
  } else {
    // Stale-while-revalidate for pages and everything else
    event.respondWith(staleWhileRevalidate(event.request, cacheName));
  }
});

// Cache-first strategy: try cache, fall back to network
async function cacheFirst(request, cacheName) {
  const cache = await caches.open(cacheName);
  const cachedResponse = await cache.match(request);
  
  if (cachedResponse) {
    return cachedResponse;
  }
  
  try {
    const networkResponse = await fetch(request);
    if (networkResponse && networkResponse.ok) {
      cache.put(request, networkResponse.clone());
    }
    return networkResponse;
  } catch (error) {
    // Return a fallback for navigation requests
    if (request.destination === 'document') {
      return cache.match('/');
    }
    return new Response('Network error occurred', {
      status: 408,
      headers: { 'Content-Type': 'text/plain' }
    });
  }
}

// Network-first strategy: try network, fall back to cache
async function networkFirst(request, cacheName) {
  const cache = await caches.open(cacheName);
  
  try {
    const networkResponse = await fetch(request);
    if (networkResponse && networkResponse.ok) {
      cache.put(request, networkResponse.clone());
    }
    return networkResponse;
  } catch (error) {
    const cachedResponse = await cache.match(request);
    if (cachedResponse) {
      return cachedResponse;
    }
    return new Response('Network error occurred', {
      status: 408,
      headers: { 'Content-Type': 'text/plain' }
    });
  }
}

// Stale-while-revalidate: return cached version immediately, then update
async function staleWhileRevalidate(request, cacheName) {
  const cache = await caches.open(cacheName);
  
  // Get from cache
  const cachedResponse = await cache.match(request);
  
  // Fetch in the background to update cache
  const fetchAndCache = fetch(request)
    .then(networkResponse => {
      if (networkResponse && networkResponse.ok) {
        cache.put(request, networkResponse.clone());
      }
      return networkResponse;
    })
    .catch(error => {
      console.warn(`Failed to update cache for ${request.url}:`, error);
      // Just return null to indicate fetch failed - we'll use cached version
      return null;
    });
  
  // Return the cached response if we have it, otherwise wait for the network response
  return cachedResponse || fetchAndCache;
}

// Periodic cache cleanup (once per day)
self.addEventListener('message', event => {
  if (event.data && event.data.type === 'CLEAR_CACHE') {
    cleanupCaches();
  }
});

// Clean up expired cache entries
async function cleanupCaches() {
  const now = Date.now();
  
  for (const [cacheType, cacheName] of Object.entries(CACHE_NAMES)) {
    const maxAge = CACHE_DURATIONS[cacheType];
    const cache = await caches.open(cacheName);
    const requests = await cache.keys();
    
    for (const request of requests) {
      const responseFromCache = await cache.match(request);
      if (responseFromCache) {
        const timestamp = responseFromCache.headers.get('sw-timestamp');
        if (timestamp && (now - Number(timestamp)) > maxAge) {
          await cache.delete(request);
        }
      }
    }
  }
}

// Run cache cleanup once a day
setInterval(cleanupCaches, 24 * 60 * 60 * 1000);

// Handle push notifications
self.addEventListener('push', event => {
  if (event.data) {
    const data = event.data.json();
    const options = {
      body: data.body || 'Something new from Pixsell Games',
      icon: '/favicon_io/android-chrome-192x192.png',
      badge: '/favicon_io/favicon-32x32.png',
      vibrate: [100, 50, 100],
      data: {
        url: data.url || '/'
      }
    };

    event.waitUntil(
      self.registration.showNotification(data.title || 'Pixsell Games', options)
    );
  }
});

// Handle notification clicks
self.addEventListener('notificationclick', event => {
  event.notification.close();
  event.waitUntil(
    clients.openWindow(event.notification.data.url || '/')
  );
}); 