import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'ISBN Licence in China: The Complete Guide for Game Developers | EightSix Games',
  description: 'A comprehensive guide to ISBN licensing for games in China, including requirements, process, and alternatives for indie developers.',
  alternates: {
    canonical: '/blog/isbn-license-china-game-release',
  },
  openGraph: {
    type: 'article',
    url: 'https://eightsixgames.com/blog/isbn-license-china-game-release',
    title: 'ISBN Licence in China: The Complete Guide for Game Developers | EightSix Games',
    description: 'A comprehensive guide to ISBN licensing for games in China, including requirements, process, and alternatives for indie developers.',
    siteName: 'EightSix Games',
    images: [{ url: '/blog/isbn-license-china.webp' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ISBN Licence in China: The Complete Guide for Game Developers | EightSix Games',
    description: 'A comprehensive guide to ISBN licensing for games in China, including requirements, process, and alternatives for indie developers.',
    images: ['/blog/isbn-license-china.webp'],
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
