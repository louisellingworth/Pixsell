import { Metadata } from 'next'
import CoPublishingPage from './CoPublishingPage'

export const metadata: Metadata = {
  title: 'Co-Publishing | Pixsell',
  description: 'Partner with trusted Chinese publishers and optimise your games success in the Chinese market',
  openGraph: {
    title: 'Co-Publishing | Pixsell',
    description: 'Partner with trusted Chinese publishers and optimise your games success in the Chinese market',
    url: 'https://pixsell.games/services/co-publishing',
    type: 'website',
    images: [
      {
        url: 'https://pixsell.games/pixsell-meta-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Pixsell Games - Co-Publishing Service',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Co-Publishing | Pixsell',
    description: 'Partner with trusted Chinese publishers and optimise your games success in the Chinese market',
    images: ['https://pixsell.games/pixsell-meta-image.jpg'],
  },
}

export function Head() {
  return (
    <link rel="canonical" href="https://pixsell.games/services/co-publishing" />
  );
}

export default function Page() {
  return <CoPublishingPage />
}

<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Co-Publishing',
  description: 'Partner with trusted Chinese publishers and optimise your games success in the Chinese market',
  url: 'https://pixsell.games/services/co-publishing',
  provider: {
    '@type': 'Organization',
    name: 'Pixsell Games',
    logo: {
      '@type': 'ImageObject',
      url: 'https://pixsell.games/favicon_io/android-chrome-192x192.png'
    }
  }
})}} /> 