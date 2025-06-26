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

export function Head() {
  return (
    <>
      <title>About Pixsell Games | Game Publishing Experts in China</title>
      <meta name="description" content="Learn about Pixsell Games, our mission, and our team of experts helping Western developers succeed in the Chinese gaming market." />
      <link rel="canonical" href="https://pixsell.games/about" />
      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content="About Pixsell Games | Game Publishing Experts in China" />
      <meta property="og:description" content="Learn about Pixsell Games, our mission, and our team of experts helping Western developers succeed in the Chinese gaming market." />
      <meta property="og:image" content="https://pixsell.games/pixsell-meta-image.jpg" />
      <meta property="og:url" content="https://pixsell.games/about" />
      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="About Pixsell Games | Game Publishing Experts in China" />
      <meta name="twitter:description" content="Learn about Pixsell Games, our mission, and our team of experts helping Western developers succeed in the Chinese gaming market." />
      <meta name="twitter:image" content="https://pixsell.games/pixsell-meta-image.jpg" />
    </>
  );
} 