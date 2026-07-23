'use client'

import React from 'react'
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
        headline: 'ISBN Licence in China: The Complete Guide for Game Developers',
        description: 'A comprehensive guide to ISBN licensing for games in China, including requirements, process, and alternatives for indie developers.',
        image: 'https://eightsixgames.com/blog/isbn-license-china.jpg',
        author: {
          '@type': 'Person',
          name: 'EightSix Team',
          description: 'China Gaming Market Specialists'
        },
        publisher: {
          '@type': 'Organization',
          name: 'EightSix Games',
          logo: {
            '@type': 'ImageObject',
            url: 'https://eightsixgames.com/favicon_io/android-chrome-192x192.png'
          }
        },
        datePublished: '2024-03-05',
        dateModified: '2024-03-05',
        mainEntityOfPage: {
          '@type': 'WebPage',
          '@id': 'https://eightsixgames.com/blog/isbn-license-china-game-release'
        },
        wordCount: 1200,
        timeRequired: 'PT8M',
        url: 'https://eightsixgames.com/blog/isbn-license-china-game-release',
        articleSection: 'Regulation'
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
            item: 'https://eightsixgames.com/blog'
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'ISBN Licence in China: The Complete Guide for Game Developers',
            item: 'https://eightsixgames.com/blog/isbn-license-china-game-release'
          }
        ]
      })}} />
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
              <span>9 min read</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
              ISBN Licence in China: The Complete Guide for Game Developers
            </h1>
            <Image
              src="/blog/isbn-license-china.jpg"
              alt="Hero image for ISBN Licence in China: The Complete Guide for Game Developers blog post"
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
                Entering China's massive gaming market is an attractive opportunity for developers worldwide, but understanding the ISBN licensing system is essential. This guide explains what the Chinese game ISBN is, how to obtain one, and your alternatives if getting a license is not feasible.
              </p>

              <div className="bg-white/5 p-6 rounded-xl mb-12 border border-white/10">
                <h2 className="text-3xl font-bold mb-6">Quick Summary: ISBN for Games in China</h2>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <span className="text-purple-400 mr-3">•</span> 
                    <span><strong className="text-purple-300">What:</strong> The ISBN (International Standard Book Number) in China is a mandatory license required for all video games legally published in mainland China.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-400 mr-3">•</span> 
                    <span><strong className="text-purple-300">Who Issues It:</strong> National Press and Publication Administration (NPPA), a government agency that controls media content.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-400 mr-3">•</span> 
                    <span><strong className="text-purple-300">Required For:</strong> All games sold through official channels in China, including PC, mobile, and console titles.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-400 mr-3">•</span> 
                    <span><strong className="text-purple-300">Timeline:</strong> 8-12+ months for foreign games; approval rates are limited with strict quotas.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-400 mr-3">•</span> 
                    <span><strong className="text-purple-300">Alternatives:</strong> Publishing on international platforms accessible in China (limited but viable option).</span>
                  </li>
                </ul>
              </div>
              
              <h2 className="text-3xl font-bold mt-12 mb-6">What is the ISBN License for Games in China?</h2>
              <p className="mb-6 leading-relaxed">
                In China, the ISBN (International Standard Book Number) system has been uniquely adapted for the gaming industry. While an ISBN traditionally refers to books, China uses this system to regulate and license video games as well. Every game legally distributed in mainland China must obtain an ISBN from the NPPA (National Press and Publication Administration), which serves as:
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
                <div className="bg-white/5 p-6 rounded-xl border border-white/10 shadow-md">
                  <h3 className="text-xl font-semibold text-purple-300 mb-4">Legal Permission</h3>
                  <p className="leading-relaxed">
                    An official government license that permits a game to be legally published, sold, and monetized within mainland China through approved distribution channels.
                  </p>
                </div>
                
                <div className="bg-white/5 p-6 rounded-xl border border-white/10 shadow-md">
                  <h3 className="text-xl font-semibold text-purple-300 mb-4">Content Approval</h3>
                  <p className="leading-relaxed">
                    Confirmation that the game's content has passed Chinese censorship requirements and complies with cultural, political, and ethical standards set by Chinese authorities.
                  </p>
                </div>
              </div>
              
              <p className="mb-6 leading-relaxed">
                It's important to note that the Chinese ISBN for games differs from other countries' game rating systems (like ESRB or PEGI) because:
              </p>
              
              <ul className="list-disc pl-8 space-y-4 mb-10">
                <li className="leading-relaxed">
                  It's not just an age rating but a mandatory license without which a game cannot be legally released
                </li>
                <li className="leading-relaxed">
                  The approval process involves thorough content review and potential censorship
                </li>
                <li className="leading-relaxed">
                  Foreign developers cannot apply directly and must partner with a Chinese publisher
                </li>
                <li className="leading-relaxed">
                  The government strictly limits the number of approvals, especially for foreign titles
                </li>
              </ul>
              
              <div className="bg-gradient-to-r from-purple-900/30 to-transparent p-6 rounded-xl mb-10 border-l-4 border-purple-500">
                <p className="italic text-lg">
                  "The ISBN license is not merely a formality but the key that unlocks the door to China's official gaming market. Without it, you cannot distribute your game through the Apple App Store in China, major Android app stores like Tencent MyApp or Huawei AppGallery, or official console channels."
                </p>
              </div>

              <h2 className="text-3xl font-bold mt-12 mb-6">Why Games Need an ISBN in China</h2>
              <p className="mb-6 leading-relaxed">
                The Chinese government's regulation of video games through the ISBN system stems from several key objectives:
              </p>
              
              <div className="bg-white/5 p-6 rounded-xl mb-10 border border-white/10">
                <h3 className="text-2xl font-semibold text-center mb-6 text-purple-300">Primary Reasons for ISBN Requirement</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="p-4 rounded-lg border border-white/5">
                    <h4 className="font-bold mb-2 text-purple-200">Content Control</h4>
                    <p className="text-sm leading-relaxed">
                      Allows authorities to review and censor content that contradicts Chinese values, political positions, or cultural sensitivities.
                    </p>
                  </div>
                  
                  <div className="p-4 rounded-lg border border-white/5">
                    <h4 className="font-bold mb-2 text-purple-200">Youth Protection</h4>
                    <p className="text-sm leading-relaxed">
                      Helps implement anti-addiction measures for minors and filters out content deemed inappropriate for younger players.
                    </p>
                  </div>
                  
                  <div className="p-4 rounded-lg border border-white/5">
                    <h4 className="font-bold mb-2 text-purple-200">Market Regulation</h4>
                    <p className="text-sm leading-relaxed">
                      Allows control over which games (domestic and foreign) can compete in the Chinese market, supporting domestic game development.
                    </p>
                  </div>
                  
                  <div className="p-4 rounded-lg border border-white/5">
                    <h4 className="font-bold mb-2 text-purple-200">Data Governance</h4>
                    <p className="text-sm leading-relaxed">
                      Ensures games comply with Chinese data protection laws regarding user information collection and processing.
                    </p>
                  </div>
                </div>
              </div>
              
              <p className="mb-6 leading-relaxed">
                For game developers, the ISBN requirement translates to significant considerations:
              </p>
              
              <div className="overflow-x-auto mb-10">
                <table className="w-full border-collapse border border-white/20 rounded-lg">
                  <thead>
                    <tr className="bg-purple-900/30">
                      <th className="py-4 px-6 text-left font-bold text-purple-300">Aspect</th>
                      <th className="py-4 px-6 text-left font-bold text-purple-300">Impact on Developers</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="bg-white/5 hover:bg-white/10 transition-colors border-b border-white/10">
                      <td className="py-4 px-6 font-medium">Market Access</td>
                      <td className="py-4 px-6 leading-relaxed">
                        Without an ISBN, you cannot publish on official Chinese app stores or distribute through authorized channels.
                      </td>
                    </tr>
                    <tr className="hover:bg-white/10 transition-colors border-b border-white/10">
                      <td className="py-4 px-6 font-medium">Content Modification</td>
                      <td className="py-4 px-6 leading-relaxed">
                        Games often require significant content changes to comply with regulations (removing blood, skeletons, certain symbols, etc.)
                      </td>
                    </tr>
                    <tr className="bg-white/5 hover:bg-white/10 transition-colors border-b border-white/10">
                      <td className="py-4 px-6 font-medium">Partnership Requirement</td>
                      <td className="py-4 px-6 leading-relaxed">
                        Foreign developers must partner with a Chinese publisher who holds the proper publishing credentials to apply for ISBNs.
                      </td>
                    </tr>
                    <tr className="hover:bg-white/10 transition-colors border-b border-white/10">
                      <td className="py-4 px-6 font-medium">Business Arrangements</td>
                      <td className="py-4 px-6 leading-relaxed">
                        Revenue sharing with Chinese partners is necessary, typically yielding 30-50% of game revenue to the local publisher.
                      </td>
                    </tr>
                    <tr className="bg-white/5 hover:bg-white/10 transition-colors">
                      <td className="py-4 px-6 font-medium">Timeline Considerations</td>
                      <td className="py-4 px-6 leading-relaxed">
                        Long approval processes affect launch schedules and marketing strategies for the Chinese market.
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h2 className="text-3xl font-bold mt-12 mb-6">The ISBN Application Process for Foreign Developers</h2>
              <p className="mb-6 leading-relaxed">
                For foreign game developers, the process of obtaining a Chinese ISBN is complex and requires multiple steps:
              </p>
              
              <div className="relative mb-12">
                <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-purple-500 to-purple-800"></div>
                
                <div className="relative z-10 ml-16 mb-10">
                  <div className="absolute -left-10 top-0 w-8 h-8 rounded-full bg-purple-600 flex items-center justify-center text-xl font-bold">1</div>
                  <h3 className="text-2xl font-semibold mb-4 text-purple-300">Find a Chinese Publishing Partner</h3>
                  <div className="bg-white/5 p-6 rounded-xl border border-white/10">
                    <p className="mb-4 leading-relaxed">
                      Foreign companies cannot directly apply for an ISBN; you must partner with a licensed Chinese publisher. These publishers have the necessary relationships with government officials and understand the application process.
                    </p>
                    <div className="pl-4 border-l-2 border-purple-400">
                      <p className="italic text-sm text-white/80">
                        <strong>Tip:</strong> Look for publishers with experience in your game genre and with international titles. Major companies like Tencent, NetEase, and Perfect World frequently partner with foreign developers, but smaller specialized publishers may be more attentive to indie games.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="relative z-10 ml-16 mb-10">
                  <div className="absolute -left-10 top-0 w-8 h-8 rounded-full bg-purple-600 flex items-center justify-center text-xl font-bold">2</div>
                  <h3 className="text-2xl font-semibold mb-4 text-purple-300">Game Content Adaptation</h3>
                  <div className="bg-white/5 p-6 rounded-xl border border-white/10">
                    <p className="mb-4 leading-relaxed">
                      Before submission, your Chinese partner will guide you through necessary content modifications to align with Chinese regulations.
                    </p>
                    <div className="pl-4 border-l-2 border-purple-400">
                      <p className="italic text-sm text-white/80">
                        <strong>Common requirements include:</strong>
                      </p>
                      <ul className="list-disc pl-6 mt-2 space-y-2 text-sm text-white/80">
                        <li>Removing or altering representations of blood (often changed to black, green, or blue)</li>
                        <li>Modifying skeletons, skulls, and depictions of death</li>
                        <li>Eliminating politically sensitive content or references to Taiwan, Tibet, etc.</li>
                        <li>Ensuring maps conform to China's territorial claims</li>
                        <li>Removing religious symbols or references</li>
                        <li>Implementing anti-addiction systems for minor players</li>
                      </ul>
                    </div>
                  </div>
                </div>
                
                <div className="relative z-10 ml-16 mb-10">
                  <div className="absolute -left-10 top-0 w-8 h-8 rounded-full bg-purple-600 flex items-center justify-center text-xl font-bold">3</div>
                  <h3 className="text-2xl font-semibold mb-4 text-purple-300">Documentation Preparation</h3>
                  <div className="bg-white/5 p-6 rounded-xl border border-white/10">
                    <p className="mb-4 leading-relaxed">
                      Your publisher will compile an extensive application package including:
                    </p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Detailed game description and content overview</li>
                      <li>Screenshots of all game levels or major content</li>
                      <li>Video gameplay footage</li>
                      <li>Complete script/dialogue translations</li>
                      <li>Business credentials of both the foreign developer and Chinese publisher</li>
                      <li>Intellectual property documentation</li>
                      <li>Server architecture details (for online games)</li>
                      <li>Implementation plans for anti-addiction measures</li>
                    </ul>
                  </div>
                </div>
                
                <div className="relative z-10 ml-16 mb-10">
                  <div className="absolute -left-10 top-0 w-8 h-8 rounded-full bg-purple-600 flex items-center justify-center text-xl font-bold">4</div>
                  <h3 className="text-2xl font-semibold mb-4 text-purple-300">Submission and Review</h3>
                  <div className="bg-white/5 p-6 rounded-xl border border-white/10">
                    <p className="mb-4 leading-relaxed">
                      The Chinese publisher submits your application to the NPPA. The review process typically involves:
                    </p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Initial screening for completeness</li>
                      <li>Content evaluation by multiple departments</li>
                      <li>Technical assessment of online features and security</li>
                      <li>Potential requests for additional information or modifications</li>
                    </ul>
                    <div className="pl-4 border-l-2 border-purple-400 mt-4">
                      <p className="italic text-sm text-white/80">
                        <strong>Note:</strong> This phase typically takes 6-9 months but can extend to over a year. The government periodically freezes new approvals, creating backlogs.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="relative z-10 ml-16">
                  <div className="absolute -left-10 top-0 w-8 h-8 rounded-full bg-purple-600 flex items-center justify-center text-xl font-bold">5</div>
                  <h3 className="text-2xl font-semibold mb-4 text-purple-300">Post-Approval Compliance</h3>
                  <div className="bg-white/5 p-6 rounded-xl border border-white/10">
                    <p className="mb-4 leading-relaxed">
                      If approved, your game receives an ISBN, but responsibilities continue:
                    </p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Regular content updates must also receive approval</li>
                      <li>Ongoing compliance with evolving regulations</li>
                      <li>Maintaining anti-addiction systems and age verification</li>
                      <li>Local data storage requirements for user information</li>
                      <li>Regular reporting to authorities about game operations</li>
                    </ul>
                  </div>
                </div>
              </div>

              <h2 className="text-3xl font-bold mt-12 mb-6">Recent Changes in China's ISBN Policy</h2>
              <p className="mb-6 leading-relaxed">
                China's approach to gaming regulation continues to evolve, with significant recent developments affecting ISBN issuance:
              </p>
              
              <div className="bg-white/5 p-6 rounded-xl mb-10 border border-white/10">
                <h3 className="text-xl font-semibold mb-4 text-purple-300">Major Recent Developments</h3>
                
                <div className="space-y-6">
                  <div className="flex">
                    <div className="flex-none w-20 text-center font-bold text-purple-300">2018-2019</div>
                    <div className="flex-1 pl-4 border-l border-white/20">
                      <p className="leading-relaxed">
                        <strong>Approval Freeze:</strong> China implemented a 9-month halt on all new game approvals, creating a massive backlog.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex">
                    <div className="flex-none w-20 text-center font-bold text-purple-300">2021</div>
                    <div className="flex-1 pl-4 border-l border-white/20">
                      <p className="leading-relaxed">
                        <strong>Minor Protection:</strong> Strengthened regulations limiting playtime for users under 18 to just 3 hours weekly (Fri-Sun only), affecting game design requirements.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex">
                    <div className="flex-none w-20 text-center font-bold text-purple-300">2022</div>
                    <div className="flex-1 pl-4 border-l border-white/20">
                      <p className="leading-relaxed">
                        <strong>Foreign Game Quotas:</strong> Further reduced the monthly approval rate for foreign titles, with only 45-60 foreign games approved annually.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex">
                    <div className="flex-none w-20 text-center font-bold text-purple-300">2023</div>
                    <div className="flex-1 pl-4 border-l border-white/20">
                      <p className="leading-relaxed">
                        <strong>Content Scrutiny:</strong> Increased emphasis on "healthy content" with additional restrictions on in-game purchases and gacha mechanics.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex">
                    <div className="flex-none w-20 text-center font-bold text-purple-300">2024</div>
                    <div className="flex-1 pl-4 border-l border-white/20">
                      <p className="leading-relaxed">
                        <strong>Proposed Changes:</strong> Ongoing regulatory reviews may further alter the approval system, with indications of potentially streamlining some aspects while tightening content standards.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              <p className="mb-10 leading-relaxed">
                These changes reflect China's continuing effort to balance its massive gaming industry with concerns about gaming addiction, cultural values, and content control. The approval rate for foreign games has seen significant fluctuation, making the process increasingly competitive.
              </p>

              <h2 className="text-3xl font-bold mt-12 mb-6">Alternatives to Getting an ISBN</h2>
              <p className="mb-6 leading-relaxed">
                Given the challenges of the ISBN application process, many developers explore alternative routes to reach Chinese players:
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
                <div className="bg-white/5 p-6 rounded-xl border border-white/10 shadow-md">
                  <h3 className="text-xl font-semibold text-purple-300 mb-4">1. Steam Global</h3>
                  <p className="mb-4 leading-relaxed">
                    The international version of Steam remains accessible in mainland China without requiring an ISBN, creating a significant "grey market" opportunity.
                  </p>
                  <div className="space-y-2">
                    <div className="flex">
                      <div className="flex-none w-20 text-center font-bold text-green-500">Pros</div>
                      <div className="flex-1 pl-3">
                        <ul className="list-disc pl-4 space-y-1 text-sm">
                          <li>No ISBN required</li>
                          <li>No content changes needed</li>
                          <li>Direct access to Chinese PC gamers</li>
                          <li>Full revenue share (minus Steam's cut)</li>
                        </ul>
                      </div>
                    </div>
                    
                    <div className="flex">
                      <div className="flex-none w-20 text-center font-bold text-red-500">Cons</div>
                      <div className="flex-1 pl-3">
                        <ul className="list-disc pl-4 space-y-1 text-sm">
                          <li>Uncertain future (could be restricted)</li>
                          <li>No official marketing allowed</li>
                          <li>Limited to PC platform only</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white/5 p-6 rounded-xl border border-white/10 shadow-md">
                  <h3 className="text-xl font-semibold text-purple-300 mb-4">2. Epic Games Store</h3>
                  <p className="mb-4 leading-relaxed">
                    Like Steam Global, Epic's store remains accessible in China without ISBN requirements.
                  </p>
                  <div className="space-y-2">
                    <div className="flex">
                      <div className="flex-none w-20 text-center font-bold text-green-500">Pros</div>
                      <div className="flex-1 pl-3">
                        <ul className="list-disc pl-4 space-y-1 text-sm">
                          <li>Higher revenue share than Steam</li>
                          <li>Growing Chinese user base</li>
                          <li>No ISBN required</li>
                        </ul>
                      </div>
                    </div>
                    
                    <div className="flex">
                      <div className="flex-none w-20 text-center font-bold text-red-500">Cons</div>
                      <div className="flex-1 pl-3">
                        <ul className="list-disc pl-4 space-y-1 text-sm">
                          <li>Smaller market than Steam</li>
                          <li>Same regulatory uncertainty</li>
                          <li>Limited localization support</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
                <div className="bg-white/5 p-6 rounded-xl border border-white/10 shadow-md">
                  <h3 className="text-xl font-semibold text-purple-300 mb-4">3. Hong Kong/Taiwan Publishing</h3>
                  <p className="mb-4 leading-relaxed">
                    Release your game in these Chinese-speaking regions without mainland regulations.
                  </p>
                  <div className="space-y-2">
                    <div className="flex">
                      <div className="flex-none w-20 text-center font-bold text-green-500">Pros</div>
                      <div className="flex-1 pl-3">
                        <ul className="list-disc pl-4 space-y-1 text-sm">
                          <li>No ISBN needed</li>
                          <li>Simplified Chinese localization works</li>
                          <li>Easier compliance requirements</li>
                        </ul>
                      </div>
                    </div>
                    
                    <div className="flex">
                      <div className="flex-none w-20 text-center font-bold text-red-500">Cons</div>
                      <div className="flex-1 pl-3">
                        <ul className="list-disc pl-4 space-y-1 text-sm">
                          <li>Much smaller markets</li>
                          <li>No mainland China access</li>
                          <li>Different payment ecosystems</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white/5 p-6 rounded-xl border border-white/10 shadow-md">
                  <h3 className="text-xl font-semibold text-purple-300 mb-4">4. Publishing Via WeGame X</h3>
                  <p className="mb-4 leading-relaxed">
                    Tencent's international version of its WeGame platform.
                  </p>
                  <div className="space-y-2">
                    <div className="flex">
                      <div className="flex-none w-20 text-center font-bold text-green-500">Pros</div>
                      <div className="flex-1 pl-3">
                        <ul className="list-disc pl-4 space-y-1 text-sm">
                          <li>Backed by China's largest game company</li>
                          <li>Growing international presence</li>
                          <li>No ISBN required for global version</li>
                        </ul>
                      </div>
                    </div>
                    
                    <div className="flex">
                      <div className="flex-none w-20 text-center font-bold text-red-500">Cons</div>
                      <div className="flex-1 pl-3">
                        <ul className="list-disc pl-4 space-y-1 text-sm">
                          <li>Still smaller than Steam</li>
                          <li>More complex integration</li>
                          <li>Less transparent processes</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-r from-purple-900/30 to-transparent p-6 rounded-xl mb-10 border-l-4 border-purple-500">
                <h3 className="text-xl font-semibold mb-4">The "Grey Market" Strategy</h3>
                <p className="leading-relaxed">
                  Many developers opt for a "grey market" strategy by publishing on global platforms like Steam while adding Chinese language support and payment options. This lets Chinese players find and play your game while avoiding the ISBN process entirely. While this approach works for now, be aware that China's regulations can change, potentially affecting access to these platforms in the future.
                </p>
              </div>

              <h2 className="text-3xl font-bold mt-12 mb-6">How EightSix Can Help Navigate China's Game Market</h2>
              <p className="mb-6 leading-relaxed">
                Whether you're pursuing an ISBN or exploring alternative routes to the Chinese market, EightSix offers specialized services to help developers navigate this complex landscape:
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
                <div className="bg-white/5 p-6 rounded-xl border border-white/10 shadow-md hover:shadow-lg transition-shadow">
                  <div className="w-12 h-12 rounded-full bg-purple-800/50 flex items-center justify-center mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-purple-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold text-purple-300 mb-3">ISBN Application Support</h3>
                  <p className="text-sm leading-relaxed">
                    We connect you with reliable Chinese publishers, assist with documentation preparation, and guide you through content adaptation requirements.
                  </p>
                </div>
                
                <div className="bg-white/5 p-6 rounded-xl border border-white/10 shadow-md hover:shadow-lg transition-shadow">
                  <div className="w-12 h-12 rounded-full bg-purple-800/50 flex items-center justify-center mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-purple-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold text-purple-300 mb-3">Alternative Strategy Implementation</h3>
                  <p className="text-sm leading-relaxed">
                    We help optimize your presence on Steam Global and other platforms, implement Chinese language support, and navigate payment solutions.
                  </p>
                </div>
                
                <div className="bg-white/5 p-6 rounded-xl border border-white/10 shadow-md hover:shadow-lg transition-shadow">
                  <div className="w-12 h-12 rounded-full bg-purple-800/50 flex items-center justify-center mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-purple-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold text-purple-300 mb-3">Market Analysis & Strategy</h3>
                  <p className="text-sm leading-relaxed">
                    We assess your game's potential in China, help you determine which approach best aligns with your resources and goals, and develop a customized entry strategy.
                  </p>
                </div>
              </div>
              
              <div className="bg-gradient-to-r from-purple-900/30 to-black/30 rounded-xl p-8 my-12 border border-white/20 shadow-lg">
                <h3 className="text-2xl font-bold mb-6 text-white">Ready to Explore the Chinese Market?</h3>
                <p className="mb-6 text-lg leading-relaxed">
                  Whether you're considering applying for an ISBN or exploring alternative strategies, EightSix can help navigate China's complex gaming landscape. Contact us today for a consultation on your China market entry options.
                </p>
                
                <div className="flex justify-center">
                  <a href="/contact" className="inline-block bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-8 rounded-lg transition-colors">
                    Get in Touch
                  </a>
                </div>
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
              className="bg-white/5 border border-white/10 rounded-xl overflow-hidden hover:border-white/30 transition-all duration-300 group"
            >
              <Link href="/blog/steam-global-vs-steam-china">
                <div className="aspect-video overflow-hidden">
                  <Image 
                    src="/blog/steam-global-vs-china.jpg" 
                    alt="Steam Global vs Steam China"
                    width={800}
                    height={450}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold mb-2 group-hover:text-purple-400 transition-colors">
                    Steam Global vs Steam China: What's the Difference for Developers?
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
              className="bg-white/5 border border-white/10 rounded-xl overflow-hidden hover:border-white/30 transition-all duration-300 group"
            >
              <Link href="/blog/how-to-publish-a-game-on-steam-in-china">
                <div className="aspect-video overflow-hidden">
                  <Image 
                    src="/blog/steam-china-publishing-1024w.webp" 
                    alt="How to Publish a Game on Steam in China"
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
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white/5 border border-white/10 rounded-xl overflow-hidden hover:border-white/30 transition-all duration-300 group"
            >
              <Link href="/blog/co-publishing-vs-self-publishing-china">
                <div className="aspect-video overflow-hidden">
                  <Image 
                    src="/blog/publishing-models-china.webp" 
                    alt="Co-Publishing vs Self-Publishing in China"
                    width={800}
                    height={450}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold mb-2 group-hover:text-purple-400 transition-colors">
                    Co-Publishing vs Self-Publishing in China – Which is Right for You?
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