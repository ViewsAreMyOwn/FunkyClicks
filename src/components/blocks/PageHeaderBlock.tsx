interface PageHeaderBlockProps {
  label?: string
  title: string
  description?: string
}

export default function PageHeaderBlock({ label, title, description }: PageHeaderBlockProps) {
  return (
    <section
      className="relative py-32 overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #1a0a2e 0%, #4a2570 60%, #68389a 100%)' }}
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 60% 60% at 30% 50%, rgba(248,19,161,0.12) 0%, transparent 60%)',
        }}
      />
      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center pt-10">
        {label && (
          <span className="inline-block text-pink font-bold text-sm uppercase tracking-widest mb-5">
            {label}
          </span>
        )}
        <h1 className="text-5xl md:text-6xl font-black text-white mb-6">{title}</h1>
        {description && (
          <p className="text-white/70 text-lg max-w-2xl mx-auto leading-relaxed">{description}</p>
        )}
      </div>
    </section>
  )
}
