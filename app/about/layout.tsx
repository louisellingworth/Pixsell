import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About EightSix Games | Game Publishing Experts in China',
  description: 'Learn about EightSix Games, our mission, and our team of experts helping Western developers succeed in the Chinese gaming market.',
  alternates: {
    canonical: '/about',
  },
  openGraph: {
    type: 'website',
    url: 'https://eightsixgames.com/about',
    title: 'About EightSix Games | Game Publishing Experts in China',
    description: 'Learn about EightSix Games, our mission, and our team of experts helping Western developers succeed in the Chinese gaming market.',
    siteName: 'EightSix Games',
    images: [{ url: '/pixsell-meta-image.jpg' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About EightSix Games | Game Publishing Experts in China',
    description: 'Learn about EightSix Games, our mission, and our team of experts helping Western developers succeed in the Chinese gaming market.',
    images: ['/pixsell-meta-image.jpg'],
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
