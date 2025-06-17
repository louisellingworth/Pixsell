// Import necessary components
import { Metadata } from 'next'
import PublisherMatchingContent from './PublisherMatchingContent'

export const metadata: Metadata = {
  title: 'Publisher Matching Services | Pixsell Games',
  description: 'Connect with trusted Chinese game publishers. Expert partner matching, negotiation support, and long-term relationship management.',
  keywords: ['publisher matching', 'chinese publishers', 'game publishing', 'partnership negotiation', 'china market entry'],
}

export default function PublisherMatchingPage() {
  return <PublisherMatchingContent />
} 