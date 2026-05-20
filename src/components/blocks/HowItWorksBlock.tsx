import * as LucideIcons from 'lucide-react'

interface HowItWorksItem {
  icon: string
  title: string
  description: string
  id?: string
}

interface HowItWorksBlockProps {
  items?: HowItWorksItem[]
}

function DynamicIcon({ name, size = 28, className }: { name: string; size?: number; className?: string }) {
  const IconComponent = (LucideIcons as unknown as Record<string, React.ComponentType<{ size?: number; className?: string }>>)[name] || LucideIcons.Circle
  return <IconComponent size={size} className={className} />
}

export default function HowItWorksBlock({ items = [] }: HowItWorksBlockProps) {
  return (
    <section className="py-24 bg-off-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block text-pink font-bold text-sm uppercase tracking-widest mb-4">
            The Process
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-fc-text mb-6">How It Works</h2>
        </div>

        {items.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
            {items.map((item, index) => (
              <div key={item.id ?? index} className="flex flex-col items-center text-center">
                <div className="relative mb-5">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-purple to-purple-light flex items-center justify-center shadow-lg shadow-purple/30">
                    <DynamicIcon name={item.icon} size={28} className="text-white" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-pink flex items-center justify-center text-white text-xs font-black">
                    {index + 1}
                  </div>
                </div>
                <h3 className="font-bold text-lg text-fc-text mb-2">{item.title}</h3>
                <p className="text-fc-muted text-sm leading-relaxed max-w-[200px]">{item.description}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
