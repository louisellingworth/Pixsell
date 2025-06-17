'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import { motion } from 'framer-motion'
import { calculateReadingTime, formatReadingTime } from '../utils/readingTime'

export default function BlogIndex() {
  // Use useEffect to ensure the component is fully mounted before any state changes
  const [mounted, setMounted] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  // Ensure component is mounted before any interactions
  useEffect(() => {
    setMounted(true);
  }, []);

  // Sample content snippets used to calculate reading time for each blog post
  const blogContentSnippets = {
    'how-to-publish-a-game-on-steam-in-china': `
      This comprehensive guide covers everything you need to know about publishing your game on Steam in China.
      From understanding the legal requirements to optimizing for the Chinese market, we explore the complete process.
      You'll learn about localization requirements, working with publishers, optimizing your storefront for Chinese users,
      and navigating the complexities of China's gaming regulations.
      [Full article content continues with approximately 1800 words...]
    `,
    'steam-global-vs-steam-china': `
      Steam Global and Steam China are distinct platforms with different rules, game libraries, and user experiences.
      In this article, we break down the differences between the two platforms, what developers need to know,
      how games are approved for each platform, and strategies for maximizing success in both environments.
      [Full article content continues with approximately 1350 words...]
    `,
    'isbn-license-china-game-release': `
      Understanding China's ISBN licensing system is crucial for game developers looking to enter the Chinese market.
      This article explains the ISBN requirements, which games need one, how to obtain a license, and strategies for
      working around the licensing challenges for smaller indie developers.
      [Full article content continues with approximately 1125 words...]
    `,
    'marketing-your-game-in-china': `
      Entering the Chinese market can seem daunting for Western game developers, but it's also a massive opportunity.
      China boasts over 674 million gamers and nearly $45 billion in annual gaming revenue, making it the world's
      largest gaming market. This guide covers five key strategies for marketing your Steam title effectively in China.
      [Full article content continues with approximately 1575 words...]
    `,
    'how-to-find-chinese-co-publisher': `
      Breaking into the Chinese market can be a game-changer – China is the world's largest gaming market with over 700 million gamers.
      However, navigating this market as an independent developer is challenging. This detailed guide walks you through the
      steps to secure the right Chinese co-publishing partner, from research and pitching to networking and contract considerations.
      [Full article content continues with approximately 1920 words...]
    `,
    '5-mistakes-western-developers-make-in-china': `
      Western game developers often make critical mistakes when trying to enter the Chinese market. This article identifies
      the five most common errors and provides actionable advice on how to avoid them, including culturalization issues,
      marketing misconceptions, partnership problems, and regulatory confusion.
      [Full article content continues with approximately 1425 words...]
    `,
    'co-publishing-vs-self-publishing-china': `
      Should you self-publish your game in China or work with a co-publisher? This in-depth comparison covers the pros and cons
      of each approach, examining factors like market access, revenue sharing, control over your game, localization quality,
      and regulatory compliance.
      [Full article content continues with approximately 1650 words...]
    `,
    'what-chinese-players-want': `
      Understanding Chinese player preferences is essential for success in the world's largest gaming market. This comprehensive
      article examines what Chinese gamers look for in games, including preferred genres, art styles, monetization models,
      and social features that resonate with the local audience.
      [Full article content continues with approximately 1800 words...]
    `,
  };

  // Calculate reading time for each post
  const calculateBlogReadingTime = (slug: string) => {
    const content = blogContentSnippets[slug as keyof typeof blogContentSnippets] || '';
    const minutes = calculateReadingTime(content);
    return formatReadingTime(minutes);
  };

  const blogPosts = [
    {
      slug: 'how-to-publish-a-game-on-steam-in-china',
      title: 'How to Publish a Game on Steam in China – A Step-by-Step Guide',
      excerpt: 'Navigate the complex process of publishing your game on Steam in China with our comprehensive step-by-step guide.',
      date: 'March 5, 2024',
      readTime: calculateBlogReadingTime('how-to-publish-a-game-on-steam-in-china'),
      imageUrl: '/blog/steam-china-publishing.jpg',
      category: 'Publishing',
    },
    {
      slug: 'steam-global-vs-steam-china',
      title: 'Steam Global vs Steam China: What\'s the Difference for Developers?',
      excerpt: 'Understand the key differences between Steam Global and Steam China and how they impact your game development and publishing strategy.',
      date: 'March 5, 2024',
      readTime: calculateBlogReadingTime('steam-global-vs-steam-china'),
      imageUrl: '/blog/steam-global-vs-china.jpg',
      category: 'Platform Insights',
    },
    {
      slug: 'isbn-license-china-game-release',
      title: 'Do I Need an ISBN Licence to Release My Game in China?',
      excerpt: 'Learn about ISBN licensing requirements for game releases in China and what it means for your publishing plans.',
      date: 'March 5, 2024',
      readTime: calculateBlogReadingTime('isbn-license-china-game-release'),
      imageUrl: '/blog/isbn-license-china.jpg',
      category: 'Regulation',
    },
    {
      slug: 'marketing-your-game-in-china',
      title: 'Marketing Your Game in China: 5 Strategies for Steam Titles',
      excerpt: 'Discover five practical strategies to market your game effectively to Chinese players on Steam.',
      date: 'March 5, 2024',
      readTime: calculateBlogReadingTime('marketing-your-game-in-china'),
      imageUrl: '/blog/marketing-china-games.jpg',
      category: 'Marketing',
    },
    {
      slug: 'co-publishing-vs-self-publishing-china',
      title: 'Co-Publishing vs Self-Publishing in China – Which is Right for You?',
      excerpt: 'Compare the benefits and challenges of co-publishing versus self-publishing your game in China to make the best choice for your project.',
      date: 'March 5, 2024',
      readTime: calculateBlogReadingTime('co-publishing-vs-self-publishing-china'),
      imageUrl: '/blog/publishing-models-china.jpg',
      category: 'Publishing',
    },
    {
      slug: 'how-to-find-chinese-co-publisher',
      title: 'How to Find a Chinese Co-Publisher for Your Game',
      excerpt: 'Learn how to identify, evaluate, and partner with the right Chinese co-publisher to maximise your game\'s success in the market.',
      date: 'March 5, 2024',
      readTime: calculateBlogReadingTime('how-to-find-chinese-co-publisher'),
      imageUrl: '/blog/finding-chinese-publisher.jpg',
      category: 'Partnerships',
    },
    {
      slug: 'revenue-share-models-chinese-game-publishing',
      title: 'Revenue Share Models in Chinese Game Publishing – What to Expect',
      excerpt: 'Understand common revenue sharing models in Chinese game publishing and how to negotiate terms that benefit your studio.',
      date: 'March 5, 2024',
      readTime: calculateBlogReadingTime('revenue-share-models-chinese-game-publishing'),
      imageUrl: '/blog/revenue-share-china.jpg',
      category: 'Business',
    },
    {
      slug: 'what-chinese-players-want',
      title: 'What Do Chinese Players Want? Adapting Your Game for the Chinese Market',
      excerpt: 'Gain insights into Chinese player preferences and learn how to adapt your game to meet their expectations without compromising your vision.',
      date: 'March 5, 2024',
      readTime: calculateBlogReadingTime('what-chinese-players-want'),
      imageUrl: '/blog/chinese-player-preferences.jpg',
      category: 'Market Research',
    },
    {
      slug: '5-mistakes-western-developers-make-in-china',
      title: '5 Mistakes Western Developers Make in China',
      excerpt: 'Avoid these common pitfalls that Western developers encounter when entering the Chinese gaming market.',
      date: 'February 7, 2024',
      readTime: calculateBlogReadingTime('5-mistakes-western-developers-make-in-china'),
      imageUrl: '/blog/mistakes-hero.jpg',
      category: 'Strategy',
    }
  ];

  // Get unique categories
  const categories = Array.from(new Set(blogPosts.map(post => post.category)));
  
  // Improved filtering logic with explicit type checking
  const getFilteredPosts = () => {
    if (selectedCategory === null) {
      return blogPosts;
    }
    return blogPosts.filter(post => post.category === selectedCategory);
  };
  
  const filteredPosts = getFilteredPosts();
  
  // Check if there are no posts for the selected category
  const noPostsForCategory = selectedCategory !== null && filteredPosts.length === 0;

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };
  
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  // Function to handle category selection with improved reliability
  const handleCategorySelect = (category: string | null) => {
    if (!mounted) return;
    
    // Add loading state for visual feedback
    setIsLoading(true);
    
    // Log for debugging
    console.log('Category selected:', category);
    
    // Small timeout to ensure state updates correctly
    setTimeout(() => {
      setSelectedCategory(category);
      setIsLoading(false);
    }, 50);
  };

  // If not mounted yet, show nothing to prevent hydration issues
  if (!mounted) {
    return null;
  }

  return (
    <main className="min-h-screen bg-[#0A0A0B] text-white overflow-x-hidden">
      {/* Static background gradient */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black/50 to-black" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-purple-900/20 mix-blend-overlay" />
      </div>
      
      {/* Navigation */}
      <div className="fixed top-0 left-0 right-0 z-10 backdrop-blur-xl bg-black/90 border-b border-purple-500/10">
        <Navigation />
      </div>
      
      {/* Hero Section with padding to account for fixed nav */}
      <section className="relative py-20 md:py-28 pt-32 md:pt-36">
        <div className="container mx-auto px-6 sm:px-8 lg:px-12 max-w-[1400px]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent animate-gradient">
                Pixsell Blog
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed">
              Expert insights on game publishing, localisation, and marketing for the Chinese market
            </p>

            {/* Category buttons - robust implementation with explicit z-index and improved clickability */}
            <div className="flex flex-wrap gap-3 justify-center mb-12 relative z-20">
              <button
                type="button"
                onClick={() => handleCategorySelect(null)}
                className={`relative z-20 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 cursor-pointer ${
                  selectedCategory === null
                    ? 'bg-purple-500/40 text-white border border-purple-500/50'
                    : 'bg-purple-500/20 text-purple-300 border border-purple-500/30 hover:bg-purple-500/30 hover:border-purple-500/40'
                }`}
                disabled={isLoading}
              >
                All Categories
              </button>
              {categories.map((category) => (
                <button
                  key={category}
                  type="button"
                  onClick={() => handleCategorySelect(category)}
                  className={`relative z-20 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 cursor-pointer ${
                    selectedCategory === category
                      ? 'bg-purple-500/40 text-white border border-purple-500/50'
                      : 'bg-purple-500/20 text-purple-300 border border-purple-500/30 hover:bg-purple-500/30 hover:border-purple-500/40'
                  }`}
                  disabled={isLoading}
                >
                  {category}
                </button>
              ))}
            </div>
            
            {/* Current category indicator */}
            <div className="text-sm text-purple-300/70 mb-6">
              {selectedCategory ? (
                <p>Showing posts in category: <span className="font-medium text-purple-300">{selectedCategory}</span></p>
              ) : (
                <p>Showing all posts</p>
              )}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Post - Only show if no category is selected or if it matches the selected category */}
      {(!selectedCategory || blogPosts[0].category === selectedCategory) && (
        <section className="py-8">
          <div className="container mx-auto px-6 sm:px-8 lg:px-12 max-w-[1400px]">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="backdrop-blur-xl bg-black/40 border border-purple-500/20 rounded-2xl overflow-hidden hover:border-purple-500/40 transition-all duration-300 group"
            >
              <div className="flex flex-col lg:flex-row">
                <div className="lg:w-1/2 h-64 lg:h-auto relative overflow-hidden">
                  <img 
                    src={blogPosts[0].imageUrl} 
                    alt={blogPosts[0].title}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-transparent" />
                </div>
                <div className="lg:w-1/2 p-8 lg:p-12 flex flex-col justify-center relative">
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-transparent to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <div className="relative">
                    <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-purple-500/20 text-purple-300 mb-4 border border-purple-500/30">
                      {blogPosts[0].category}
                    </span>
                    <h2 className="text-2xl lg:text-3xl font-bold mb-4 text-transparent bg-gradient-to-r from-white via-purple-100 to-white bg-clip-text group-hover:from-purple-200 group-hover:via-white group-hover:to-purple-200 transition-all duration-700">
                      <Link href={`/blog/${blogPosts[0].slug}`}>{blogPosts[0].title}</Link>
                    </h2>
                    <p className="text-gray-300 mb-6 group-hover:text-gray-200 transition-colors duration-500">{blogPosts[0].excerpt}</p>
                    <div className="flex items-center text-sm text-white/60 mb-6">
                      <span>{blogPosts[0].date}</span>
                      <span className="mx-2">•</span>
                      <span>{blogPosts[0].readTime}</span>
                    </div>
                    <Link 
                      href={`/blog/${blogPosts[0].slug}`}
                      className="inline-flex items-center text-purple-400 font-medium hover:text-purple-300 transition-colors group/link"
                    >
                      Read full article
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 group-hover/link:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* Blog Posts Grid */}
      <section className="py-12 mb-24 relative z-20">
        <div className="container mx-auto px-6 sm:px-8 lg:px-12 max-w-[1400px]">
          {noPostsForCategory ? (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center py-16"
            >
              <div className="backdrop-blur-xl bg-black/40 border border-purple-500/20 rounded-2xl p-8 md:p-12 mx-auto max-w-2xl">
                <h3 className="text-2xl font-bold mb-4 text-transparent bg-gradient-to-r from-white via-purple-100 to-white bg-clip-text">No posts available</h3>
                <p className="text-gray-300 mb-6">There are currently no posts available for the "{selectedCategory}" category.</p>
                <button 
                  type="button"
                  onClick={() => handleCategorySelect(null)}
                  className="px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-medium rounded-lg transition-all transform-gpu hover:scale-[1.02]"
                >
                  Show all posts
                </button>
              </div>
            </motion.div>
          ) : (
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {/* Only use slice for non-selected categories, show all posts when a category is selected */}
              {(selectedCategory ? filteredPosts : blogPosts.slice(1)).map((post, index) => (
                <motion.div
                  key={post.slug}
                  variants={cardVariants}
                  className="flex flex-col h-full backdrop-blur-xl bg-black/40 border border-purple-500/20 rounded-2xl overflow-hidden hover:border-purple-500/40 transition-all duration-700 group hover:translate-y-[-4px] hover:shadow-2xl hover:shadow-purple-500/20"
                >
                  <Link href={`/blog/${post.slug}`} className="flex flex-col h-full">
                    <div className="aspect-video overflow-hidden relative">
                      <img 
                        src={post.imageUrl} 
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute top-3 left-3">
                        <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-purple-500/30 text-purple-300 backdrop-blur-sm border border-purple-500/30">
                          {post.category}
                        </span>
                      </div>
                    </div>
                    <div className="p-6 flex flex-col flex-grow relative">
                      {/* Enhanced Gradient Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-transparent to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                      
                      <div className="relative">
                        <div className="flex items-center text-xs text-white/60 mb-3">
                          <span>{post.date}</span>
                          <span className="mx-2">•</span>
                          <span>{post.readTime}</span>
                        </div>
                        <h3 className="text-xl font-bold mb-3 text-transparent bg-gradient-to-r from-white via-purple-100 to-white bg-clip-text group-hover:from-purple-200 group-hover:via-white group-hover:to-purple-200 transition-all duration-700 leading-tight">
                          {post.title}
                        </h3>
                        <p className="text-gray-300 text-sm mb-6 flex-grow group-hover:text-gray-200 transition-colors duration-500">
                          {post.excerpt}
                        </p>
                        <span className="text-purple-400 text-sm font-medium inline-flex items-center mt-auto group-hover:text-purple-300 transition-colors">
                          Read article
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </span>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          )}
        </div>
      </section>

      {/* Newsletter section */}
      <section className="py-16 relative">
        <div className="container mx-auto px-6 sm:px-8 lg:px-12 max-w-[1400px]">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-pink-500/10 blur-3xl pointer-events-none"
          />
          <div className="max-w-3xl mx-auto backdrop-blur-xl bg-black/40 rounded-2xl p-8 md:p-12 border border-purple-500/20 relative overflow-hidden group transform-gpu hover:scale-[1.01] transition-transform duration-700">
            <motion.div
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
              className="absolute inset-0 bg-gradient-to-r from-purple-500/5 via-pink-500/5 to-purple-500/5 transition-opacity duration-700 pointer-events-none"
            />
            <div className="relative z-10 text-center">
              <h2 className="text-3xl font-bold mb-6">
                Stay <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-purple-400 bg-clip-text text-transparent animate-gradient">Updated</span>
              </h2>
              <p className="text-gray-300 mb-8 group-hover:text-gray-200 transition-colors duration-500">Subscribe to our newsletter to get the latest insights on game publishing in China</p>
              <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="px-4 py-3 rounded-lg bg-black/30 border border-purple-500/20 focus:border-purple-500 focus:outline-none focus:ring-1 focus:ring-purple-500 flex-grow"
                />
                <button 
                  type="button"
                  className="px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-medium rounded-lg transition-colors whitespace-nowrap transform-gpu hover:scale-[1.02] transition-transform duration-300"
                >
                  Subscribe
                </button>
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
