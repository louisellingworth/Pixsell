import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Marketing Your Game in China: 5 Strategies for Steam Titles | EightSix Games',
  description: 'A guide to marketing your Steam game in China, with five actionable strategies for Western developers.',
  alternates: {
    canonical: '/blog/marketing-your-game-in-china',
  },
  openGraph: {
    type: 'article',
    url: 'https://eightsixgames.com/blog/marketing-your-game-in-china',
    title: 'Marketing Your Game in China: 5 Strategies for Steam Titles | EightSix Games',
    description: 'A guide to marketing your Steam game in China, with five actionable strategies for Western developers.',
    siteName: 'EightSix Games',
    images: [{ url: '/blog/marketing-china-games-640w.webp' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Marketing Your Game in China: 5 Strategies for Steam Titles | EightSix Games',
    description: 'A guide to marketing your Steam game in China, with five actionable strategies for Western developers.',
    images: ['/blog/marketing-china-games-640w.webp'],
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
