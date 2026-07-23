import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Publish a Game on Steam in China | EightSix Games',
  description: 'A step-by-step guide to publishing your game on Steam in China — co-publisher selection, compliance, localisation, and launch strategy.',
  alternates: {
    canonical: '/blog/how-to-publish-a-game-on-steam-in-china',
  },
  openGraph: {
    type: 'article',
    url: 'https://eightsixgames.com/blog/how-to-publish-a-game-on-steam-in-china',
    title: 'How to Publish a Game on Steam in China | EightSix Games',
    description: 'A step-by-step guide to publishing your game on Steam in China — co-publisher selection, compliance, localisation, and launch strategy.',
    siteName: 'EightSix Games',
    images: [{ url: '/blog/steam-china-publishing-1024w.webp' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Publish a Game on Steam in China | EightSix Games',
    description: 'A step-by-step guide to publishing your game on Steam in China — co-publisher selection, compliance, localisation, and launch strategy.',
    images: ['/blog/steam-china-publishing-1024w.webp'],
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
