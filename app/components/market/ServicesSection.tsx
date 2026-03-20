'use client'

import { useEffect, useRef } from 'react'
import Link from 'next/link'
import { ArrowRightIcon } from '@heroicons/react/24/outline'
import { services } from '@/lib/market-data'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

// Per-card accent colours (border gradient, glow, number)
const CARD_ACCENTS = [
  {
    border: 'rgba(168,85,247,0.35)',
    glow: 'rgba(168,85,247,0.12)',
    glowHover: 'rgba(168,85,247,0.22)',
    numColor: 'rgba(168,85,247,0.06)',
    iconBg: 'from-violet-500/20 to-purple-500/10',
    iconColor: 'text-violet-400',
    tag: 'Partnership',
  },
  {
    border: 'rgba(236,72,153,0.35)',
    glow: 'rgba(236,72,153,0.10)',
    glowHover: 'rgba(236,72,153,0.20)',
    numColor: 'rgba(236,72,153,0.06)',
    iconBg: 'from-pink-500/20 to-rose-500/10',
    iconColor: 'text-pink-400',
    tag: 'Localisation',
  },
  {
    border: 'rgba(59,130,246,0.35)',
    glow: 'rgba(59,130,246,0.10)',
    glowHover: 'rgba(59,130,246,0.20)',
    numColor: 'rgba(59,130,246,0.06)',
    iconBg: 'from-blue-500/20 to-indigo-500/10',
    iconColor: 'text-blue-400',
    tag: 'Growth',
  },
  {
    border: 'rgba(16,185,129,0.35)',
    glow: 'rgba(16,185,129,0.10)',
    glowHover: 'rgba(16,185,129,0.20)',
    numColor: 'rgba(16,185,129,0.06)',
    iconBg: 'from-emerald-500/20 to-green-500/10',
    iconColor: 'text-emerald-400',
    tag: 'Support',
  },
]

export default function ServicesSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const headingRef = useRef<HTMLDivElement>(null)
  const gridRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(headingRef.current, {
        y: 32,
        opacity: 0,
        duration: 2.3,
        ease: 'power3.out',
        immediateRender: false,
        scrollTrigger: {
          trigger: headingRef.current,
          start: 'top 85%',
          once: true,
        },
      })

      const cards = gridRef.current?.querySelectorAll<HTMLDivElement>('.service-card')
      if (cards) {
        gsap.from(cards, {
          y: 64,
          opacity: 0,
          scale: 0.94,
          duration: 2.3,
          stagger: 0.2,
          ease: 'expo.out',
          immediateRender: false,
          scrollTrigger: {
            trigger: gridRef.current,
            start: 'top 78%',
            once: true,
          },
        })
      }

      // Icon pop per service card
      const serviceCards = gridRef.current?.querySelectorAll<HTMLElement>('.service-card')
      if (serviceCards) {
        serviceCards.forEach((card) => {
          const iconWrap = card.querySelector<HTMLDivElement>('div.w-11')
          if (!iconWrap) return
          gsap.from(iconWrap, {
            scale: 0,
            rotate: -20,
            opacity: 0,
            duration: 1.1,
            ease: 'back.out(3.5)',
            delay: 0.15,
            immediateRender: false,
            scrollTrigger: {
              trigger: card,
              start: 'top 80%',
              once: true,
            },
          })
        })
      }
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="relative py-28 overflow-hidden">
      {/* Background glow */}
      <div
        className="absolute right-0 top-1/3 w-[500px] h-[500px] pointer-events-none"
        aria-hidden="true"
        style={{
          background: 'radial-gradient(ellipse at center, rgba(236,72,153,0.08) 0%, transparent 70%)',
          filter: 'blur(60px)',
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">

        {/* ── Heading ───────────────────────────────────────────────── */}
        <div ref={headingRef} className="text-center mb-16">
          <p className="text-xs font-medium tracking-widest uppercase text-purple-400 mb-4">
            What We Offer
          </p>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
            Our{' '}
            <span
              style={{
                backgroundImage: 'linear-gradient(135deg, #a855f7, #ec4899)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundSize: '200% 200%',
                animation: 'premiumGradient 3s ease-in-out infinite',
              }}
            >
              Services
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Four specific things we do — partner matching, localisation, marketing oversight, and ongoing performance monitoring. Click any service to learn exactly what&apos;s included.
          </p>
        </div>

        {/* ── Service cards grid ────────────────────────────────────── */}
        <div ref={gridRef} className="grid md:grid-cols-2 gap-6">
          {services.map((service, index) => {
            const accent = CARD_ACCENTS[index] ?? CARD_ACCENTS[0]
            return (
              <Link
                key={service.title}
                href={service.href}
                className="service-card group relative block rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1.5 cursor-pointer"
                style={{
                  background: 'linear-gradient(135deg, rgba(12,4,24,0.95) 0%, rgba(6,2,14,0.98) 100%)',
                  boxShadow: `0 0 0 1px ${accent.border}, 0 8px 32px ${accent.glow}`,
                }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLElement).style.boxShadow = `0 0 0 1px ${accent.border}, 0 24px 60px ${accent.glowHover}`
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLElement).style.boxShadow = `0 0 0 1px ${accent.border}, 0 8px 32px ${accent.glow}`
                }}
              >
                {/* Coloured top accent bar */}
                <div
                  className="h-0.5 w-full transition-all duration-300"
                  style={{ background: `linear-gradient(90deg, ${accent.border.replace('0.35', '1')}, ${accent.border.replace('0.35', '0.4')})` }}
                />

                {/* Hover overlay tint */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                  style={{ background: `radial-gradient(ellipse at 50% 0%, ${accent.glow} 0%, transparent 70%)` }}
                />

                {/* Decorative background number */}
                <div
                  className="absolute top-4 right-6 text-[8rem] font-black leading-none select-none pointer-events-none transition-all duration-500 group-hover:scale-110 group-hover:opacity-100"
                  style={{ color: accent.numColor }}
                >
                  {String(index + 1).padStart(2, '0')}
                </div>

                <div className="relative z-10 p-8">
                  {/* Tag + icon row */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-xs font-medium tracking-widest uppercase text-gray-500">
                      {accent.tag}
                    </span>
                    <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${accent.iconBg} border border-white/8 flex items-center justify-center transition-transform duration-300 group-hover:scale-110`}>
                      <service.icon className={`w-5 h-5 ${accent.iconColor}`} />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-white mb-3 transition-colors duration-300" style={{ color: undefined }}>
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-400 text-sm leading-relaxed mb-6">
                    {service.description}
                  </p>

                  {/* Features */}
                  <ul className="space-y-2 mb-8">
                    {service.primaryFeatures.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm text-gray-400">
                        <span className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${accent.iconColor}`} style={{ background: 'currentColor' }} />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  {/* Footer row */}
                  <div className="flex items-center justify-between pt-5 border-t border-white/6">
                    <div>
                      <span className="text-lg font-bold text-white">{service.stats.value}</span>
                      <span className="text-xs text-gray-500 ml-2">{service.stats.label}</span>
                    </div>

                    {/* Explicit CTA pill */}
                    <div
                      className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 border ${accent.iconColor}`}
                      style={{
                        borderColor: accent.border,
                        background: accent.glow,
                      }}
                    >
                      <span>Learn more</span>
                      <ArrowRightIcon className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                    </div>
                  </div>
                </div>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}
