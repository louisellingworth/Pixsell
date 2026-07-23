import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Game Developer Survey | EightSix Games',
  description: 'Tell us about your game and publishing goals so we can provide personalised recommendations for the Chinese market.',
  alternates: {
    canonical: '/survey',
  },
  openGraph: {
    type: 'website',
    url: 'https://eightsixgames.com/survey',
    title: 'Game Developer Survey | EightSix Games',
    description: 'Tell us about your game and publishing goals so we can provide personalised recommendations for the Chinese market.',
    siteName: 'EightSix Games',
    images: [{ url: '/pixsell-meta-image.jpg' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Game Developer Survey | EightSix Games',
    description: 'Tell us about your game and publishing goals so we can provide personalised recommendations for the Chinese market.',
    images: ['/pixsell-meta-image.jpg'],
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
