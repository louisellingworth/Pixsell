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
    <main className="min-h-screen bg-[#0F0F1A] text-white overflow-x-hidden relative">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0B] via-[#0F0F1A] to-[#0F0F1A] pointer-events-none" />
      
      {/* Content */}
      <div className="relative z-10">
        {/* Navigation */}
        <div className="sticky top-0 z-50 bg-[#0A0A0B]/80 backdrop-blur-xl border-b border-white/5">
          <Navigation />
        </div>
        
        {/* Hero Section - Immediate attention grabber */}
        <section className="relative bg-gradient-to-b from-[#0A0A0B] to-[#0F0F1A]">
          <Hero />
        </section>
        
        {/* Complexity Section - Problem statement */}
        <section className="relative py-20 md:py-32 bg-[#0F0F1A]">
          <ComplexitySection />
        </section>
        
        {/* Main Content */}
        <div className="relative space-y-20 md:space-y-40 bg-[#0F0F1A]">
          {/* What We Offer Section - Solution */}
          <section className="relative py-20 md:py-32 bg-[#0F0F1A]">
            <WhatWeOffer />
          </section>
          
          {/* Process Section - How it works */}
          <section className="relative py-20 md:py-32 bg-[#0F0F1A]">
            <ProcessSection />
          </section>
          
          {/* FAQ Section - Address concerns */}
          <section className="relative py-20 md:py-32 bg-[#0F0F1A]">
            <FAQSection />
          </section>
        </div>
        
        {/* Footer - Final CTA and info */}
        <div className="relative bg-[#0F0F1A]">
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
          <Footer />
        </div>
      </div>
      
      {/* Floating button - Always accessible CTA */}
      <div className="fixed bottom-8 right-8 z-50">
        <FloatingConsultButton />
      </div>
    </main>
  )
} 
