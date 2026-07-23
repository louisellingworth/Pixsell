import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Find a Chinese Co-Publisher for Your Game | EightSix Games',
  description: 'Learn how to identify, evaluate, and partner with the right Chinese co-publisher to maximize your game\'s success in the market.',
  alternates: {
    canonical: '/blog/how-to-find-chinese-co-publisher',
  },
  openGraph: {
    type: 'article',
    url: 'https://eightsixgames.com/blog/how-to-find-chinese-co-publisher',
    title: 'How to Find a Chinese Co-Publisher for Your Game | EightSix Games',
    description: 'Learn how to identify, evaluate, and partner with the right Chinese co-publisher to maximize your game\'s success in the market.',
    siteName: 'EightSix Games',
    images: [{ url: '/blog/finding-chinese-publisher-optimized.webp' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Find a Chinese Co-Publisher for Your Game | EightSix Games',
    description: 'Learn how to identify, evaluate, and partner with the right Chinese co-publisher to maximize your game\'s success in the market.',
    images: ['/blog/finding-chinese-publisher-optimized.webp'],
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
