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
    <main className="min-h-screen bg-[#0A0A0B] text-white overflow-x-hidden relative">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0B] via-[#0A0A0B] to-[#0F0F11] pointer-events-none" />
      
      {/* Content */}
      <div className="relative z-10">
        {/* Navigation with backdrop blur */}
        <div className="sticky top-0 z-50 bg-[#0A0A0B]/80 backdrop-blur-xl border-b border-white/5">
          <Navigation />
        </div>
        
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center">
          <Hero />
        </section>
        
        {/* Main Content */}
        <div className="relative space-y-60 md:space-y-80 pb-60">
          {/* Complexity Section */}
          <section className="relative">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0A0A0B]/80 to-transparent" />
            <ComplexitySection />
          </section>
          
          {/* What We Offer Section with contrast background */}
          <section className="relative py-40 bg-[#0C0C0D]">
            <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0B] to-transparent opacity-60" />
            <div className="relative max-w-[1400px] mx-auto px-6 md:px-8">
              <WhatWeOffer />
            </div>
          </section>
          
          {/* Process Section with enhanced contrast */}
          <section className="relative py-40 bg-gradient-to-b from-[#0F0F11] to-[#0A0A0B]">
            <div className="relative max-w-[1400px] mx-auto px-6 md:px-8">
              <ProcessSection />
            </div>
          </section>
          
          {/* FAQ Section with container width */}
          <section className="relative py-40">
            <div className="max-w-[1400px] mx-auto px-6 md:px-8">
              <FAQSection />
            </div>
          </section>
        </div>
        
        {/* Footer with gradient border */}
        <div className="relative mt-40">
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
          <Footer />
        </div>
      </div>
      
      {/* Floating button with enhanced z-index */}
      <div className="relative z-50">
        <FloatingConsultButton />
      </div>
    </main>
  )
} 
