'use client'

import React from 'react'
import Navigation from '../../components/Navigation'
import Footer from '../../components/Footer'
import KlusterCaseStudy from '../../components/success-stories/kluster/KlusterCaseStudy'

export default function KlusterSuccessStoryPage() {
  return (
    <main className="min-h-screen bg-[#0A0A0B] text-white overflow-x-hidden">
      <Navigation />
      <KlusterCaseStudy />
      <Footer />
    </main>
  )
} 