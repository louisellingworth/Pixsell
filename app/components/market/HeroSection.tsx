'use client'

import { useEffect, useRef } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import Link from 'next/link'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const STATS = [
  { value: 320, suffix: 'M+', label: 'PC Gamers in China', color: 'rgba(168,85,247,0.7)' },
  { value: 700, suffix: 'M+', label: 'Mobile Gamers in China', color: 'rgba(236,72,153,0.7)' },
  { value: 90, suffix: ' days', label: 'Avg. Time to Launch', color: 'rgba(99,102,241,0.7)' },
]

const TICKER_ITEMS = [
  'Trusted by developers across 12+ countries',
  'No IP loss · No upfront cost',
  'Average time to market: 90 days',
  'Full approval support included',
  'Performance-based revenue sharing',
  'Dedicated local marketing team',
]

export default function HeroSection() {
  const shouldReduceMotion = useReducedMotion()
  const sectionRef = useRef<HTMLDivElement>(null)
  const headingRef = useRef<HTMLHeadingElement>(null)
  const subRef = useRef<HTMLParagraphElement>(null)
  const ctaRef = useRef<HTMLDivElement>(null)
  const statsRef = useRef<HTMLDivElement>(null)
  const tickerRef = useRef<HTMLDivElement>(null)
  const scrollRef = useRef<HTMLDivElement>(null)
  const glowOrbRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // ── Word-by-word heading reveal ──────────────────────────────
      const heading = headingRef.current
      if (heading) {
        const words = heading.querySelectorAll<HTMLSpanElement>('.hero-word')
        gsap.from(words, {
          y: '115%',
          opacity: 0,
          scale: 0.88,
          rotateX: 8,
          duration: 1.8,
          stagger: 0.14,
          ease: 'expo.out',
          delay: 0.1,
          transformOrigin: '50% 100%',
        })
      }

      // ── Sub-heading + CTA fade up ────────────────────────────────
      const tl = gsap.timeline({ delay: 0.8 })
      tl.from(subRef.current, {
        y: 32,
        opacity: 0,
        duration: 1.5,
        ease: 'power3.out',
      })
      tl.from(ctaRef.current, {
        y: 24,
        opacity: 0,
        scale: 0.97,
        duration: 1.4,
        ease: 'power3.out',
      }, '-=0.4')
      tl.from(tickerRef.current, {
        y: 14,
        opacity: 0,
        duration: 1.4,
        ease: 'power2.out',
      }, '-=0.3')
      tl.from(scrollRef.current, {
        opacity: 0,
        y: -12,
        duration: 1.0,
        ease: 'power2.out',
      }, '-=0.2')

      // ── Stat counter animation ───────────────────────────────────
      const statEls = statsRef.current?.querySelectorAll<HTMLSpanElement>('.stat-number')
      const statBlocks = statsRef.current?.querySelectorAll<HTMLDivElement>('.stat-block')
      if (statBlocks) {
        gsap.from(statBlocks, {
          y: 24,
          opacity: 0,
          scale: 0.94,
          duration: 1.4,
          stagger: 0.2,
          ease: 'power3.out',
          delay: 1.3,
        })
      }
      if (statEls) {
        statEls.forEach((el, i) => {
          const target = STATS[i]
          const obj = { val: 0 }
          const isDecimal = target.value % 1 !== 0
          ScrollTrigger.create({
            trigger: statsRef.current,
            start: 'top 85%',
            once: true,
            onEnter: () => {
              gsap.to(obj, {
                val: target.value,
                duration: 1.8,
                ease: 'power2.out',
                delay: i * 0.18,
                onUpdate: () => {
                  el.textContent = isDecimal
                    ? obj.val.toFixed(2)
                    : Math.round(obj.val).toString()
                },
              })
            },
          })
        })
      }

      // ── Glow orb parallax ───────────────────────────────────────
      if (glowOrbRef.current) {
        gsap.to(glowOrbRef.current, {
          y: -80,
          ease: 'none',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top top',
            end: 'bottom top',
            scrub: 1.5,
          },
        })
      }
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="relative min-h-[90vh] flex flex-col items-center justify-center pt-8 pb-0"
    >
      {/* ── Dot-grid background ───────────────────────────────────── */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          backgroundImage:
            'radial-gradient(circle, rgba(168,85,247,0.18) 1px, transparent 1px)',
          backgroundSize: '36px 36px',
          maskImage:
            'radial-gradient(ellipse 80% 70% at 50% 40%, black 30%, transparent 100%)',
          WebkitMaskImage:
            'radial-gradient(ellipse 80% 70% at 50% 40%, black 30%, transparent 100%)',
        }}
      />

      {/* ── Primary glow orb (centre-top) ─────────────────────────── */}
      <div
        ref={glowOrbRef}
        className="absolute top-[-20%] left-1/2 -translate-x-1/2 w-[900px] h-[600px] pointer-events-none animate-float-slow"
        aria-hidden="true"
        style={{
          background:
            'radial-gradient(ellipse at center, rgba(124,58,237,0.28) 0%, rgba(236,72,153,0.12) 45%, transparent 70%)',
          filter: 'blur(60px)',
        }}
      />

      {/* ── Secondary glow orb (lower-left accent) ────────────────── */}
      <div
        className="absolute bottom-[10%] left-[-5%] w-[400px] h-[400px] pointer-events-none animate-float-slow"
        aria-hidden="true"
        style={{
          background: 'radial-gradient(ellipse at center, rgba(99,102,241,0.14) 0%, transparent 65%)',
          filter: 'blur(60px)',
          animationDelay: '-4s',
        }}
      />

      {/* ── Main content ──────────────────────────────────────────── */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center translate-y-[-4vh] sm:translate-y-[-8vh]">

          {/* ── Left: text content ───────────────────────────────────── */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-6 md:pr-8 order-2 md:order-1">

            {/* Eyebrow badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.0, ease: 'easeOut' }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-purple-500/30 bg-purple-500/10 text-purple-300 text-xs sm:text-sm font-medium tracking-widest uppercase"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-pulse" />
              PC & Mobile Publishing in China
            </motion.div>

            {/* ── Heading ───────────────────────────────────────────── */}
            <h1
              ref={headingRef}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] tracking-tight text-white"
            >
              {/* Line 1: "Launch Your Game" */}
              {['Launch', 'Your', 'Game'].map((word, i) => (
                <span key={i} className="word-reveal-clip inline-block mr-[0.22em]">
                  <span className="hero-word inline-block">{word}</span>
                </span>
              ))}
              <br />
              {/* Line 2: "in China" — "in" white, "China" gradient */}
              {[
                { text: 'in', gradient: false },
                { text: 'China', gradient: true },
              ].map((item, i) => (
                <span key={i + 3} className="word-reveal-clip inline-block mr-[0.22em]">
                  <span
                    className="hero-word inline-block"
                    style={
                      item.gradient
                        ? {
                            backgroundImage:
                              'linear-gradient(135deg, #a855f7, #ec4899, #7c3aed)',
                            backgroundClip: 'text',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            backgroundSize: '200% 200%',
                            animation: 'premiumGradient 3s ease-in-out infinite',
                          }
                        : undefined
                    }
                  >
                    {item.text}
                  </span>
                </span>
              ))}
            </h1>

            {/* ── Sub-copy ─────────────────────────────────────────── */}
            <p
              ref={subRef}
              className="max-w-xl text-base sm:text-lg text-gray-400 leading-relaxed"
            >
              We help Western developers launch their games in China — finding the right publisher,
              negotiating your deal, and monitoring revenue after launch.
              No upfront cost. No IP loss.
            </p>

            {/* ── CTA Buttons ──────────────────────────────────────── */}
            <div ref={ctaRef} className="flex flex-col sm:flex-row gap-4 items-center md:items-start">
              <Link
                href="/contact"
                className="group relative inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold text-base text-white overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/30 hover:-translate-y-0.5"
                style={{
                  background:
                    'linear-gradient(135deg, #7c3aed 0%, #a855f7 50%, #ec4899 100%)',
                }}
                role="button"
                aria-label="Book a free consultation"
              >
                {/* Shimmer sweep */}
                <span
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{
                    background: 'linear-gradient(105deg, transparent 40%, rgba(255,255,255,0.18) 50%, transparent 60%)',
                    backgroundSize: '200% 100%',
                    animation: 'shimmerSweep 0.6s ease forwards',
                  }}
                />
                <span className="relative">Book a Free Consultation</span>
                <svg
                  className="relative w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>

              <Link
                href="/services"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold text-base text-gray-300 border border-white/10 hover:border-purple-500/40 hover:text-white hover:bg-white/5 transition-all duration-300"
                role="button"
                aria-label="See our services"
              >
                See Our Services
              </Link>
            </div>

            {/* ── Stats ────────────────────────────────────────────── */}
            <div
              ref={statsRef}
              className="grid grid-cols-3 gap-4 sm:gap-6 pt-6 border-t border-white/8 w-full"
            >
              {STATS.map((stat, i) => (
                <div key={i} className="stat-block flex flex-col items-center md:items-start gap-1.5">
                  <div
                    className="w-8 h-0.5 rounded-full"
                    style={{ background: stat.color }}
                  />
                  <div className="text-xl sm:text-2xl md:text-3xl font-bold text-white tabular-nums">
                    <span className="stat-number">0</span>
                    <span>{stat.suffix}</span>
                  </div>
                  <p className="text-xs sm:text-sm text-gray-500 text-center md:text-left">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* ── Right: floating Steam GIF ─────────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative flex items-center justify-center h-full order-1 md:order-2 pt-20 sm:pt-32 md:pt-0"
          >
            <motion.div
              animate={shouldReduceMotion ? {} : {
                y: [-5, 5, -5],
                x: [0, 10, 0],
                rotate: [0, 2, -2, 0],
                scale: [1, 1.02, 1],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="relative w-[220px] h-[220px] sm:w-[350px] sm:h-[350px] md:w-[420px] md:h-[420px] lg:w-[520px] lg:h-[520px] max-w-full"
            >
              {/* Glow ring behind GIF */}
              <motion.div
                animate={shouldReduceMotion ? {} : {
                  scale: [1, 1.1, 1],
                  opacity: [0.4, 0.65, 0.4],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
                className="absolute inset-0 rounded-full"
                style={{
                  background: 'radial-gradient(ellipse at center, rgba(124,58,237,0.35) 0%, rgba(236,72,153,0.15) 50%, transparent 70%)',
                  filter: 'blur(20px)',
                }}
              />
              <div className="relative z-10 steam-hero-logo-wrapper">
                <img
                  src="/steam Logo .gif"
                  alt="Steam Platform Logo"
                  width={400}
                  height={400}
                  loading="eager"
                  className="steam-hero-logo object-contain w-[120px] h-[120px] sm:w-[210px] sm:h-[210px] md:w-[250px] md:h-[250px] lg:w-[310px] lg:h-[310px] max-w-full mx-auto"
                />
              </div>
            </motion.div>
          </motion.div>

        </div>
      </div>

      {/* ── Trust ticker ──────────────────────────────────────────── */}
      <div
        ref={tickerRef}
        className="relative w-full mt-12 overflow-hidden py-3"
        aria-hidden="true"
        style={{ borderTop: '1px solid rgba(255,255,255,0.04)', borderBottom: '1px solid rgba(255,255,255,0.04)' }}
      >
        <div className="absolute left-0 top-0 bottom-0 w-20 z-10 pointer-events-none" style={{ background: 'linear-gradient(to right, rgb(0,0,0), transparent)' }} />
        <div className="absolute right-0 top-0 bottom-0 w-20 z-10 pointer-events-none" style={{ background: 'linear-gradient(to left, rgb(0,0,0), transparent)' }} />
        <div className="flex animate-ticker whitespace-nowrap">
          {[...TICKER_ITEMS, ...TICKER_ITEMS].map((item, i) => (
            <span key={i} className="inline-flex items-center gap-3 px-8 text-sm text-gray-500">
              <span className="w-1 h-1 rounded-full bg-purple-500/60 flex-shrink-0" />
              {item}
            </span>
          ))}
        </div>
      </div>

      {/* ── Scroll indicator ─────────────────────────────────────── */}
      <div
        ref={scrollRef}
        className="relative z-10 mt-8 mb-2 flex flex-col items-center gap-2 animate-scroll-bounce"
        aria-hidden="true"
      >
        <span className="text-xs text-gray-600 tracking-widest uppercase">Scroll</span>
        <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </section>
  )
}
