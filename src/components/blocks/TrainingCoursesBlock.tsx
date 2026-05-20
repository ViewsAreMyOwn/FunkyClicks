import * as LucideIcons from 'lucide-react'

interface Course {
  icon: string
  title: string
  description: string
  id?: string
}

interface TrainingCoursesBlockProps {
  label?: string
  title?: string
  description?: string
  courses?: Course[]
}

function DynamicIcon({ name, size = 22, className }: { name: string; size?: number; className?: string }) {
  const IconComponent = (LucideIcons as unknown as Record<string, React.ComponentType<{ size?: number; className?: string }>>)[name] || LucideIcons.BookOpen
  return <IconComponent size={size} className={className} />
}

export default function TrainingCoursesBlock({
  label,
  title,
  description,
  courses = [],
}: TrainingCoursesBlockProps) {
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

        {courses.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {courses.map((course, i) => (
              <div
                key={course.id ?? i}
                className="bg-white rounded-2xl border border-purple/20 p-6 hover:-translate-y-1 transition-all duration-300 hover:shadow-lg hover:shadow-purple/20"
              >
                <div className="h-1 w-full bg-gradient-to-r from-pink to-lavender rounded-full mb-5" />
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple to-purple-light flex items-center justify-center mb-4">
                  <DynamicIcon name={course.icon} size={22} className="text-white" />
                </div>
                <h3 className="font-bold text-lg text-fc-text mb-2">{course.title}</h3>
                <p className="text-fc-muted text-sm leading-relaxed">{course.description}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
