import * as LucideIcons from 'lucide-react'

interface WhyCard {
  icon: string
  title: string
  description: string
  id?: string
}

interface WhySectionBlockProps {
  label?: string
  title?: string
  description?: string
  showStats?: boolean
  cards?: WhyCard[]
}

const stats = [
  { value: '30+', label: 'Years Experience' },
  { value: '100%', label: 'Results-Focused' },
  { value: 'SMEs', label: 'Our Sweet Spot' },
  { value: '0%', label: 'Waffle' },
]

function DynamicIcon({ name, size = 22, className }: { name: string; size?: number; className?: string }) {
  const IconComponent = (LucideIcons as unknown as Record<string, React.ComponentType<{ size?: number; className?: string }>>)[name] || LucideIcons.Star
  return <IconComponent size={size} className={className} />
}

export default function WhySectionBlock({
  label,
  title,
  description,
  showStats = true,
  cards = [],
}: WhySectionBlockProps) {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          {label && (
            <span className="inline-block text-pink font-bold text-sm uppercase tracking-widest mb-4">
              {label}
            </span>
          )}
          {title && (
            <h2 className="text-4xl md:text-5xl font-black text-fc-text mb-6">{title}</h2>
          )}
          {description && (
            <p className="text-fc-muted text-lg max-w-2xl mx-auto leading-relaxed">{description}</p>
          )}
        </div>

        {cards.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {cards.map((card, i) => (
              <div
                key={card.id ?? i}
                className="bg-white rounded-2xl border border-purple/20 p-6 hover:-translate-y-1 transition-all duration-300 hover:shadow-lg hover:shadow-purple/20 group"
              >
                <div className="h-1 w-full bg-gradient-to-r from-pink to-purple rounded-full mb-5" />
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple to-purple-light flex items-center justify-center mb-4">
                  <DynamicIcon name={card.icon} size={22} className="text-white" />
                </div>
                <h3 className="font-bold text-lg text-fc-text mb-2">{card.title}</h3>
                <p className="text-fc-muted text-sm leading-relaxed">{card.description}</p>
              </div>
            ))}
          </div>
        )}

        {showStats && (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-12 border-t border-purple/10">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-4xl font-black text-purple mb-1">{stat.value}</div>
                <div className="text-fc-muted text-sm font-semibold">{stat.label}</div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
