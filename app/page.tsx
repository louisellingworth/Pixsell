'use client'

import Navigation from './components/Navigation'
import Hero from './components/Hero'
import ComplexitySection from './components/ComplexitySection'
import WhatWeDo from './components/WhatWeDo'
import ProcessSection from './components/ProcessSection'
import FAQSection from './components/FAQSection'
import Footer from './components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0A0A0B] text-white overflow-x-hidden">
      <Navigation />
      
      {/* Introduction */}
      <Hero />
      
      {/* Main Content */}
      <ComplexitySection />
      <WhatWeDo />
      <ProcessSection />
      <FAQSection />
      
      <Footer />
    </main>
  )
} 
