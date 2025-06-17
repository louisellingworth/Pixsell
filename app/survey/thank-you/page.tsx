import Link from 'next/link'

export default function ThankYouPage() {
  return (
    <main className="min-h-screen bg-[#0A0A0B] text-white">
      <div className="container mx-auto px-6 py-24">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-[#8A7FFB] to-[#B4B0FF] bg-clip-text text-transparent">
            Thank You!
          </h1>
          <p className="text-xl text-white/80 mb-12">
            We've received your responses and will be in touch with personalized recommendations for your business growth journey.
          </p>
          <Link 
            href="/"
            className="inline-block px-8 py-3 bg-gradient-to-r from-[#8A7FFB] to-[#B4B0FF] rounded-lg font-semibold text-white hover:opacity-90 transition-opacity"
          >
            Return Home
          </Link>
        </div>
      </div>
    </main>
  )
} 