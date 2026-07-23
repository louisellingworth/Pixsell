import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Blog | China Game Publishing Insights | EightSix Games',
  description: 'Guides and insights on publishing, marketing, and monetising games in China — from Steam Global strategy to ISBN licensing and co-publishing deals.',
  alternates: {
    canonical: '/blog',
  },
  openGraph: {
    type: 'website',
    url: 'https://eightsixgames.com/blog',
    title: 'Blog | China Game Publishing Insights | EightSix Games',
    description: 'Guides and insights on publishing, marketing, and monetising games in China — from Steam Global strategy to ISBN licensing and co-publishing deals.',
    siteName: 'EightSix Games',
    images: [{ url: '/pixsell-meta-image.jpg' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Blog | China Game Publishing Insights | EightSix Games',
    description: 'Guides and insights on publishing, marketing, and monetising games in China — from Steam Global strategy to ISBN licensing and co-publishing deals.',
    images: ['/pixsell-meta-image.jpg'],
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
