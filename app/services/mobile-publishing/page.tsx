import { Metadata } from 'next'
import MobilePublishingPage from './MobilePublishingPage'

export const metadata: Metadata = {
  title: 'Mobile Publishing in China | Pixsell Games',
  description: 'Publish your mobile game in China across TapTap, Bilibili Games, WeChat Mini Games, and more. Partner matching, product adaptation oversight, UA, and ongoing performance monitoring.',
  openGraph: {
    title: 'Mobile Publishing in China | Pixsell Games',
    description: 'Publish your mobile game in China across TapTap, Bilibili Games, WeChat Mini Games, and more.',
    url: 'https://pixsellgames.com/services/mobile-publishing',
    type: 'website',
    images: [
      {
        url: 'https://pixsellgames.com/pixsell-meta-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Pixsell Games - Mobile Publishing in China',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mobile Publishing in China | Pixsell Games',
    description: 'Publish your mobile game in China across TapTap, Bilibili Games, and more.',
    images: ['https://pixsellgames.com/pixsell-meta-image.jpg'],
  },
}

export default function Page() {
  return <MobilePublishingPage />
}
