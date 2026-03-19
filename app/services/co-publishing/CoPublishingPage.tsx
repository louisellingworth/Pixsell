'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import {
  UserGroupIcon,
  ArrowRightIcon,
  CheckCircleIcon,
  BanknotesIcon,
  ShieldCheckIcon,
  ChevronDownIcon,
} from '@heroicons/react/24/outline'

import Navigation from '../../components/Navigation'
import Footer from '../../components/Footer'
import FloatingConsultButton from '../../components/FloatingConsultButton'

// ── Data ─────────────────────────────────────────────────────────────────────

const STATS = [
  { value: '50M+', label: 'Steam China Accounts', sub: 'Active players on Steam in the Chinese market', color: '#a855f7' },
  { value: '#2', label: 'Global Gaming Market', sub: 'China is the second-largest PC gaming market by revenue', color: '#ec4899' },
  { value: '$0', label: 'Upfront Cost to You', sub: 'Performance-based — we earn when you earn', color: '#6366f1' },
]

const WHAT_WE_DELIVER = [
  {
    step: '01',
    title: 'Publisher Matching',
    body: 'We screen our network of vetted Chinese co-publishers and shortlist candidates based on your game\'s genre, audience, and commercial track record. You review each option and approve before we move forward.',
    outcome: 'A shortlist of publishers suited to your game — not a single take-it-or-leave-it option.',
    accentColor: '#a855f7',
  },
  {
    step: '02',
    title: 'Deal Negotiation',
    body: 'We handle all contract negotiations — revenue share structure, marketing spend commitments, recoupment thresholds, and reporting obligations. We flag anything that isn\'t in your favour. You approve the final terms before anything is signed.',
    outcome: 'Agreement terms that protect your IP and your earnings.',
    accentColor: '#ec4899',
  },
  {
    step: '03',
    title: 'Marketing & Localisation Oversight',
    body: 'We hold the co-publisher accountable for their commitments on WeChat, Weibo, Bilibili, and Douyin — reviewing campaign plans, approving content direction, and coordinating localisation through our partner network.',
    outcome: 'The marketing spend they committed to is the spend that gets deployed.',
    accentColor: '#6366f1',
  },
  {
    step: '04',
    title: 'Revenue Monitoring',
    body: 'We track revenue reports, cross-reference accuracy, escalate discrepancies with the co-publisher, and send you regular performance summaries. You deal with us, not the publisher directly.',
    outcome: 'You always know exactly where things stand.',
    accentColor: '#10b981',
  },
]

const GENRE_FIT = [
  {
    title: 'Indie & Mid-core PC',
    description: 'Strong cultural appetite for polished indie titles on Steam China. Genre-bending and narrative-driven games have strong word-of-mouth traction with CN PC players.',
    fit: 'Best fit',
    fitStyle: { color: '#34d399', background: 'rgba(16,185,129,0.08)', border: '1px solid rgba(16,185,129,0.2)' },
  },
  {
    title: 'Action / RPG / Strategy',
    description: 'Historically dominant genres on Steam China. Deep mechanics and replayability drive high retention and community growth on platforms like Bilibili.',
    fit: 'Best fit',
    fitStyle: { color: '#34d399', background: 'rgba(16,185,129,0.08)', border: '1px solid rgba(16,185,129,0.2)' },
  },
  {
    title: 'Survival & Sandbox',
    description: 'Open-world and survival mechanics resonate well. Co-publishers in this space have established communities and influencer networks ready to activate.',
    fit: 'Good fit',
    fitStyle: { color: '#60a5fa', background: 'rgba(59,130,246,0.08)', border: '1px solid rgba(59,130,246,0.2)' },
  },
  {
    title: 'Simulation & Management',
    description: 'Growing segment with engaged player base on Steam China. Localisation complexity is moderate and co-publishers increasingly have experience here.',
    fit: 'Good fit',
    fitStyle: { color: '#60a5fa', background: 'rgba(59,130,246,0.08)', border: '1px solid rgba(59,130,246,0.2)' },
  },
  {
    title: 'AAA / Large Live-Service',
    description: 'High localisation cost, ongoing live ops demands, and CN platform compliance requirements make large-scale titles harder to place through a co-publishing model without significant commitment.',
    fit: 'Harder to place',
    fitStyle: { color: '#fbbf24', background: 'rgba(245,158,11,0.08)', border: '1px solid rgba(245,158,11,0.2)' },
  },
]

const FAQS = [
  {
    q: 'Do I lose my IP?',
    a: 'No. You retain full ownership of your game and intellectual property throughout. The co-publishing agreement scopes exactly what the publisher is authorised to do — marketing, localisation, and Steam China operations — with clear boundaries and no assignment of IP.',
  },
  {
    q: 'Do I need an ISBN to publish on Steam China?',
    a: 'Not for Steam Global, which is accessible to Chinese players. We focus exclusively on Steam Global, avoiding the ISBN licensing process required for domestic Chinese platforms like WeGame. This significantly reduces regulatory complexity and time to market.',
  },
  {
    q: 'How does the revenue share work?',
    a: 'The co-publisher typically covers localisation and marketing costs upfront, recouped from revenue before profit-sharing begins. Once the recoupment threshold is cleared, you receive your agreed share — negotiated by us before you sign anything. Some deals include non-recoupable marketing budgets, which means your revenue share kicks in sooner.',
  },
  {
    q: 'How many publisher offers will I receive?',
    a: 'We aim to generate multiple competing offers so you can evaluate terms side by side. The number depends on your game\'s genre and commercial profile, but we never present a single take-it-or-leave-it option.',
  },
  {
    q: 'What does the co-publisher actually do?',
    a: 'They handle localisation into Simplified Chinese, run marketing campaigns on Weibo, WeChat, Bilibili, and Douyin, manage community and customer support, and handle Steam China operations and payment processing. EightSix oversees all of this and holds them accountable to what was agreed.',
  },
  {
    q: 'What happens if the publisher underperforms after launch?',
    a: 'We monitor marketing spend commitments and revenue reporting. If the publisher isn\'t delivering, we escalate directly. Depending on the circumstances, we can advise on whether renegotiation or early termination is the right path — and we\'ll have the contract terms to back it up.',
  },
]

// ── Sub-components ────────────────────────────────────────────────────────────

function FaqItem({ faq, index }: { faq: typeof FAQS[0]; index: number }) {
  const [open, setOpen] = useState(false)
  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.65, delay: index * 0.05, ease: 'easeOut' }}
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

// ── Main component ────────────────────────────────────────────────────────────

export default function CoPublishingPage() {
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
            background: 'radial-gradient(ellipse at center, rgba(168,85,247,0.14) 0%, rgba(236,72,153,0.07) 50%, transparent 70%)',
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
            transition={{ duration: 1.7, ease: 'easeOut' }}
            className="text-center"
          >
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-purple-500/25 bg-purple-500/8 text-purple-300 text-xs font-medium tracking-widest uppercase mb-10">
              <span className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-pulse" />
              Co-Publishing on Steam China
            </div>

            <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold leading-[1.04] tracking-tight text-white mb-7">
              Reach China&apos;s{' '}
              <span style={{
                backgroundImage: 'linear-gradient(135deg, #a855f7, #ec4899, #a855f7)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundSize: '200% 200%',
                animation: 'premiumGradient 3s ease-in-out infinite',
              }}>
                50M Steam players
              </span>
              <br className="hidden sm:block" />
              {' '}without building a China team
            </h1>

            <p className="text-lg sm:text-xl text-gray-400 leading-relaxed max-w-2xl mx-auto mb-8">
              EightSix matches your game with vetted Chinese co-publishers, negotiates the deal terms, and holds the publisher accountable post-launch. You keep your IP. You approve every step.
            </p>

            {/* Authority row */}
            <div className="flex flex-wrap items-center justify-center gap-x-7 gap-y-2.5 mb-10">
              {[
                'No upfront cost',
                'Multiple publisher offers',
                'IP stays yours',
                'No ISBN required',
                'Steam Global only',
              ].map((item, i) => (
                <span key={i} className="flex items-center gap-2 text-sm text-gray-400">
                  <svg className="w-3.5 h-3.5 text-purple-500/70 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2a10 10 0 100 20A10 10 0 0012 2z" />
                  </svg>
                  {item}
                </span>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
              <Link
                href="/contact"
                className="group relative inline-flex items-center gap-2 px-9 py-4 rounded-xl font-semibold text-base text-white overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/25 hover:-translate-y-0.5"
                style={{ background: 'linear-gradient(135deg, #a855f7 0%, #ec4899 50%, #7c3aed 100%)' }}
              >
                <span
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{ background: 'linear-gradient(105deg, transparent 40%, rgba(255,255,255,0.18) 50%, transparent 60%)', backgroundSize: '200% 100%' }}
                />
                <span className="relative">Book a Free Consultation</span>
                <ArrowRightIcon className="relative w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
              <Link
                href="/services/mobile-publishing"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold text-sm text-gray-400 border border-white/8 hover:border-white/16 hover:text-gray-200 transition-all duration-300"
              >
                Mobile publishing instead?
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Market Stats ─────────────────────────────────────────────── */}
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
                transition={{ duration: 1.9, delay: i * 0.1, ease: 'easeOut' }}
                viewport={{ once: true, margin: '-60px' }}
                className="px-8 py-10 sm:py-12 flex flex-col"
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

      {/* ── Why a co-publisher ───────────────────────────────────────── */}
      <section className="relative py-24">
        <div
          className="absolute right-0 top-0 w-[600px] h-[500px] pointer-events-none"
          aria-hidden="true"
          style={{ background: 'radial-gradient(ellipse at top right, rgba(168,85,247,0.07) 0%, transparent 65%)', filter: 'blur(80px)' }}
        />
        <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            {/* Left: copy */}
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.5, ease: 'easeOut' }}
              viewport={{ once: true, margin: '-60px' }}
            >
              <p className="text-xs font-medium tracking-widest uppercase text-purple-400 mb-5">Why Co-Publishing</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-5 leading-tight">
                China&apos;s market rewards<br />
                <span style={{ backgroundImage: 'linear-gradient(135deg, #a855f7, #ec4899)', backgroundClip: 'text', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                  local expertise.
                </span>
              </h2>
              <p className="text-gray-400 text-base leading-relaxed mb-5">
                A great game isn&apos;t enough on its own. Chinese players discover games through Bilibili, Weibo, and Douyin — not through the Steam global storefront. A co-publisher brings the platform relationships, community infrastructure, and localisation capability that determine whether your game finds its audience or gets ignored.
              </p>
              <p className="text-gray-500 text-sm leading-relaxed mb-7">
                EightSix&apos;s role is to ensure you find the right co-publisher, negotiate terms that genuinely protect your interests, and hold the publisher accountable post-launch.
              </p>
              <div className="flex flex-col gap-2.5">
                {[
                  'Localised marketing across CN social platforms',
                  'Community management on QQ and WeChat',
                  'CN payment processing and revenue optimisation',
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-2.5 text-sm text-gray-300">
                    <CheckCircleIcon className="w-4 h-4 text-purple-400 flex-shrink-0" />
                    {item}
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Right: key numbers */}
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.5, ease: 'easeOut' }}
              viewport={{ once: true, margin: '-60px' }}
              className="flex flex-col gap-0"
            >
              {[
                { label: 'Revenue split', value: 'Negotiated', color: '#a855f7', sub: 'we push for the best possible terms' },
                { label: 'Upfront cost to you', value: '$0', color: '#ec4899', sub: 'co-publisher funds localisation & marketing' },
                { label: 'ISBN required', value: 'No', color: '#6366f1', sub: 'Steam Global bypasses domestic CN regulations' },
                { label: 'IP ownership', value: 'Yours', color: '#10b981', sub: 'always — built into the contract' },
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

      {/* ── What EightSix Delivers ───────────────────────────────────── */}
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
                What EightSix{' '}
                <span style={{ backgroundImage: 'linear-gradient(135deg, #a855f7, #ec4899)', backgroundClip: 'text', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                  delivers
                </span>
              </h2>
            </div>
            <p className="text-gray-500 md:max-w-xs text-sm leading-relaxed md:text-right">
              Your advocate and deal architect — from first publisher conversation to ongoing revenue monitoring.
            </p>
          </div>

          <div>
            {WHAT_WE_DELIVER.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.9, delay: i * 0.08, ease: 'easeOut' }}
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
            transition={{ duration: 1.9, delay: 0.2 }}
            viewport={{ once: true, margin: '-40px' }}
            className="mt-10 flex items-center gap-3"
          >
            <BanknotesIcon className="w-4 h-4 text-emerald-500/50 flex-shrink-0" />
            <p className="text-gray-600 text-sm">
              Performance-based — EightSix earns when you earn. No retainer, no upfront fee.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── Game Fit ─────────────────────────────────────────────────── */}
      <section className="relative py-24">
        <div
          className="absolute right-0 top-1/4 w-[500px] h-[400px] pointer-events-none"
          aria-hidden="true"
          style={{ background: 'radial-gradient(ellipse at center, rgba(236,72,153,0.06) 0%, transparent 70%)', filter: 'blur(80px)' }}
        />
        <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="grid md:grid-cols-[1fr_2fr] gap-16 items-start">
            {/* Left: sticky label column */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.5, ease: 'easeOut' }}
              viewport={{ once: true, margin: '-60px' }}
              className="md:sticky md:top-28"
            >
              <p className="text-xs font-medium tracking-widest uppercase text-pink-400 mb-5">Game Fit</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-5 leading-tight">
                Is your game a{' '}
                <span style={{ backgroundImage: 'linear-gradient(135deg, #a855f7, #ec4899)', backgroundClip: 'text', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                  good fit?
                </span>
              </h2>
              <p className="text-gray-500 text-sm leading-relaxed mb-6">
                CN PC players on Steam have broad tastes, but some genres have stronger publisher infrastructure than others. We&apos;ll give you an honest read in your consultation.
              </p>
              {/* Legend */}
              <div className="flex flex-col gap-2">
                {[
                  { label: 'Best fit', color: '#34d399' },
                  { label: 'Good fit', color: '#60a5fa' },
                  { label: 'Harder to place', color: '#fbbf24' },
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
                  transition={{ duration: 1.2, delay: i * 0.07, ease: 'easeOut' }}
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

      {/* ── Two key considerations ────────────────────────────────────── */}
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
              transition={{ duration: 1.5, ease: 'easeOut' }}
              viewport={{ once: true, margin: '-60px' }}
              className="relative rounded-2xl p-8"
              style={{ background: 'linear-gradient(135deg, rgba(124,58,237,0.10) 0%, rgba(12,4,24,0.97) 100%)', boxShadow: '0 0 0 1px rgba(168,85,247,0.15)' }}
            >
              <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-6"
                style={{ background: 'rgba(168,85,247,0.08)', border: '1px solid rgba(168,85,247,0.18)' }}>
                <ShieldCheckIcon className="w-5 h-5 text-purple-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">IP Protection</h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-4">
                You retain full ownership throughout. The co-publishing agreement clearly scopes what the publisher can do — localisation, marketing, and Steam China operations — with no IP assignment and explicit reversion clauses.
              </p>
              <p className="text-gray-400 text-sm leading-relaxed">
                EightSix reviews every contract term before you see it, flags anything that isn&apos;t in your favour, and ensures the agreement you sign actually protects you.
              </p>
              <div className="mt-6 pt-5 border-t border-white/5 flex items-center gap-2 text-purple-300 text-xs font-semibold">
                <CheckCircleIcon className="w-3.5 h-3.5 flex-shrink-0" />
                IP protection built into every agreement
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.5, ease: 'easeOut' }}
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
                Once matched, all localisation, marketing, and CN platform operations are the publisher&apos;s responsibility. Your post-sign-off time commitment is minimal.
              </p>
              <p className="text-gray-400 text-sm leading-relaxed">
                EightSix monitors marketing commitments, tracks revenue reporting, and escalates if the publisher isn&apos;t delivering. You deal with us — not the Chinese publisher directly.
              </p>
              <div className="mt-6 pt-5 border-t border-white/5 flex items-center gap-2 text-pink-300 text-xs font-semibold">
                <CheckCircleIcon className="w-3.5 h-3.5 flex-shrink-0" />
                You deal with us, not the publisher directly
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────────────────────────── */}
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

      {/* ── Internal links ───────────────────────────────────────────── */}
      <section className="relative py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div
            className="grid grid-cols-1 sm:grid-cols-2 divide-y sm:divide-y-0 sm:divide-x divide-white/[0.07]"
            style={{ borderTop: '1px solid rgba(255,255,255,0.07)', borderBottom: '1px solid rgba(255,255,255,0.07)' }}
          >
            <div className="px-0 sm:px-10 py-10">
              <p className="text-xs font-medium tracking-widest uppercase text-gray-500 mb-5">Related Services</p>
              <ul className="space-y-3">
                {[
                  { href: '/services/localisation', label: 'Game Localisation' },
                  { href: '/services/market-strategy', label: 'Market Strategy' },
                  { href: '/services/marketing', label: 'Game Marketing' },
                  { href: '/services/publisher-matching', label: 'Publisher Matching' },
                ].map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="flex items-center gap-2 text-sm text-gray-400 hover:text-purple-300 transition-colors duration-200 group">
                      <ArrowRightIcon className="w-3.5 h-3.5 text-purple-500/50 group-hover:text-purple-400 transition-colors" />
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="px-0 sm:px-10 py-10">
              <p className="text-xs font-medium tracking-widest uppercase text-gray-500 mb-5">Related Reading</p>
              <ul className="space-y-3">
                {[
                  { href: '/blog/co-publishing-vs-self-publishing-china', label: 'Co-Publishing vs Self-Publishing in China' },
                  { href: '/blog/how-to-find-chinese-co-publisher', label: 'How to Find a Chinese Co-Publisher' },
                  { href: '/blog/revenue-share-models-chinese-game-publishing', label: 'Revenue Share Models in Chinese Publishing' },
                  { href: '/blog/5-mistakes-western-developers-make-in-china', label: '5 Mistakes Western Developers Make in China' },
                ].map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="flex items-center gap-2 text-sm text-gray-400 hover:text-pink-300 transition-colors duration-200 group">
                      <ArrowRightIcon className="w-3.5 h-3.5 text-pink-500/50 group-hover:text-pink-400 transition-colors" />
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────────────── */}
      <section className="relative py-32 overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          aria-hidden="true"
          style={{ background: 'radial-gradient(ellipse 70% 50% at 50% 50%, rgba(168,85,247,0.09) 0%, rgba(236,72,153,0.05) 40%, transparent 70%)', filter: 'blur(60px)' }}
        />
        <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-black to-transparent pointer-events-none" />
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent pointer-events-none" />

        <div className="max-w-2xl mx-auto px-4 sm:px-6 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.7, ease: 'easeOut' }}
            viewport={{ once: true, margin: '-60px' }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-purple-500/25 bg-purple-500/8 text-purple-300 text-xs font-medium tracking-widest uppercase mb-10">
              <span className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-pulse" />
              Free consultation — no obligation
            </div>

            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-[1.04] text-white mb-6">
              Find out what your game{' '}
              <span style={{ backgroundImage: 'linear-gradient(135deg, #a855f7, #ec4899)', backgroundClip: 'text', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundSize: '200% 200%', animation: 'premiumGradient 3s ease-in-out infinite' }}>
                could earn in China.
              </span>
            </h2>

            <p className="text-base text-gray-500 leading-relaxed mb-10 max-w-lg mx-auto">
              A free 30-minute call. We&apos;ll assess your game&apos;s fit for the CN market, explain what a typical deal looks like, and give you a realistic view of what to expect. No pitch, no obligation.
            </p>

            <Link
              href="/contact"
              className="group relative inline-flex items-center gap-2 px-10 py-4 rounded-xl font-semibold text-base text-white overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/25 hover:-translate-y-0.5 mb-10"
              style={{ background: 'linear-gradient(135deg, #a855f7 0%, #ec4899 50%, #7c3aed 100%)' }}
            >
              <span
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{ background: 'linear-gradient(105deg, transparent 40%, rgba(255,255,255,0.18) 50%, transparent 60%)', backgroundSize: '200% 100%' }}
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
