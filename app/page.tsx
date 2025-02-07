'use client'

import Navigation from './components/Navigation'
import Hero from './components/Hero'
import InvestorsSection from './components/InvestorsSection'
import SeedOfIdea from './components/SeedOfIdea'
import ChallengesSection from './components/ChallengesSection'
import ProcessSection from './components/ProcessSection'
import StatisticsSection from './components/StatisticsSection'
import TestimonialsSection from './components/TestimonialsSection'
import FAQSection from './components/FAQSection'
import VisionSection from './components/VisionSection'
import CTASection from './components/CTASection'
import Footer from './components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0A0A0B] text-white overflow-x-hidden">
      <Navigation />
      
      {/* Ki (Introduction) */}
      <Hero />
      <InvestorsSection />
      
      {/* Sho (Development) */}
      <ChallengesSection />
      
      {/* Ten (Twist) */}
      <ProcessSection />
      <StatisticsSection />
      
      {/* Ketsu (Conclusion) */}
      <TestimonialsSection />
      <CTASection />
      <FAQSection />
      <Footer />
    </main>
  )
} 
