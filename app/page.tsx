'use client'

import Navigation from './components/Navigation'
import Hero from './components/Hero'
import ComplexitySection from './components/ComplexitySection'
import ProcessSection from './components/ProcessSection'
import FAQSection from './components/FAQSection'
import Footer from './components/Footer'
import FloatingConsultButton from './components/FloatingConsultButton'
import WhatWeOffer from './components/WhatWeOffer'

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0A0A0B] text-white overflow-x-hidden">
      <Navigation />
      
      {/* Introduction */}
      <Hero />
      
      {/* Main Content */}
      <ComplexitySection />
      <WhatWeOffer />
      <ProcessSection />
      <FAQSection />
      
      <Footer />
      <FloatingConsultButton />
    </main>
  )
} 
