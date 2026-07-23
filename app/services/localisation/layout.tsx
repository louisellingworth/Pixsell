import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Game Localisation for China | EightSix Games',
  description: 'Culturally-aware Chinese translation, UI adaptation, and cultural QA that prepares your game for Chinese players.',
  alternates: {
    canonical: '/services/localisation',
  },
  openGraph: {
    type: 'website',
    url: 'https://eightsixgames.com/services/localisation',
    title: 'Game Localisation for China | EightSix Games',
    description: 'Culturally-aware Chinese translation, UI adaptation, and cultural QA that prepares your game for Chinese players.',
    siteName: 'EightSix Games',
    images: [{ url: '/pixsell-meta-image.jpg' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Game Localisation for China | EightSix Games',
    description: 'Culturally-aware Chinese translation, UI adaptation, and cultural QA that prepares your game for Chinese players.',
    images: ['/pixsell-meta-image.jpg'],
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
