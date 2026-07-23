import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '5 Mistakes Western Developers Make in China | EightSix Games',
  description: 'The Chinese gaming market offers immense opportunities, but it also comes with unique challenges. Here are the five most common mistakes Western developers make when entering China, and how to avoid them.',
  alternates: {
    canonical: '/blog/5-mistakes-western-developers-make-in-china',
  },
  openGraph: {
    type: 'article',
    url: 'https://eightsixgames.com/blog/5-mistakes-western-developers-make-in-china',
    title: '5 Mistakes Western Developers Make in China | EightSix Games',
    description: 'The Chinese gaming market offers immense opportunities, but it also comes with unique challenges. Here are the five most common mistakes Western developers make when entering China, and how to avoid them.',
    siteName: 'EightSix Games',
    images: [{ url: '/blog/mistakes-hero.webp' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: '5 Mistakes Western Developers Make in China | EightSix Games',
    description: 'The Chinese gaming market offers immense opportunities, but it also comes with unique challenges. Here are the five most common mistakes Western developers make when entering China, and how to avoid them.',
    images: ['/blog/mistakes-hero.webp'],
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
