'use client'

import { useEffect, useRef } from 'react'
import Link from 'next/link'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import {
  ShieldCheckIcon,
  CheckCircleIcon,
  SparklesIcon,
  StarIcon,
} from '@heroicons/react/24/outline'

gsap.registerPlugin(ScrollTrigger)

const steps = [
  {
    title: 'Find the Right Partner',
    description: "We screen our network of vetted Chinese co-publishers and shortlist candidates based on your game's genre, audience, and commercial goals.",
    eightsixDoes: 'Candidate research, vetting & shortlisting',
    youDo: 'Review shortlist & approve preferred publisher',
    tag: 'Week 1–2',
    stat: { value: '50+', label: 'vetted co-publishers in our network' },
  },
  {
    title: 'Negotiate Deal Terms',
    description: "We handle all contract negotiations — revenue share, marketing spend commitments, recoupment thresholds — and flag anything that isn't in your favour.",
    eightsixDoes: 'Contract negotiation, term review & red-flagging',
    youDo: 'Approve final deal terms before signing',
    tag: 'Week 3–4',
    stat: { value: '0%', label: 'upfront cost — performance-based only' },
  },
  {
    title: 'Oversee Marketing & Localisation',
    description: 'We hold the co-publisher accountable for their marketing commitments on WeChat, Weibo, Bilibili, and Douyin — and coordinate localisation through our partner network.',
    eightsixDoes: 'Marketing oversight & localisation coordination',
    youDo: 'Provide build, assets & approve creative direction',
    tag: 'Month 2–6',
    stat: { value: '4', label: 'major platforms covered' },
  },
  {
    title: 'Monitor Revenue & Performance',
    description: 'We track revenue reports, verify accuracy, escalate issues with the co-publisher, and send you plain-English summaries so you always know where things stand.',
    eightsixDoes: 'Revenue verification, reporting & escalation',
    youDo: 'Receive monthly reports & approve strategic decisions',
    tag: 'Ongoing',
    stat: { value: 'Monthly', label: 'verified revenue reports' },
  },
]

const benefits = [
  { text: 'No IP Loss', detail: 'You keep full control of your game.', icon: ShieldCheckIcon },
  { text: 'Best Deal Terms', detail: 'We negotiate every clause on your behalf.', icon: StarIcon },
  { text: 'Zero Upfront Cost', detail: 'Performance-based — we earn when you earn.', icon: CheckCircleIcon },
  { text: 'Local Expertise', detail: 'Top-tier marketing and support in China.', icon: SparklesIcon },
  { text: 'No ISBN Needed', detail: 'Steam Global — no complex approvals.', icon: CheckCircleIcon },
]

export default function CoPublishingWorks() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const headingRef = useRef<HTMLDivElement>(null)
  const stepsRef = useRef<HTMLDivElement>(null)
  const benefitsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(headingRef.current, {
        y: 32,
        opacity: 0,
        duration: 1.7,
        ease: 'power3.out',
        immediateRender: false,
        scrollTrigger: { trigger: headingRef.current, start: 'top 85%', once: true },
      })

      const stepRows = stepsRef.current?.querySelectorAll<HTMLDivElement>('.step-row')
      if (stepRows) {
        stepRows.forEach((row, i) => {
          const fromLeft = i % 2 === 0
          gsap.from(row, {
            x: fromLeft ? -48 : 48,
            opacity: 0,
            scale: 0.97,
            duration: 1.7,
            ease: 'expo.out',
            immediateRender: false,
            scrollTrigger: { trigger: row, start: 'top 82%', once: true },
          })
        })
      }

      const benefitItems = benefitsRef.current?.querySelectorAll<HTMLDivElement>('.benefit-item')
      if (benefitItems) {
        gsap.from(benefitItems, {
          y: 28,
          opacity: 0,
          scale: 0.92,
          duration: 1.6,
          stagger: 0.1,
          ease: 'back.out(1.4)',
          immediateRender: false,
          scrollTrigger: { trigger: benefitsRef.current, start: 'top 85%', once: true },
        })
      }
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="relative py-28 overflow-hidden">
      <div
        className="absolute top-0 left-1/4 w-[600px] h-[400px] pointer-events-none animate-float-slow"
        aria-hidden="true"
        style={{
          background: 'radial-gradient(ellipse at center, rgba(124,58,237,0.12) 0%, transparent 70%)',
          filter: 'blur(60px)',
        }}
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">

        {/* Heading */}
        <div ref={headingRef} className="text-center mb-20">
          <p className="text-xs font-medium tracking-widest uppercase text-purple-400 mb-4">How It Works</p>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight mb-6">
            How Our{' '}
            <span style={{
              backgroundImage: 'linear-gradient(135deg, #ec4899, #a855f7)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundSize: '200% 200%',
              animation: 'premiumGradient 3s ease-in-out infinite',
            }}>
              Co-Publishing
            </span>{' '}
            Model Works
          </h2>
          <p className="text-xl text-gray-400 leading-relaxed max-w-2xl mx-auto">
            Four steps from introduction to ongoing revenue. You stay in control at every decision point.
          </p>
        </div>

        {/* Steps */}
        <div ref={stepsRef} className="space-y-6">
          {steps.map((step, index) => {
            const isEven = index % 2 === 0
            return (
              <div
                key={step.title}
                className="step-row grid md:grid-cols-2 gap-0 rounded-2xl overflow-hidden"
                style={{
                  boxShadow: '0 0 0 1px rgba(168,85,247,0.12), 0 8px 32px rgba(0,0,0,0.3)',
                }}
              >
                {/* Text panel */}
                <div
                  className={`p-8 md:p-10 flex flex-col justify-center ${isEven ? 'md:order-1' : 'md:order-2'}`}
                  style={{ background: 'linear-gradient(135deg, rgba(12,4,24,0.97) 0%, rgba(8,2,18,0.99) 100%)' }}
                >
                  {/* Step tag + number */}
                  <div className="flex items-center gap-3 mb-5">
                    <span
                      className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-black text-white flex-shrink-0"
                      style={{ background: 'linear-gradient(135deg, #7c3aed, #a855f7)' }}
                    >
                      {index + 1}
                    </span>
                    <span
                      className="text-[10px] font-semibold tracking-widest uppercase px-2.5 py-1 rounded-full border"
                      style={{
                        color: 'rgba(168,85,247,0.85)',
                        borderColor: 'rgba(168,85,247,0.25)',
                        background: 'rgba(168,85,247,0.07)',
                      }}
                    >
                      {step.tag}
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-3 leading-snug">{step.title}</h3>
                  <p className="text-gray-400 leading-relaxed mb-6">{step.description}</p>

                  {/* Responsibility rows */}
                  <div className="space-y-2">
                    <div className="flex items-start gap-3">
                      <span className="text-[10px] font-bold tracking-widest uppercase text-purple-400 w-14 flex-shrink-0 pt-0.5">EightSix</span>
                      <span className="text-sm text-gray-300">{step.eightsixDoes}</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-[10px] font-bold tracking-widest uppercase text-gray-600 w-14 flex-shrink-0 pt-0.5">You</span>
                      <span className="text-sm text-gray-500">{step.youDo}</span>
                    </div>
                  </div>
                </div>

                {/* Stat panel */}
                <div
                  className={`p-8 md:p-10 flex flex-col items-center justify-center min-h-[200px] ${isEven ? 'md:order-2' : 'md:order-1'}`}
                  style={{
                    background: isEven
                      ? 'linear-gradient(135deg, rgba(124,58,237,0.12) 0%, rgba(8,2,18,0.95) 100%)'
                      : 'linear-gradient(225deg, rgba(236,72,153,0.10) 0%, rgba(8,2,18,0.95) 100%)',
                    borderLeft: isEven ? '1px solid rgba(168,85,247,0.10)' : 'none',
                    borderRight: !isEven ? '1px solid rgba(168,85,247,0.10)' : 'none',
                  }}
                >
                  <div
                    className="text-5xl sm:text-6xl font-black leading-none mb-3 text-center"
                    style={{
                      backgroundImage: isEven
                        ? 'linear-gradient(135deg, #a855f7, rgba(168,85,247,0.5))'
                        : 'linear-gradient(135deg, #ec4899, rgba(236,72,153,0.5))',
                      backgroundClip: 'text',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                    }}
                  >
                    {step.stat.value}
                  </div>
                  <p className="text-sm text-gray-500 text-center max-w-[180px] leading-relaxed">{step.stat.label}</p>
                </div>
              </div>
            )
          })}
        </div>

        {/* Benefits strip */}
        <div ref={benefitsRef} className="mt-20 pt-12 border-t border-white/6">
          <p className="text-xs font-medium tracking-widest uppercase text-purple-400 mb-8 text-center">Why This Model</p>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 mb-12">
            {benefits.map((benefit, index) => (
              <div key={index} className="benefit-item flex flex-col items-center text-center gap-3">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: 'rgba(168,85,247,0.08)', border: '1px solid rgba(168,85,247,0.2)' }}
                >
                  <benefit.icon className="w-5 h-5 text-purple-400" />
                </div>
                <div>
                  <p className="text-white font-semibold text-sm">{benefit.text}</p>
                  <p className="text-gray-500 text-xs mt-1 leading-relaxed">{benefit.detail}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold text-white text-sm transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20 hover:-translate-y-0.5"
              style={{ background: 'linear-gradient(135deg, #7c3aed 0%, #a855f7 60%, #ec4899 100%)' }}
            >
              Explore Co-Publishing Options
              <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </div>
        </div>

      </div>
    </section>
  )
}
