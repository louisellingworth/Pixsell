'use client'

import AboutContent from '../components/AboutContent'
import Navigation from '../components/Navigation'

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#0A0A0B] text-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'AboutPage',
        name: 'About Pixsell Games',
        description: 'Learn about Pixsell Games, our mission, and our team of experts helping Western developers succeed in the Chinese gaming market.',
        url: 'https://pixsell.games/about',
        publisher: {
          '@type': 'Organization',
          name: 'Pixsell Games',
          logo: {
            '@type': 'ImageObject',
            url: 'https://pixsell.games/favicon_io/android-chrome-192x192.png'
          }
        }
      })}} />
      <div className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-black/90 border-b border-purple-500/10">
        <Navigation />
      </div>
      <AboutContent />
    </main>
  )
} 