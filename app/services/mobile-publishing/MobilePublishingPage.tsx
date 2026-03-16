'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
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
  BanknotesIcon,
  MagnifyingGlassIcon,
  DocumentCheckIcon,
  SignalIcon,
  ChevronDownIcon,
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

const STATS = [
  { value: '700M+', label: 'Mobile Gamers in China', sub: 'The largest mobile gaming market by active player count', color: '#a855f7' },
  { value: '$28B', label: 'Annual Mobile Revenue', sub: 'In-game advertising and IAP, growing year on year', color: '#ec4899' },
  { value: '60%', label: 'of CN Gaming Revenue', sub: 'Mobile accounts for the majority of China\'s gaming market', color: '#6366f1' },
]

const WHAT_WE_DELIVER = [
  {
    icon: MagnifyingGlassIcon,
    step: '01',
    title: 'Game Assessment',
    body: 'We review your genre, existing metrics, and monetisation model to assess how your game is likely to perform in the CN mobile market — and give you an honest read before any introductions are made.',
    outcome: 'You know where you stand before any commitment.',
    accentColor: '#a855f7',
  },
  {
    icon: UserGroupIcon,
    step: '02',
    title: 'Publisher Introductions',
    body: 'We tap our established CN publisher network to source multiple candidates suited to your game\'s genre and metrics. You receive competing offers — not a single take-it-or-leave-it option.',
    outcome: 'Multiple competing offers to evaluate side by side.',
    accentColor: '#ec4899',
  },
  {
    icon: DocumentCheckIcon,
    step: '03',
    title: 'Deal Negotiation',
    body: 'We advise on every material term — revenue share structure, source build usage scope, IP reversion clauses, and reporting obligations — so you sign from a position of full understanding.',
    outcome: 'Agreement terms that protect your IP and your earnings.',
    accentColor: '#6366f1',
  },
  {
    icon: SignalIcon,
    step: '04',
    title: 'Performance Monitoring',
    body: 'Post-launch, we track in-game ad revenue, cross-reference publisher reporting, and hold the publisher to the marketing commitments they agreed to. If something\'s off, we escalate on your behalf.',
    outcome: 'The deal you signed is the deal being honoured.',
    accentColor: '#10b981',
  },
]

const GENRE_FIT = [
  { title: 'Hypercasual & Casual', description: 'Fast to scale. Short session lengths align perfectly with CN mobile usage. Broad demographic appeal with minimal adaptation needed.', icon: SparklesIcon, fit: 'Best fit', fitStyle: { color: '#34d399', background: 'rgba(16,185,129,0.08)', border: '1px solid rgba(16,185,129,0.2)' } },
  { title: 'Merge & Idle', description: 'Strong retention loops and passive play mechanics translate well. CN monetisation preferences favour incremental progression.', icon: ChartBarIcon, fit: 'Best fit', fitStyle: { color: '#34d399', background: 'rgba(16,185,129,0.08)', border: '1px solid rgba(16,185,129,0.2)' } },
  { title: 'Puzzle & Mid-core', description: 'Evergreen demand in China. Strong word-of-mouth sharing patterns in the CN mobile ecosystem drive organic growth.', icon: DevicePhoneMobileIcon, fit: 'Good fit', fitStyle: { color: '#60a5fa', background: 'rgba(59,130,246,0.08)', border: '1px solid rgba(59,130,246,0.2)' } },
  { title: 'Lightweight RPG / Adventure', description: 'Culturally adaptable narrative hooks can perform well. Gacha mechanics and character customisation resonate with CN players.', icon: RocketLaunchIcon, fit: 'Good fit', fitStyle: { color: '#60a5fa', background: 'rgba(59,130,246,0.08)', border: '1px solid rgba(59,130,246,0.2)' } },
  { title: 'Hardcore / Large-scale MMO', description: 'Higher adaptation costs, complex live ops, and CN regulatory requirements make these harder to scale through a co-publishing model.', icon: ShieldCheckIcon, fit: 'Harder to scale', fitStyle: { color: '#fbbf24', background: 'rgba(245,158,11,0.08)', border: '1px solid rgba(245,158,11,0.2)' } },
]

const FAQS = [
  { q: 'Do I lose my IP?', a: 'No. You retain full ownership throughout. We ensure the publisher agreement clearly scopes what the source build can be used for, with IP reversion clauses and data handling obligations built in.' },
  { q: 'Why does the publisher need my source code?', a: 'To localise the game for simplified Chinese, integrate CN-specific SDKs (payment, analytics, anti-addiction compliance), and handle platform submission for WeChat Mini Games and Android stores. This is standard practice across CN mobile publishing — not specific to any one deal.' },
  { q: 'How does the revenue model work exactly?', a: 'The publisher monetises your game through in-game advertising on CN platforms. They pay you 50% of that ad revenue on agreed reporting cycles. There are no upfront costs to you — the publisher funds all localisation and UA.' },
  { q: 'How do I know the publisher is reporting revenue accurately?', a: 'Pixsell tracks performance data independently and cross-references publisher reports. If there are discrepancies or communication gaps, we escalate on your behalf. You deal with us, not the publisher directly.' },
  { q: 'How many publisher offers will I receive?', a: 'We aim to generate multiple competing offers so you can evaluate terms side by side. The number depends on your genre and metrics, but we never present you with a single take-it-or-leave-it option.' },
  { q: 'What happens if the publisher underperforms post-launch?', a: 'We monitor marketing spend commitments and performance KPIs. If the publisher isn\'t delivering, we hold them accountable and can advise on whether renegotiation or exit is the right path.' },
]

// ── FAQ Accordion item ──────────────────────────────────────────────────────
function FaqItem({ faq, index }: { faq: typeof FAQS[0]; index: number }) {
  const [open, setOpen] = useState(false)
  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.05, ease: 'easeOut' }}
      viewport={{ once: true, margin: '-40px' }}
      className="border-b"
      style={{ borderColor: 'rgba(255,255,255,0.07)' }}
    >
      <button
        onClick={() => setOpen(o => !o)}
        className="w-full flex items-center justify-between gap-6 py-6 text-left group"
      >
        <span className="text-base font-semibold text-white group-hover:text-purple-200 transition-colors duration-200">
          {faq.q}
        </span>
        <ChevronDownIcon
          className="w-4 h-4 flex-shrink-0 text-gray-500 transition-transform duration-300"
          style={{ transform: open ? 'rotate(180deg)' : 'rotate(0deg)' }}
        />
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.28, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <p className="text-gray-400 text-sm leading-relaxed pb-6 max-w-2xl">
              {faq.a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export default function MobilePublishingPage() {
  const timelineRef = useRef<HTMLDivElement>(null)
  const lineRef = useRef<SVGLineElement>(null)
  const stepsContainerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
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
      <section className="relative pt-36 pb-28 overflow-hidden">
        {/* Glow */}
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] pointer-events-none"
          aria-hidden="true"
          style={{
            background: 'radial-gradient(ellipse at center, rgba(236,72,153,0.14) 0%, rgba(124,58,237,0.07) 50%, transparent 70%)',
            filter: 'blur(80px)',
          }}
        />
        <div
          className="absolute bottom-0 left-0 right-0 h-40 pointer-events-none"
          aria-hidden="true"
          style={{ background: 'linear-gradient(to bottom, transparent, black)' }}
        />

        <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="text-center"
          >
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-pink-500/25 bg-pink-500/8 text-pink-300 text-xs font-medium tracking-widest uppercase mb-10">
              <span className="w-1.5 h-1.5 rounded-full bg-pink-400 animate-pulse" />
              Mobile Publishing in China
            </div>

            <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold leading-[1.04] tracking-tight text-white mb-7">
              Access China&apos;s{' '}
              <span style={{
                backgroundImage: 'linear-gradient(135deg, #ec4899, #a855f7, #ec4899)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundSize: '200% 200%',
                animation: 'premiumGradient 3s ease-in-out infinite',
              }}>
                700M mobile gamers
              </span>
              <br className="hidden sm:block" />
              {' '}without building a China team
            </h1>

            <p className="text-lg sm:text-xl text-gray-400 leading-relaxed max-w-2xl mx-auto mb-8">
              Pixsell connects your game with vetted Chinese publishers across WeChat Mini Games, TapTap, Bilibili Games, and major Android stores. Multiple competing offers. 50% ad revenue. Zero upfront cost.
            </p>

            {/* Authority row */}
            <div className="flex flex-wrap items-center justify-center gap-x-7 gap-y-2.5 mb-10">
              {[
                '50% ad revenue to you',
                'Multiple publisher offers',
                'No upfront cost',
                'IP stays yours',
                'Publisher does the technical work',
              ].map((item, i) => (
                <span key={i} className="flex items-center gap-2 text-sm text-gray-400">
                  <svg className="w-3.5 h-3.5 text-pink-500/70 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2a10 10 0 100 20A10 10 0 0012 2z" />
                  </svg>
                  {item}
                </span>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
              <Link
                href="/contact"
                className="group relative inline-flex items-center gap-2 px-9 py-4 rounded-xl font-semibold text-base text-white overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-pink-500/25 hover:-translate-y-0.5"
                style={{ background: 'linear-gradient(135deg, #ec4899 0%, #a855f7 50%, #7c3aed 100%)' }}
              >
                <span
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{ background: 'linear-gradient(105deg, transparent 40%, rgba(255,255,255,0.18) 50%, transparent 60%)', backgroundSize: '200% 100%', animation: 'shimmerSweep 0.6s ease forwards' }}
                />
                <span className="relative">Book a Free Consultation</span>
                <ArrowRightIcon className="relative w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
              <Link
                href="/services/co-publishing"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold text-sm text-gray-400 border border-white/8 hover:border-white/16 hover:text-gray-200 transition-all duration-300"
              >
                PC / Steam instead?
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Market Stats — open row, no card boxes ─────────────────────── */}
      <section className="relative py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div
            className="grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-white/[0.07]"
            style={{ borderTop: '1px solid rgba(255,255,255,0.07)', borderBottom: '1px solid rgba(255,255,255,0.07)' }}
          >
            {STATS.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1, ease: 'easeOut' }}
                viewport={{ once: true, margin: '-60px' }}
                className="px-8 py-10 sm:py-12 flex flex-col"
                style={{ borderColor: 'rgba(255,255,255,0.07)' }}
              >
                <div
                  className="text-5xl sm:text-6xl font-black leading-none mb-3 tabular-nums"
                  style={{ backgroundImage: `linear-gradient(135deg, ${stat.color}, rgba(255,255,255,0.55))`, backgroundClip: 'text', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}
                >
                  {stat.value}
                </div>
                <p className="text-white font-semibold text-sm mb-1.5">{stat.label}</p>
                <p className="text-gray-600 text-xs leading-relaxed">{stat.sub}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Revenue Model ──────────────────────────────────────────────── */}
      <section className="relative py-24">
        <div
          className="absolute right-0 top-0 w-[600px] h-[500px] pointer-events-none"
          aria-hidden="true"
          style={{ background: 'radial-gradient(ellipse at top right, rgba(236,72,153,0.07) 0%, transparent 65%)', filter: 'blur(80px)' }}
        />
        <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            {/* Left: copy */}
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              viewport={{ once: true, margin: '-60px' }}
            >
              <p className="text-xs font-medium tracking-widest uppercase text-pink-400 mb-5">Revenue Model</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-5 leading-tight">
                The publisher does the work.<br />
                <span style={{ backgroundImage: 'linear-gradient(135deg, #ec4899, #a855f7)', backgroundClip: 'text', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                  You earn 50% of ad revenue.
                </span>
              </h2>
              <p className="text-gray-400 text-base leading-relaxed mb-5">
                Chinese publishers adapt your game for WeChat Mini Games and other CN platforms at their own cost, then monetise through in-game advertising. You receive 50% of that revenue on agreed reporting cycles — no capital outlay required.
              </p>
              <p className="text-gray-500 text-sm leading-relaxed mb-7">
                Pixsell&apos;s role is to ensure you receive multiple competing offers, that deal terms genuinely protect your interests, and that the publisher pays out correctly after launch.
              </p>
              <div className="flex flex-col gap-2.5">
                {['No upfront investment', 'Publisher funds all localisation & UA', 'You approve before anything is signed'].map((item, i) => (
                  <div key={i} className="flex items-center gap-2.5 text-sm text-gray-300">
                    <CheckCircleIcon className="w-4 h-4 text-pink-400 flex-shrink-0" />
                    {item}
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Right: key numbers — no boxes, just typography */}
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              viewport={{ once: true, margin: '-60px' }}
              className="flex flex-col gap-0"
            >
              {[
                { label: 'Your revenue share', value: '50%', color: '#ec4899', sub: 'of all in-game ad revenue' },
                { label: 'Upfront cost to you', value: '$0', color: '#a855f7', sub: 'publisher funds everything' },
                { label: 'Publisher options', value: 'Multiple', color: '#6366f1', sub: 'competing offers, not one' },
                { label: 'IP ownership', value: 'Yours', color: '#10b981', sub: 'always and entirely' },
              ].map((item, i, arr) => (
                <div
                  key={i}
                  className="flex items-center justify-between py-6"
                  style={{ borderBottom: i < arr.length - 1 ? '1px solid rgba(255,255,255,0.06)' : 'none' }}
                >
                  <div>
                    <p className="text-gray-500 text-xs mb-0.5">{item.label}</p>
                    <p className="text-gray-600 text-xs">{item.sub}</p>
                  </div>
                  <span
                    className="text-3xl font-black tabular-nums"
                    style={{ backgroundImage: `linear-gradient(135deg, ${item.color}, rgba(255,255,255,0.6))`, backgroundClip: 'text', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}
                  >
                    {item.value}
                  </span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── What Pixsell Delivers ───────────────────────────────────────── */}
      <section className="relative py-24">
        <div
          className="absolute left-0 top-1/3 w-[500px] h-[400px] pointer-events-none"
          aria-hidden="true"
          style={{ background: 'radial-gradient(ellipse at center, rgba(124,58,237,0.06) 0%, transparent 70%)', filter: 'blur(80px)' }}
        />
        <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10">

          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
            <div>
              <p className="text-xs font-medium tracking-widest uppercase text-purple-400 mb-5">Scope of Work</p>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight">
                What Pixsell{' '}
                <span style={{ backgroundImage: 'linear-gradient(135deg, #a855f7, #ec4899)', backgroundClip: 'text', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                  delivers
                </span>
              </h2>
            </div>
            <p className="text-gray-500 md:max-w-xs text-sm leading-relaxed md:text-right">
              Your advocate and deal architect — ensuring you don&apos;t enter China&apos;s mobile market blind, under-informed, or alone.
            </p>
          </div>

          <div>
            {WHAT_WE_DELIVER.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.08, ease: 'easeOut' }}
                viewport={{ once: true, margin: '-60px' }}
                className="group relative"
              >
                {i === 0 && <div className="h-px" style={{ background: 'rgba(255,255,255,0.06)' }} />}
                <div className="flex items-start gap-8 py-9 sm:py-10">
                  <div className="flex-shrink-0 w-8 pt-0.5">
                    <span className="text-xs font-black tracking-widest tabular-nums select-none" style={{ color: item.accentColor, opacity: 0.45 }}>
                      {item.step}
                    </span>
                  </div>
                  <div className="flex-1 min-w-0 grid md:grid-cols-[1fr_auto] gap-6 md:gap-14 items-start">
                    <div>
                      <h3 className="text-lg sm:text-xl font-bold text-white mb-3" style={{ lineHeight: 1.2 }}>
                        {item.title}
                      </h3>
                      <p className="text-gray-500 text-sm leading-relaxed">{item.body}</p>
                    </div>
                    <div className="md:text-right md:pt-0.5 md:w-52 flex-shrink-0">
                      <p className="text-xs font-semibold leading-relaxed" style={{ color: item.accentColor }}>
                        {item.outcome}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="h-px" style={{ background: 'rgba(255,255,255,0.06)' }} />
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true, margin: '-40px' }}
            className="mt-10 flex items-center gap-3"
          >
            <BanknotesIcon className="w-4 h-4 text-emerald-500/50 flex-shrink-0" />
            <p className="text-gray-600 text-sm">
              Performance-based — Pixsell earns when you earn. No retainer, no upfront fee.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── Game Fit ───────────────────────────────────────────────────── */}
      <section className="relative py-24">
        <div
          className="absolute right-0 top-1/4 w-[500px] h-[400px] pointer-events-none"
          aria-hidden="true"
          style={{ background: 'radial-gradient(ellipse at center, rgba(236,72,153,0.06) 0%, transparent 70%)', filter: 'blur(80px)' }}
        />
        <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10">

          <div className="grid md:grid-cols-[1fr_2fr] gap-16 items-start">
            {/* Left: sticky-ish label column */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              viewport={{ once: true, margin: '-60px' }}
              className="md:sticky md:top-28"
            >
              <p className="text-xs font-medium tracking-widest uppercase text-pink-400 mb-5">Game Fit</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-5 leading-tight">
                Is your game a{' '}
                <span style={{ backgroundImage: 'linear-gradient(135deg, #ec4899, #a855f7)', backgroundClip: 'text', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                  good fit?
                </span>
              </h2>
              <p className="text-gray-500 text-sm leading-relaxed mb-6">
                The CN mobile market rewards accessible, retention-focused games. We&apos;ll tell you honestly during your consultation.
              </p>
              {/* Legend */}
              <div className="flex flex-col gap-2">
                {[
                  { label: 'Best fit', color: '#34d399' },
                  { label: 'Good fit', color: '#60a5fa' },
                  { label: 'Harder to scale', color: '#fbbf24' },
                ].map((l) => (
                  <div key={l.label} className="flex items-center gap-2.5">
                    <span className="w-2 h-2 rounded-full flex-shrink-0" style={{ background: l.color }} />
                    <span className="text-xs text-gray-500">{l.label}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Right: genre list */}
            <div>
              {GENRE_FIT.map((card, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.45, delay: i * 0.07, ease: 'easeOut' }}
                  viewport={{ once: true, margin: '-60px' }}
                  className="group"
                >
                  {i === 0 && <div className="h-px" style={{ background: 'rgba(255,255,255,0.07)' }} />}
                  <div className="flex items-start gap-5 py-7">
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-3 mb-2 flex-wrap">
                        <h3 className="text-base font-bold text-white">{card.title}</h3>
                        <span
                          className="text-xs font-semibold px-2.5 py-0.5 rounded-full"
                          style={card.fitStyle}
                        >
                          {card.fit}
                        </span>
                      </div>
                      <p className="text-gray-500 text-sm leading-relaxed">{card.description}</p>
                    </div>
                  </div>
                  <div className="h-px" style={{ background: 'rgba(255,255,255,0.07)' }} />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Process Timeline ───────────────────────────────────────────── */}
      <section className="relative py-24" ref={timelineRef}>
        <div
          className="absolute left-1/2 top-1/4 -translate-x-1/2 w-[700px] h-[500px] pointer-events-none"
          aria-hidden="true"
          style={{ background: 'radial-gradient(ellipse at center, rgba(124,58,237,0.06) 0%, transparent 65%)', filter: 'blur(80px)' }}
        />
        <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="text-center mb-20">
            <p className="text-xs font-medium tracking-widest uppercase text-pink-400 mb-5">Timeline</p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
              From introduction to{' '}
              <span style={{ backgroundImage: 'linear-gradient(135deg, #ec4899, #a855f7)', backgroundClip: 'text', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundSize: '200% 200%', animation: 'premiumGradient 3s ease-in-out infinite' }}>
                live revenue
              </span>
            </h2>
            <p className="text-lg text-gray-500 max-w-xl mx-auto leading-relaxed">
              Defined responsibilities at every stage — no ambiguity about who does what or when you get paid.
            </p>
          </div>

          <div className="relative">
            <svg
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
                    className={`roadmap-card relative flex items-start gap-6 sm:gap-0 ${isRight ? 'sm:flex-row-reverse' : 'sm:flex-row'}`}
                  >
                    <div className={`flex-1 sm:w-[45%] sm:flex-none ${isRight ? 'sm:mr-[10%]' : 'sm:ml-[10%]'} pl-14 sm:pl-0`}>
                      <div
                        className={`relative rounded-2xl border-l-4 ${accent.border} p-6 transition-all duration-300 hover:-translate-y-1`}
                        style={{
                          background: 'linear-gradient(135deg, rgba(12,4,24,0.92) 0%, rgba(6,2,14,0.96) 100%)',
                          boxShadow: `0 0 0 1px rgba(255,255,255,0.06), 0 8px 32px ${accent.glow.replace('0.35', '0.08')}`,
                        }}
                        onMouseEnter={e => { (e.currentTarget as HTMLElement).style.boxShadow = `0 0 0 1px rgba(255,255,255,0.08), 0 16px 48px ${accent.glow.replace('0.35', '0.18')}` }}
                        onMouseLeave={e => { (e.currentTarget as HTMLElement).style.boxShadow = `0 0 0 1px rgba(255,255,255,0.06), 0 8px 32px ${accent.glow.replace('0.35', '0.08')}` }}
                      >
                        <span className={`inline-block text-xs font-semibold tracking-widest uppercase px-3 py-1 rounded-full border mb-3 ${accent.tag}`}>
                          {step.when}
                        </span>
                        <h3 className="text-xl font-bold text-white mb-3">{step.what}</h3>
                        <ul className="space-y-2">
                          {step.details.split('\n').map((detail, i) => (
                            <li key={i} className="flex items-start gap-2.5 text-sm text-gray-400">
                              <span className="w-1.5 h-1.5 rounded-full flex-shrink-0 mt-1.5" style={{ background: accent.glow }} />
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

      {/* ── Two key considerations ─────────────────────────────────────── */}
      <section className="relative py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <p className="text-xs font-medium tracking-widest uppercase text-purple-400 mb-5">What to Know</p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
              Two things developers ask{' '}
              <span style={{ backgroundImage: 'linear-gradient(135deg, #a855f7, #ec4899)', backgroundClip: 'text', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                before signing
              </span>
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto text-sm leading-relaxed">
              Here&apos;s exactly how both work — no vague reassurances.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              viewport={{ once: true, margin: '-60px' }}
              className="relative rounded-2xl p-8"
              style={{ background: 'linear-gradient(135deg, rgba(124,58,237,0.10) 0%, rgba(12,4,24,0.97) 100%)', boxShadow: '0 0 0 1px rgba(168,85,247,0.15)' }}
            >
              <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-6"
                style={{ background: 'rgba(168,85,247,0.08)', border: '1px solid rgba(168,85,247,0.18)' }}>
                <ShieldCheckIcon className="w-5 h-5 text-purple-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Source Code Access</h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-4">
                Chinese publishers need access to your source build to localise the game, integrate CN-specific SDKs, and handle platform submission. This is standard across the CN mobile ecosystem — not unique to any one deal.
              </p>
              <p className="text-gray-400 text-sm leading-relaxed">
                Pixsell advises on deal terms so source build usage is clearly scoped — what it can be used for, IP reversion clauses, and data handling obligations. You retain full ownership and never sign anything that compromises that.
              </p>
              <div className="mt-6 pt-5 border-t border-white/5 flex items-center gap-2 text-purple-300 text-xs font-semibold">
                <CheckCircleIcon className="w-3.5 h-3.5 flex-shrink-0" />
                IP protection built into every agreement
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              viewport={{ once: true, margin: '-60px' }}
              className="relative rounded-2xl p-8"
              style={{ background: 'linear-gradient(135deg, rgba(236,72,153,0.08) 0%, rgba(12,4,24,0.97) 100%)', boxShadow: '0 0 0 1px rgba(236,72,153,0.13)' }}
            >
              <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-6"
                style={{ background: 'rgba(236,72,153,0.07)', border: '1px solid rgba(236,72,153,0.18)' }}>
                <UserGroupIcon className="w-5 h-5 text-pink-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Publisher Accountability</h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-4">
                Once matched, all technical and operational work is the publisher&apos;s responsibility — localisation, platform integration, UA, and ad monetisation. Your time commitment after sign-off is minimal.
              </p>
              <p className="text-gray-400 text-sm leading-relaxed">
                Pixsell monitors marketing commitments, tracks performance data, and ensures the publisher pays out correctly. If there are issues, we escalate. You deal with us, not the Chinese publisher directly.
              </p>
              <div className="mt-6 pt-5 border-t border-white/5 flex items-center gap-2 text-pink-300 text-xs font-semibold">
                <CheckCircleIcon className="w-3.5 h-3.5 flex-shrink-0" />
                You deal with us, not the publisher directly
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── FAQ — accordion ────────────────────────────────────────────── */}
      <section className="relative py-24">
        <div
          className="absolute left-1/2 -translate-x-1/2 top-0 w-[600px] h-[300px] pointer-events-none"
          aria-hidden="true"
          style={{ background: 'radial-gradient(ellipse at center, rgba(168,85,247,0.05) 0%, transparent 70%)', filter: 'blur(80px)' }}
        />
        <div className="max-w-3xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="mb-14">
            <p className="text-xs font-medium tracking-widest uppercase text-purple-400 mb-5">Due Diligence</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Questions we get{' '}
              <span style={{ backgroundImage: 'linear-gradient(135deg, #a855f7, #ec4899)', backgroundClip: 'text', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                from every developer
              </span>
            </h2>
            <p className="text-gray-500 text-sm leading-relaxed">
              Direct answers. If yours isn&apos;t here, it&apos;ll be covered in your free consultation.
            </p>
          </div>

          <div>
            {FAQS.map((faq, i) => (
              <FaqItem key={i} faq={faq} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────────────── */}
      <section className="relative py-32 overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          aria-hidden="true"
          style={{ background: 'radial-gradient(ellipse 70% 50% at 50% 50%, rgba(236,72,153,0.09) 0%, rgba(124,58,237,0.05) 40%, transparent 70%)', filter: 'blur(60px)' }}
        />
        <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-black to-transparent pointer-events-none" />
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent pointer-events-none" />

        <div className="max-w-2xl mx-auto px-4 sm:px-6 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            viewport={{ once: true, margin: '-60px' }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-pink-500/25 bg-pink-500/8 text-pink-300 text-xs font-medium tracking-widest uppercase mb-10">
              <span className="w-1.5 h-1.5 rounded-full bg-pink-400 animate-pulse" />
              Free consultation — no obligation
            </div>

            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-[1.04] text-white mb-6">
              Find out what your game{' '}
              <span style={{ backgroundImage: 'linear-gradient(135deg, #ec4899, #a855f7)', backgroundClip: 'text', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundSize: '200% 200%', animation: 'premiumGradient 3s ease-in-out infinite' }}>
                could earn in China.
              </span>
            </h2>

            <p className="text-base text-gray-500 leading-relaxed mb-10 max-w-lg mx-auto">
              A free 30-minute call. We&apos;ll assess your game&apos;s fit, show you what a typical deal looks like, and give you a realistic earnings estimate. No pitch, no obligation.
            </p>

            <Link
              href="/contact"
              className="group relative inline-flex items-center gap-2 px-10 py-4 rounded-xl font-semibold text-base text-white overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-pink-500/25 hover:-translate-y-0.5 mb-10"
              style={{ background: 'linear-gradient(135deg, #ec4899 0%, #a855f7 50%, #7c3aed 100%)' }}
            >
              <span
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{ background: 'linear-gradient(105deg, transparent 40%, rgba(255,255,255,0.18) 50%, transparent 60%)', backgroundSize: '200% 100%', animation: 'shimmerSweep 0.6s ease forwards' }}
              />
              <span className="relative">Book a Free Consultation</span>
              <ArrowRightIcon className="relative w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>

            <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
              {['No upfront cost', 'IP protection built in', 'Honest market assessment', '30 minutes', 'No obligation'].map((item, i) => (
                <span key={i} className="flex items-center gap-2 text-xs text-gray-500">
                  <svg className="w-3.5 h-3.5 text-emerald-500/70 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
