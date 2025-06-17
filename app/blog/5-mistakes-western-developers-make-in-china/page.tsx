'use client'

import React, { useMemo } from 'react'
import Link from 'next/link'
import Navigation from '../../components/Navigation'
import Footer from '../../components/Footer'
import { motion } from 'framer-motion'
import { calculateReadingTime, formatReadingTime } from '../../utils/readingTime'

export default function MistakesWesternDevelopersMake() {
  // Blog content for reading time calculation
  const blogContent = useMemo(() => {
    return `
      The Chinese gaming market represents a massive opportunity for Western developers – it's the world's largest 
      gaming market by revenue, with over 700 million gamers. However, it remains one of the most challenging markets 
      to enter successfully. Many Western developers make critical mistakes that hurt their chances before they even begin.
      
      Based on our experience helping global studios publish in China, here are the five most common mistakes Western 
      developers make when approaching the Chinese market – and how to avoid them.
      
      [Content continues with the rest of the blog post...]
    `;
  }, []);
  
  // Calculate reading time
  const readingTime = useMemo(() => {
    const minutes = calculateReadingTime(blogContent);
    return formatReadingTime(minutes);
  }, [blogContent]);

  // Sample related posts data
  const relatedPosts = [
    {
      slug: 'what-chinese-players-want',
      title: 'What Do Chinese Players Want? Adapting Your Game for the Chinese Market',
      excerpt: 'Gain insights into Chinese player preferences and learn how to adapt your game to meet their expectations without compromising your vision.',
      imageUrl: '/blog/chinese-player-preferences.jpg',
    },
    {
      slug: 'revenue-share-models-chinese-game-publishing',
      title: 'Revenue Share Models in Chinese Game Publishing – What to Expect',
      excerpt: 'Understand common revenue sharing models in Chinese game publishing and how to negotiate terms that benefit your studio.',
      imageUrl: '/blog/revenue-share-china.jpg',
    },
    {
      slug: 'how-to-find-chinese-co-publisher',
      title: 'How to Find a Chinese Co-Publisher for Your Game',
      excerpt: 'Learn how to identify, evaluate, and partner with the right Chinese co-publisher to maximize your game\'s success in the market.',
      imageUrl: '/blog/finding-chinese-publisher.jpg',
    }
  ];
  
  // Animation variants
  const contentVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <main className="min-h-screen bg-[#0A0A0B] text-white overflow-x-hidden">
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
      
      {/* Static background gradient similar to MarketContent */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black/50 to-black" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-purple-900/20 mix-blend-overlay" />
      </div>
      
      {/* Hero Section */}
      <section className="relative pt-20 pb-10 overflow-hidden">
        {/* Content */}
        <div className="container mx-auto px-6 sm:px-8 lg:px-12 max-w-[1400px]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            {/* Breadcrumb */}
            <div className="mb-8">
              <Link href="/blog" className="text-sm text-purple-400 hover:text-purple-300 inline-flex items-center transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                Back to Blog
              </Link>
            </div>

            {/* Category chip */}
            <div className="mb-6">
              <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-purple-500/20 text-purple-300 border border-purple-500/30">
                Strategy
              </span>
            </div>
            
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="flex items-center text-sm text-white/60 mb-6"
            >
              <span>February 7, 2024</span>
              <span className="mx-2">•</span>
              <span>{readingTime}</span>
            </motion.div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 leading-tight bg-gradient-to-r from-white via-purple-100 to-white bg-clip-text text-transparent">
              5 Mistakes Western Developers Make in China
            </h1>
            
            {/* Author section */}
            <div className="flex items-center mb-10">
              <div className="w-12 h-12 rounded-full overflow-hidden mr-4 border border-purple-500/30">
                <img 
                  src="/team/author-avatar.jpg" 
                  alt="Author"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.currentTarget.src = "https://ui-avatars.com/api/?name=Pixsell+Team&background=8B5CF6&color=fff";
                  }}
                />
              </div>
              <div>
                <div className="font-medium text-transparent bg-gradient-to-r from-white via-purple-100 to-white bg-clip-text">Pixsell Team</div>
                <div className="text-sm text-gray-300">China Gaming Market Specialists</div>
              </div>
            </div>
            
            <div className="aspect-video overflow-hidden rounded-xl mb-12 backdrop-blur-sm bg-black/40 border border-purple-500/20 p-1">
              <img
                src="/blog/mistakes-hero.jpg"
                alt="5 Mistakes Western Developers Make in China"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Article Content */}
      <article className="py-8">
        <div className="container mx-auto px-6 sm:px-8 lg:px-12 max-w-[1400px]">
          <div className="max-w-3xl mx-auto backdrop-blur-xl bg-black/30 border border-purple-500/20 rounded-2xl p-8 md:p-12 relative">
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-transparent to-pink-500/5 rounded-2xl" />
            
            {/* Animated corner accents */}
            <div className="absolute -top-1 -left-1 w-8 h-8 border-t-2 border-l-2 border-purple-500/30 rounded-tl-lg" />
            <div className="absolute -bottom-1 -right-1 w-8 h-8 border-b-2 border-r-2 border-purple-500/30 rounded-br-lg" />
            
            <motion.div
              initial="hidden"
              animate="visible"
              variants={contentVariants}
              className="relative prose prose-invert prose-lg max-w-none"
            >
              <p className="lead text-xl md:text-2xl mb-8 font-light text-gray-300 leading-relaxed">
                The Chinese gaming market offers immense opportunities, but it also comes with unique challenges. Here are the five most common mistakes Western developers make when entering China—and how to avoid them.
              </p>

              <h2 className="text-3xl font-bold mt-16 mb-6 border-b border-purple-500/20 pb-3 bg-gradient-to-r from-white via-purple-100 to-white bg-clip-text text-transparent">1. Ignoring Cultural Nuances</h2>
              <p className="text-gray-300">
                Many Western developers assume that a successful game in their home market will automatically resonate with Chinese players. However, Chinese gamers have distinct preferences in terms of art style, storytelling, and gameplay mechanics. It's crucial to understand and adapt to these cultural differences.
              </p>

              <h2 className="text-3xl font-bold mt-16 mb-6 border-b border-purple-500/20 pb-3 bg-gradient-to-r from-white via-purple-100 to-white bg-clip-text text-transparent">2. Underestimating Regulatory Requirements</h2>
              <p className="text-gray-300">
                China's gaming regulations are complex and constantly evolving. From content restrictions to licensing requirements, failing to comply with these regulations can result in costly delays or even market entry denial. Working with experienced partners who understand the regulatory landscape is essential.
              </p>

              <blockquote className="backdrop-blur-sm bg-purple-500/10 border-l-4 border-purple-500 p-6 my-10 rounded-r-lg italic">
                <p className="mb-0 text-white">"Navigating China's regulatory landscape requires local expertise and constant vigilance as rules frequently change."</p>
              </blockquote>

              <h2 className="text-3xl font-bold mt-16 mb-6 border-b border-purple-500/20 pb-3 bg-gradient-to-r from-white via-purple-100 to-white bg-clip-text text-transparent">3. Poor Localisation Strategy</h2>
              <p className="text-gray-300">
                Simply translating text from English to Chinese isn't enough. Effective localisation involves adapting cultural references, UI elements, and even gameplay mechanics to suit local preferences. A comprehensive localisation strategy should be part of your development process from the start.
              </p>

              <h2 className="text-3xl font-bold mt-16 mb-6 border-b border-purple-500/20 pb-3 bg-gradient-to-r from-white via-purple-100 to-white bg-clip-text text-transparent">4. Wrong Monetisation Approach</h2>
              <p className="text-gray-300">
                Chinese players have different spending habits and expectations when it comes to in-game purchases. What works in Western markets might not resonate in China. Understanding local monetisation trends and player psychology is crucial for financial success.
              </p>

              <h2 className="text-3xl font-bold mt-16 mb-6 border-b border-purple-500/20 pb-3 bg-gradient-to-r from-white via-purple-100 to-white bg-clip-text text-transparent">5. Going It Alone</h2>
              <p className="text-gray-300">
                Many developers try to enter the Chinese market without local partners, thinking they can handle everything internally. This often leads to costly mistakes and missed opportunities. Working with experienced local partners who understand the market, regulations, and player preferences can significantly increase your chances of success.
              </p>

              <div className="backdrop-blur-sm bg-black/40 border border-purple-500/20 p-8 rounded-xl my-12 relative">
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-transparent to-pink-500/5 rounded-xl" />
                
                <div className="relative">
                  <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-500 to-purple-400 bg-clip-text text-transparent animate-gradient">How to Succeed in China</h2>
                  <p className="mb-0 text-gray-300">
                    To avoid these mistakes, consider working with experienced partners who understand both Western game development and the Chinese market. At Pixsell Games, we help Western developers navigate these challenges through our comprehensive co-publishing and localisation services. Our team ensures your game not only meets regulatory requirements but also resonates with Chinese players while maintaining its core appeal.
                  </p>
                </div>
              </div>
              
              {/* Social share section */}
              <div className="border-t border-b border-purple-500/20 py-8 my-12">
                <h3 className="text-lg font-medium mb-4 text-transparent bg-gradient-to-r from-white via-purple-100 to-white bg-clip-text">Share this article</h3>
                <div className="flex space-x-4">
                  <a href="#" className="backdrop-blur-sm bg-black/30 hover:bg-black/50 transition-colors p-3 rounded-full border border-purple-500/20 hover:border-purple-500/40 group">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-gray-300 group-hover:text-purple-400 transition-colors">
                      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                    </svg>
                  </a>
                  <a href="#" className="backdrop-blur-sm bg-black/30 hover:bg-black/50 transition-colors p-3 rounded-full border border-purple-500/20 hover:border-purple-500/40 group">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-gray-300 group-hover:text-purple-400 transition-colors">
                      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                    </svg>
                  </a>
                  <a href="#" className="backdrop-blur-sm bg-black/30 hover:bg-black/50 transition-colors p-3 rounded-full border border-purple-500/20 hover:border-purple-500/40 group">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-gray-300 group-hover:text-purple-400 transition-colors">
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                      <rect x="2" y="9" width="4" height="12"></rect>
                      <circle cx="4" cy="4" r="2"></circle>
                    </svg>
                  </a>
                  <a href="#" className="backdrop-blur-sm bg-black/30 hover:bg-black/50 transition-colors p-3 rounded-full border border-purple-500/20 hover:border-purple-500/40 group">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-gray-300 group-hover:text-purple-400 transition-colors">
                      <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </article>
      
      {/* Related Posts Section */}
      <section className="py-16">
        <div className="container mx-auto px-6 sm:px-8 lg:px-12 max-w-[1400px]">
          <h2 className="text-3xl font-bold mb-12 text-center">
            <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-purple-400 bg-clip-text text-transparent animate-gradient">You Might Also Like</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {relatedPosts.map((post) => (
              <motion.div
                key={post.slug}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="backdrop-blur-xl bg-black/40 border border-purple-500/20 rounded-2xl overflow-hidden hover:border-purple-500/40 transition-all duration-700 group hover:translate-y-[-4px] hover:shadow-2xl hover:shadow-purple-500/20 relative"
              >
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-transparent to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-2xl" />
                
                <Link href={`/blog/${post.slug}`} className="relative block">
                  <div className="aspect-video overflow-hidden">
                    <img 
                      src={post.imageUrl} 
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-bold mb-3 text-transparent bg-gradient-to-r from-white via-purple-100 to-white bg-clip-text group-hover:from-purple-200 group-hover:via-white group-hover:to-purple-200 transition-all duration-700">
                      {post.title}
                    </h3>
                    <p className="text-gray-300 text-sm group-hover:text-gray-200 transition-colors duration-500">
                      {post.excerpt.substring(0, 100)}...
                    </p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16">
        <div className="container mx-auto px-6 sm:px-8 lg:px-12 max-w-[1400px]">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-pink-500/10 to-purple-500/10 blur-3xl"
          />
          <div className="max-w-4xl mx-auto backdrop-blur-xl bg-black/40 rounded-3xl p-8 md:p-12 border border-purple-500/20 relative overflow-hidden group transform-gpu hover:scale-[1.01] transition-transform duration-700">
            <motion.div
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
              className="absolute inset-0 bg-gradient-to-r from-purple-500/5 via-pink-500/5 to-purple-500/5 transition-opacity duration-700"
            />
            <div className="flex flex-col md:flex-row items-center justify-between relative z-10">
              <div className="mb-6 md:mb-0 md:mr-12">
                <h3 className="text-2xl md:text-3xl font-bold mb-4 bg-gradient-to-r from-white to-purple-100 bg-clip-text text-transparent">Thinking about entering the Chinese market?</h3>
                <p className="text-gray-300 mb-0 group-hover:text-gray-200 transition-colors duration-500">Whether you're just exploring your options or actively planning your entry, we'd love to have a chat to help you find the best approach for your game.</p>
              </div>
              <div className="flex-shrink-0">
                <Link 
                  href="/contact" 
                  className="px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-medium rounded-lg transition-colors inline-block whitespace-nowrap transform-gpu hover:scale-[1.05] transition-transform duration-300"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      
      <style jsx global>{`
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 8s linear infinite;
          will-change: background-position;
        }
        
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
      `}</style>
    </main>
  )
} 