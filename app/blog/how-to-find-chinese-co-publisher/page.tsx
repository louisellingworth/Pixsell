'use client'

import React, { useMemo } from 'react'
import Link from 'next/link'
import Navigation from '../../components/Navigation'
import Footer from '../../components/Footer'
import { ArrowLeftIcon, ArrowRightIcon } from '@heroicons/react/24/outline'
import { motion } from 'framer-motion'
import LazyLoad from '../../components/LazyLoad'
import GradientButton from '../../components/ui/GradientButton'
import { calculateReadingTime, formatReadingTime } from '../../utils/readingTime'

// Animation variants
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0
  }
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
}

export default function HowToFindChineseCoPublisher() {
  // Extract all text content from the article for reading time calculation
  const blogContent = useMemo(() => {
    return `
      Breaking into the Chinese market can be a game-changer – China is the world's largest gaming market with over 700 million gamers. 
      However, navigating this market as an independent developer is challenging. You'll likely need to find a Chinese game publisher 
      (often as a co-publisher) to help release your title in China, because foreign developers must partner with a local company to 
      publish there.
      
      This detailed guide will walk you through the steps to secure the right Chinese co-publishing partner, from research and pitching 
      to networking and contract considerations. Throughout, we'll highlight how Pixsell Games can support you as an authoritative 
      facilitator in the process – not a traditional publisher, but a matchmaker connecting you to the perfect partner in China.
      
      [Content continues with the rest of the blog post...]
    `;
  }, []);
  
  // Calculate the reading time
  const readingTime = useMemo(() => {
    const minutes = calculateReadingTime(blogContent);
    return formatReadingTime(minutes);
  }, [blogContent]);

  return (
    <main className="min-h-screen bg-[#0A0A0B] text-white overflow-x-hidden">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: 'How to Find a Chinese Co-Publisher for Your Game',
        description: 'Learn how to identify, evaluate, and partner with the right Chinese co-publisher to maximize your game\'s success in the market.',
        image: 'https://pixsell.games/blog/finding-chinese-publisher.jpg',
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
          '@id': 'https://pixsell.games/blog/how-to-find-chinese-co-publisher'
        },
        wordCount: 1200,
        timeRequired: 'PT8M',
        url: 'https://pixsell.games/blog/how-to-find-chinese-co-publisher',
        articleSection: 'Strategy'
      })}} />
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
            name: 'How to Find a Chinese Co-Publisher for Your Game',
            item: 'https://pixsell.games/blog/how-to-find-chinese-co-publisher'
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
      
      {/* Background gradient */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black/50 to-black" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-purple-900/20 mix-blend-overlay" />
      </div>
      
      <div className="relative pt-24 pb-32">
        <div className="container mx-auto px-6 sm:px-8 lg:px-12 max-w-[1000px]">
          {/* Back button */}
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link href="/blog" className="inline-flex items-center text-purple-400 hover:text-purple-300 mb-8 transition-colors">
              <ArrowLeftIcon className="h-4 w-4 mr-2" />
              Back to Blog
            </Link>
          </motion.div>
          
          {/* Add the reading time indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex items-center text-sm text-white/60 mb-4"
          >
            <span>March 5, 2024</span>
            <span className="mx-2">•</span>
            <span>{readingTime}</span>
          </motion.div>
          
          <article className="prose prose-lg lg:prose-xl prose-invert prose-headings:font-bold prose-h2:text-2xl lg:prose-h2:text-3xl prose-h3:text-xl lg:prose-h3:text-2xl prose-h1:bg-gradient-to-r prose-h1:from-purple-300 prose-h1:to-pink-300 prose-h1:bg-clip-text prose-h1:text-transparent prose-p:text-gray-200 prose-strong:text-purple-300 prose-a:text-purple-400 prose-a:hover:text-purple-300 prose-a:transition-colors prose-a:duration-200 max-w-none">
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              How to Find a Chinese Co-Publisher for Your Game
            </motion.h1>
            
            <motion.p 
              className="lead text-xl md:text-2xl text-white/80 mb-10"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Breaking into the Chinese market can be a game-changer – China is the world's largest gaming market with over 700 million gamers. However, navigating this market as an independent developer is challenging. You'll likely need to find a Chinese game publisher (often as a co-publisher) to help release your title in China, because foreign developers must partner with a local company to publish there.
            </motion.p>
            
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
            >
              <motion.p variants={fadeIn}>
                This detailed guide will walk you through the steps to secure the right Chinese co-publishing partner, from research and pitching to networking and contract considerations. Throughout, we'll highlight how Pixsell Games can support you as an authoritative facilitator in the process – not a traditional publisher, but a matchmaker connecting you to the perfect partner in China.
              </motion.p>
              
              <div className="my-10 border-l-4 border-purple-500 pl-6 py-2">
                <motion.div variants={fadeIn}>
                  <p className="italic text-purple-200">
                    "Finding the right Chinese co-publisher can mean the difference between success and obscurity in the world's largest gaming market."
                  </p>
                </motion.div>
              </div>

              <LazyLoad>
                <motion.div variants={fadeIn}>
                  <h2 className="mt-12 mb-6 flex items-center">
                    <span className="inline-block w-10 h-10 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 flex items-center justify-center mr-4 text-white font-bold">1</span>
                    Research Publishers with Experience in Your Genre
                  </h2>
                </motion.div>
                
                <motion.div variants={fadeIn}>
                  <p>
                    Not all publishers are created equal. Start by researching Chinese game publishers that have a track record with your game's genre and scale. A publisher experienced in your game's style will understand how to market it to local players and navigate China's platforms. Look for companies that have published similar titles or have shown interest in games like yours. Check their portfolios on Steam, TapTap, or news sites to see what games they've handled in the past.
                  </p>
                  
                  <p>
                    For example, mid-sized Chinese publishers known for working with indie games include:
                  </p>
                  
                  <ul className="space-y-4">
                    <li className="bg-purple-900/20 p-4 rounded-lg border-l-2 border-purple-500">
                      <strong>Gamera Game</strong> – an indie-focused publisher founded in 2018 in Shanghai, which brings creative international titles to Chinese players. (They've been involved in hits like Dyson Sphere Program and others showcased at events like Tokyo Game Show, indicating a strong indie lineup.)
                    </li>
                    <li className="bg-purple-900/20 p-4 rounded-lg border-l-2 border-purple-500">
                      <strong>Thermite Games</strong> – a Beijing-based publisher (founded in 2020) that specialises in indie and premium PC/console titles. Their team of industry veterans provides custom publishing solutions for developers around the world, indicating they understand how to position indie games globally and in China.
                    </li>
                    <li className="bg-purple-900/20 p-4 rounded-lg border-l-2 border-purple-500">
                      <strong>IndieArk</strong> – an independent game publisher from Shenzhen, founded in 2019. They seek out creatively outstanding indie titles and have helped bring games like Peglin and Backpack Hero to wider audiences. IndieArk's focus on artistic indie games means they might be a good fit if your game has a unique creative flair.
                    </li>
                  </ul>
                </motion.div>
                
                <motion.div variants={fadeIn}>
                  <p>
                    By compiling a list of such potential co-publishers, you can target those most likely to be interested in your project. Prioritise publishers that have proven success with your genre or target audience – for instance, if you've made a strategy RPG, look for publishers that have released strategy or RPG titles in China before. This increases the chance that they'll be enthusiastic about your game and know how to market it effectively.
                  </p>
                </motion.div>
              </LazyLoad>

              <LazyLoad>
                <motion.div variants={fadeIn}>
                  <h2 className="mt-12 mb-6 flex items-center">
                    <span className="inline-block w-10 h-10 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 flex items-center justify-center mr-4 text-white font-bold">2</span>
                    Prepare a Strong Pitch (Localised for China)
                  </h2>
                </motion.div>
                
                <motion.div variants={fadeIn}>
                  <p>
                    Once you've identified promising publishers, you need to impress them with a solid pitch. Chinese publishers receive countless pitches, so yours should stand out with clarity, professionalism, and local appeal. Here's how to prepare a pitch that resonates:
                  </p>
                  
                  <h3 className="text-purple-300">Create a Chinese-localised pitch deck</h3>
                  
                  <p>
                    Translate your pitch materials into Simplified Chinese so that nothing gets lost in translation. A pitch deck or one-pager about your game should be in Chinese, or at least have Chinese subtitles/captions on each slide. This shows respect for the publisher's language and proves that you're serious about appealing to Chinese players. It also helps the publisher's team internally evaluate and share your project. If you have any gameplay video or trailer, add Chinese subtitles or narration. A localised pitch will instantly communicate your game's concept to decision-makers whose English might be limited.
                  </p>
                  
                  <h3 className="text-purple-300">Emphasise how your game will appeal to local audiences</h3>
                  
                  <p>
                    Tailor your pitch to highlight elements of your game that fit Chinese gamers' tastes. This could include genre popularity in China, thematic elements that resonate, or gameplay features that Chinese players love. For example, if your game is a multiplayer action title, note if similar action games are trending on platforms like TapTap or WeGame. Showing you've done market research on China will impress publishers.
                  </p>
                </motion.div>
              </LazyLoad>

              <LazyLoad>
                <motion.div variants={fadeIn}>                  
                  <h3 className="text-purple-300">Include a demo or gameplay build</h3>
                  
                  <p>
                    Publishers in China will want to play or see the game in action. Provide a demo version or gameplay video. Even better, localise some in-game text in the demo to Chinese, so they can envision the final localized product. Make sure the demo runs well on typical hardware in China and consider culturalization (for instance, adjust any content that might be sensitive or prohibited under China's content regulations). A strong, localized demo proves your game is real and gives the publisher confidence in its quality and feasibility for the market.
                  </p>
                  
                  <h3 className="text-purple-300">Professional presentation</h3>
                  
                  <p>
                    Just like pitching any publisher, ensure your materials are well-designed and error-free. In the Chinese context, using proper Simplified Chinese characters, avoiding machine-translation gaffes, and maybe consulting a native speaker for polishing the language can make a big difference. Remember that your pitch deck might be passed around a publisher's office – it needs to speak to everyone who reads it. Show artwork, screenshots, and describe your development progress, team, and what you're looking for in a Chinese co-publisher (e.g. funding, marketing, distribution help). This clarity will help potential partners quickly understand how they can contribute and what you bring to the table.
                  </p>
                </motion.div>
              </LazyLoad>

              <div className="my-12 h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent opacity-70"></div>

              <LazyLoad>
                <motion.div variants={fadeIn}>
                  <h2 className="mt-12 mb-6 flex items-center">
                    <span className="inline-block w-10 h-10 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 flex items-center justify-center mr-4 text-white font-bold">3</span>
                    Industry Networking: Attend Events and Engage Online Communities
                  </h2>
                  
                  <p>
                    Sometimes, it's not just what you pitch, but who you know. Networking can significantly increase your chances of finding the right co-publisher. Many Chinese publishers prefer to deal with developers they've met or who come recommended. To build these relationships, you should get involved in industry events and online hubs where publishers mingle.
                  </p>
                  
                  <p>
                    Industry events like ChinaJoy draw huge crowds and hundreds of game companies, making them prime opportunities for networking. Attending these expos and conferences lets you meet potential co-publishers face-to-face, build trust, and make a memorable impression beyond cold emails. A casual chat at a booth or a meetup during one of these events can lead to a publishing opportunity down the line. Chinese business culture values relationships, so investing time in networking is often key to finding a partner.
                  </p>
                  
                  <p>
                    Here are some ways to expand your network and meet Chinese publishers:
                  </p>
                </motion.div>
              </LazyLoad>

              <LazyLoad>
                <motion.div variants={fadeIn}>
                  <h3 className="text-purple-300">Attend Chinese game expos</h3>
                  
                  <p>
                    Make an appearance at major industry events in China. The prime example is ChinaJoy (China Digital Entertainment Expo & Conference) in Shanghai – Asia's premier gaming event with over 600 exhibitors annually. Chinese publishers big and small set up booths there. By visiting their booths or networking lounges, you can introduce your game, exchange business cards, and get a direct line of contact. Other events include Tencent's Games Summit, and even international events where Chinese publishers travel (like GDC in San Francisco or Gamescom in Europe) – but ChinaJoy is the hub where you're guaranteed to find a concentration of Chinese game publishing professionals.
                  </p>
                  
                  <h3 className="text-purple-300">Join developer conferences and meetups</h3>
                  
                  <p>
                    Keep an eye on conferences like GDC China (if it resumes in the future) or regional developer summits in Asia. There are also online conferences and webinars focused on the Chinese market. Speaking at or simply attending these can put you in touch with publishers scouting for games. In networking sessions or Q&As, don't be shy to mention you're looking for a publisher for your game – you never know who's listening.
                  </p>
                </motion.div>
              </LazyLoad>

              <LazyLoad>
                <motion.div variants={fadeIn}>
                  <h3 className="text-purple-300">Leverage online communities</h3>
                  
                  <p>
                    In China, a lot of industry networking happens on platforms like WeChat and TapTap. WeChat is the go-to professional communication tool – many developers join WeChat group chats dedicated to game development and business. Try to get invited to some of these communities (sometimes you can find invites through contacts or developer forums). On TapTap, which is a popular game distribution platform, there are developer forums and groups where indie developers share their projects. Engaging in these forums (even in English, or with the help of translation) can get your game noticed by community managers or indie-focused publishers who frequent TapTap to discover new titles. Additionally, platforms like Reddit have threads on /r/gamedev discussing Chinese publishing, and services like Discord or Slack might have China game dev groups – while not China-specific, these can lead to introductions.
                  </p>
                  
                  <h3 className="text-purple-300">Network via existing contacts</h3>
                  
                  <p>
                    Use any connection you might already have. If a fellow developer has published in China, ask for introductions or advice. If you have a fan base in China (perhaps Chinese players have commented on your Steam page or social media), reach out – they might connect you with a publisher or at least give you insight into the local scene. Sometimes, simply posting on Twitter or LinkedIn that you are "looking for a Chinese co-publisher" can result in DMs from interested parties or referrals.
                  </p>
                  
                  <p>
                    Remember that relationship-building can take time. It's wise to start networking well before your game is finished, so that by the time you're ready to seek a deal, you aren't approaching publishers as a complete stranger. Plus, conversations from these events and communities can teach you a lot about what Chinese publishers are seeking, which you can then reflect in your pitch.
                  </p>
                </motion.div>
              </LazyLoad>

              <div className="my-12 h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent opacity-70"></div>

              <LazyLoad>
                <motion.div variants={fadeIn}>
                  <h2 className="mt-12 mb-6 flex items-center">
                    <span className="inline-block w-10 h-10 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 flex items-center justify-center mr-4 text-white font-bold">4</span>
                    Understand Publishing Contracts and Avoid Common Pitfalls
                  </h2>
                  
                  <p>
                    Securing interest from a publisher is exciting, but before you sign anything, make sure you understand the publishing deal inside and out. Contracts can be complex – and when dealing with an international agreement, you must be extra vigilant about terms. Here are key points to watch for:
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
                    <div className="bg-purple-900/20 p-6 rounded-lg border-l-2 border-purple-500">
                      <h3 className="text-purple-300 text-xl mb-3">Revenue share</h3>
                      <p className="text-sm">
                        This is one of the most crucial elements. How will the revenue from game sales (or microtransactions) be split between you and the co-publisher? Be cautious of deals that are heavily skewed against you. In some bad publishing deals, developers ended up with only 10–20% of the revenue, which is extremely low compared to typical Western deals.
                      </p>
                    </div>
                    
                    <div className="bg-purple-900/20 p-6 rounded-lg border-l-2 border-purple-500">
                      <h3 className="text-purple-300 text-xl mb-3">Recoupment and upfront costs</h3>
                      <p className="text-sm">
                        Understand which costs the publisher will recoup from revenue. It's standard that a publisher who spends, say, $100k on marketing will take the first $100k of revenue to recover those costs. But check if they're recouping only direct costs or also a general overhead fee.
                      </p>
                    </div>
                    
                    <div className="bg-purple-900/20 p-6 rounded-lg border-l-2 border-purple-500">
                      <h3 className="text-purple-300 text-xl mb-3">Term and rights</h3>
                      <p className="text-sm">
                        Look at how long the contract lasts and what rights you are granting. Ideally, you are only giving the rights to publish and operate your game in China (and possibly other specified territories if agreed), and only for a set number of years.
                      </p>
                    </div>
                    
                    <div className="bg-purple-900/20 p-6 rounded-lg border-l-2 border-purple-500">
                      <h3 className="text-purple-300 text-xl mb-3">Expectations and support</h3>
                      <p className="text-sm">
                        A good contract also outlines what the publisher will do for you – e.g. marketing commitments, distribution channels, customer support, localization quality, and regulatory compliance. Make sure it's clear what services the co-publisher is providing.
                      </p>
                    </div>
                  </div>
                  
                  <p>
                    Understanding these elements will help you avoid common pitfalls. Many developers are so eager to enter China that they might rush into a deal that binds them to an unfavorable split or inadequate support. Take your time to negotiate and don't hesitate to ask questions or request changes – a reliable Chinese publisher will expect you to be diligent. If something is unclear due to language, ask for clarification (in writing). It's better to delay an agreement than to sign a bad one that you regret later.
                  </p>
                </motion.div>
              </LazyLoad>

              <div className="my-12 h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent opacity-70"></div>

              <LazyLoad>
                <motion.div variants={fadeIn}>
                  <h2 className="mt-12 mb-6 text-3xl font-bold bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text text-transparent">Pixsell Games: Simplifying Game Publisher Matchmaking</h2>
                  
                  <p>
                    If all of the above sounds like a lot to manage – from researching trustworthy partners, to networking across language barriers, to vetting contracts – that's because it is a lot. This is where Pixsell Games comes in as a facilitator and guide to simplify the entire process of finding a Chinese co-publisher. Unlike a traditional publisher, Pixsell Games acts as your partner in connecting you with the right publisher, rather than publishing the game ourselves. Here's how Pixsell adds value to your journey:
                  </p>
                </motion.div>
              </LazyLoad>

              <LazyLoad>
                <motion.div variants={fadeIn}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-10">
                    <div className="bg-gradient-to-br from-purple-900/40 to-pink-900/20 p-6 rounded-xl border border-purple-500/30 transition-transform duration-300 hover:scale-[1.02]">
                      <h3 className="text-xl font-bold text-purple-300 mb-3">Publisher Matchmaking</h3>
                      <p>
                        Pixsell Games specialises in matching developers with vetted Chinese co-publishers, streamlining the hunt for the ideal partner. We maintain relationships with a network of reliable, pre-vetted publishers in China. This means we already know who has a good track record in various genres, who has fair contract practices, and who might be the best fit for your specific game.
                      </p>
                    </div>
                    
                    <div className="bg-gradient-to-br from-purple-900/40 to-pink-900/20 p-6 rounded-xl border border-purple-500/30 transition-transform duration-300 hover:scale-[1.02]">
                      <h3 className="text-xl font-bold text-purple-300 mb-3">Industry Expertise & Guidance</h3>
                      <p>
                        Our team has deep knowledge of China's gaming landscape. We stay up-to-date on market trends, player preferences, and regulatory changes. When you partner with Pixsell, you get more than just an introduction service – we guide you through the entire co-publishing process.
                      </p>
                    </div>
                    
                    <div className="bg-gradient-to-br from-purple-900/40 to-pink-900/20 p-6 rounded-xl border border-purple-500/30 transition-transform duration-300 hover:scale-[1.02]">
                      <h3 className="text-xl font-bold text-purple-300 mb-3">Marketing and Launch Support</h3>
                      <p>
                        A big part of successful publishing is marketing. Pixsell Games stays involved during your game's launch to coordinate with the co-publisher on marketing campaigns. We help tailor the marketing strategy to Chinese platforms (like Bilibili, Weibo, Douyin) and gamer communities, often working hand-in-hand with the publisher's marketing team.
                      </p>
                    </div>
                    
                    <div className="bg-gradient-to-br from-purple-900/40 to-pink-900/20 p-6 rounded-xl border border-purple-500/30 transition-transform duration-300 hover:scale-[1.02]">
                      <h3 className="text-xl font-bold text-purple-300 mb-3">Negotiation and Fair Deals</h3>
                      <p>
                        Because we've seen many publishing deals, Pixsell can help you evaluate and negotiate contract terms with your Chinese co-publisher. Our goal is to help you secure a fair deal – we aim for terms where both you and the publisher benefit, avoiding the lopsided arrangements we warned about earlier.
                      </p>
                    </div>
                  </div>

                  <p>
                    In short, Pixsell Games is there to simplify and de-risk the process of finding a Chinese co-publisher. Instead of going it alone, you have an experienced guide at each step – from the moment you start looking for candidates, to the day your game launches in China (and beyond). We're not here to take ownership of your game; we're here to ensure you find the right publisher and get the best possible arrangement, so you can unlock China's massive market potential without losing focus on what you do best: making a great game.
                  </p>
                </motion.div>
              </LazyLoad>

              {/* Call to Action Section */}
              <LazyLoad>
                <motion.div variants={fadeIn}>
                  <div className="my-16 bg-gradient-to-r from-purple-900/40 to-black p-8 sm:p-10 rounded-2xl border border-purple-500/30 shadow-lg relative overflow-hidden">
                    {/* Animated sparkles in the background */}
                    <div className="absolute inset-0 overflow-hidden opacity-20">
                      <div className="absolute h-2 w-2 rounded-full bg-purple-300 top-[10%] left-[15%] animate-pulse" style={{animationDuration: '3s'}}></div>
                      <div className="absolute h-3 w-3 rounded-full bg-pink-300 top-[20%] left-[80%] animate-pulse" style={{animationDuration: '4s'}}></div>
                      <div className="absolute h-2 w-2 rounded-full bg-purple-300 top-[70%] left-[25%] animate-pulse" style={{animationDuration: '2.5s'}}></div>
                      <div className="absolute h-2 w-2 rounded-full bg-pink-300 top-[60%] left-[75%] animate-pulse" style={{animationDuration: '3.5s'}}></div>
                    </div>

                    <div className="relative z-10">
                      <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text text-transparent">Ready to Launch Your Game in China?</h2>
                      
                      <p className="text-xl mb-8 max-w-3xl">
                        Let Pixsell Games connect you with the perfect Chinese co-publisher. Our expert team will guide you through the entire process, from publisher matching to contract negotiation and launch support.
                      </p>
                      
                      <div className="flex flex-col sm:flex-row gap-4">
                        <GradientButton 
                          href="/contact" 
                          className="text-lg font-medium"
                        >
                          Get Publisher Matchmaking
                        </GradientButton>
                        
                        <GradientButton 
                          href="/services" 
                          variant="default" 
                          className="bg-transparent border-purple-400/40 text-lg font-medium"
                        >
                          Explore Our Services
                        </GradientButton>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </LazyLoad>
              
              {/* Author/Date Section */}
              <LazyLoad>
                <motion.div variants={fadeIn}>
                  <div className="flex items-center mt-16 pt-8 border-t border-purple-800/30">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 flex items-center justify-center text-white font-bold text-lg">
                      PG
                    </div>
                    <div className="ml-4">
                      <p className="font-medium text-white">Pixsell Games Team</p>
                      <p className="text-sm text-gray-400">Last updated: June 2023</p>
                    </div>
                  </div>
                </motion.div>
              </LazyLoad>
              
              {/* Related Articles Suggestion */}
              <LazyLoad>
                <motion.div variants={fadeIn}>
                  <div className="mt-16 pt-8 border-t border-purple-800/30">
                    <h3 className="text-xl font-bold text-white mb-6">Related Articles</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <Link href="/blog" className="block p-5 rounded-xl bg-purple-900/20 border border-purple-500/30 hover:bg-purple-900/30 transition-colors duration-200">
                        <h4 className="font-bold text-purple-300 mb-2">Understanding China's Game Market Regulations</h4>
                        <p className="text-sm text-gray-300">Navigate the complex regulatory landscape for game publishing in mainland China.</p>
                      </Link>
                      <Link href="/blog" className="block p-5 rounded-xl bg-purple-900/20 border border-purple-500/30 hover:bg-purple-900/30 transition-colors duration-200">
                        <h4 className="font-bold text-purple-300 mb-2">Localizing Your Game for Chinese Players</h4>
                        <p className="text-sm text-gray-300">Best practices for cultural and linguistic adaptation of your game for the Chinese market.</p>
                      </Link>
                    </div>
                  </div>
                </motion.div>
              </LazyLoad>
            </motion.div>
          </article>
        </div>
      </div>
      
      <Footer />
    </main>
  )
}

export function Head() {
  return (
    <>
      <title>How to Find a Chinese Co-Publisher for Your Game | Pixsell Games</title>
      <meta name="description" content="Learn how to identify, evaluate, and partner with the right Chinese co-publisher to maximize your game's success in the market." />
      <link rel="canonical" href="https://pixsell.games/blog/how-to-find-chinese-co-publisher" />
      {/* Open Graph */}
      <meta property="og:type" content="article" />
      <meta property="og:title" content="How to Find a Chinese Co-Publisher for Your Game | Pixsell Games" />
      <meta property="og:description" content="Learn how to identify, evaluate, and partner with the right Chinese co-publisher to maximize your game's success in the market." />
      <meta property="og:image" content="https://pixsell.games/blog/finding-chinese-publisher.jpg" />
      <meta property="og:url" content="https://pixsell.games/blog/how-to-find-chinese-co-publisher" />
      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="How to Find a Chinese Co-Publisher for Your Game | Pixsell Games" />
      <meta name="twitter:description" content="Learn how to identify, evaluate, and partner with the right Chinese co-publisher to maximize your game's success in the market." />
      <meta name="twitter:image" content="https://pixsell.games/blog/finding-chinese-publisher.jpg" />
    </>
  );
} 