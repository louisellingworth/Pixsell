import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Understanding Revenue-Share Models for Co-Publishing PC Games in China | EightSix Games',
  description: 'A comprehensive guide to revenue-share models for co-publishing PC games in China, including negotiation tips, pitfalls, and market insights.',
  alternates: {
    canonical: '/blog/revenue-share-models-chinese-game-publishing',
  },
  openGraph: {
    type: 'article',
    url: 'https://eightsixgames.com/blog/revenue-share-models-chinese-game-publishing',
    title: 'Understanding Revenue-Share Models for Co-Publishing PC Games in China | EightSix Games',
    description: 'A comprehensive guide to revenue-share models for co-publishing PC games in China, including negotiation tips, pitfalls, and market insights.',
    siteName: 'EightSix Games',
    images: [{ url: '/blog/revenue-share-china.webp' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Understanding Revenue-Share Models for Co-Publishing PC Games in China | EightSix Games',
    description: 'A comprehensive guide to revenue-share models for co-publishing PC games in China, including negotiation tips, pitfalls, and market insights.',
    images: ['/blog/revenue-share-china.webp'],
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
