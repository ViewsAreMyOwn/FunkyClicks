'use client'

import { Mail, Globe } from 'lucide-react'

interface ContactSectionBlockProps {
  email?: string
  website?: string
}

const services = [
  'Social Media Management',
  'SEO & Content Marketing',
  'Paid Advertising (PPC)',
  'Email Marketing',
  'Marketing Consultancy',
  'Training & Workshops',
  'Brand Strategy',
  'Other',
]

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
  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    alert("Thank you for your message! We'll be in touch shortly.")
  }

  return (
    <section className="py-24 bg-off-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left side — contact info */}
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

          {/* Right side — form */}
          <div className="bg-white rounded-2xl border border-purple/20 p-8 shadow-sm">
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-bold text-fc-text mb-2">Your Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="Jane Smith"
                    className="w-full border border-purple/20 rounded-xl px-4 py-3 text-fc-text placeholder:text-fc-muted/50 focus:outline-none focus:border-purple focus:ring-2 focus:ring-purple/20 transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-fc-text mb-2">Business Name</label>
                  <input
                    type="text"
                    placeholder="Acme Ltd"
                    className="w-full border border-purple/20 rounded-xl px-4 py-3 text-fc-text placeholder:text-fc-muted/50 focus:outline-none focus:border-purple focus:ring-2 focus:ring-purple/20 transition-all"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold text-fc-text mb-2">Email Address *</label>
                <input
                  type="email"
                  required
                  placeholder="jane@example.com"
                  className="w-full border border-purple/20 rounded-xl px-4 py-3 text-fc-text placeholder:text-fc-muted/50 focus:outline-none focus:border-purple focus:ring-2 focus:ring-purple/20 transition-all"
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-fc-text mb-2">Service You&apos;re Interested In</label>
                <select className="w-full border border-purple/20 rounded-xl px-4 py-3 text-fc-text focus:outline-none focus:border-purple focus:ring-2 focus:ring-purple/20 transition-all appearance-none bg-white">
                  <option value="">Select a service...</option>
                  {services.map((s) => (
                    <option key={s} value={s}>
                      {s}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-bold text-fc-text mb-2">Your Message *</label>
                <textarea
                  required
                  rows={5}
                  placeholder="Tell us a bit about your business and what you're looking for..."
                  className="w-full border border-purple/20 rounded-xl px-4 py-3 text-fc-text placeholder:text-fc-muted/50 focus:outline-none focus:border-purple focus:ring-2 focus:ring-purple/20 transition-all resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-pink text-white font-extrabold py-4 px-8 rounded-full text-lg hover:bg-pink-light hover:-translate-y-0.5 hover:shadow-xl hover:shadow-pink/40 transition-all duration-300"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
