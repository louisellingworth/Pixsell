'use client'

import AboutContent from '../components/AboutContent'

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#0A0A0B] text-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'AboutPage',
        name: 'About EightSix Games',
        description: 'Learn about EightSix Games, our mission, and our team of experts helping Western developers succeed in the Chinese gaming market.',
        url: 'https://eightsixgames.com/about',
        publisher: {
          '@type': 'Organization',
          name: 'EightSix Games',
          logo: {
            '@type': 'ImageObject',
            url: 'https://eightsixgames.com/favicon_io/android-chrome-192x192.png'
          }
        }
      })}} />
      <AboutContent />
    </main>
  )
} 