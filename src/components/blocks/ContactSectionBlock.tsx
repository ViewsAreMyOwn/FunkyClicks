import { Mail, Globe } from 'lucide-react'

interface ContactSectionBlockProps {
  email?: string
  website?: string
}

const whatToExpect = [
  'A friendly, no-pressure conversation',
  'Honest advice tailored to your business',
  'Clear next steps, not a hard sell',
  'A response within one business day',
]

export default function ContactSectionBlock({
  email = 'hello@funkyclicks.com',
  website = 'www.funkyclicks.com',
}: ContactSectionBlockProps) {
  return (
    <section className="py-24 bg-off-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div>
            <span className="inline-block text-pink font-bold text-sm uppercase tracking-widest mb-4">
              Get In Touch
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-fc-text mb-6">
              Let&apos;s Start Something <span className="italic text-pink">Funky</span>
            </h2>
            <p className="text-fc-muted text-lg leading-relaxed mb-10">
              Whether you&apos;re ready to dive in or just want a chat about your marketing, we&apos;d love to hear
              from you. No hard sell, no waffle — just honest, helpful conversation.
            </p>

            <div className="space-y-5 mb-10">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple to-purple-light flex items-center justify-center shadow-md flex-shrink-0">
                  <Mail size={20} className="text-white" />
                </div>
                <div>
                  <p className="text-sm text-fc-muted font-semibold uppercase tracking-wider">Email Us</p>
                  <a
                    href={`mailto:${email}`}
                    className="text-fc-text font-bold hover:text-pink transition-colors"
                  >
                    {email}
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple to-purple-light flex items-center justify-center shadow-md flex-shrink-0">
                  <Globe size={20} className="text-white" />
                </div>
                <div>
                  <p className="text-sm text-fc-muted font-semibold uppercase tracking-wider">Website</p>
                  <a
                    href={`https://${website}`}
                    className="text-fc-text font-bold hover:text-pink transition-colors"
                  >
                    {website}
                  </a>
                </div>
              </div>
            </div>

            <div>
              <p className="font-bold text-fc-text mb-4">What to Expect</p>
              <ul className="space-y-2">
                {whatToExpect.map((item) => (
                  <li key={item} className="flex items-center gap-2 text-fc-muted text-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-pink flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
