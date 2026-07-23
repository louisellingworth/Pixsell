import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Strategic Partner Matching | EightSix Games',
  description: 'We match Western developers with vetted Chinese co-publishers and negotiate deal terms that protect your IP and revenue.',
  alternates: {
    canonical: '/services/partnership',
  },
  openGraph: {
    type: 'website',
    url: 'https://eightsixgames.com/services/partnership',
    title: 'Strategic Partner Matching | EightSix Games',
    description: 'We match Western developers with vetted Chinese co-publishers and negotiate deal terms that protect your IP and revenue.',
    siteName: 'EightSix Games',
    images: [{ url: '/pixsell-meta-image.jpg' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Strategic Partner Matching | EightSix Games',
    description: 'We match Western developers with vetted Chinese co-publishers and negotiate deal terms that protect your IP and revenue.',
    images: ['/pixsell-meta-image.jpg'],
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
