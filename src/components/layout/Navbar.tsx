'use client'

import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/pricing', label: 'Pricing' },
  { href: '/training', label: 'Training' },
]

export default function Navbar() {
  const pathname = usePathname()
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 h-[170px] flex items-center backdrop-blur-xl"
      style={{
        background: 'rgba(26,10,46,0.96)',
        borderBottom: '1px solid rgba(248,19,161,0.2)',
      }}
    >
      <div className="max-w-7xl mx-auto px-4 w-full flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex-shrink-0">
          <Image
            src="/fc final transparent-02.png"
            alt="Funky Clicks"
            width={240}
            height={160}
            className="h-40 w-auto object-contain"
            priority
          />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`font-bold text-sm transition-colors duration-200 ${
                pathname === link.href ? 'text-pink' : 'text-white/80 hover:text-white'
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="bg-pink text-white font-extrabold px-6 py-2.5 rounded-full text-sm hover:bg-pink-light hover:-translate-y-0.5 hover:shadow-lg hover:shadow-pink/40 transition-all duration-300"
          >
            Book a Call
          </Link>
        </nav>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-white p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile dropdown */}
      {mobileOpen && (
        <div
          className="absolute top-full left-0 right-0 py-6 px-4 flex flex-col gap-4"
          style={{ background: 'rgba(26,10,46,0.98)', borderBottom: '1px solid rgba(248,19,161,0.2)' }}
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className={`font-bold text-base py-2 transition-colors ${
                pathname === link.href ? 'text-pink' : 'text-white/80 hover:text-white'
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={() => setMobileOpen(false)}
            className="bg-pink text-white font-extrabold px-6 py-3 rounded-full text-base text-center hover:bg-pink-light transition-all duration-300 mt-2"
          >
            Book a Call
          </Link>
        </div>
      )}
    </header>
  )
}
