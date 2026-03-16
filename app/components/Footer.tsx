import Link from 'next/link'

export default function Footer() {
  const currentYear = new Date().getFullYear()
  
  const sections = [
    {
      title: 'Company',
      links: [
        { label: 'About', href: '/about' },
        { label: 'Services', href: '/services' },
        { label: 'Contact', href: '/contact' },
      ]
    },
    {
      title: 'Services',
      links: [
        { label: 'Steam Publishing in China', href: '/services/co-publishing' },
        { label: 'Mobile Publishing in China', href: '/services/mobile-publishing' },
        { label: 'Localisation', href: '/services/localisation' },
        { label: 'Marketing', href: '/services/marketing' },
      ]
    },
    {
      title: 'Legal',
      links: [
        { label: 'Privacy Policy', href: '/privacy' },
        { label: 'Terms of Service', href: '/terms' },
      ]
    }
  ]

  return (
    <footer className="bg-black/40 backdrop-blur-xl border-t border-white/10">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
          {/* Brand Section */}
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="inline-block">
              <span className="text-2xl font-bold heading-gradient">
                Pixsell
              </span>
            </Link>
            <p className="mt-4 text-gray-400 text-sm">
              Your trusted partner for publishing games in China&apos;s market.
            </p>
          </div>

          {/* Navigation Sections */}
          {sections.map((section) => (
            <div key={section.title}>
              <h3 className="text-sm font-semibold text-white uppercase tracking-wider">
                {section.title}
              </h3>
              <ul className="mt-4 space-y-3">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-gray-400 hover:text-white transition-colors duration-200 text-sm"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © {currentYear} Pixsell Games. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a
                href="https://twitter.com/pixsellgames"
                className="text-gray-400 hover:text-white transition-colors duration-200"
                target="_blank"
                rel="noopener noreferrer"
              >
                Twitter
              </a>
              <a
                href="https://linkedin.com/company/pixsellgames"
                className="text-gray-400 hover:text-white transition-colors duration-200"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
} 