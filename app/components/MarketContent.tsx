'use client'

import HeroSection from './market/HeroSection'
import PlatformSelection from './market/PlatformSelection'
import CoPublishingWorks from './market/CoPublishingWorks'
import WhyChooseSection from './market/WhyChooseSection'
import ServicesSection from './market/ServicesSection'
import RoadmapSection from './market/RoadmapSection'
import FinalCTA from './market/FinalCTA'

export default function MarketContent() {
  return (
    <div className="relative">
      <div className="relative pt-16 print:pt-32">
        <div className="fixed inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black/50 to-black" />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-purple-900/20 mix-blend-overlay" />
        </div>
        <HeroSection />
        <PlatformSelection />
        <CoPublishingWorks />
        <WhyChooseSection />
        <ServicesSection />
        <RoadmapSection />
        <FinalCTA />
      </div>
    </div>
  )
}
