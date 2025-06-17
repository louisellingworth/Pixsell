'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'

export default function MarketStrategyContent() {
  return (
    <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-bold text-white mb-8">
        Market Strategy Services
      </h1>
      <p className="text-xl text-gray-300 mb-12">
        Strategic planning and market analysis for successful game launches in China.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="bg-black/50 backdrop-blur-xl p-8 rounded-2xl border border-purple-500/20">
          <h2 className="text-2xl font-bold text-white mb-4">Our Approach</h2>
          <p className="text-gray-300">
            We provide comprehensive market analysis and strategic planning to maximize your game's 
            potential in the Chinese market.
          </p>
        </div>
        
        <div className="bg-black/50 backdrop-blur-xl p-8 rounded-2xl border border-purple-500/20">
          <h2 className="text-2xl font-bold text-white mb-4">Benefits</h2>
          <ul className="text-gray-300 space-y-2">
            <li>• Expert market insights</li>
            <li>• Revenue optimization</li>
            <li>• Competitive positioning</li>
            <li>• Risk mitigation</li>
          </ul>
        </div>
      </div>
      
      <div className="mt-16">
        <Link href="/contact" className="inline-block bg-gradient-to-r from-purple-600 to-blue-600 text-white font-medium px-8 py-3 rounded-lg">
          Contact Us
        </Link>
      </div>
    </div>
  )
} 
