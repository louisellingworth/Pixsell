import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Game Publishing in China: Self-Publishing vs Co-Publishing on Steam Global | EightSix Games',
  description: 'A comparison of self-publishing and co-publishing models for launching games in China, including pros, cons, and regulatory insights.',
  alternates: {
    canonical: '/blog/co-publishing-vs-self-publishing-china',
  },
  openGraph: {
    type: 'article',
    url: 'https://eightsixgames.com/blog/co-publishing-vs-self-publishing-china',
    title: 'Game Publishing in China: Self-Publishing vs Co-Publishing on Steam Global | EightSix Games',
    description: 'A comparison of self-publishing and co-publishing models for launching games in China, including pros, cons, and regulatory insights.',
    siteName: 'EightSix Games',
    images: [{ url: '/blog/publishing-models-china.webp' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Game Publishing in China: Self-Publishing vs Co-Publishing on Steam Global | EightSix Games',
    description: 'A comparison of self-publishing and co-publishing models for launching games in China, including pros, cons, and regulatory insights.',
    images: ['/blog/publishing-models-china.webp'],
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
