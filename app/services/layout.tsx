import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Our Services | Game Publishing in China | EightSix Games',
  description: 'Partner matching, localisation, marketing oversight, and revenue monitoring for Western developers publishing games in China.',
  alternates: {
    canonical: '/services',
  },
  openGraph: {
    type: 'website',
    url: 'https://eightsixgames.com/services',
    title: 'Our Services | Game Publishing in China | EightSix Games',
    description: 'Partner matching, localisation, marketing oversight, and revenue monitoring for Western developers publishing games in China.',
    siteName: 'EightSix Games',
    images: [{ url: '/pixsell-meta-image.jpg' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Our Services | Game Publishing in China | EightSix Games',
    description: 'Partner matching, localisation, marketing oversight, and revenue monitoring for Western developers publishing games in China.',
    images: ['/pixsell-meta-image.jpg'],
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
