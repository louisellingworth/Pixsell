import './globals.css'
import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import { cn } from '@/lib/utils'
import Navigation from './components/Navigation'
import Script from 'next/script'
import FontPreload from './components/FontPreload'
import PerformanceMonitor from './components/PerformanceMonitor'

// Optimize font loading with display swap and preload
const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  preload: true,
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-inter',
  fallback: ['system-ui', 'Arial', 'sans-serif'],
  adjustFontFallback: true,
})

export const metadata: Metadata = {
  metadataBase: new URL('https://pixsell.games'),
  title: 'Pixsell - Game Publishing in China',
  description: 'We make it easy to launch your game in China. From finding the right partners to approvals and marketing setup — we handle the hard stuff, so you can focus on making great games.',
  keywords: ['game publishing', 'China market entry', 'game localization', 'mobile game publishing', 'Western developers', 'China game market', 'game co-publishing', 'Chinese game market'],
  authors: [{ name: 'Pixsell Games' }],
  creator: 'Pixsell Games',
  publisher: 'Pixsell Games',
  alternates: {
    canonical: '/',
    languages: {
      'en-US': '/en-US',
      'zh-CN': '/zh-CN',
    },
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://pixsell.games',
    title: 'Pixsell - Game Publishing in China',
    description: 'Pixsell Games is a specialised co-publishing service that helps Western game developers successfully launch their games in the Chinese market.',
    siteName: 'Pixsell Games',
    images: [
      {
        url: '/pixsell-meta-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Pixsell Games - China Game Publishing',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pixsell - Game Publishing in China',
    description: 'Pixsell Games helps Western developers launch in China with trusted co-publishing partners.',
    images: ['/pixsell-meta-image.jpg'],
    creator: '@pixsell_games',
    site: '@pixsell_games',
  },
  other: {
    'apple-mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-status-bar-style': 'black-translucent',
    'format-detection': 'telephone=no',
    'mobile-web-app-capable': 'yes',
    'application-name': 'Pixsell',
    'msapplication-TileColor': '#000000',
    'msapplication-tap-highlight': 'no',
    'google-site-verification': 'your-verification-code',
    'msvalidate.01': 'your-bing-verification-code',
  }
}

export const viewport: Viewport = {
  themeColor: '#000000',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  minimumScale: 1,
  userScalable: true,
  viewportFit: 'cover',
  colorScheme: 'dark',
  interactiveWidget: 'resizes-content',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={cn(inter.variable)} style={{ scrollBehavior: 'smooth' }}>
      <head>
        {/* Preconnect to domains for faster resource loading */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <link rel="dns-prefetch" href="https://fonts.gstatic.com" />
        
        {/* Add preload for critical resources */}
        <link rel="preload" href="/fonts/inter-var.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        <link rel="preload" href="/Pixsell Logo.png" as="image" />
        
        {/* Font preloading from our optimization script */}
        <FontPreload />
        
        {/* Manifest for PWA */}
        <link rel="manifest" href="/manifest.json" />
        
        {/* Optimization meta tags */}
        <meta name="google" content="notranslate" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-touch-fullscreen" content="yes" />
        <meta name="apple-mobile-web-app-title" content="Pixsell" />
        <meta name="theme-color" content="#000000" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="msapplication-tap-highlight" content="no" />
        
        {/* Service Worker Registration */}
        <Script id="register-sw" strategy="afterInteractive">
          {`
            if ('serviceWorker' in navigator && window.location.protocol === 'https:') {
              window.addEventListener('load', function() {
                navigator.serviceWorker.register('/sw.js').then(
                  function(registration) {
                    console.log('ServiceWorker registration successful with scope: ', registration.scope);
                  },
                  function(err) {
                    console.log('ServiceWorker registration failed: ', err);
                  }
                );
              });
            }
          `}
        </Script>
        
        {/* Structured Data for SEO - Organization */}
        <Script id="schema-organization" type="application/ld+json" strategy="beforeInteractive">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Pixsell Games",
              "url": "https://pixsell.games",
              "logo": "https://pixsell.games/icons/icon-512x512.png",
              "description": "We make it easy to launch your game in China. From finding the right partners to approvals and marketing setup — we handle the hard stuff, so you can focus on making great games.",
              "sameAs": [
                "https://twitter.com/pixsellgames",
                "https://linkedin.com/company/pixsellgames"
              ],
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "",
                "contactType": "customer service",
                "email": "contact@pixsell.games",
                "availableLanguage": ["English", "Chinese"]
              },
              "serviceType": "Game Publishing",
              "areaServed": "China",
              "industry": "Video Games"
            }
          `}
        </Script>

        {/* Structured Data for SEO - Service */}
        <Script id="schema-service" type="application/ld+json" strategy="beforeInteractive">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Service",
              "name": "Game Publishing in China",
              "description": "Comprehensive game publishing services for Western developers entering the Chinese market",
              "provider": {
                "@type": "Organization",
                "name": "Pixsell Games"
              },
              "serviceType": "Game Publishing",
              "areaServed": "China",
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Publishing Services",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Co-Publishing"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Localization"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Marketing"
                    }
                  }
                ]
              }
            }
          `}
        </Script>
        
        {/* Structured Data for SEO - WebSite */}
        <Script id="schema-website" type="application/ld+json" strategy="beforeInteractive">
          {`
            {
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "Pixsell Games",
              "url": "https://pixsell.games",
              "potentialAction": {
                "@type": "SearchAction",
                "target": "https://pixsell.games/search?q={search_term_string}",
                "query-input": "required name=search_term_string"
              }
            }
          `}
        </Script>
      </head>
      <body className="bg-black text-white antialiased">
        <div 
          className="fixed inset-0 z-[-1] bg-gradient-to-br from-black via-[#0C0C0E] to-[#1A1A24] pointer-events-none" 
          aria-hidden="true"
        />
        <Navigation />
        <PerformanceMonitor />
        <main className="relative z-10 pt-16 md:pt-20">{children}</main>
      </body>
    </html>
  )
} 