import './globals.css'
import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import { cn } from '@/lib/utils'
import Navigation from './components/Navigation'
import Script from 'next/script'
import FontPreload from './components/FontPreload'

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
  keywords: ['game publishing', 'China market entry', 'game localization', 'mobile game publishing', 'Western developers', 'China game market'],
  authors: [{ name: 'Pixsell Games' }],
  creator: 'Pixsell Games',
  publisher: 'Pixsell Games',
  alternates: {
    canonical: '/',
    languages: {
      'en-US': '/en-US',
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
        <main className="relative z-10 pt-16 md:pt-20">{children}</main>
      </body>
    </html>
  )
} 