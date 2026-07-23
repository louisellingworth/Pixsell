import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Page Not Found - EightSix Games | China Game Publishing Services',
  description: 'The page you are looking for doesn\'t exist. Explore our China game publishing services including co-publishing, localization, and marketing.',
  robots: {
    index: false,
    follow: true,
  },
}

export default function NotFound() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black to-[#0A0118] pointer-events-none" aria-hidden="true" />
      
      <div className="relative z-10 flex items-center justify-center min-h-screen px-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* 404 Error */}
          <div className="mb-8">
            <h1 className="text-8xl md:text-9xl font-bold mb-4">
              <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                404
              </span>
            </h1>
            <h2 className="text-3xl md:text-4xl font-semibold mb-4">Page Not Found</h2>
            <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
              The page you are looking for doesn't exist or has been moved. 
              Don't worry, we're here to help you find what you need.
            </p>
          </div>

          {/* Quick Actions */}
          <div className="mb-12">
            <Link 
              href="/" 
              className="inline-flex items-center px-8 py-4 bg-violet-600 text-white rounded-lg hover:opacity-90 transition-all font-semibold text-lg mb-6"
            >
              Return to Homepage
            </Link>
          </div>

          {/* Popular Pages */}
          <div className="mb-12">
            <h3 className="text-2xl font-semibold mb-6">Popular Pages</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
              <Link 
                href="/services" 
                className="p-6 bg-white/5 rounded-lg hover:bg-white/10 transition-all border border-white/10"
              >
                <h4 className="font-semibold mb-2">Our Services</h4>
                <p className="text-gray-400 text-sm">Co-publishing, localization, and marketing</p>
              </Link>
              
              <Link 
                href="/services/co-publishing" 
                className="p-6 bg-white/5 rounded-lg hover:bg-white/10 transition-all border border-white/10"
              >
                <h4 className="font-semibold mb-2">Co-Publishing</h4>
                <p className="text-gray-400 text-sm">Launch your game in China with our partners</p>
              </Link>
              
              <Link 
                href="/services/localisation" 
                className="p-6 bg-white/5 rounded-lg hover:bg-white/10 transition-all border border-white/10"
              >
                <h4 className="font-semibold mb-2">Localization</h4>
                <p className="text-gray-400 text-sm">Adapt your game for Chinese players</p>
              </Link>
              
              <Link 
                href="/services/marketing" 
                className="p-6 bg-white/5 rounded-lg hover:bg-white/10 transition-all border border-white/10"
              >
                <h4 className="font-semibold mb-2">Marketing</h4>
                <p className="text-gray-400 text-sm">Reach Chinese gamers effectively</p>
              </Link>
              
              <Link 
                href="/blog" 
                className="p-6 bg-white/5 rounded-lg hover:bg-white/10 transition-all border border-white/10"
              >
                <h4 className="font-semibold mb-2">Blog</h4>
                <p className="text-gray-400 text-sm">Latest insights on China game market</p>
              </Link>
              
              <Link 
                href="/contact" 
                className="p-6 bg-white/5 rounded-lg hover:bg-white/10 transition-all border border-white/10"
              >
                <h4 className="font-semibold mb-2">Contact Us</h4>
                <p className="text-gray-400 text-sm">Get in touch with our team</p>
              </Link>
            </div>
          </div>

          {/* Search Suggestion */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-4">Looking for something specific?</h3>
            <p className="text-gray-400 mb-4">
              Try searching our site or browse our services to find what you need.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/services" 
                className="px-6 py-3 bg-white/10 rounded-lg hover:bg-white/20 transition-all"
              >
                Browse Services
              </Link>
              <Link 
                href="/blog" 
                className="px-6 py-3 bg-white/10 rounded-lg hover:bg-white/20 transition-all"
              >
                Read Our Blog
              </Link>
            </div>
          </div>

          {/* Contact Information */}
          <div className="border-t border-white/10 pt-8">
            <p className="text-gray-400 mb-4">
              Still can't find what you're looking for?
            </p>
            <Link 
              href="/contact" 
              className="text-purple-400 hover:text-purple-300 transition-colors font-semibold"
            >
              Contact our team for assistance →
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
} 