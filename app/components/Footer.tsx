import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="py-8 sm:py-12 px-4 sm:px-6 border-t border-white/10">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 md:gap-0">
          {/* Copyright */}
          <div className="text-sm sm:text-base text-white/60 text-center md:text-left">
            © {new Date().getFullYear()} Systems That Scale. All rights reserved.
          </div>

          {/* Links */}
          <div className="flex flex-wrap justify-center md:justify-end gap-4 sm:gap-8">
            <Link href="/privacy" className="text-sm sm:text-base text-white/60 hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-sm sm:text-base text-white/60 hover:text-white transition-colors">
              Terms of Service
            </Link>
            <Link href="/contact" className="text-sm sm:text-base text-white/60 hover:text-white transition-colors">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
} 