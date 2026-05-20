import Link from 'next/link'
import { ChevronDown } from 'lucide-react'

interface HeroBlockProps {
  badge?: string
  title: string
  titleHighlight?: string
  tagline?: string
  description?: string
  primaryCtaLabel?: string
  secondaryCtaLabel?: string
}

export default function HeroBlock({
  badge,
  title,
  titleHighlight,
  tagline,
  description,
  primaryCtaLabel,
  secondaryCtaLabel,
}: HeroBlockProps) {
  return (
    <section
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #1a0a2e 0%, #2d1a4a 40%, #4a2570 70%, #68389a 100%)' }}
    >
      {/* Pink radial glows */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 60% 40% at 20% 30%, rgba(248,19,161,0.15) 0%, transparent 60%), radial-gradient(ellipse 50% 35% at 80% 70%, rgba(175,111,241,0.2) 0%, transparent 60%)',
        }}
      />

      {/* Floating blobs */}
      <div className="absolute top-1/4 left-1/4 w-72 h-72 rounded-full bg-purple/30 blur-3xl animate-blob" />
      <div className="absolute top-1/3 right-1/4 w-96 h-96 rounded-full bg-pink/10 blur-3xl animate-blob animation-delay-2000" />
      <div className="absolute bottom-1/4 left-1/3 w-80 h-80 rounded-full bg-lavender/20 blur-3xl animate-blob animation-delay-4000" />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 text-center pt-40 pb-24">
        {badge && (
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-5 py-2 mb-8">
            <span className="w-2 h-2 rounded-full bg-pink animate-pulse" />
            <span className="text-sm font-semibold text-white/90">{badge}</span>
          </div>
        )}

        <h1 className="text-5xl md:text-7xl font-black text-white leading-tight mb-6">
          {title}
          {titleHighlight && (
            <>
              {' '}
              <span className="italic text-pink">{titleHighlight}</span>
            </>
          )}
        </h1>

        {tagline && (
          <p className="text-2xl md:text-3xl font-bold text-lavender mb-6">{tagline}</p>
        )}

        {description && (
          <p className="text-lg text-white/70 max-w-2xl mx-auto mb-10 leading-relaxed">{description}</p>
        )}

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          {primaryCtaLabel && (
            <Link
              href="/contact"
              className="inline-flex items-center justify-center bg-pink text-white font-extrabold px-8 py-4 rounded-full text-lg hover:bg-pink-light hover:-translate-y-0.5 hover:shadow-xl hover:shadow-pink/40 transition-all duration-300"
            >
              {primaryCtaLabel}
            </Link>
          )}
          {secondaryCtaLabel && (
            <Link
              href="/services"
              className="inline-flex items-center justify-center border-2 border-white/50 text-white font-extrabold px-8 py-4 rounded-full text-lg hover:border-pink hover:text-pink transition-all duration-300"
            >
              {secondaryCtaLabel}
            </Link>
          )}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/50">
        <span className="text-xs uppercase tracking-widest">Scroll</span>
        <ChevronDown size={20} className="animate-scroll-bounce" />
      </div>
    </section>
  )
}
