// Service Worker for Pixsell Games
const CACHE_NAME = 'pixsell-v1'
const STATIC_CACHE = 'pixsell-static-v1'
const DYNAMIC_CACHE = 'pixsell-dynamic-v1'
const API_CACHE = 'pixsell-api-v1'

// Files to cache immediately
const STATIC_FILES = [
  '/',
  '/offline.html',
  '/manifest.json',
  '/Pixsell Logo.png',
  '/pixsell-meta-image.jpg',
  '/fonts/inter-var.woff2',
  '/favicon.ico'
]

// Install event - cache static files
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(STATIC_CACHE).then((cache) => {
      return cache.addAll(STATIC_FILES)
    })
  )
  self.skipWaiting()
})

// Activate event - clean up old caches
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== STATIC_CACHE && 
              cacheName !== DYNAMIC_CACHE && 
              cacheName !== API_CACHE) {
            return caches.delete(cacheName)
          }
        })
      )
    })
  )
  self.clients.claim()
})

// Fetch event - handle different caching strategies
self.addEventListener('fetch', (event) => {
  const { request } = event
  const url = new URL(request.url)

  // Skip non-GET requests
  if (request.method !== 'GET') {
    return
  }

  // Handle different types of requests
  if (request.destination === 'image') {
    // Images: Cache first, then network
    event.respondWith(handleImageRequest(request))
  } else if (url.pathname.startsWith('/api/')) {
    // API requests: Network first, then cache
    event.respondWith(handleApiRequest(request))
  } else if (request.destination === 'font') {
    // Fonts: Cache first, then network
    event.respondWith(handleFontRequest(request))
  } else if (request.destination === 'style' || request.destination === 'script') {
    // CSS/JS: Stale while revalidate
    event.respondWith(handleStaticAssetRequest(request))
  } else {
    // HTML pages: Network first, then cache
    event.respondWith(handlePageRequest(request))
  }
})

// Image caching strategy
async function handleImageRequest(request) {
  const cache = await caches.open(STATIC_CACHE)
  const cachedResponse = await cache.match(request)
  
  if (cachedResponse) {
    return cachedResponse
  }

  try {
    const networkResponse = await fetch(request)
    if (networkResponse.ok) {
      cache.put(request, networkResponse.clone())
    }
    return networkResponse
  } catch (error) {
    // Return a placeholder image if available
    const placeholderResponse = await cache.match('/placeholder-image.png')
    return placeholderResponse || new Response('Image not available', { status: 404 })
  }
}

// API caching strategy
async function handleApiRequest(request) {
  try {
    const networkResponse = await fetch(request)
    if (networkResponse.ok) {
      const cache = await caches.open(API_CACHE)
      cache.put(request, networkResponse.clone())
    }
    return networkResponse
  } catch (error) {
    const cachedResponse = await caches.match(request)
    return cachedResponse || new Response('API not available', { status: 503 })
  }
}

// Font caching strategy
async function handleFontRequest(request) {
  const cache = await caches.open(STATIC_CACHE)
  const cachedResponse = await cache.match(request)
  
  if (cachedResponse) {
    return cachedResponse
  }

  try {
    const networkResponse = await fetch(request)
    if (networkResponse.ok) {
      cache.put(request, networkResponse.clone())
    }
    return networkResponse
  } catch (error) {
    return new Response('Font not available', { status: 404 })
  }
}

// Static asset caching strategy (CSS/JS)
async function handleStaticAssetRequest(request) {
  const cache = await caches.open(STATIC_CACHE)
  const cachedResponse = await cache.match(request)
  
  // Return cached version immediately if available
  if (cachedResponse) {
    // Update cache in background
    fetch(request).then((networkResponse) => {
      if (networkResponse.ok) {
        cache.put(request, networkResponse)
      }
    }).catch(() => {
      // Ignore network errors for background updates
    })
    return cachedResponse
  }

  // If not cached, fetch from network
  try {
    const networkResponse = await fetch(request)
    if (networkResponse.ok) {
      cache.put(request, networkResponse.clone())
    }
    return networkResponse
  } catch (error) {
    return new Response('Asset not available', { status: 404 })
  }
}

// Page caching strategy
async function handlePageRequest(request) {
  try {
    const networkResponse = await fetch(request)
    if (networkResponse.ok) {
      const cache = await caches.open(DYNAMIC_CACHE)
      cache.put(request, networkResponse.clone())
    }
    return networkResponse
  } catch (error) {
    const cachedResponse = await caches.match(request)
    if (cachedResponse) {
      return cachedResponse
    }
    
    // Return offline page for navigation requests
    if (request.mode === 'navigate') {
      const offlineResponse = await caches.match('/offline.html')
      return offlineResponse || new Response('Offline', { status: 503 })
    }
    
    return new Response('Page not available', { status: 404 })
  }
}

// Background sync for offline actions
self.addEventListener('sync', (event) => {
  if (event.tag === 'background-sync') {
    event.waitUntil(doBackgroundSync())
  }
})

async function doBackgroundSync() {
  // Handle background sync tasks
  console.log('Background sync triggered')
}

// Push notification handling
self.addEventListener('push', (event) => {
  const options = {
    body: event.data ? event.data.text() : 'New update available',
    icon: '/Pixsell Logo.png',
    badge: '/Pixsell Logo.png',
    vibrate: [100, 50, 100],
    data: {
      dateOfArrival: Date.now(),
      primaryKey: 1
    },
    actions: [
      {
        action: 'explore',
        title: 'View',
        icon: '/Pixsell Logo.png'
      },
      {
        action: 'close',
        title: 'Close',
        icon: '/Pixsell Logo.png'
      }
    ]
  }

  event.waitUntil(
    self.registration.showNotification('Pixsell Games', options)
  )
})

// Notification click handling
self.addEventListener('notificationclick', (event) => {
  event.notification.close()

  if (event.action === 'explore') {
    event.waitUntil(
      clients.openWindow('/')
    )
  }
})

// Message handling for communication with main thread
self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting()
  }
  
  if (event.data && event.data.type === 'CACHE_URLS') {
    event.waitUntil(
      caches.open(STATIC_CACHE).then((cache) => {
        return cache.addAll(event.data.urls)
      })
    )
  }
}) 