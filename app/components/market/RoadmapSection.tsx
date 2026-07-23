'use client'

import { useEffect, useRef } from 'react'
import { processSteps } from '@/lib/market-data'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const STEP_ACCENTS = [
  { border: 'border-l-violet-500/70', dot: 'from-violet-500 to-purple-600', glow: 'rgba(124,58,237,0.35)', tag: 'text-violet-400 bg-violet-500/10 border-violet-500/30' },
  { border: 'border-l-violet-500/70',   dot: 'from-violet-500 to-rose-600',     glow: 'rgba(139,92,246,0.35)', tag: 'text-violet-400 bg-violet-500/10 border-violet-500/30' },
  { border: 'border-l-blue-500/70',   dot: 'from-blue-500 to-indigo-600',   glow: 'rgba(59,130,246,0.35)', tag: 'text-blue-400 bg-blue-500/10 border-blue-500/30' },
  { border: 'border-l-emerald-500/70',dot: 'from-emerald-500 to-green-600', glow: 'rgba(16,185,129,0.35)', tag: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/30' },
  { border: 'border-l-amber-500/70',  dot: 'from-amber-500 to-orange-600',  glow: 'rgba(245,158,11,0.35)', tag: 'text-amber-400 bg-amber-500/10 border-amber-500/30' },
  { border: 'border-l-cyan-500/70',   dot: 'from-cyan-500 to-sky-600',      glow: 'rgba(6,182,212,0.35)',  tag: 'text-cyan-400 bg-cyan-500/10 border-cyan-500/30' },
]

export default function RoadmapSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const headingRef = useRef<HTMLDivElement>(null)
  const lineRef = useRef<SVGLineElement>(null)
  const svgRef = useRef<SVGSVGElement>(null)
  const stepsContainerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Heading reveal
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

      // Step cards stagger from alternating sides
      const cards = stepsContainerRef.current?.querySelectorAll<HTMLDivElement>('.roadmap-card')
      if (cards) {
        cards.forEach((card, i) => {
          const fromLeft = i % 2 === 0
          gsap.from(card, {
            x: fromLeft ? -50 : 50,
            opacity: 0,
            scale: 0.96,
            rotateY: fromLeft ? -4 : 4,
            duration: 2.3,
            ease: 'expo.out',
            immediateRender: false,
            transformOrigin: fromLeft ? '0% 50%' : '100% 50%',
            scrollTrigger: {
              trigger: card,
              start: 'top 82%',
              once: true,
            },
          })

          // Stagger bullet items within the card
          const bullets = card.querySelectorAll<HTMLLIElement>('ul li')
          if (bullets.length) {
            gsap.from(bullets, {
              x: -12,
              opacity: 0,
              duration: 0.55,
              stagger: 0.06,
              ease: 'power2.out',
              delay: 0.3,
              immediateRender: false,
              scrollTrigger: {
                trigger: card,
                start: 'top 82%',
                once: true,
              },
            })
          }
        })
      }

      // SVG line draw via strokeDashoffset
      const line = lineRef.current
      if (line) {
        const length = line.getTotalLength?.() ?? 1200
        gsap.set(line, { strokeDasharray: length, strokeDashoffset: length })
        gsap.to(line, {
          strokeDashoffset: 0,
          ease: 'none',
          scrollTrigger: {
            trigger: stepsContainerRef.current,
            start: 'top 80%',
            end: 'bottom 20%',
            scrub: 1,
          },
        })
      }

      // Dot pops
      const dots = stepsContainerRef.current?.querySelectorAll<HTMLDivElement>('.timeline-dot')
      if (dots) {
        dots.forEach((dot) => {
          gsap.from(dot, {
            scale: 0,
            opacity: 0,
            rotate: -20,
            duration: 0.7,
            ease: 'back.out(3)',
            immediateRender: false,
            scrollTrigger: {
              trigger: dot,
              start: 'top 85%',
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
      {/* Background ambient glow */}
      <div
        className="absolute left-1/2 top-1/4 -translate-x-1/2 w-[800px] h-[600px] pointer-events-none"
        aria-hidden="true"
        style={{
          background: 'radial-gradient(ellipse at center, rgba(124,58,237,0.10) 0%, transparent 65%)',
          filter: 'blur(60px)',
        }}
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10">

        {/* ── Heading ─────────────────────────────────────────────────── */}
        <div ref={headingRef} className="text-center mb-20">
          <p className="text-xs font-medium tracking-widest uppercase text-purple-400 mb-4">
            Timeline
          </p>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
            Co-Publishing{' '}
            <span
              style={{
                backgroundImage: 'linear-gradient(135deg, #c4b5fd, #8b5cf6)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundSize: '200% 200%',
              }}
            >
              Roadmap
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
            A structured path from initial assessment to full market launch — typically completed within 12 months.
          </p>
        </div>

        {/* ── Timeline ────────────────────────────────────────────────── */}
        <div className="relative">

          {/* SVG line — absolutely positioned, drawn via GSAP strokeDashoffset */}
          <svg
            ref={svgRef}
            className="absolute left-[27px] sm:left-1/2 top-0 bottom-0 pointer-events-none"
            style={{ width: 2, height: '100%', transform: 'translateX(-1px)', overflow: 'visible' }}
            aria-hidden="true"
            preserveAspectRatio="none"
          >
            <defs>
              <linearGradient id="lineGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%"   stopColor="rgba(168,85,247,0.8)" />
                <stop offset="40%"  stopColor="rgba(139,92,246,0.7)" />
                <stop offset="80%"  stopColor="rgba(168,85,247,0.6)" />
                <stop offset="100%" stopColor="rgba(59,130,246,0.4)" />
              </linearGradient>
            </defs>
            <line
              ref={lineRef}
              x1="1" y1="0"
              x2="1" y2="10000"
              stroke="url(#lineGrad)"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>

          {/* Steps */}
          <div ref={stepsContainerRef} className="space-y-10">
            {processSteps.map((step, index) => {
              const accent = STEP_ACCENTS[index] ?? STEP_ACCENTS[0]
              const isRight = index % 2 !== 0

              return (
                <div
                  key={index}
                  className={`roadmap-card relative flex items-start gap-6 sm:gap-0 ${
                    isRight ? 'sm:flex-row-reverse' : 'sm:flex-row'
                  }`}
                >
                  {/* ── Card (desktop: 45% width, offset from center) ── */}
                  <div className={`flex-1 sm:w-[45%] sm:flex-none ${isRight ? 'sm:mr-[10%]' : 'sm:ml-[10%]'} pl-14 sm:pl-0`}>
                    <div
                      className={`relative rounded-2xl border-l-4 ${accent.border} bg-black/60 backdrop-blur-sm p-6 transition-all duration-300 hover:-translate-y-1`}
                      style={{
                        background: 'linear-gradient(135deg, rgba(12,4,24,0.92) 0%, rgba(6,2,14,0.96) 100%)',
                        boxShadow: `0 0 0 1px rgba(255,255,255,0.06), 0 8px 32px ${accent.glow.replace('0.35', '0.08')}`,
                      }}
                      onMouseEnter={e => {
                        (e.currentTarget as HTMLElement).style.boxShadow = `0 0 0 1px rgba(255,255,255,0.08), 0 16px 48px ${accent.glow.replace('0.35', '0.18')}`
                      }}
                      onMouseLeave={e => {
                        (e.currentTarget as HTMLElement).style.boxShadow = `0 0 0 1px rgba(255,255,255,0.06), 0 8px 32px ${accent.glow.replace('0.35', '0.08')}`
                      }}
                    >
                      {/* When tag */}
                      <span className={`inline-block text-xs font-semibold tracking-widest uppercase px-3 py-1 rounded-full border mb-3 ${accent.tag}`}>
                        {step.when}
                      </span>

                      {/* Title */}
                      <h3 className="text-xl font-bold text-white mb-3">
                        {step.what}
                      </h3>

                      {/* Detail bullets */}
                      <ul className="space-y-2">
                        {step.details.split('\n').map((detail, i) => (
                          <li key={i} className="flex items-start gap-2.5 text-sm text-gray-400">
                            <span
                              className="w-1.5 h-1.5 rounded-full flex-shrink-0 mt-1.5"
                              style={{ background: accent.glow }}
                            />
                            {detail.substring(2)}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* ── Centre dot — absolute on mobile, part of flow on desktop ── */}
                  <div
                    className={`timeline-dot absolute left-0 sm:static flex-shrink-0 w-14 h-14 rounded-2xl bg-gradient-to-br ${accent.dot} flex items-center justify-center z-10 shadow-lg mt-4 sm:mt-0 sm:self-center`}
                    style={{
                      boxShadow: `0 0 0 4px rgba(0,0,0,0.8), 0 0 20px ${accent.glow}`,
                    }}
                  >
                    <span className="text-white font-black text-lg leading-none">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                  </div>

                  {/* ── Spacer (right side on desktop, left on reversed) ── */}
                  <div className={`hidden sm:block flex-1 sm:w-[45%] sm:flex-none ${isRight ? 'sm:ml-[10%]' : 'sm:mr-[10%]'}`} />
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
