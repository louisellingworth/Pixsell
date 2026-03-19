import './globals.css'
import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import { cn } from '@/utils/cn'
import { siteConfig } from '@/lib/config'
import Navigation from './components/Navigation'
import Script from 'next/script'
import FontPreload from './components/FontPreload'
import PerformanceMonitor from './components/PerformanceMonitor'
import ParticlesBackgroundClient from './components/ui/ParticlesBackgroundClient'
import CriticalCSS from './components/CriticalCSS'


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
  metadataBase: new URL(siteConfig.url),
  title: 'EightSix - Game Publishing in China | Co-Publishing & Localization Services',
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  authors: [{ name: 'EightSix Games' }],
  creator: 'EightSix Games',
  publisher: 'EightSix Games',
  alternates: {
    canonical: '/',
    languages: {
      'en': '/',
      'x-default': '/',
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
    url: 'https://eightsixgames.com',
    title: 'EightSix - Game Publishing in China | Co-Publishing & Localization Services',
    description: 'Launch your game in China with trusted co-publishing partners. We handle game approvals, marketing, localization, and partnerships for Western developers entering the Chinese game market.',
    siteName: 'EightSix Games',
    images: [
      {
        url: '/pixsell-meta-image.jpg',
        width: 1200,
        height: 630,
        alt: 'EightSix Games - China Game Publishing Services for Western Developers',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'EightSix - Game Publishing in China | Co-Publishing & Localization Services',
    description: 'Launch your game in China with trusted co-publishing partners. We handle game approvals, marketing, localization, and partnerships.',
    images: ['/pixsell-meta-image.jpg'],
    creator: '@eightsixgames',
    site: '@eightsixgames',
  },
  other: {
    'apple-mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-status-bar-style': 'black-translucent',
    'format-detection': 'telephone=no',
    'mobile-web-app-capable': 'yes',
    'application-name': 'EightSix',
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
        {/* Favicon */}
        <link rel="icon" type="image/x-icon" href="/favicon/favicon.ico" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="192x192" href="/favicon/android-chrome-192x192.png" />
        <link rel="icon" type="image/png" sizes="512x512" href="/favicon/android-chrome-512x512.png" />
        
        {/* Preconnect to domains for faster resource loading */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <link rel="dns-prefetch" href="https://fonts.gstatic.com" />
        
        {/* Add preload for critical resources */}
        <link rel="preload" href="/fonts/inter-var.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        <link rel="preload" href="/6ight-games-logo.png" as="image" />
        
        {/* Font preloading from our optimization script */}
        <FontPreload />
        
        {/* Manifest for PWA */}
        <link rel="manifest" href="/manifest.json" />
        
        {/* Optimization meta tags */}
        <meta name="google" content="notranslate" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-touch-fullscreen" content="yes" />
        <meta name="apple-mobile-web-app-title" content="EightSix" />
        <meta name="theme-color" content="#000000" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="msapplication-tap-highlight" content="no" />
        
        {/* Hreflang tags for internationalization */}
        <link rel="alternate" hrefLang="en" href="https://eightsixgames.com" />
        <link rel="alternate" hrefLang="x-default" href="https://eightsixgames.com" />
        
        {/* Google Analytics */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${siteConfig.analytics.measurementId}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${siteConfig.analytics.measurementId}', {
              page_title: document.title,
              page_location: window.location.href,
              send_page_view: true
            });
          `}
        </Script>

        {/* Service Worker Registration */}
        <Script id="register-sw" strategy="lazyOnload">
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

        {/* Additional Structured Data - WebSite */}
        <Script id="schema-website" type="application/ld+json" strategy="beforeInteractive">
          {`
            {
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "EightSix Games",
              "url": "https://eightsixgames.com",
              "description": "Launch your game in China with trusted co-publishing partners",
              "potentialAction": {
                "@type": "SearchAction",
                "target": "https://eightsixgames.com/search?q={search_term_string}",
                "query-input": "required name=search_term_string"
              }
            }
          `}
        </Script>

        {/* Additional Structured Data - BreadcrumbList */}
        <Script id="schema-breadcrumb" type="application/ld+json" strategy="beforeInteractive">
          {`
            {
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              "itemListElement": [
                {
                  "@type": "ListItem",
                  "position": 1,
                  "name": "Home",
                  "item": "https://eightsixgames.com"
                },
                {
                  "@type": "ListItem",
                  "position": 2,
                  "name": "Services",
                  "item": "https://eightsixgames.com/services"
                },
                {
                  "@type": "ListItem",
                  "position": 3,
                  "name": "About",
                  "item": "https://eightsixgames.com/about"
                }
              ]
            }
          `}
        </Script>
        
        {/* Structured Data for SEO - Organization */}
        <Script id="schema-organization" type="application/ld+json" strategy="beforeInteractive">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "EightSix Games",
              "url": "https://eightsixgames.com",
              "logo": "https://eightsixgames.com/favicon/android-chrome-512x512.png",
              "description": "Launch your game in China with trusted co-publishing partners. We handle approvals, marketing, and partnerships.",
              "sameAs": [
                "https://twitter.com/eightsixgames",
                "https://linkedin.com/company/eightsixgames"
              ],
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "",
                "contactType": "customer service",
                "email": "contact@eightsixgames.com",
                "availableLanguage": ["English", "Chinese"]
              },
              "serviceType": "Game Publishing",
              "areaServed": "China",
              "industry": "Video Games",
              "foundingDate": "2024",
              "address": {
                "@type": "PostalAddress",
                "addressCountry": "China"
              }
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
                "name": "EightSix Games"
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
              "name": "EightSix Games",
              "url": "https://eightsixgames.com",
              "potentialAction": {
                "@type": "SearchAction",
                "target": "https://eightsixgames.com/search?q={search_term_string}",
                "query-input": "required name=search_term_string"
              }
            }
          `}
        </Script>
      </head>
      <body className="relative min-h-screen w-full bg-black text-white antialiased">
        <ParticlesBackgroundClient />
        <Navigation />
        <PerformanceMonitor />
        <CriticalCSS />
        <main className="relative z-10 pt-16 md:pt-20">{children}</main>
      </body>
    </html>
  )
} 