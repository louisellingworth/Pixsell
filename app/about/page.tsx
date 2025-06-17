'use client'

import AboutContent from '../components/AboutContent'
import Navigation from '../components/Navigation'

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#0A0A0B] text-white">
      <div className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-black/90 border-b border-purple-500/10">
        <Navigation />
      </div>
      <AboutContent />
    </main>
  )
} 