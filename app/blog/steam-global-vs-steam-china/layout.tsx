import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Steam Global vs Steam China: What\'s the Difference for Developers? | EightSix Games',
  description: 'A detailed comparison of Steam Global and Steam China, including platform differences, approval processes, and developer strategies.',
  alternates: {
    canonical: '/blog/steam-global-vs-steam-china',
  },
  openGraph: {
    type: 'article',
    url: 'https://eightsixgames.com/blog/steam-global-vs-steam-china',
    title: 'Steam Global vs Steam China: What\'s the Difference for Developers? | EightSix Games',
    description: 'A detailed comparison of Steam Global and Steam China, including platform differences, approval processes, and developer strategies.',
    siteName: 'EightSix Games',
    images: [{ url: '/blog/steam-global-vs-china.webp' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Steam Global vs Steam China: What\'s the Difference for Developers? | EightSix Games',
    description: 'A detailed comparison of Steam Global and Steam China, including platform differences, approval processes, and developer strategies.',
    images: ['/blog/steam-global-vs-china.webp'],
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
