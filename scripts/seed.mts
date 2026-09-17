import fs from 'fs'
import path from 'path'
import { getPayload } from 'payload'
import config from '../payload.config.ts'

function loadEnv() {
  if (process.env.DATABASE_URI) return
  const candidates = [
    path.join(process.cwd(), '.next/env.json'),
    '/tmp/app/.next/env.json',
    '/var/task/.next/env.json',
  ]
  for (const p of candidates) {
    try {
      const c = JSON.parse(fs.readFileSync(p, 'utf-8'))
      if (c.DATABASE_URI) { Object.assign(process.env, c); return }
    } catch {}
  }
}

loadEnv()

const payload = await getPayload({ config })

async function upsertPage(slug: string, title: string, layout: unknown[]) {
  const existing = await payload.find({ collection: 'pages', where: { slug: { equals: slug } }, limit: 1 })
  if (existing.docs.length > 0) {
    console.log(`[Seed] Skipping "${slug}" (already exists)`)
    return
  }
  await payload.create({ collection: 'pages', data: { title, slug, layout } as never })
  console.log(`[Seed] Created "${slug}"`)
}

// Remove retired pages
for (const slug of ['pricing', 'training']) {
  const { docs } = await payload.delete({ collection: 'pages', where: { slug: { equals: slug } } })
  if (docs.length > 0) console.log(`[Seed] Deleted "${slug}"`)
}

// ── HOME ─────────────────────────────────────────────────────────────────────
await upsertPage('home', 'Home', [
  {
    blockType: 'hero',
    title: 'Clicks That Convert,',
    titleHighlight: 'Strategies That Scale.',
    tagline: 'Smart Marketing. Funky Results.',
    description:
      "We're a modern marketing consultancy built for ambitious SMEs. No fluff. No inflated agency fees. Just sharp strategy, expert execution, and marketing that delivers measurable growth.",
    primaryCtaLabel: 'Book a Free Consultation',
    secondaryCtaLabel: 'Our Services →',
  },
  {
    blockType: 'whySection',
    label: 'Why Funky Clicks',
    title: 'Marketing that works. Without the agency overhead.',
    description:
      "We act as an extension of your team, giving you expertise exactly where and when you need it. No upselling, no fluff. Just the right strategies to get you where you need to go. And when you're ready to take the reins? We'll set you up for success and happily step back. No pressure. Just great marketing that works. But trust us: you won't want to leave.",
    showStats: true,
    cards: [
      {
        icon: 'Target',
        title: 'Strategy-First Thinking',
        description:
          "Every decision starts with your business goals. We don't run campaigns for the sake of it. We build strategies that drive real, measurable outcomes.",
      },
      {
        icon: 'TrendingUp',
        title: 'Lead Gen Specialists',
        description:
          "Generating high-quality leads is where we shine. From funnel design to paid ads, we know what it takes to fill your pipeline with prospects who convert.",
      },
      {
        icon: 'Bot',
        title: 'AI-Powered Marketing',
        description:
          "We use AI to supercharge your marketing, and we'll train your team to use it too, so when you say goodbye to us, you're prepared and ready to go.",
      },
      {
        icon: 'Monitor',
        title: 'Websites That Sell',
        description:
          "We build high-performance websites designed to convert. Speed, SEO, and user experience, with every element engineered to drive business results.",
      },
      {
        icon: 'Zap',
        title: 'Flexible & Scalable',
        description:
          "Need a sprint or a long-term partner? We scale up or down to match exactly what your business needs, without locking you into unnecessary spend.",
      },
      {
        icon: 'Users',
        title: 'Your Extended Team',
        description:
          "We embed into your business, not sit on the outside. You get senior marketing expertise without the cost of a full in-house team or a bloated agency.",
      },
    ],
  },
  {
    blockType: 'servicesOverview',
    label: 'What We Do',
    title: 'Everything your business needs to grow and thrive.',
    description:
      'From strategy to execution, we cover the full marketing mix, bringing in the right expertise for every project.',
    cards: [
      {
        icon: 'BarChart2',
        title: 'Marketing Consultancy & Strategy',
        description: 'Audits, growth roadmaps, brand positioning, and go-to-market planning.',
        linkSlug: 'services',
      },
      {
        icon: 'Megaphone',
        title: 'Social Media & Paid Ads',
        description: 'Organic management, paid ads across all channels, and influencer marketing.',
        linkSlug: 'services',
      },
      {
        icon: 'Target',
        title: 'Sales Enablement & Lead Gen',
        description: 'Funnel optimisation, high-value lead campaigns, and sales & marketing alignment.',
        linkSlug: 'services',
      },
      {
        icon: 'PenLine',
        title: 'Copywriting & Content',
        description: 'Website copy, SEO content, email sequences. Words that sell.',
        linkSlug: 'services',
      },
      {
        icon: 'Palette',
        title: 'Branding & Design',
        description: 'Logo, identity, brand guidelines, rebranding, and graphic design.',
        linkSlug: 'services',
      },
      {
        icon: 'Monitor',
        title: 'Website Development',
        description: 'High-performance sites built for speed, SEO, and conversions.',
        linkSlug: 'services',
      },
    ],
  },
  {
    blockType: 'ctaStrip',
    title: 'Ready to make your marketing',
    titleHighlight: 'actually work?',
    description:
      "Whether you need a one-off strategy session or a full-service marketing partner, we're ready to get started. No hard sell. No lock-in. Just honest, expert support.",
    ctaLabel: 'Book a Free Consultation',
    ctaSlug: 'contact',
  },
])

// ── SERVICES ─────────────────────────────────────────────────────────────────
await upsertPage('services', 'Services', [
  {
    blockType: 'pageHeader',
    label: 'What We Do',
    title: 'Funky, Smart & Results-Driven Marketing Services',
    description:
      "We don't do cookie-cutter marketing. Every solution is tailored to your business, your goals, and your audience, with the expertise to back it up.",
  },
  {
    blockType: 'serviceDetail',
    icon: 'BarChart2',
    title: 'Marketing Consultancy & Growth Strategy',
    tagline: 'Perfect for businesses that need a strategic roadmap for sustainable growth.',
    reverse: false,
    bullets: [
      {
        title: 'Marketing Audits & Growth Strategy',
        description: 'Deep-dive analysis of your marketing performance with tailored strategies to drive ROI.',
      },
      {
        title: 'Brand Positioning & Messaging',
        description: 'Stand out with a clear, compelling brand story that speaks directly to your audience.',
      },
      {
        title: 'Go-To-Market & Campaign Planning',
        description: 'We help you launch, scale, and optimise your marketing efforts at every stage.',
      },
    ],
  },
  {
    blockType: 'serviceDetail',
    icon: 'Megaphone',
    title: 'Social Media & Performance Marketing',
    tagline: 'Great for businesses looking to increase brand awareness, engagement, and sales.',
    reverse: false,
    bullets: [
      {
        title: 'Paid Ads Management',
        description:
          'High-ROI campaigns across Google, Facebook, LinkedIn, TikTok and more, converting clicks into customers.',
      },
      {
        title: 'Organic Social Media Strategy & Management',
        description: 'Consistent, high-quality content that grows and engages your audience.',
      },
      {
        title: 'Influencer & Community Marketing',
        description:
          'Collaborate with the right voices and build genuine brand loyalty through targeted engagement.',
      },
    ],
  },
  {
    blockType: 'serviceDetail',
    icon: 'Target',
    title: 'Sales Enablement & Lead Generation',
    tagline: 'Ideal for businesses looking to shorten the sales cycle and increase revenue.',
    reverse: false,
    bullets: [
      {
        title: 'Sales Funnel Optimisation',
        description: 'Turn interest into conversions with streamlined, high-converting customer journeys.',
      },
      {
        title: 'Lead Generation Campaigns',
        description:
          'We identify and attract high-value prospects through targeted outreach and smart marketing.',
      },
      {
        title: 'Sales & Marketing Alignment',
        description:
          'Get your teams working together effectively to close more deals and drive more revenue.',
      },
    ],
  },
  {
    blockType: 'serviceDetail',
    icon: 'PenLine',
    title: 'Copywriting & Content Production',
    tagline: 'Ideal for businesses that need words that sell, educate, and engage.',
    reverse: false,
    bullets: [
      {
        title: 'Website & Sales Copy',
        description: 'Persuasive, conversion-driven copy that turns visitors into buyers.',
      },
      {
        title: 'Blog & SEO Content',
        description:
          'Keyword-rich content that boosts your Google rankings and attracts organic traffic.',
      },
      {
        title: 'Email & Lead Nurturing Campaigns',
        description: 'Automated sequences that keep your audience engaged and ready to convert.',
      },
    ],
  },
  {
    blockType: 'serviceDetail',
    icon: 'Palette',
    title: 'Branding, Rebranding & Design',
    tagline: 'Perfect for businesses launching or refreshing their brand to stay competitive.',
    reverse: false,
    bullets: [
      {
        title: 'Logo & Visual Identity',
        description: 'A unique, professional brand identity that sets you apart from the competition.',
      },
      {
        title: 'Brand Guidelines & Messaging',
        description:
          "A cohesive look, feel, and voice that's recognisable and memorable across every touchpoint.",
      },
      {
        title: 'Rebranding Strategy',
        description: 'Refresh your business image with a modern, strategic transformation that resonates.',
      },
      {
        title: 'Graphic Design',
        description:
          'Eye-catching visuals for ads, social media, and marketing materials that make an impact.',
      },
    ],
  },
  {
    blockType: 'serviceDetail',
    icon: 'Monitor',
    title: 'Website Development & Optimisation',
    tagline: 'Best for businesses that need a website that works as hard as they do.',
    reverse: false,
    bullets: [
      {
        title: 'High-Performance Websites',
        description: 'Built for speed, SEO, and conversions, not just to look good.',
      },
      {
        title: 'Landing Pages & E-Commerce Solutions',
        description: 'Designed to capture leads and increase sales from the moment visitors land.',
      },
      {
        title: 'UX & Conversion Rate Optimisation (CRO)',
        description: 'A seamless user experience engineered to drive action at every step.',
      },
    ],
  },
  {
    blockType: 'serviceDetail',
    icon: 'Mail',
    title: 'Email Marketing That Converts',
    tagline: 'No fluff. No wasted sends. Just smart, effective email marketing that works.',
    reverse: false,
    bullets: [
      {
        title: 'Email Campaign Strategy',
        description: 'We map out the perfect approach for maximum impact at the right moment.',
      },
      {
        title: 'Compelling Copy & Design',
        description: 'Engaging, conversion-focused emails that stand out in crowded inboxes.',
      },
      {
        title: 'Automations & Drip Sequences',
        description: 'Seamless follow-ups that keep leads warm and move them toward conversion.',
      },
      {
        title: 'Performance Optimisation',
        description: 'A/B testing, analytics, and continuous improvement for better results every send.',
      },
    ],
  },
  {
    blockType: 'ctaStrip',
    title: "Let's build your",
    titleHighlight: 'growth engine.',
    description:
      "Whether you need one service or the whole mix, we'll put together the right solution for your business, without a penny wasted.",
    ctaLabel: 'Book a Free Consultation',
    ctaSlug: 'contact',
  },
])

// ── CONTACT ──────────────────────────────────────────────────────────────────
await upsertPage('contact', 'Contact', [
  {
    blockType: 'pageHeader',
    label: 'Get in Touch',
    title: "Let's Talk. No Hard Sell. Promise.",
    description:
      "Whether you're ready to go or just exploring your options, we'd love to hear from you. Book a free consultation and let's see how we can help your business grow.",
  },
  {
    blockType: 'contactSection',
    email: 'hello@funkyclicks.com',
    website: 'www.funkyclicks.com',
  },
])

console.log('[Seed] Done.')
await (payload.db as unknown as { destroy: () => Promise<void> }).destroy?.()
process.exit(0)
