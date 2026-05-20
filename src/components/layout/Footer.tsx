import Image from 'next/image'
import Link from 'next/link'

const footerLinks = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/pricing', label: 'Pricing' },
  { href: '/training', label: 'Training' },
  { href: '/contact', label: 'Contact' },
]

export default function Footer() {
  return (
    <footer
      className="py-16"
      style={{ background: '#1a0a2e', borderTop: '1px solid rgba(248,19,161,0.15)' }}
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-10 mb-10">
          {/* Logo + tagline */}
          <div className="flex flex-col items-center md:items-start">
            <Image
              src="/fc final transparent-02.png"
              alt="Funky Clicks"
              width={200}
              height={128}
              className="h-32 w-auto object-contain mb-4"
            />
            <p className="text-white/60 text-sm max-w-xs text-center md:text-left leading-relaxed">
              Clicks That Convert, Strategies That Scale.
            </p>
          </div>

          {/* Nav links */}
          <nav className="flex flex-wrap justify-center md:justify-end gap-x-8 gap-y-3">
            {footerLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-white/60 text-sm font-semibold hover:text-pink transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="border-t border-white/10 pt-8 text-center">
          <p className="text-white/40 text-sm">
            &copy; Funky Clicks 2026. All rights reserved. |{' '}
            <a href="mailto:hello@funkyclicks.com" className="hover:text-pink transition-colors">
              hello@funkyclicks.com
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
