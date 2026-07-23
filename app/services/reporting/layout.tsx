import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Revenue Reporting & Oversight | EightSix Games',
  description: 'Monthly verified revenue reporting and partner performance oversight for games published in China.',
  alternates: {
    canonical: '/services/reporting',
  },
  openGraph: {
    type: 'website',
    url: 'https://eightsixgames.com/services/reporting',
    title: 'Revenue Reporting & Oversight | EightSix Games',
    description: 'Monthly verified revenue reporting and partner performance oversight for games published in China.',
    siteName: 'EightSix Games',
    images: [{ url: '/pixsell-meta-image.jpg' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Revenue Reporting & Oversight | EightSix Games',
    description: 'Monthly verified revenue reporting and partner performance oversight for games published in China.',
    images: ['/pixsell-meta-image.jpg'],
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
