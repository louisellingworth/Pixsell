'use client'

import React from 'react'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import { motion } from 'framer-motion'
import Link from 'next/link'

const blogPosts = [
  {
    title: "5 Mistakes Western Developers Make in China",
    description: "From ignoring cultural nuances to underestimating regulatory hurdles, here are the top mistakes to avoid when entering the Chinese gaming market.",
    date: "2024-02-07",
    readTime: "5 min read",
    slug: "5-mistakes-western-developers-make-in-china",
    imageUrl: "/blog/mistakes-hero.jpg"
  }
  // More blog posts can be added here
]

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-[#0A0A0B] text-white overflow-x-hidden">
      <Navigation />
      
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
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-[#8A7FFB] to-[#B4B0FF] bg-clip-text text-transparent">
              Blog
            </h1>
            <p className="text-xl text-white/80 mb-8">
              Insights and strategies for successfully launching your game in China
            </p>
          </motion.div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <motion.article
                key={post.slug}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white/5 rounded-xl overflow-hidden hover:bg-white/10 transition-colors duration-300"
              >
                <Link href={`/blog/${post.slug}`}>
                  <div className="aspect-video relative">
                    <img
                      src={post.imageUrl}
                      alt={post.title}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center text-sm text-white/60 mb-3">
                      <span>{post.date}</span>
                      <span className="mx-2">•</span>
                      <span>{post.readTime}</span>
                    </div>
                    <h2 className="text-xl font-semibold mb-3">{post.title}</h2>
                    <p className="text-white/80">{post.description}</p>
                  </div>
                </Link>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
} 