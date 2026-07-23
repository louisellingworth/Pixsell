import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact EightSix Games | Game Publishing in China',
  description: 'Contact EightSix Games to discuss your project, get expert advice, or start your journey to publishing success in China.',
  alternates: {
    canonical: '/contact',
  },
  openGraph: {
    type: 'website',
    url: 'https://eightsixgames.com/contact',
    title: 'Contact EightSix Games | Game Publishing in China',
    description: 'Contact EightSix Games to discuss your project, get expert advice, or start your journey to publishing success in China.',
    siteName: 'EightSix Games',
    images: [{ url: '/pixsell-meta-image.jpg' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact EightSix Games | Game Publishing in China',
    description: 'Contact EightSix Games to discuss your project, get expert advice, or start your journey to publishing success in China.',
    images: ['/pixsell-meta-image.jpg'],
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
