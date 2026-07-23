import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy | EightSix Games',
  description: 'How EightSix Games collects, uses, and protects your personal information.',
  alternates: {
    canonical: '/privacy',
  },
  openGraph: {
    type: 'website',
    url: 'https://eightsixgames.com/privacy',
    title: 'Privacy Policy | EightSix Games',
    description: 'How EightSix Games collects, uses, and protects your personal information.',
    siteName: 'EightSix Games',
    images: [{ url: '/pixsell-meta-image.jpg' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Privacy Policy | EightSix Games',
    description: 'How EightSix Games collects, uses, and protects your personal information.',
    images: ['/pixsell-meta-image.jpg'],
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
