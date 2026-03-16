'use client'

import { useEffect, useRef } from 'react'
import Link from 'next/link'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function PlatformSelection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const headingRef = useRef<HTMLDivElement>(null)
  const cardsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(headingRef.current, {
        y: 32,
        opacity: 0,
        duration: 0.7,
        ease: 'power3.out',
        immediateRender: false,
        scrollTrigger: { trigger: headingRef.current, start: 'top 85%', once: true },
      })

      const cards = cardsRef.current?.querySelectorAll<HTMLDivElement>('.platform-card')
      if (cards) {
        gsap.from(cards, {
          y: 40,
          opacity: 0,
          duration: 0.65,
          stagger: 0.15,
          ease: 'power3.out',
          immediateRender: false,
          scrollTrigger: { trigger: cardsRef.current, start: 'top 80%', once: true },
        })
      }
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="relative py-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10">

        {/* Heading */}
        <div ref={headingRef} className="text-center mb-12">
          <p className="text-xs font-medium tracking-widest uppercase text-purple-400 mb-4">Choose Your Path</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            Which platform are you{' '}
            <span style={{
              backgroundImage: 'linear-gradient(135deg, #a855f7, #ec4899)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundSize: '200% 200%',
              animation: 'premiumGradient 3s ease-in-out infinite',
            }}>
              publishing on?
            </span>
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto text-base leading-relaxed">
            We support both Steam/PC and mobile publishing in China. Select your platform to see the relevant pathway.
          </p>
        </div>

        {/* Cards */}
        <div ref={cardsRef} className="grid md:grid-cols-2 gap-6">

          {/* PC / Steam */}
          <Link
            href="/services/co-publishing"
            className="platform-card group block rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1.5"
            style={{
              background: 'linear-gradient(135deg, rgba(124,58,237,0.12) 0%, rgba(12,4,24,0.97) 100%)',
              boxShadow: '0 0 0 1px rgba(168,85,247,0.25), 0 8px 32px rgba(124,58,237,0.08)',
            }}
            onMouseEnter={e => {
              (e.currentTarget as HTMLElement).style.boxShadow = '0 0 0 1px rgba(168,85,247,0.45), 0 24px 60px rgba(124,58,237,0.18)'
            }}
            onMouseLeave={e => {
              (e.currentTarget as HTMLElement).style.boxShadow = '0 0 0 1px rgba(168,85,247,0.25), 0 8px 32px rgba(124,58,237,0.08)'
            }}
          >
            <div className="h-0.5 w-full" style={{ background: 'linear-gradient(90deg, #7c3aed, #a855f7)' }} />
            <div className="p-8 md:p-10">
              <p className="text-xs font-semibold tracking-widest uppercase text-purple-400 mb-5">PC / Steam Developers</p>
              <h3 className="text-2xl font-bold text-white mb-3 leading-snug">
                Steam Publishing<br />in China
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-8">
                Launch your PC game on Steam Global with a vetted Chinese co-publisher. No ISBN required — full IP control, performance-based model, 90 days to market.
              </p>
              <div className="flex items-center gap-2 text-purple-300 text-sm font-semibold">
                <span>Explore the Steam pathway</span>
                <svg
                  className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </div>
            </div>
          </Link>

          {/* Mobile */}
          <Link
            href="/services/mobile-publishing"
            className="platform-card group block rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1.5"
            style={{
              background: 'linear-gradient(135deg, rgba(236,72,153,0.10) 0%, rgba(12,4,24,0.97) 100%)',
              boxShadow: '0 0 0 1px rgba(236,72,153,0.22), 0 8px 32px rgba(236,72,153,0.07)',
            }}
            onMouseEnter={e => {
              (e.currentTarget as HTMLElement).style.boxShadow = '0 0 0 1px rgba(236,72,153,0.45), 0 24px 60px rgba(236,72,153,0.18)'
            }}
            onMouseLeave={e => {
              (e.currentTarget as HTMLElement).style.boxShadow = '0 0 0 1px rgba(236,72,153,0.22), 0 8px 32px rgba(236,72,153,0.07)'
            }}
          >
            <div className="h-0.5 w-full" style={{ background: 'linear-gradient(90deg, #ec4899, #f472b6)' }} />
            <div className="p-8 md:p-10">
              <p className="text-xs font-semibold tracking-widest uppercase text-pink-400 mb-5">Mobile Game Developers</p>
              <h3 className="text-2xl font-bold text-white mb-3 leading-snug">
                Mobile Publishing<br />in China
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-8">
                Publish your mobile game across China&apos;s top platforms — TapTap, Bilibili Games, and more. We handle partner matching, UA oversight, and ongoing performance monitoring.
              </p>
              <div className="flex items-center gap-2 text-pink-300 text-sm font-semibold">
                <span>Explore the Mobile pathway</span>
                <svg
                  className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </div>
            </div>
          </Link>

        </div>
      </div>
    </section>
  )
}
