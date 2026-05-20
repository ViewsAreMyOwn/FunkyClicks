import * as LucideIcons from 'lucide-react'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'

interface ServiceCard {
  icon: string
  title: string
  description: string
  linkSlug?: string
  id?: string
}

interface ServicesOverviewBlockProps {
  label?: string
  title?: string
  description?: string
  cards?: ServiceCard[]
}

function DynamicIcon({ name, size = 24, className }: { name: string; size?: number; className?: string }) {
  const IconComponent = (LucideIcons as unknown as Record<string, React.ComponentType<{ size?: number; className?: string }>>)[name] || LucideIcons.Star
  return <IconComponent size={size} className={className} />
}

export default function ServicesOverviewBlock({
  label,
  title,
  description,
  cards = [],
}: ServicesOverviewBlockProps) {
  return (
    <section className="py-24 bg-off-white">
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
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {cards.map((card, i) => {
              const inner = (
                <div className="bg-white rounded-2xl border border-purple/20 p-6 hover:-translate-y-1 transition-all duration-300 hover:shadow-lg hover:shadow-purple/20 group h-full flex flex-col">
                  <div className="w-[52px] h-[52px] rounded-xl bg-gradient-to-br from-purple to-purple-light flex items-center justify-center mb-5 flex-shrink-0">
                    <DynamicIcon name={card.icon} size={24} className="text-white" />
                  </div>
                  <h3 className="font-bold text-lg text-fc-text mb-2">{card.title}</h3>
                  <p className="text-fc-muted text-sm leading-relaxed mb-4 flex-1">{card.description}</p>
                  {card.linkSlug && (
                    <div className="flex items-center text-pink font-semibold text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 mt-auto">
                      Learn more <ArrowRight size={16} className="ml-1" />
                    </div>
                  )}
                </div>
              )
              return card.linkSlug ? (
                <Link key={card.id ?? i} href={`/${card.linkSlug}`} className="block">
                  {inner}
                </Link>
              ) : (
                <div key={card.id ?? i}>{inner}</div>
              )
            })}
          </div>
        )}
      </div>
    </section>
  )
}
