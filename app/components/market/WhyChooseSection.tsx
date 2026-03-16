'use client'

import { useEffect, useRef } from 'react'
import Link from 'next/link'
import {
  SparklesIcon,
  CheckCircleIcon,
  XCircleIcon,
  ExclamationTriangleIcon,
} from '@heroicons/react/24/outline'
import { comparisonData } from '@/lib/market-data'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)


export default function WhyChooseSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const headingRef = useRef<HTMLDivElement>(null)
  const tableRef = useRef<HTMLDivElement>(null)
  const featuresRef = useRef<HTMLDivElement>(null)
  const ctaBannerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Heading
      gsap.from(headingRef.current, {
        y: 32,
        opacity: 0,
        duration: 0.7,
        ease: 'power3.out',
        immediateRender: false,
        scrollTrigger: {
          trigger: headingRef.current,
          start: 'top 85%',
          once: true,
        },
      })

      // Table rows stagger
      const rows = tableRef.current?.querySelectorAll<HTMLTableRowElement>('tbody tr')
      if (rows) {
        gsap.from(rows, {
          x: -24,
          opacity: 0,
          duration: 0.5,
          stagger: 0.1,
          ease: 'power2.out',
          immediateRender: false,
          scrollTrigger: {
            trigger: tableRef.current,
            start: 'top 80%',
            once: true,
          },
        })
      }

      // Feature cards stagger
      const cards = featuresRef.current?.querySelectorAll<HTMLDivElement>('.feature-card')
      if (cards) {
        gsap.from(cards, {
          y: 40,
          opacity: 0,
          duration: 0.6,
          stagger: 0.1,
          ease: 'power3.out',
          immediateRender: false,
          scrollTrigger: {
            trigger: featuresRef.current,
            start: 'top 78%',
            once: true,
          },
        })
      }

      // CTA Banner entrance
      gsap.from(ctaBannerRef.current, {
        y: 32,
        opacity: 0,
        duration: 0.7,
        ease: 'power3.out',
        immediateRender: false,
        scrollTrigger: {
          trigger: ctaBannerRef.current,
          start: 'top 85%',
          once: true,
        },
      })

      // Icon scale-in sub-animation per feature card
      const featureCards = featuresRef.current?.querySelectorAll<HTMLDivElement>('.feature-card')
      if (featureCards) {
        featureCards.forEach((card) => {
          const iconEl = card.querySelector<HTMLDivElement>('div.w-11')
          if (!iconEl) return
          gsap.from(iconEl, {
            scale: 0,
            rotate: -15,
            opacity: 0,
            duration: 0.4,
            ease: 'back.out(2)',
            delay: 0.1,
            immediateRender: false,
            scrollTrigger: {
              trigger: card,
              start: 'top 82%',
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
        className="absolute left-1/3 top-0 w-[700px] h-[500px] pointer-events-none"
        aria-hidden="true"
        style={{
          background: 'radial-gradient(ellipse at center, rgba(168,85,247,0.08) 0%, transparent 70%)',
          filter: 'blur(60px)',
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">

        {/* ── Heading ────────────────────────────────────────────────── */}
        <div ref={headingRef} className="text-center mb-16">
          <p className="text-xs font-medium tracking-widest uppercase text-purple-400 mb-4">
            Why Pixsell
          </p>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
            Why Choose{' '}
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
              Pixsell Games
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Compare the approaches to entering the Chinese gaming market — for PC and mobile — and see why developers choose us.
          </p>
        </div>

        {/* ── Desktop Comparison Table ───────────────────────────────── */}
        <div ref={tableRef} className="overflow-x-auto mb-16 max-w-5xl mx-auto">
          <div className="hidden md:block rounded-2xl overflow-hidden animate-glow-border">
            <table className="w-full border-collapse bg-black/60 backdrop-blur-sm">
              <thead>
                <tr style={{ borderBottom: '1px solid rgba(168,85,247,0.15)' }}>
                  {/* Label column */}
                  <th className="p-6 text-left w-44" style={{ background: 'rgba(0,0,0,0.6)' }}>
                    <span className="text-xs font-medium tracking-widest uppercase text-gray-500">Feature</span>
                  </th>

                  {comparisonData.map((option, i) => (
                    <th
                      key={i}
                      className="p-6 relative"
                      style={{
                        background: option.highlight
                          ? 'linear-gradient(180deg, rgba(124,58,237,0.12) 0%, rgba(168,85,247,0.06) 100%)'
                          : 'rgba(0,0,0,0.4)',
                        borderLeft: option.highlight
                          ? '1px solid rgba(168,85,247,0.30)'
                          : '1px solid rgba(255,255,255,0.04)',
                        borderRight: option.highlight
                          ? '1px solid rgba(168,85,247,0.30)'
                          : '1px solid rgba(255,255,255,0.04)',
                      }}
                    >
                      {option.highlight && (
                        <div className="absolute -top-px left-0 right-0 h-0.5"
                          style={{ background: 'linear-gradient(90deg, transparent, #a855f7, #ec4899, transparent)' }}
                        />
                      )}
                      <div className="relative">
                        {option.highlight && (
                          <span className="absolute -top-2 right-0 inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-semibold tracking-wide text-white"
                            style={{ background: 'linear-gradient(135deg, #7c3aed, #ec4899)' }}
                          >
                            <SparklesIcon className="w-2.5 h-2.5" />
                            Recommended
                          </span>
                        )}
                        <div className="pt-4 text-center">
                          <p className="text-base font-bold text-white">{option.name}</p>
                          <p className="text-xs text-gray-500 mt-0.5">{option.subtitle}</p>
                        </div>
                      </div>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {[
                  { key: 'Technical Freedom', index: 0 },
                  { key: 'Market Entry', index: 1 },
                  { key: 'Revenue Model', index: 2 },
                  { key: 'Local Support', index: 3 },
                  { key: 'Best For', index: 4 },
                ].map(({ key, index }) => (
                  <tr
                    key={key}
                    style={{ borderTop: '1px solid rgba(168,85,247,0.08)' }}
                  >
                    <th className="p-5 text-left text-sm font-semibold text-gray-400"
                      style={{ background: 'rgba(0,0,0,0.5)', borderRight: '1px solid rgba(255,255,255,0.04)' }}
                    >
                      {key}
                    </th>
                    {comparisonData.map((option, oi) => {
                      const f = option.features[index]
                      if (!f) return <td key={oi} />
                      const isGood = f.status === 'best'
                      const isBad = f.status === 'bad'
                      return (
                        <td
                          key={oi}
                          className="p-5 relative group"
                          style={{
                            background: option.highlight
                              ? 'linear-gradient(180deg, rgba(124,58,237,0.08) 0%, rgba(0,0,0,0.4) 100%)'
                              : 'rgba(0,0,0,0.3)',
                            borderLeft: option.highlight
                              ? '1px solid rgba(168,85,247,0.20)'
                              : '1px solid rgba(255,255,255,0.03)',
                            borderRight: option.highlight
                              ? '1px solid rgba(168,85,247,0.20)'
                              : '1px solid rgba(255,255,255,0.03)',
                          }}
                        >
                          <div className="flex items-center justify-center gap-2">
                            {isGood ? (
                              <CheckCircleIcon className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                            ) : isBad ? (
                              <XCircleIcon className="w-4 h-4 text-red-400 flex-shrink-0" />
                            ) : (
                              <ExclamationTriangleIcon className="w-4 h-4 text-amber-400 flex-shrink-0" />
                            )}
                            <span className={`text-sm font-medium ${isGood ? 'text-emerald-400' : isBad ? 'text-red-400' : 'text-amber-400'}`}>
                              {f.value}
                            </span>
                          </div>

                          {/* Tooltip */}
                          <div className="opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 absolute left-1/2 -translate-x-1/2 bottom-full mb-2 w-56 p-3 rounded-xl text-xs text-gray-300 z-50 pointer-events-none"
                            style={{
                              background: 'rgba(6,2,14,0.98)',
                              boxShadow: '0 0 0 1px rgba(168,85,247,0.20), 0 8px 24px rgba(0,0,0,0.6)',
                            }}
                          >
                            <p className="font-semibold text-white mb-1">{f.label}</p>
                            <p className="leading-relaxed">{f.detail}</p>
                            <div className="absolute bottom-[-5px] left-1/2 -translate-x-1/2 w-2.5 h-2.5 rotate-45"
                              style={{ background: 'rgba(6,2,14,0.98)', boxShadow: '1px 1px 0 rgba(168,85,247,0.20)' }}
                            />
                          </div>
                        </td>
                      )
                    })}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile cards */}
          <div className="md:hidden space-y-4">
            {comparisonData.map((option, i) => (
              <div
                key={i}
                className="rounded-2xl p-5"
                style={{
                  background: 'linear-gradient(135deg, rgba(12,4,24,0.95) 0%, rgba(6,2,14,0.98) 100%)',
                  boxShadow: option.highlight
                    ? '0 0 0 1px rgba(168,85,247,0.35), 0 8px 32px rgba(124,58,237,0.15)'
                    : '0 0 0 1px rgba(255,255,255,0.06)',
                }}
              >
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <p className="font-bold text-white">{option.name}</p>
                    <p className="text-xs text-gray-500">{option.subtitle}</p>
                  </div>
                  {option.highlight && (
                    <span className="inline-flex items-center gap-1 px-2 py-1 rounded-full text-[10px] font-semibold text-white"
                      style={{ background: 'linear-gradient(135deg, #7c3aed, #ec4899)' }}
                    >
                      <SparklesIcon className="w-2.5 h-2.5" />
                      Recommended
                    </span>
                  )}
                </div>
                <div className="space-y-2">
                  {option.features.slice(0, 4).map((f, fi) => (
                    <div key={fi} className="flex items-center justify-between py-2"
                      style={{ borderTop: fi > 0 ? '1px solid rgba(255,255,255,0.05)' : undefined }}
                    >
                      <span className="text-xs text-gray-500">{f.label}</span>
                      <div className="flex items-center gap-1.5">
                        {f.status === 'best' ? (
                          <CheckCircleIcon className="w-3.5 h-3.5 text-emerald-400" />
                        ) : f.status === 'bad' ? (
                          <XCircleIcon className="w-3.5 h-3.5 text-red-400" />
                        ) : (
                          <ExclamationTriangleIcon className="w-3.5 h-3.5 text-amber-400" />
                        )}
                        <span className={`text-xs font-semibold ${f.status === 'best' ? 'text-emerald-400' : f.status === 'bad' ? 'text-red-400' : 'text-amber-400'}`}>
                          {f.value}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── CTA Banner ────────────────────────────────────────────── */}
        <div
          ref={ctaBannerRef}
          className="max-w-4xl mx-auto mb-24 rounded-2xl p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-8"
          style={{
            background: 'linear-gradient(135deg, rgba(124,58,237,0.12) 0%, rgba(236,72,153,0.08) 100%)',
            boxShadow: '0 0 0 1px rgba(168,85,247,0.20), 0 20px 60px rgba(124,58,237,0.08)',
          }}
        >
          <div className="flex-1 text-center md:text-left">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
              Ready to see what your game{' '}
              <span style={{
                backgroundImage: 'linear-gradient(135deg, #a855f7, #ec4899)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}>
                could earn in China?
              </span>
            </h3>
            <p className="text-gray-400 leading-relaxed">
              We&apos;ll model your game&apos;s China revenue potential, identify the right co-publisher profile, and walk you through what a realistic deal looks like — in a single call.
            </p>
          </div>
          <Link
            href="/contact"
            className="group inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold text-white text-sm whitespace-nowrap transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20 hover:-translate-y-0.5"
            style={{ background: 'linear-gradient(135deg, #7c3aed 0%, #a855f7 50%, #ec4899 100%)' }}
          >
            Schedule a Call
            <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
        </div>

        {/* ── How We Help — Bento grid ───────────────────────────────── */}
        <div className="mb-12">
          <p className="text-xs font-medium tracking-widest uppercase text-purple-400 mb-4">Our edge</p>
          <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight">
            What you get<br className="hidden sm:block" />{' '}
            <span style={{
              backgroundImage: 'linear-gradient(135deg, #a855f7, #ec4899)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}>working with us.</span>
          </h3>
        </div>

        <div ref={featuresRef} className="grid grid-cols-1 md:grid-cols-12 gap-4">

          {/* ── Card 1: Large hero — spans 7 cols ── */}
          <div
            className="feature-card group md:col-span-7 relative rounded-2xl overflow-hidden p-8 flex flex-col justify-between min-h-[260px] transition-all duration-300 hover:-translate-y-0.5"
            style={{
              background: 'linear-gradient(135deg, rgba(124,58,237,0.14) 0%, rgba(12,4,24,0.96) 60%)',
              boxShadow: '0 0 0 1px rgba(168,85,247,0.18), 0 8px 40px rgba(124,58,237,0.10)',
            }}
          >
            {/* Large background numeral */}
            <div
              className="absolute bottom-4 right-6 text-[9rem] font-black leading-none select-none pointer-events-none"
              style={{ color: 'rgba(168,85,247,0.07)' }}
            >
              10+
            </div>
            <div>
              <p className="text-xs font-medium tracking-widest uppercase text-purple-400 mb-5">Experience</p>
              <h4 className="text-2xl md:text-3xl font-bold text-white leading-tight mb-3">
                A decade inside the Chinese gaming market.
              </h4>
              <p className="text-gray-400 leading-relaxed max-w-md">
                We&apos;ve been embedded in China&apos;s publishing ecosystem long enough to know which co-publishers deliver and which ones don&apos;t. That context is hard to buy.
              </p>
            </div>
            <div className="mt-6 flex items-center gap-2 text-purple-300 text-sm font-medium">
              <span>Years of China market experience</span>
            </div>
          </div>

          {/* ── Card 2: Stat card — spans 5 cols ── */}
          <div
            className="feature-card group md:col-span-5 relative rounded-2xl overflow-hidden p-8 flex flex-col justify-between min-h-[260px] transition-all duration-300 hover:-translate-y-0.5"
            style={{
              background: 'linear-gradient(135deg, rgba(12,4,24,0.96) 0%, rgba(236,72,153,0.08) 100%)',
              boxShadow: '0 0 0 1px rgba(236,72,153,0.15), 0 8px 32px rgba(0,0,0,0.3)',
            }}
          >
            <div>
              <p className="text-xs font-medium tracking-widest uppercase text-pink-400/70 mb-5">Speed</p>
              <div className="text-7xl font-black text-white leading-none mb-3"
                style={{
                  backgroundImage: 'linear-gradient(135deg, #ffffff, rgba(255,255,255,0.6))',
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                90
              </div>
              <h4 className="text-lg font-bold text-white mb-2">Days to first China launch.</h4>
              <p className="text-sm text-gray-500 leading-relaxed">
                From signed agreement to live on Steam Global — our process moves fast because we&apos;ve done it before.
              </p>
            </div>
          </div>

          {/* ── Card 3: Narrow — spans 4 cols ── */}
          <div
            className="feature-card group md:col-span-4 relative rounded-2xl overflow-hidden p-7 flex flex-col justify-between min-h-[220px] transition-all duration-300 hover:-translate-y-0.5"
            style={{
              background: 'linear-gradient(135deg, rgba(12,4,24,0.97) 0%, rgba(6,2,14,0.98) 100%)',
              boxShadow: '0 0 0 1px rgba(168,85,247,0.12), 0 4px 20px rgba(0,0,0,0.3)',
            }}
          >
            <div>
              <p className="text-xs font-medium tracking-widest uppercase text-gray-600 mb-4">Cost</p>
              <div className="text-5xl font-black text-white leading-none mb-3">0%</div>
              <h4 className="text-base font-bold text-white mb-2">No upfront cost. Ever.</h4>
              <p className="text-sm text-gray-500 leading-relaxed">
                We earn when you earn. Performance-based means our incentives are identical to yours.
              </p>
            </div>
          </div>

          {/* ── Card 4: Medium — spans 4 cols ── */}
          <div
            className="feature-card group md:col-span-4 relative rounded-2xl overflow-hidden p-7 flex flex-col justify-between min-h-[220px] transition-all duration-300 hover:-translate-y-0.5"
            style={{
              background: 'linear-gradient(135deg, rgba(12,4,24,0.97) 0%, rgba(6,2,14,0.98) 100%)',
              boxShadow: '0 0 0 1px rgba(168,85,247,0.12), 0 4px 20px rgba(0,0,0,0.3)',
            }}
          >
            <div>
              <p className="text-xs font-medium tracking-widest uppercase text-gray-600 mb-4">Control</p>
              <div className="text-5xl font-black text-white leading-none mb-3">IP</div>
              <h4 className="text-base font-bold text-white mb-2">You keep everything.</h4>
              <p className="text-sm text-gray-500 leading-relaxed">
                No IP transfer, no exclusivity clauses, no surprises. Your game stays yours — full stop.
              </p>
            </div>
          </div>

          {/* ── Card 5: Medium — spans 4 cols ── */}
          <div
            className="feature-card group md:col-span-4 relative rounded-2xl overflow-hidden p-7 flex flex-col justify-between min-h-[220px] transition-all duration-300 hover:-translate-y-0.5"
            style={{
              background: 'linear-gradient(135deg, rgba(12,4,24,0.97) 0%, rgba(6,2,14,0.98) 100%)',
              boxShadow: '0 0 0 1px rgba(168,85,247,0.12), 0 4px 20px rgba(0,0,0,0.3)',
            }}
          >
            <div>
              <p className="text-xs font-medium tracking-widest uppercase text-gray-600 mb-4">Oversight</p>
              <div className="text-3xl font-black text-white leading-tight mb-3">Monthly<br />reports.</div>
              <p className="text-sm text-gray-500 leading-relaxed">
                We verify every revenue statement and send you a plain-English summary of how your game performed.
              </p>
            </div>
          </div>

          {/* ── Card 6: Wide bottom — spans 12 cols ── */}
          <div
            className="feature-card group md:col-span-12 relative rounded-2xl overflow-hidden px-8 py-7 transition-all duration-300 hover:-translate-y-0.5"
            style={{
              background: 'linear-gradient(90deg, rgba(124,58,237,0.10) 0%, rgba(12,4,24,0.95) 40%, rgba(12,4,24,0.95) 100%)',
              boxShadow: '0 0 0 1px rgba(168,85,247,0.12), 0 4px 20px rgba(0,0,0,0.2)',
            }}
          >
            <div className="flex flex-col md:flex-row md:items-center gap-6 md:gap-16">
              <div className="flex-shrink-0">
                <p className="text-xs font-medium tracking-widest uppercase text-gray-600 mb-2">Strategy</p>
                <div className="text-4xl font-black text-white leading-none">1:1</div>
              </div>
              <div className="w-px h-12 bg-white/8 hidden md:block flex-shrink-0" />
              <div className="flex-1">
                <h4 className="text-lg font-bold text-white mb-1">One dedicated strategy per game — not a template.</h4>
                <p className="text-sm text-gray-500 leading-relaxed">
                  Every game goes through a fresh assessment: genre, audience, comparable titles, and realistic revenue modelling. We don&apos;t copy-paste from previous clients.
                </p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  )
}
