'use client'

import React from 'react'
import Navigation from '../../components/Navigation'
import Footer from '../../components/Footer'
import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'

export default function BlogPost() {
  return (
    <main className="min-h-screen bg-[#0A0A0B] text-white overflow-x-hidden">
      {/* Article Schema for SEO */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: "Steam Global vs Steam China: What's the Difference for Developers?",
        description: 'A detailed comparison of Steam Global and Steam China, including platform differences, approval processes, and developer strategies.',
        image: 'https://pixsell.games/blog/steam-global-vs-china.jpg',
        author: {
          '@type': 'Person',
          name: 'Pixsell Team',
          description: 'China Gaming Market Specialists'
        },
        publisher: {
          '@type': 'Organization',
          name: 'Pixsell Games',
          logo: {
            '@type': 'ImageObject',
            url: 'https://pixsell.games/favicon_io/android-chrome-192x192.png'
          }
        },
        datePublished: '2024-03-05',
        dateModified: '2024-03-05',
        mainEntityOfPage: {
          '@type': 'WebPage',
          '@id': 'https://pixsell.games/blog/steam-global-vs-steam-china'
        },
        wordCount: 1500,
        timeRequired: 'PT10M',
        url: 'https://pixsell.games/blog/steam-global-vs-steam-china',
        articleSection: 'Strategy'
      })}} />
      {/* BreadcrumbList Schema for SEO */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Blog',
            item: 'https://pixsell.games/blog'
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: "Steam Global vs Steam China: What's the Difference for Developers?",
            item: 'https://pixsell.games/blog/steam-global-vs-steam-china'
          }
        ]
      })}} />
      {/* Fixed Navigation */}
      <div 
        className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-xl border-b border-white/5"
        style={{ 
          transform: 'translateZ(0)',
          willChange: 'transform',
          contain: 'layout paint style'
        }}
      >
        <Navigation />
      </div>
      
      {/* Spacer to prevent content from being hidden behind the fixed navbar */}
      <div className="h-12 md:h-16"></div>
      
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        {/* Background glow effects */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl" />
        </div>

        {/* Content */}
        <div className="relative z-10 container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto"
          >
            <Link href="/blog" className="inline-flex items-center text-purple-400 mb-8 hover:text-purple-300 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to Blog
            </Link>
            <div className="flex items-center text-sm text-white/60 mb-8">
              <span>March 5, 2024</span>
              <span className="mx-2">•</span>
              <span>6 min read</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
              Steam Global vs Steam China: What's the Difference for Developers?
            </h1>
            <Image
              src="/blog/steam-global-vs-china.jpg"
              alt="Hero image for Steam Global vs Steam China blog post"
              width={800}
              height={450}
              className="w-full aspect-video object-cover rounded-xl mb-16 shadow-lg"
            />
          </motion.div>
        </div>
      </section>

      {/* Article Content */}
      <article className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto prose prose-invert prose-lg">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <p className="text-xl leading-relaxed mb-10">
                China is the world's largest PC gaming market, and Steam is a key platform for reaching Chinese players. However, there are two different versions of Steam available in China: Steam Global and Steam China. Understanding the differences between these platforms is crucial for developers looking to publish their games in China.
              </p>

              <h2 className="text-3xl font-bold mt-12 mb-6">1. Steam Global vs Steam China: The Fundamental Difference</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-8">
                <div className="bg-white/5 p-6 rounded-xl border border-white/10 shadow-md">
                  <h3 className="text-2xl font-semibold text-purple-300 mb-6">Steam Global (International Steam)</h3>
                  <ul className="list-disc pl-6 space-y-3">
                    <li className="leading-relaxed">The global version of Steam is available worldwide and is accessible in China (for now).</li>
                    <li className="leading-relaxed">No government approval or ISBN license is required to publish a game.</li>
                    <li className="leading-relaxed">Chinese players can purchase and play games on Steam Global using local payment methods (WeChat Pay, Alipay, UnionPay).</li>
                    <li className="leading-relaxed">The full range of games is available, including those that do not comply with Chinese regulations.</li>
                    <li className="leading-relaxed">Operates in a grey area in China: while not officially approved, it is widely used by millions of Chinese gamers.</li>
                  </ul>
                </div>

                <div className="bg-white/5 p-6 rounded-xl border border-white/10 shadow-md">
                  <h3 className="text-2xl font-semibold text-purple-300 mb-6">Steam China (Official Mainland Steam)</h3>
                  <ul className="list-disc pl-6 space-y-3">
                    <li className="leading-relaxed">Launched in 2021 as a government-approved version of Steam in partnership with Perfect World.</li>
                    <li className="leading-relaxed">Requires an ISBN license from China's National Press and Publication Administration (NPPA).</li>
                    <li className="leading-relaxed">Only games that pass government approval can be sold on Steam China.</li>
                    <li className="leading-relaxed">Content is strictly regulated (e.g., restrictions on violence, political themes, and sensitive topics).</li>
                    <li className="leading-relaxed">Fewer games available (hundreds vs. tens of thousands on Steam Global).</li>
                    <li className="leading-relaxed">Supports local payment systems but requires real-name registration and time restrictions for underage players.</li>
                  </ul>
                </div>
              </div>

              <h2 className="text-3xl font-bold mt-12 mb-6">2. Key Differences Between Steam Global and Steam China</h2>
              
              <div className="overflow-x-auto my-10">
                <table className="w-full border-collapse border border-white/20 rounded-lg">
                  <thead>
                    <tr className="bg-purple-900/30">
                      <th className="text-left py-4 px-6 font-bold text-purple-300">Feature</th>
                      <th className="text-left py-4 px-6 font-bold text-purple-300">Steam Global</th>
                      <th className="text-left py-4 px-6 font-bold text-purple-300">Steam China</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="bg-white/5 hover:bg-white/10 transition-colors border-b border-white/10">
                      <td className="py-4 px-6 font-medium">Government Approval</td>
                      <td className="py-4 px-6">Not required</td>
                      <td className="py-4 px-6">Required (ISBN from NPPA)</td>
                    </tr>
                    <tr className="hover:bg-white/10 transition-colors border-b border-white/10">
                      <td className="py-4 px-6 font-medium">Censorship/Content Restrictions</td>
                      <td className="py-4 px-6">None (except Steam's global policies)</td>
                      <td className="py-4 px-6">Strict (violence, politics, gambling restrictions)</td>
                    </tr>
                    <tr className="bg-white/5 hover:bg-white/10 transition-colors border-b border-white/10">
                      <td className="py-4 px-6 font-medium">Number of Games Available</td>
                      <td className="py-4 px-6">~50,000+</td>
                      <td className="py-4 px-6">~300-500 (only NPPA-approved games)</td>
                    </tr>
                    <tr className="hover:bg-white/10 transition-colors border-b border-white/10">
                      <td className="py-4 px-6 font-medium">User Base</td>
                      <td className="py-4 px-6">Over 30 million Chinese players</td>
                      <td className="py-4 px-6">Smaller but growing (official users only)</td>
                    </tr>
                    <tr className="bg-white/5 hover:bg-white/10 transition-colors border-b border-white/10">
                      <td className="py-4 px-6 font-medium">Payment Methods</td>
                      <td className="py-4 px-6">WeChat Pay, Alipay, UnionPay</td>
                      <td className="py-4 px-6">WeChat Pay, Alipay, bank transfers</td>
                    </tr>
                    <tr className="hover:bg-white/10 transition-colors border-b border-white/10">
                      <td className="py-4 px-6 font-medium">Legal Status in China</td>
                      <td className="py-4 px-6">Operates in a grey area (could be restricted)</td>
                      <td className="py-4 px-6">Fully legal and government-approved</td>
                    </tr>
                    <tr className="bg-white/5 hover:bg-white/10 transition-colors border-b border-white/10">
                      <td className="py-4 px-6 font-medium">Marketing & Distribution</td>
                      <td className="py-4 px-6">Cannot run official ads in China</td>
                      <td className="py-4 px-6">Full access to Chinese game marketing channels</td>
                    </tr>
                    <tr className="hover:bg-white/10 transition-colors border-b border-white/10">
                      <td className="py-4 px-6 font-medium">Revenue Share</td>
                      <td className="py-4 px-6">Standard 70/30 Steam split</td>
                      <td className="py-4 px-6">Revenue shared with Steam, publisher, and government taxes</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h2 className="text-3xl font-bold mt-12 mb-6">3. Regulatory Compliance: ISBN Licensing and Government Approval</h2>
              
              <div className="bg-white/5 p-6 rounded-xl mb-8 border-l-4 border-purple-500">
                <h3 className="text-2xl font-semibold text-purple-300 mb-4">Steam Global: No ISBN Required</h3>
                <p className="leading-relaxed">
                  If you publish your game on Steam Global, you do not need a Chinese ISBN or a local publisher. This makes Steam Global the easiest way to enter the Chinese market. However, because it operates in a legal grey area, it could be restricted or blocked in China in the future.
                </p>
              </div>

              <div className="bg-white/5 p-6 rounded-xl mb-10 border-l-4 border-purple-500">
                <h3 className="text-2xl font-semibold text-purple-300 mb-4">Steam China: ISBN Required</h3>
                <p className="leading-relaxed mb-4">
                  To release a game on Steam China, developers must obtain an ISBN (game licence) from China's NPPA. This requires:
                </p>
                <ol className="list-decimal pl-8 space-y-3">
                  <li className="leading-relaxed">Partnering with a Chinese publisher (foreign developers cannot apply for an ISBN directly).</li>
                  <li className="leading-relaxed">Submitting the game for content review (to ensure compliance with censorship laws).</li>
                  <li className="leading-relaxed">Waiting for approval (this process can take 9-18 months, with no guarantee of approval).</li>
                </ol>
                <p className="leading-relaxed mt-6">
                  If approved, your game is officially sanctioned in China, meaning you can market it freely on local platforms (Weibo, Bilibili, etc.). However, the process is slow, competitive, and restrictive.
                </p>
              </div>

              <h2 className="text-3xl font-bold mt-12 mb-6">4. Content Restrictions: Censorship and Compliance</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-8">
                <div className="bg-white/5 p-6 rounded-xl border border-white/10 shadow-md">
                  <h3 className="text-2xl font-semibold text-purple-300 mb-6">Steam Global: Uncensored Content</h3>
                  <ul className="list-disc pl-6 space-y-3">
                    <li className="leading-relaxed">Any game approved by Valve can be sold on Steam Global.</li>
                    <li className="leading-relaxed">No modifications are required for Chinese regulations.</li>
                    <li className="leading-relaxed">Some games banned in China (Plague Inc., Devotion) are still available via Steam Global.</li>
                  </ul>
                </div>

                <div className="bg-white/5 p-6 rounded-xl border border-white/10 shadow-md">
                  <h3 className="text-2xl font-semibold text-purple-300 mb-6">Steam China: Strict Content Regulations</h3>
                  <ul className="list-disc pl-6 space-y-3">
                    <li className="leading-relaxed">No excessive violence, skeletons, blood, or politically sensitive themes.</li>
                    <li className="leading-relaxed">Many games require censorship changes before approval.</li>
                    <li className="leading-relaxed">Developers must comply with China's anti-addiction laws (e.g., playtime limits for minors).</li>
                  </ul>
                </div>
              </div>
              
              <div className="bg-gradient-to-r from-purple-900/30 to-transparent p-6 rounded-xl my-8 border-l-4 border-purple-500">
                <p className="leading-relaxed">
                  If your game contains content that might be flagged (e.g., horror, historical themes, religious elements), publishing on Steam Global may be a safer option.
                </p>
              </div>

              <h2 className="text-3xl font-bold mt-12 mb-6">5. Monetisation & Distribution: Reaching Chinese Gamers</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-8">
                <div className="bg-white/5 p-6 rounded-xl border border-white/10 shadow-md">
                  <h3 className="text-2xl font-semibold text-purple-300 mb-6">Steam Global: Broad Distribution, No Advertising</h3>
                  <ul className="list-disc pl-6 space-y-3">
                    <li className="leading-relaxed">Steam Global allows you to sell to Chinese players immediately, but you cannot officially market your game in China.</li>
                    <li className="leading-relaxed">Your game might gain popularity organically through word-of-mouth, influencers, and Chinese gaming forums.</li>
                    <li className="leading-relaxed">You receive 100% of your 70% Steam revenue share (no local publisher cut).</li>
                  </ul>
                </div>

                <div className="bg-white/5 p-6 rounded-xl border border-white/10 shadow-md">
                  <h3 className="text-2xl font-semibold text-purple-300 mb-6">Steam China: Official Visibility, But Revenue Sharing</h3>
                  <ul className="list-disc pl-6 space-y-3">
                    <li className="leading-relaxed">With an ISBN, your game can be promoted through Chinese game media, events, and paid advertising.</li>
                    <li className="leading-relaxed">You may be able to secure higher player engagement and visibility in the long term.</li>
                    <li className="leading-relaxed">However, revenue is typically shared with a Chinese publisher, reducing your profit margin.</li>
                  </ul>
                </div>
              </div>
              
              <div className="bg-gradient-to-r from-purple-900/30 to-transparent p-6 rounded-xl my-8 border-l-4 border-purple-500">
                <p className="leading-relaxed">
                  If you're a smaller studio, Steam Global is often the most profitable route initially.
                </p>
              </div>

              <h2 className="text-3xl font-bold mt-12 mb-6">6. Which Route is Best for Indie Developers?</h2>
              <p className="leading-relaxed mb-6">
                For most indie developers, publishing on Steam Global is the best first step. Here's why:
              </p>
              <div className="bg-white/5 p-6 rounded-xl mb-8 border border-white/10">
                <ul className="list-disc pl-6 space-y-3">
                  <li className="leading-relaxed">
                    <span className="font-semibold text-purple-300">Instant market access:</span> You can start selling in China immediately.
                  </li>
                  <li className="leading-relaxed">
                    <span className="font-semibold text-purple-300">No ISBN or government approval required:</span> You avoid a lengthy approval process.
                  </li>
                  <li className="leading-relaxed">
                    <span className="font-semibold text-purple-300">Retain creative freedom:</span> No content censorship needed.
                  </li>
                  <li className="leading-relaxed">
                    <span className="font-semibold text-purple-300">Lower costs and better revenue share:</span> You don't need to split earnings with a Chinese publisher.
                  </li>
                </ul>
              </div>
              <p className="leading-relaxed mb-10">
                However, if your game gains traction in China and you want long-term security and official recognition, you may consider applying for an ISBN and transitioning to Steam China.
              </p>

              <h2 className="text-3xl font-bold mt-12 mb-6">7. How Pixsell Can Help You Publish in China</h2>
              <p className="leading-relaxed mb-8">
                Navigating the Chinese market can be complex, but Pixsell simplifies the process. Here's how we help developers:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
                <div className="bg-white/5 p-6 rounded-xl border border-white/10 shadow-md hover:shadow-lg transition-shadow">
                  <h3 className="text-xl font-bold text-purple-300 mb-4">For Steam Global Publishers:</h3>
                  <ul className="list-disc pl-6 space-y-3">
                    <li className="leading-relaxed">Optimising your game for Chinese players (localisation, cultural adaptation, UI tweaks).</li>
                    <li className="leading-relaxed">Connecting with Chinese gaming influencers to promote your game on Weibo, Bilibili, and other platforms.</li>
                    <li className="leading-relaxed">Advising on monetisation strategies (pricing, regional promotions, payment integrations).</li>
                  </ul>
                </div>

                <div className="bg-white/5 p-6 rounded-xl border border-white/10 shadow-md hover:shadow-lg transition-shadow">
                  <h3 className="text-xl font-bold text-purple-300 mb-4">For Steam China Publishers:</h3>
                  <ul className="list-disc pl-6 space-y-3">
                    <li className="leading-relaxed">Finding a trusted Chinese publisher to sponsor your ISBN application.</li>
                    <li className="leading-relaxed">Ensuring your game passes content regulations before submission.</li>
                    <li className="leading-relaxed">Helping with marketing and distribution through legal advertising channels.</li>
                  </ul>
                </div>
              </div>
              
              <p className="leading-relaxed mb-10">
                If you're unsure which path to take, Pixsell can assess your game and recommend the best approach.
              </p>

              <h2 className="text-3xl font-bold mt-12 mb-6">Conclusion: Steam Global or Steam China?</h2>
              <div className="bg-white/5 p-8 rounded-xl mb-10 border border-white/10 shadow-lg">
                <ul className="list-disc pl-6 space-y-4">
                  <li className="leading-relaxed text-lg">
                    <span className="font-semibold text-purple-300">If you want fast, easy access to Chinese players with no government restrictions,</span> Steam Global is the best option.
                  </li>
                  <li className="leading-relaxed text-lg">
                    <span className="font-semibold text-purple-300">If you want long-term market presence, legal recognition, and official promotion,</span> Steam China is worth considering, but it requires ISBN approval and a local publisher.
                  </li>
                </ul>
                <p className="mt-6 text-lg leading-relaxed">
                  Whatever your strategy, Pixsell can help you maximise your success in China. Contact us today to discuss how we can guide your publishing journey!
                </p>
              </div>

              <div className="bg-gradient-to-r from-purple-900/30 to-black/30 rounded-xl p-8 my-12 border border-purple-500/30 shadow-lg">
                <h3 className="text-2xl font-bold mb-6 text-white">Need help navigating Steam in China?</h3>
                <p className="mb-6 text-lg leading-relaxed">
                  Pixsell Games offers specialized consulting for developers considering Steam Global or Steam China. Our team can help you make strategic decisions based on your game type and business goals.
                </p>
                <Link href="/contact" className="inline-flex items-center bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-lg font-medium hover:from-purple-600 hover:to-pink-600 transition-all">
                  Get in touch
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </article>

      {/* Related Articles */}
      <section className="py-12 bg-white/5">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8 text-center">Related Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white/5 border border-white/10 rounded-xl overflow-hidden hover:border-purple-500/50 transition-all duration-300 group"
            >
              <Link href="/blog/how-to-publish-a-game-on-steam-in-china">
                <div className="aspect-video overflow-hidden">
                  <Image 
                    src="/blog/steam-china-publishing.jpg" 
                    alt="Related article: How to Publish a Game on Steam in China – A Step-by-Step Guide"
                    width={800}
                    height={450}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold mb-2 group-hover:text-purple-400 transition-colors">
                    How to Publish a Game on Steam in China – A Step-by-Step Guide
                  </h3>
                  <span className="text-purple-400 text-sm font-medium inline-flex items-center">
                    Read article
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </div>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white/5 border border-white/10 rounded-xl overflow-hidden hover:border-purple-500/50 transition-all duration-300 group"
            >
              <Link href="/blog/isbn-license-china-game-release">
                <div className="aspect-video overflow-hidden">
                  <Image 
                    src="/blog/isbn-license-china.jpg" 
                    alt="Related article: Do I Need an ISBN License to Release My Game in China?"
                    width={800}
                    height={450}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold mb-2 group-hover:text-purple-400 transition-colors">
                    Do I Need an ISBN License to Release My Game in China?
                  </h3>
                  <span className="text-purple-400 text-sm font-medium inline-flex items-center">
                    Read article
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </div>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white/5 border border-white/10 rounded-xl overflow-hidden hover:border-purple-500/50 transition-all duration-300 group"
            >
              <Link href="/blog/what-chinese-players-want">
                <div className="aspect-video overflow-hidden">
                  <Image 
                    src="/blog/chinese-player-preferences.jpg" 
                    alt="What Chinese Players Want"
                    width={800}
                    height={450}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold mb-2 group-hover:text-purple-400 transition-colors">
                    What Do Chinese Players Want? Adapting Your Game for the Chinese Market
                  </h3>
                  <span className="text-purple-400 text-sm font-medium inline-flex items-center">
                    Read article
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </div>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
} 