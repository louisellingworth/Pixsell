import { Metadata } from 'next'
import CoPublishingPage from './CoPublishingPage'

export const metadata: Metadata = {
  title: 'Co-Publishing | EightSix',
  description: 'Partner with trusted Chinese publishers and optimise your games success in the Chinese market',
  openGraph: {
    title: 'Co-Publishing | EightSix',
    description: 'Partner with trusted Chinese publishers and optimise your games success in the Chinese market',
    url: 'https://eightsixgames.com/services/co-publishing',
    type: 'website',
    images: [
      {
        url: 'https://eightsixgames.com/eightsix-meta-image.jpg',
        width: 1200,
        height: 630,
        alt: 'EightSix Games - Co-Publishing Service',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Co-Publishing | EightSix',
    description: 'Partner with trusted Chinese publishers and optimise your games success in the Chinese market',
    images: ['https://eightsixgames.com/eightsix-meta-image.jpg'],
  },
}

export default function Page() {
  return <CoPublishingPage />
}

<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Co-Publishing',
  description: 'Partner with trusted Chinese publishers and optimise your games success in the Chinese market',
  url: 'https://eightsixgames.com/services/co-publishing',
  provider: {
    '@type': 'Organization',
    name: 'EightSix Games',
    logo: {
      '@type': 'ImageObject',
      url: 'https://eightsixgames.com/favicon_io/android-chrome-192x192.png'
    }
  }
})}} /> 