'use client'

import { useEffect, useRef } from 'react'
import Link from 'next/link'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const TRUST_SIGNALS = [
  'No upfront cost',
  'Keep your IP',
  'Free 30-min assessment',
]

export default function FinalCTA() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const headingRef = useRef<HTMLHeadingElement>(null)
  const subRef = useRef<HTMLParagraphElement>(null)
  const trustRef = useRef<HTMLDivElement>(null)
  const btnWrapRef = useRef<HTMLDivElement>(null)
  const btnRef = useRef<HTMLAnchorElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Content reveal on scroll
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 75%',
          once: true,
        },
      })

      tl.from(headingRef.current, {
        y: 40,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out',
      })
      tl.from(subRef.current, {
        y: 24,
        opacity: 0,
        duration: 0.6,
        ease: 'power2.out',
      }, '-=0.4')
      const trustItems = trustRef.current?.querySelectorAll<HTMLSpanElement>('span.trust-item')
      if (trustItems && trustItems.length) {
        tl.from(trustItems, {
          y: 16,
          opacity: 0,
          duration: 0.45,
          stagger: 0.12,
          ease: 'power2.out',
        }, '-=0.3')
      } else {
        tl.from(trustRef.current, {
          y: 16,
          opacity: 0,
          duration: 0.5,
          ease: 'power2.out',
        }, '-=0.3')
      }
      tl.from(btnWrapRef.current, {
        y: 20,
        opacity: 0,
        duration: 0.5,
        ease: 'power2.out',
      }, '-=0.2')
    }, sectionRef)

    // Magnetic button effect
    const btn = btnRef.current
    const wrap = btnWrapRef.current
    if (!btn || !wrap) return

    const handleMouseMove = (e: MouseEvent) => {
      const rect = btn.getBoundingClientRect()
      const cx = rect.left + rect.width / 2
      const cy = rect.top + rect.height / 2
      const dx = (e.clientX - cx) * 0.3
      const dy = (e.clientY - cy) * 0.3
      gsap.to(btn, { x: dx, y: dy, duration: 0.3, ease: 'power2.out' })
    }

    const handleMouseLeave = () => {
      gsap.to(btn, { x: 0, y: 0, duration: 0.5, ease: 'elastic.out(1, 0.5)' })
    }

    btn.addEventListener('mousemove', handleMouseMove)
    btn.addEventListener('mouseleave', handleMouseLeave)

    return () => {
      ctx.revert()
      btn.removeEventListener('mousemove', handleMouseMove)
      btn.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [])

  return (
    <section
      ref={sectionRef}
      className="relative py-32 overflow-hidden"
    >
      {/* ── Top edge fade ──────────────────────────────────────────── */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-black to-transparent pointer-events-none z-10" />
      {/* ── Bottom edge fade ───────────────────────────────────────── */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent pointer-events-none z-10" />

      {/* ── Animated gradient mesh background ─────────────────────── */}
      <div
        className="absolute inset-0 animate-gradient-mesh"
        aria-hidden="true"
        style={{
          background:
            'radial-gradient(ellipse 80% 60% at 20% 50%, rgba(124,58,237,0.25) 0%, transparent 60%),' +
            'radial-gradient(ellipse 60% 50% at 80% 40%, rgba(236,72,153,0.20) 0%, transparent 60%),' +
            'radial-gradient(ellipse 50% 40% at 50% 80%, rgba(99,102,241,0.15) 0%, transparent 60%)',
        }}
      />

      {/* ── Subtle grid overlay ────────────────────────────────────── */}
      <div
        className="absolute inset-0 pointer-events-none opacity-20"
        aria-hidden="true"
        style={{
          backgroundImage:
            'linear-gradient(rgba(168,85,247,0.08) 1px, transparent 1px),' +
            'linear-gradient(90deg, rgba(168,85,247,0.08) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      {/* ── Content ───────────────────────────────────────────────── */}
      <div className="relative z-20 max-w-4xl mx-auto px-4 sm:px-6 text-center flex flex-col items-center gap-8">

        {/* Eyebrow */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-purple-500/30 bg-purple-500/10 text-purple-300 text-xs font-medium tracking-widest uppercase">
          <span className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-pulse" />
          Your game is missing China revenue — PC and Mobile
        </div>

        {/* Heading */}
        <h2
          ref={headingRef}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight text-white"
        >
          Your game could be{' '}
          <span
            style={{
              backgroundImage: 'linear-gradient(135deg, #a855f7, #ec4899, #7c3aed)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundSize: '200% 200%',
              animation: 'premiumGradient 3s ease-in-out infinite',
            }}
          >
            earning in China
          </span>{' '}
          within 90 days.
        </h2>

        {/* Sub-copy */}
        <p
          ref={subRef}
          className="max-w-2xl text-lg sm:text-xl text-gray-400 leading-relaxed"
        >
          We&apos;ll assess your game&apos;s China market potential across PC and mobile,
          identify the right publishing partners, and give you a clear picture of what
          a deal would look like — all in a single 30-minute call. No pitch, no obligation.
        </p>

        {/* Trust signals */}
        <div
          ref={trustRef}
          className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2"
        >
          {TRUST_SIGNALS.map((signal, i) => (
            <span key={i} className="trust-item flex items-center gap-2 text-sm text-gray-400">
              <svg className="w-4 h-4 text-emerald-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
              </svg>
              {signal}
            </span>
          ))}
        </div>

        {/* CTA Button — magnetic */}
        <div ref={btnWrapRef} className="magnetic-btn-wrapper mt-2">
          <Link
            ref={btnRef}
            href="/contact"
            className="group inline-flex items-center gap-3 px-10 py-5 rounded-2xl font-semibold text-lg text-white relative overflow-hidden transition-shadow duration-300 hover:shadow-2xl hover:shadow-purple-500/30"
            style={{
              background: 'linear-gradient(135deg, #7c3aed 0%, #a855f7 50%, #ec4899 100%)',
            }}
            aria-label="Get started with Pixsell"
          >
            {/* Shine sweep */}
            <span
              className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              style={{
                background:
                  'linear-gradient(105deg, transparent 40%, rgba(255,255,255,0.18) 50%, transparent 60%)',
                backgroundSize: '200% 100%',
                animation: 'shimmer 1s ease forwards',
              }}
              aria-hidden="true"
            />
            <span className="relative">Get Started</span>
            <svg
              className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1 relative"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  )
}
