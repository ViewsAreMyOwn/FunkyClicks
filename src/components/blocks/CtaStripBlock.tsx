interface CtaStripBlockProps {
  title: string
  titleHighlight?: string
  description?: string
  ctaLabel?: string
  ctaSlug?: string
}

export default function CtaStripBlock({
  title,
  titleHighlight,
  description,
  ctaLabel,
  ctaSlug = 'contact',
}: CtaStripBlockProps) {
  return (
    <section
      className="py-20 relative overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #1a0a2e 0%, #4a2570 50%, #68389a 100%)' }}
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 50% 80% at 50% 50%, rgba(248,19,161,0.1) 0%, transparent 70%)',
        }}
      />
      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
          {title}
          {titleHighlight && (
            <>
              {' '}
              <span className="italic text-pink">{titleHighlight}</span>
            </>
          )}
        </h2>
        {description && (
          <p className="text-white/70 text-lg mb-10 max-w-xl mx-auto leading-relaxed">{description}</p>
        )}
        {ctaLabel && (
          <a
            href={`/${ctaSlug}`}
            className="inline-flex items-center justify-center bg-pink text-white font-extrabold px-10 py-4 rounded-full text-lg hover:bg-pink-light hover:-translate-y-0.5 hover:shadow-xl hover:shadow-pink/40 transition-all duration-300"
          >
            {ctaLabel}
          </a>
        )}
      </div>
    </section>
  )
}
