import { Check, Sparkles, Star } from 'lucide-react'

interface PricingCard {
  title: string
  price: string
  priceSuffix?: string
  description?: string
  featured?: boolean
  badgeLabel?: string
  altStyle?: boolean
  includes?: { text: string; id?: string }[]
  id?: string
}

interface PricingGridBlockProps {
  sectionTitle?: string
  sectionSubtitle?: string
  style?: 'cards' | 'bundles' | 'consultancy'
  cards?: PricingCard[]
}

const consultancyCards = [
  {
    title: 'Marketing Consultancy',
    description:
      'Expert strategic guidance to help you understand your market, refine your positioning, and build a clear marketing roadmap.',
    price: 'From £150',
    priceSuffix: '/ hour',
    includes: [
      'One-to-one strategy sessions',
      'Brand & market positioning review',
      'Competitor analysis',
      'Channel strategy recommendations',
      'Action-oriented reports',
    ],
    featured: false,
    badge: undefined as string | undefined,
  },
  {
    title: 'The Growth Accelerator',
    description:
      'Our most popular package — a complete, done-for-you marketing solution for ambitious SMEs ready to scale.',
    price: 'From £1,500',
    priceSuffix: '/ month',
    badge: 'Most Popular',
    includes: [
      'Full marketing strategy',
      'Social media management (3 platforms)',
      'Monthly content calendar',
      'Email marketing campaigns',
      'SEO optimisation',
      'Monthly performance report',
      'Dedicated account manager',
    ],
    featured: true,
  },
  {
    title: 'The Support System',
    description:
      "Flexible, on-demand marketing support — dip in when you need it, pause when you don't.",
    price: '£150 / hr',
    priceSuffix: 'or £900 / day',
    includes: [
      'Ad-hoc campaign support',
      'Content creation & copywriting',
      'Social media coverage',
      'Campaign audits & fixes',
      'No minimum commitment',
    ],
    featured: false,
    badge: undefined as string | undefined,
  },
]

function RegularCard({ card }: { card: PricingCard }) {
  const items = card.includes ?? []
  return (
    <div
      className={`rounded-2xl border p-8 flex flex-col hover:-translate-y-1 transition-all duration-300 relative ${
        card.featured
          ? 'bg-gradient-to-br from-purple to-purple-dark border-purple text-white shadow-xl shadow-purple/30'
          : 'bg-white border-purple/20 hover:shadow-lg hover:shadow-purple/20'
      }`}
    >
      {card.badgeLabel && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2">
          <span className="bg-pink text-white text-xs font-bold px-4 py-1 rounded-full">
            {card.badgeLabel}
          </span>
        </div>
      )}
      <div className="mb-6">
        <h3 className={`font-bold text-xl mb-2 ${card.featured ? 'text-white' : 'text-fc-text'}`}>{card.title}</h3>
        <div className="flex items-baseline gap-1 mb-3">
          <span className={`text-4xl font-black ${card.featured ? 'text-white' : 'text-purple'}`}>{card.price}</span>
          {card.priceSuffix && (
            <span className={`text-sm ${card.featured ? 'text-purple-light' : 'text-fc-muted'}`}>{card.priceSuffix}</span>
          )}
        </div>
        {card.description && (
          <p className={`text-sm leading-relaxed ${card.featured ? 'text-purple-light' : 'text-fc-muted'}`}>{card.description}</p>
        )}
      </div>
      {items.length > 0 && (
        <ul className="space-y-3 flex-1 mb-6">
          {items.map((item, i) => (
            <li key={item.id ?? i} className="flex items-start gap-2 text-sm">
              <Check size={16} className={`flex-shrink-0 mt-0.5 ${card.featured ? 'text-pink-light' : 'text-pink'}`} />
              <span className={card.featured ? 'text-purple-light' : 'text-fc-muted'}>{item.text}</span>
            </li>
          ))}
        </ul>
      )}
      <a
        href="/contact"
        className={`block text-center font-extrabold py-3 px-6 rounded-full transition-all duration-300 ${
          card.featured
            ? 'bg-pink text-white hover:bg-pink-light hover:-translate-y-0.5 hover:shadow-lg hover:shadow-pink/40'
            : 'border-2 border-purple text-purple hover:border-pink hover:text-pink'
        }`}
      >
        Get Started
      </a>
    </div>
  )
}

function BundleCard({ card }: { card: PricingCard }) {
  const items = card.includes ?? []
  return (
    <div
      className={`rounded-2xl p-8 flex flex-col hover:-translate-y-1 transition-all duration-300 relative ${
        card.altStyle
          ? 'bg-gradient-to-br from-pink/10 to-purple/10 border border-pink/30 hover:shadow-lg hover:shadow-pink/20'
          : 'bg-gradient-to-br from-purple-dark to-dark border border-purple/40 text-white shadow-xl shadow-purple/20'
      }`}
    >
      {card.badgeLabel && (
        <div className="flex items-center gap-2 mb-4">
          <Sparkles size={16} className={card.altStyle ? 'text-pink' : 'text-lavender'} />
          <span className={`text-xs font-bold uppercase tracking-widest ${card.altStyle ? 'text-pink' : 'text-lavender'}`}>
            {card.badgeLabel}
          </span>
        </div>
      )}
      <h3 className={`font-bold text-xl mb-2 ${card.altStyle ? 'text-fc-text' : 'text-white'}`}>{card.title}</h3>
      <div className="mb-3">
        <span className={`text-3xl font-black ${card.altStyle ? 'text-purple' : 'text-pink-light'}`}>{card.price}</span>
        {card.priceSuffix && (
          <span className={`text-sm ml-1 ${card.altStyle ? 'text-fc-muted' : 'text-purple-light'}`}>{card.priceSuffix}</span>
        )}
      </div>
      {card.description && (
        <p className={`text-sm leading-relaxed mb-6 ${card.altStyle ? 'text-fc-muted' : 'text-purple-light'}`}>{card.description}</p>
      )}
      {items.length > 0 && (
        <ul className="space-y-2 flex-1 mb-6">
          {items.map((item, i) => (
            <li key={item.id ?? i} className="flex items-start gap-2 text-sm">
              <Check size={16} className={`flex-shrink-0 mt-0.5 ${card.altStyle ? 'text-pink' : 'text-lavender'}`} />
              <span className={card.altStyle ? 'text-fc-muted' : 'text-purple-light'}>{item.text}</span>
            </li>
          ))}
        </ul>
      )}
      <a
        href="/contact"
        className={`block text-center font-extrabold py-3 px-6 rounded-full transition-all duration-300 ${
          card.altStyle
            ? 'bg-pink text-white hover:bg-pink-light hover:-translate-y-0.5 hover:shadow-lg hover:shadow-pink/40'
            : 'border-2 border-lavender text-lavender hover:border-pink-light hover:text-pink-light'
        }`}
      >
        Get This Bundle
      </a>
    </div>
  )
}

function ConsultancyGrid() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block text-pink font-bold text-sm uppercase tracking-widest mb-4">
            Flexible Engagement
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-fc-text mb-4">Consultancy &amp; Retained Support</h2>
          <p className="text-fc-muted text-lg max-w-2xl mx-auto leading-relaxed">
            Whether you need a one-off strategy session or ongoing support, we have a model that fits.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {consultancyCards.map((card) => (
            <div
              key={card.title}
              className={`rounded-2xl border p-8 flex flex-col hover:-translate-y-1 transition-all duration-300 relative ${
                card.featured
                  ? 'bg-gradient-to-br from-purple to-purple-dark border-purple text-white shadow-xl shadow-purple/30'
                  : 'bg-white border-purple/20 hover:shadow-lg hover:shadow-purple/20'
              }`}
            >
              {card.badge && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="bg-pink text-white text-xs font-bold px-4 py-1 rounded-full flex items-center gap-1">
                    <Star size={10} />
                    {card.badge}
                  </span>
                </div>
              )}
              <div className="mb-6">
                <h3 className={`font-bold text-xl mb-3 ${card.featured ? 'text-white' : 'text-fc-text'}`}>{card.title}</h3>
                <div className="flex items-baseline gap-2 mb-3">
                  <span className={`text-2xl font-black ${card.featured ? 'text-white' : 'text-purple'}`}>{card.price}</span>
                  {card.priceSuffix && (
                    <span className={`text-sm ${card.featured ? 'text-purple-light' : 'text-fc-muted'}`}>{card.priceSuffix}</span>
                  )}
                </div>
                <p className={`text-sm leading-relaxed ${card.featured ? 'text-purple-light' : 'text-fc-muted'}`}>{card.description}</p>
              </div>
              <ul className="space-y-3 flex-1 mb-6">
                {card.includes.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm">
                    <Check size={16} className={`flex-shrink-0 mt-0.5 ${card.featured ? 'text-pink-light' : 'text-pink'}`} />
                    <span className={card.featured ? 'text-purple-light' : 'text-fc-muted'}>{item}</span>
                  </li>
                ))}
              </ul>
              <a
                href="/contact"
                className={`block text-center font-extrabold py-3 px-6 rounded-full transition-all duration-300 ${
                  card.featured
                    ? 'bg-pink text-white hover:bg-pink-light hover:-translate-y-0.5 hover:shadow-lg hover:shadow-pink/40'
                    : 'border-2 border-purple text-purple hover:border-pink hover:text-pink'
                }`}
              >
                Get Started
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default function PricingGridBlock({
  sectionTitle,
  sectionSubtitle,
  style = 'cards',
  cards = [],
}: PricingGridBlockProps) {
  if (style === 'consultancy') {
    return <ConsultancyGrid />
  }

  return (
    <section className="py-24 bg-off-white">
      <div className="max-w-7xl mx-auto px-4">
        {(sectionTitle || sectionSubtitle) && (
          <div className="text-center mb-16">
            {sectionTitle && (
              <h2 className="text-4xl md:text-5xl font-black text-fc-text mb-4">{sectionTitle}</h2>
            )}
            {sectionSubtitle && (
              <p className="text-fc-muted text-lg max-w-2xl mx-auto leading-relaxed">{sectionSubtitle}</p>
            )}
          </div>
        )}

        {cards.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {cards.map((card, i) =>
              style === 'bundles' ? (
                <BundleCard key={card.id ?? i} card={card} />
              ) : (
                <RegularCard key={card.id ?? i} card={card} />
              )
            )}
          </div>
        )}
      </div>
    </section>
  )
}
