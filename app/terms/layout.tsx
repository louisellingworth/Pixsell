import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms of Service | EightSix Games',
  description: 'The terms and conditions for using the EightSix Games website and services.',
  alternates: {
    canonical: '/terms',
  },
  openGraph: {
    type: 'website',
    url: 'https://eightsixgames.com/terms',
    title: 'Terms of Service | EightSix Games',
    description: 'The terms and conditions for using the EightSix Games website and services.',
    siteName: 'EightSix Games',
    images: [{ url: '/pixsell-meta-image.jpg' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Terms of Service | EightSix Games',
    description: 'The terms and conditions for using the EightSix Games website and services.',
    images: ['/pixsell-meta-image.jpg'],
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
