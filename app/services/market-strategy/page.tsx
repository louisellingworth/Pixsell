// Import necessary components
import { motion } from 'framer-motion'
import Link from 'next/link'

// Import the client component for the content
import MarketStrategyContent from './MarketStrategyContent'

export const metadata = {
  title: 'Market Strategy Services | Pixsell Games',
  description: 'Strategic planning and market analysis for successful game launches in China. Expert insights, opportunity assessment, and revenue modelling.',
  keywords: ['market strategy', 'china gaming market', 'market analysis', 'game revenue', 'market entry'],
}

export default function MarketStrategyPage() {
  return <MarketStrategyContent />
} 