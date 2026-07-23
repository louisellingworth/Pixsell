import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Game Marketing in China | EightSix Games',
  description: 'Marketing oversight across WeChat, Weibo, Bilibili, and Douyin, campaign review, content direction, and spend tracking for your China launch.',
  alternates: {
    canonical: '/services/marketing',
  },
  openGraph: {
    type: 'website',
    url: 'https://eightsixgames.com/services/marketing',
    title: 'Game Marketing in China | EightSix Games',
    description: 'Marketing oversight across WeChat, Weibo, Bilibili, and Douyin, campaign review, content direction, and spend tracking for your China launch.',
    siteName: 'EightSix Games',
    images: [{ url: '/pixsell-meta-image.jpg' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Game Marketing in China | EightSix Games',
    description: 'Marketing oversight across WeChat, Weibo, Bilibili, and Douyin, campaign review, content direction, and spend tracking for your China launch.',
    images: ['/pixsell-meta-image.jpg'],
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
