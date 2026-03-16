'use client'

import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import {
  DevicePhoneMobileIcon,
  UserGroupIcon,
  ChartBarIcon,
  ShieldCheckIcon,
  SparklesIcon,
  RocketLaunchIcon,
  ArrowRightIcon,
  CheckCircleIcon,
} from '@heroicons/react/24/outline'
import { mobileProcessSteps } from '@/lib/market-data'
import Navigation from '../../components/Navigation'
import Footer from '../../components/Footer'
import FloatingConsultButton from '../../components/FloatingConsultButton'

gsap.registerPlugin(ScrollTrigger)

const STEP_ACCENTS = [
  { border: 'border-l-violet-500/70', dot: 'from-violet-500 to-purple-600', glow: 'rgba(124,58,237,0.35)', tag: 'text-violet-400 bg-violet-500/10 border-violet-500/30' },
  { border: 'border-l-pink-500/70',   dot: 'from-pink-500 to-rose-600',     glow: 'rgba(236,72,153,0.35)', tag: 'text-pink-400 bg-pink-500/10 border-pink-500/30' },
  { border: 'border-l-blue-500/70',   dot: 'from-blue-500 to-indigo-600',   glow: 'rgba(59,130,246,0.35)', tag: 'text-blue-400 bg-blue-500/10 border-blue-500/30' },
  { border: 'border-l-emerald-500/70',dot: 'from-emerald-500 to-green-600', glow: 'rgba(16,185,129,0.35)', tag: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/30' },
  { border: 'border-l-amber-500/70',  dot: 'from-amber-500 to-orange-600',  glow: 'rgba(245,158,11,0.35)', tag: 'text-amber-400 bg-amber-500/10 border-amber-500/30' },
  { border: 'border-l-cyan-500/70',   dot: 'from-cyan-500 to-sky-600',      glow: 'rgba(6,182,212,0.35)',  tag: 'text-cyan-400 bg-cyan-500/10 border-cyan-500/30' },
]

const GENRE_CARDS = [
  {
    title: 'Hypercasual & Casual',
    description: 'Low barrier to entry and broad demographic appeal make these the fastest to scale. Short session lengths match CN mobile usage patterns perfectly.',
    icon: SparklesIcon,
    accent: 'rgba(168,85,247,0.15)',
    border: 'rgba(168,85,247,0.25)',
    iconColor: 'text-violet-400',
  },
  {
    title: 'Merge & Idle',
    description: 'Strong retention loops and incremental progression make these well-suited to CN monetisation preferences. Passive play translates well across cultures.',
    icon: ChartBarIcon,
    accent: 'rgba(236,72,153,0.12)',
    border: 'rgba(236,72,153,0.25)',
    iconColor: 'text-pink-400',
  },
  {
    title: 'Lightweight Adventure / RPG',
    description: 'Narrative-driven games with culturally adaptable hooks can perform strongly. Character customisation and gacha mechanics resonate with CN players.',
    icon: RocketLaunchIcon,
    accent: 'rgba(59,130,246,0.12)',
    border: 'rgba(59,130,246,0.25)',
    iconColor: 'text-blue-400',
  },
  {
    title: 'Puzzle & Mid-core',
    description: 'Evergreen genres with steady demand in China. Puzzle games benefit from word-of-mouth and community sharing, both strong in the CN mobile ecosystem.',
    icon: DevicePhoneMobileIcon,
    accent: 'rgba(16,185,129,0.12)',
    border: 'rgba(16,185,129,0.25)',
    iconColor: 'text-emerald-400',
  },
]

const STAT_CARDS = [
  { value: '700M+', label: 'Mobile Gamers in China', sub: 'The largest mobile gaming market in the world by player count.', color: '#a855f7' },
  { value: '$28B', label: 'Mobile Market Size (USD)', sub: 'Annual revenue from mobile games in China, growing year on year.', color: '#ec4899' },
  { value: '60%', label: 'of CN Gaming Revenue', sub: 'The majority of China\'s gaming revenue comes from mobile platforms.', color: '#6366f1' },
]

export default function MobilePublishingPage() {
  const timelineRef = useRef<HTMLDivElement>(null)
  const lineRef = useRef<SVGLineElement>(null)
  const svgRef = useRef<SVGSVGElement>(null)
  const stepsContainerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Timeline cards stagger from alternating sides
      const cards = stepsContainerRef.current?.querySelectorAll<HTMLDivElement>('.roadmap-card')
      if (cards) {
        cards.forEach((card, i) => {
          const fromLeft = i % 2 === 0
          gsap.from(card, {
            x: fromLeft ? -40 : 40,
            opacity: 0,
            duration: 0.65,
            ease: 'power3.out',
            immediateRender: false,
            scrollTrigger: { trigger: card, start: 'top 82%', once: true },
          })

          const bullets = card.querySelectorAll<HTMLLIElement>('ul li')
          if (bullets.length) {
            gsap.from(bullets, {
              x: -12,
              opacity: 0,
              duration: 0.35,
              stagger: 0.06,
              ease: 'power2.out',
              delay: 0.3,
              immediateRender: false,
              scrollTrigger: { trigger: card, start: 'top 82%', once: true },
            })
          }
        })
      }

      // SVG line draw
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
            duration: 0.4,
            ease: 'back.out(2)',
            immediateRender: false,
            scrollTrigger: { trigger: dot, start: 'top 85%', once: true },
          })
        })
      }
    }, timelineRef)

    return () => ctx.revert()
  }, [])

  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />

      {/* ── Hero ─────────────────────────────────────────────────────── */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        {/* Background glow */}
        <div
          className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[800px] h-[500px] pointer-events-none"
          aria-hidden="true"
          style={{
            background: 'radial-gradient(ellipse at center, rgba(236,72,153,0.18) 0%, rgba(124,58,237,0.08) 45%, transparent 70%)',
            filter: 'blur(60px)',
          }}
        />

        <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="text-center"
          >
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-pink-500/30 bg-pink-500/10 text-pink-300 text-xs sm:text-sm font-medium tracking-widest uppercase mb-8">
              <span className="w-1.5 h-1.5 rounded-full bg-pink-400 animate-pulse" />
              Mobile Publishing in China
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight text-white mb-6">
              Publish Your{' '}
              <span style={{
                backgroundImage: 'linear-gradient(135deg, #ec4899, #a855f7, #ec4899)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundSize: '200% 200%',
                animation: 'premiumGradient 3s ease-in-out infinite',
              }}>
                Mobile Game
              </span>{' '}
              in China
            </h1>

            <p className="text-lg sm:text-xl text-gray-400 leading-relaxed max-w-3xl mx-auto mb-10">
              China has 700M+ mobile gamers across WeChat Mini Games, TapTap, Bilibili Games, and major Android stores. Pixsell connects you with vetted Chinese publishers — so you receive multiple competing offers, negotiate from a position of strength, and enter on terms that protect your IP. The publisher handles the build and distribution. You earn 50% of in-game ad revenue.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
              <Link
                href="/contact"
                className="group relative inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold text-base text-white overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-pink-500/30 hover:-translate-y-0.5"
                style={{ background: 'linear-gradient(135deg, #ec4899 0%, #a855f7 50%, #7c3aed 100%)' }}
              >
                <span className="relative">Book a Free Consultation</span>
                <ArrowRightIcon className="relative w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
              <Link
                href="/services/co-publishing"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold text-base text-gray-300 border border-white/10 hover:border-purple-500/40 hover:text-white hover:bg-white/5 transition-all duration-300"
              >
                Steam Publishing instead?
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Market Context ────────────────────────────────────────────── */}
      <section className="relative py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <p className="text-xs font-medium tracking-widest uppercase text-pink-400 mb-4">Market Scale</p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
              Why China&apos;s Mobile Market{' '}
              <span style={{
                backgroundImage: 'linear-gradient(135deg, #ec4899, #a855f7)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}>
                matters
              </span>
            </h2>
            <p className="text-gray-400 max-w-xl mx-auto">
              The numbers are large, but the right partnership model makes them accessible.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {STAT_CARDS.map((card, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1, ease: 'easeOut' }}
                viewport={{ once: true, margin: '-60px' }}
                className="relative rounded-2xl p-8 flex flex-col"
                style={{
                  background: 'linear-gradient(135deg, rgba(12,4,24,0.97) 0%, rgba(6,2,14,0.98) 100%)',
                  boxShadow: '0 0 0 1px rgba(168,85,247,0.12), 0 8px 32px rgba(0,0,0,0.3)',
                }}
              >
                <div
                  className="text-5xl sm:text-6xl font-black leading-none mb-3"
                  style={{
                    backgroundImage: `linear-gradient(135deg, ${card.color}, rgba(255,255,255,0.6))`,
                    backgroundClip: 'text',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                  }}
                >
                  {card.value}
                </div>
                <p className="text-white font-semibold text-base mb-2">{card.label}</p>
                <p className="text-gray-500 text-sm leading-relaxed">{card.sub}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── How the Revenue Model Works ──────────────────────────────── */}
      <section className="relative py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            viewport={{ once: true, margin: '-60px' }}
            className="relative rounded-2xl p-8 md:p-12"
            style={{
              background: 'linear-gradient(135deg, rgba(236,72,153,0.07) 0%, rgba(124,58,237,0.07) 50%, rgba(12,4,24,0.97) 100%)',
              boxShadow: '0 0 0 1px rgba(168,85,247,0.14), 0 8px 40px rgba(0,0,0,0.35)',
            }}
          >
            <div className="flex flex-col md:flex-row md:items-start gap-8">
              <div className="flex-1">
                <p className="text-xs font-medium tracking-widest uppercase text-pink-400 mb-4">Revenue Model</p>
                <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 leading-snug">
                  The publisher does the work.<br />You earn 50% of ad revenue.
                </h2>
                <p className="text-gray-400 text-base leading-relaxed mb-4">
                  Chinese publishers adapt your game for WeChat Mini Games and other CN platforms, then monetise it through in-game advertising. You receive 50% of that advertising revenue — paid out by the publisher on agreed cycles.
                </p>
                <p className="text-gray-400 text-base leading-relaxed">
                  Pixsell&apos;s role is to ensure you get multiple offers from reputable publishers, negotiate favourable terms, and then stay in the loop so the publisher holds up their end of the deal once you&apos;re live.
                </p>
              </div>
              <div className="md:w-64 flex-shrink-0 flex flex-col gap-4">
                {[
                  { label: 'Your revenue share', value: '50%', color: '#ec4899' },
                  { label: 'Upfront cost to you', value: '$0', color: '#a855f7' },
                  { label: 'Competing publisher offers', value: 'Multiple', color: '#6366f1' },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="rounded-xl px-5 py-4 flex items-center justify-between"
                    style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)' }}
                  >
                    <span className="text-gray-400 text-sm">{item.label}</span>
                    <span
                      className="text-2xl font-black"
                      style={{
                        backgroundImage: `linear-gradient(135deg, ${item.color}, rgba(255,255,255,0.7))`,
                        backgroundClip: 'text',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                      }}
                    >
                      {item.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Which Games Work Best ─────────────────────────────────────── */}
      <section className="relative py-20">
        <div
          className="absolute right-0 top-1/4 w-[500px] h-[400px] pointer-events-none"
          aria-hidden="true"
          style={{
            background: 'radial-gradient(ellipse at center, rgba(236,72,153,0.08) 0%, transparent 70%)',
            filter: 'blur(60px)',
          }}
        />

        <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="text-center mb-12">
            <p className="text-xs font-medium tracking-widest uppercase text-pink-400 mb-4">Game Fit</p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
              Which games perform{' '}
              <span style={{
                backgroundImage: 'linear-gradient(135deg, #ec4899, #a855f7)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}>
                best in China?
              </span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              The Chinese mobile market rewards games that are accessible, culturally adaptable, and designed around retention. These genres consistently outperform.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-5 mb-8">
            {GENRE_CARDS.map((card, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: i * 0.1, ease: 'easeOut' }}
                viewport={{ once: true, margin: '-60px' }}
                className="relative rounded-2xl p-7 flex flex-col gap-4 transition-all duration-300 hover:-translate-y-0.5"
                style={{
                  background: `linear-gradient(135deg, ${card.accent} 0%, rgba(12,4,24,0.97) 60%)`,
                  boxShadow: `0 0 0 1px ${card.border}, 0 4px 20px rgba(0,0,0,0.3)`,
                }}
              >
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: 'rgba(255,255,255,0.04)', border: `1px solid ${card.border}` }}
                >
                  <card.icon className={`w-5 h-5 ${card.iconColor}`} />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-2">{card.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{card.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Caveat note */}
          <div
            className="rounded-xl px-6 py-4 flex items-start gap-3"
            style={{
              background: 'rgba(255,255,255,0.03)',
              border: '1px solid rgba(255,255,255,0.07)',
            }}
          >
            <div className="w-1.5 h-1.5 rounded-full bg-gray-500 flex-shrink-0 mt-2" />
            <p className="text-gray-500 text-sm leading-relaxed">
              Complex hardcore titles, large-scale MMOs, and games requiring significant ongoing live operations are harder to scale through a co-publishing model in China. We&apos;ll give you an honest assessment during your consultation.
            </p>
          </div>
        </div>
      </section>

      {/* ── Mobile Publishing Process (timeline) ─────────────────────── */}
      <section className="relative py-20" ref={timelineRef}>
        <div
          className="absolute left-1/2 top-1/4 -translate-x-1/2 w-[700px] h-[500px] pointer-events-none"
          aria-hidden="true"
          style={{
            background: 'radial-gradient(ellipse at center, rgba(124,58,237,0.08) 0%, transparent 65%)',
            filter: 'blur(60px)',
          }}
        />

        <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="text-center mb-20">
            <p className="text-xs font-medium tracking-widest uppercase text-pink-400 mb-4">Timeline</p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
              The Mobile{' '}
              <span style={{
                backgroundImage: 'linear-gradient(135deg, #ec4899, #a855f7)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundSize: '200% 200%',
                animation: 'premiumGradient 3s ease-in-out infinite',
              }}>
                Publishing Process
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
              A structured path from initial evaluation to live market operations — built around clear responsibilities and developer control at every stage.
            </p>
          </div>

          <div className="relative">
            {/* SVG timeline line */}
            <svg
              ref={svgRef}
              className="absolute left-[27px] sm:left-1/2 top-0 bottom-0 pointer-events-none"
              style={{ width: 2, height: '100%', transform: 'translateX(-1px)', overflow: 'visible' }}
              aria-hidden="true"
              preserveAspectRatio="none"
            >
              <defs>
                <linearGradient id="mobileLineGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%"   stopColor="rgba(236,72,153,0.8)" />
                  <stop offset="40%"  stopColor="rgba(168,85,247,0.7)" />
                  <stop offset="80%"  stopColor="rgba(236,72,153,0.6)" />
                  <stop offset="100%" stopColor="rgba(99,102,241,0.4)" />
                </linearGradient>
              </defs>
              <line
                ref={lineRef}
                x1="1" y1="0"
                x2="1" y2="10000"
                stroke="url(#mobileLineGrad)"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>

            <div ref={stepsContainerRef} className="space-y-10">
              {mobileProcessSteps.map((step, index) => {
                const accent = STEP_ACCENTS[index] ?? STEP_ACCENTS[0]
                const isRight = index % 2 !== 0

                return (
                  <div
                    key={index}
                    className={`roadmap-card relative flex items-start gap-6 sm:gap-0 ${
                      isRight ? 'sm:flex-row-reverse' : 'sm:flex-row'
                    }`}
                  >
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
                        <span className={`inline-block text-xs font-semibold tracking-widest uppercase px-3 py-1 rounded-full border mb-3 ${accent.tag}`}>
                          {step.when}
                        </span>
                        <h3 className="text-xl font-bold text-white mb-3">{step.what}</h3>
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

                    <div
                      className={`timeline-dot absolute left-0 sm:static flex-shrink-0 w-14 h-14 rounded-2xl bg-gradient-to-br ${accent.dot} flex items-center justify-center z-10 shadow-lg mt-4 sm:mt-0 sm:self-center`}
                      style={{ boxShadow: `0 0 0 4px rgba(0,0,0,0.8), 0 0 20px ${accent.glow}` }}
                    >
                      <span className="text-white font-black text-lg leading-none">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                    </div>

                    <div className={`hidden sm:block flex-1 sm:w-[45%] sm:flex-none ${isRight ? 'sm:ml-[10%]' : 'sm:mr-[10%]'}`} />
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ── Key Considerations ────────────────────────────────────────── */}
      <section className="relative py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <p className="text-xs font-medium tracking-widest uppercase text-purple-400 mb-4">What to Know</p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
              Key considerations for{' '}
              <span style={{
                backgroundImage: 'linear-gradient(135deg, #a855f7, #ec4899)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}>
                mobile in China
              </span>
            </h2>
            <p className="text-gray-400 max-w-xl mx-auto">
              Two things developers ask about before signing. Here&apos;s exactly how both work.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Source Code Access */}
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              viewport={{ once: true, margin: '-60px' }}
              className="relative rounded-2xl p-8"
              style={{
                background: 'linear-gradient(135deg, rgba(124,58,237,0.10) 0%, rgba(12,4,24,0.97) 100%)',
                boxShadow: '0 0 0 1px rgba(168,85,247,0.18), 0 8px 32px rgba(0,0,0,0.3)',
              }}
            >
              <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-5"
                style={{ background: 'rgba(168,85,247,0.08)', border: '1px solid rgba(168,85,247,0.2)' }}>
                <ShieldCheckIcon className="w-5 h-5 text-purple-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Source Code Access</h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-4">
                Chinese publishers need access to your source build to localise the game, integrate CN-specific SDKs, and handle platform submission. This is standard across the CN mobile ecosystem — not unique to any one deal.
              </p>
              <p className="text-gray-400 text-sm leading-relaxed">
                Pixsell advises on deal terms so the source build usage is clearly scoped — what it can be used for, IP reversion clauses, and data obligations. You retain full ownership and never sign anything that compromises that.
              </p>
              <div className="mt-5 flex items-center gap-2 text-purple-300 text-sm font-medium">
                <CheckCircleIcon className="w-4 h-4 flex-shrink-0" />
                <span>IP protection built into every agreement</span>
              </div>
            </motion.div>

            {/* Publisher Communication */}
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              viewport={{ once: true, margin: '-60px' }}
              className="relative rounded-2xl p-8"
              style={{
                background: 'linear-gradient(135deg, rgba(236,72,153,0.08) 0%, rgba(12,4,24,0.97) 100%)',
                boxShadow: '0 0 0 1px rgba(236,72,153,0.15), 0 8px 32px rgba(0,0,0,0.3)',
              }}
            >
              <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-5"
                style={{ background: 'rgba(236,72,153,0.07)', border: '1px solid rgba(236,72,153,0.2)' }}>
                <UserGroupIcon className="w-5 h-5 text-pink-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Publisher Communication & Accountability</h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-4">
                Once you&apos;re matched with a publisher, the technical and operational work is entirely theirs — localisation, platform integration, UA campaigns, and ad monetisation. Your role as a developer is minimal after sign-off.
              </p>
              <p className="text-gray-400 text-sm leading-relaxed">
                Pixsell stays in the picture throughout. We monitor marketing commitments, track performance data, and ensure the publisher communicates clearly and pays out correctly. If there are issues, we escalate on your behalf.
              </p>
              <div className="mt-5 flex items-center gap-2 text-pink-300 text-sm font-medium">
                <CheckCircleIcon className="w-4 h-4 flex-shrink-0" />
                <span>You deal with us, not the Chinese publisher directly</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────────────── */}
      <section className="relative py-24 overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          aria-hidden="true"
          style={{
            background: 'radial-gradient(ellipse 80% 60% at 50% 50%, rgba(236,72,153,0.10) 0%, rgba(124,58,237,0.06) 40%, transparent 70%)',
            filter: 'blur(40px)',
          }}
        />

        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            viewport={{ once: true, margin: '-60px' }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-pink-500/30 bg-pink-500/10 text-pink-300 text-xs font-medium tracking-widest uppercase mb-8">
              <span className="w-1.5 h-1.5 rounded-full bg-pink-400 animate-pulse" />
              Free consultation — no obligation
            </div>

            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-[1.05] text-white mb-6">
              Launch your mobile game{' '}
              <span style={{
                backgroundImage: 'linear-gradient(135deg, #ec4899, #a855f7)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundSize: '200% 200%',
                animation: 'premiumGradient 3s ease-in-out infinite',
              }}>
                in China.
              </span>
            </h2>

            <p className="text-lg text-gray-400 leading-relaxed mb-10 max-w-2xl mx-auto">
              Book a free call and we&apos;ll assess your game&apos;s fit for the Chinese mobile market, show you what a typical deal looks like, and explain what you&apos;d realistically earn. No pitch, no obligation — just a straight answer on whether it makes sense for your game.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
              <Link
                href="/contact"
                className="group relative inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold text-base text-white overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-pink-500/30 hover:-translate-y-0.5"
                style={{ background: 'linear-gradient(135deg, #ec4899 0%, #a855f7 50%, #7c3aed 100%)' }}
              >
                <span className="relative">Book a Free Consultation</span>
                <ArrowRightIcon className="relative w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
              {['No upfront cost', 'IP protection built in', 'Honest market assessment', 'No obligation'].map((item, i) => (
                <span key={i} className="flex items-center gap-2 text-sm text-gray-400">
                  <svg className="w-4 h-4 text-emerald-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                  {item}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
      <FloatingConsultButton />
    </div>
  )
}
