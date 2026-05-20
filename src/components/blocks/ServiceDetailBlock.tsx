import * as LucideIcons from 'lucide-react'
import { CheckCircle } from 'lucide-react'

interface Bullet {
  title: string
  description: string
  id?: string
}

interface ServiceDetailBlockProps {
  icon: string
  title: string
  tagline?: string
  reverse?: boolean
  bullets?: Bullet[]
  index?: number
}

function DynamicIcon({ name, size = 44, className }: { name: string; size?: number; className?: string }) {
  const IconComponent = (LucideIcons as unknown as Record<string, React.ComponentType<{ size?: number; className?: string }>>)[name] || LucideIcons.Star
  return <IconComponent size={size} className={className} />
}

export default function ServiceDetailBlock({
  icon,
  title,
  tagline,
  reverse = false,
  bullets = [],
  index = 0,
}: ServiceDetailBlockProps) {
  const bg = index % 2 === 0 ? 'bg-white' : 'bg-off-white'

  return (
    <section className={`py-20 ${bg}`}>
      <div className="max-w-6xl mx-auto px-4">
        <div className={`flex flex-col md:flex-row gap-12 items-center ${reverse ? 'md:flex-row-reverse' : ''}`}>
          {/* Icon side */}
          <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left">
            <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-purple to-purple-light flex items-center justify-center mb-6 shadow-xl shadow-purple/30">
              <DynamicIcon name={icon} size={44} className="text-white" />
            </div>
            <h2 className="text-3xl md:text-4xl font-black text-fc-text mb-4">{title}</h2>
            {tagline && (
              <p className="text-lg text-fc-muted leading-relaxed max-w-md">{tagline}</p>
            )}
          </div>

          {/* Bullets side */}
          <div className="flex-1">
            <div className="bg-white rounded-2xl border border-purple/20 p-8 shadow-sm">
              <div className="space-y-5">
                {bullets.map((bullet, i) => (
                  <div key={bullet.id ?? i} className="flex gap-3">
                    <CheckCircle size={20} className="text-pink flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-bold text-fc-text">{bullet.title}</p>
                      {bullet.description && (
                        <p className="text-fc-muted text-sm mt-0.5">{bullet.description}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
