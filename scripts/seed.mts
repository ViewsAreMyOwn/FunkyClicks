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
    console.log(`[Seed] Skipping "${slug}" — already exists`)
    return
  }
  await payload.create({ collection: 'pages', data: { title, slug, layout } as never })
  console.log(`[Seed] Created "${slug}"`)
}

// ── HOME ─────────────────────────────────────────────────────────────────────
await upsertPage('home', 'Home', [
  {
    blockType: 'hero',
    badge: '30+ Years Combined Marketing Experience',
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
      "We act as an extension of your team — giving you expertise exactly where and when you need it. No upselling, no fluff. Just the right strategies to get you where you need to go. And when you're ready to take the reins? We'll set you up for success and happily step back. No pressure. Just great marketing that works. But trust us — you won't want to leave.",
    showStats: true,
    cards: [
      {
        icon: 'Target',
        title: 'Strategy-First Thinking',
        description:
          "Every decision starts with your business goals. We don't run campaigns for the sake of it — we build strategies that drive real, measurable outcomes.",
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
          "We use AI to supercharge your marketing — and we'll train your team to use it too, so when you say goodbye to us, you're prepared and ready to go.",
      },
      {
        icon: 'Monitor',
        title: 'Websites That Sell',
        description:
          "We build high-performance websites designed to convert. Speed, SEO, and user experience — every element engineered to drive business results.",
      },
      {
        icon: 'Zap',
        title: 'Flexible & Scalable',
        description:
          "Need a sprint or a long-term partner? We scale up or down to match exactly what your business needs — without locking you into unnecessary spend.",
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
      'From strategy to execution, we cover the full marketing mix — bringing in the right expertise for every project.',
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
        description: 'Website copy, SEO content, email sequences — words that sell.',
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
      "We don't do cookie-cutter marketing. Every solution is tailored to your business, your goals, and your audience — with the expertise to back it up.",
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
          'High-ROI campaigns across Google, Facebook, LinkedIn, TikTok and more — converting clicks into customers.',
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
        description: 'Built for speed, SEO, and conversions — not just to look good.',
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
      "Whether you need one service or the whole mix, we'll put together the right solution for your business — without a penny wasted.",
    ctaLabel: 'Book a Free Consultation',
    ctaSlug: 'contact',
  },
])

// ── PRICING ──────────────────────────────────────────────────────────────────
await upsertPage('pricing', 'Pricing', [
  {
    blockType: 'pageHeader',
    label: 'Transparent Pricing',
    title: 'Funky Clicks Pricing Packages',
    description:
      'Results-driven marketing solutions designed to fit your business needs. Choose individual services, bundle for value, or talk to us about something bespoke.',
  },
  {
    blockType: 'pricingGrid',
    sectionTitle: 'Monthly Retainers',
    sectionSubtitle: 'Pick the services you need, or see our bundle deals below.',
    style: 'cards',
    cards: [
      {
        title: 'Content Creation',
        price: '£1,800',
        priceSuffix: '/month',
        description:
          '5-day focused content production — blogs, website copy, email sequences, ad copy.',
        includes: [
          { text: 'Keyword-optimised for SEO' },
          { text: '2 rounds of revisions included' },
          { text: 'Tailored to your brand voice' },
        ],
      },
      {
        title: 'Design Retainer',
        price: '£2,000',
        priceSuffix: '/month',
        description:
          '30 hours of custom design — social graphics, ads, brochures, presentations and more.',
        includes: [
          { text: 'Fast turnaround & priority service' },
          { text: 'Consistent brand across all assets' },
          { text: 'No in-house team needed' },
        ],
      },
      {
        title: 'Organic Social Media',
        price: '£1,800',
        priceSuffix: '/month',
        description:
          'Full management across 2 platforms — strategy, content, and community engagement.',
        includes: [
          { text: '3–5 high-quality posts per week' },
          { text: 'Community engagement & growth' },
          { text: 'Monthly performance reports' },
        ],
      },
      {
        title: 'Email Marketing',
        price: '£2,200',
        priceSuffix: '/month',
        description:
          'Strategic, high-converting email campaigns designed to engage, nurture, and convert.',
        includes: [
          { text: '4 custom emails per month' },
          { text: 'Automated drip sequences' },
          { text: 'A/B testing & monthly reports' },
        ],
      },
      {
        title: 'SEO Growth',
        price: '£2,200',
        priceSuffix: '/month',
        description:
          'Boost your Google rankings and attract consistent organic traffic month after month.',
        includes: [
          { text: 'Monthly SEO audit & strategy' },
          { text: '2 keyword-optimised blog posts' },
          { text: 'On-page improvements & backlinks' },
        ],
      },
      {
        title: 'Ads Management',
        price: '£850',
        priceSuffix: '/month per channel',
        description:
          'PPC & paid social campaigns set up, optimised, and managed for maximum return.',
        includes: [
          { text: 'Campaign setup, targeting & A/B testing' },
          { text: 'Ongoing optimisation' },
          { text: 'Ad spend not included' },
        ],
      },
      {
        title: 'Sales Enablement',
        price: '£2,500',
        description:
          'Get your sales and marketing working in perfect harmony to close more deals.',
        includes: [
          { text: 'Funnel optimisation & conversion tracking' },
          { text: 'Lead scoring & CRM integration' },
          { text: 'Email & nurture campaign strategy' },
        ],
      },
    ],
  },
  {
    blockType: 'pricingGrid',
    sectionTitle: 'Bundle & Save',
    sectionSubtitle: 'Our most popular combinations — more value, seamless delivery.',
    style: 'bundles',
    cards: [
      {
        title: 'The Funky Growth Bundle',
        price: '£6,300',
        priceSuffix: '/month',
        description:
          'Save £350 vs. buying individually. A cohesive content, design, social, and ads strategy that works seamlessly together.',
        badgeLabel: 'Best Value',
        altStyle: false,
        includes: [
          { text: '5 Days Content Creation (£1,800)' },
          { text: '30hrs Design Services (£2,000)' },
          { text: 'Organic Social Media (£1,800)' },
          { text: 'Ads Management (£850+)' },
        ],
      },
      {
        title: 'The Ultimate Scale-Up Package',
        price: '£8,500',
        priceSuffix: '/month',
        description:
          'For brands ready to grow big. A complete, full-funnel marketing system to drive traffic, leads, and conversions.',
        badgeLabel: 'Full Funnel',
        altStyle: true,
        includes: [
          { text: '5 Days Content Creation (£1,800)' },
          { text: 'Organic Social Media (£1,800)' },
          { text: 'Paid Ads (£850+)' },
          { text: 'SEO Growth Package (£2,200)' },
          { text: '30hrs Design Services (£2,000)' },
        ],
      },
    ],
  },
  {
    blockType: 'pricingGrid',
    style: 'consultancy',
    cards: [],
  },
  {
    blockType: 'ctaStrip',
    title: 'Need something',
    titleHighlight: 'custom?',
    description:
      "Every business is different. If none of these quite fit, let's talk — we'll build a package around your exact goals, budget, and timeline. No fluff, no pressure.",
    ctaLabel: 'Book a Free Consultation',
    ctaSlug: 'contact',
  },
])

// ── TRAINING ─────────────────────────────────────────────────────────────────
await upsertPage('training', 'Training', [
  {
    blockType: 'pageHeader',
    label: 'Funky Clicks Training',
    title: 'Upskill. Empower. Grow.',
    description:
      "Want your team to level up their marketing game? At Funky Clicks, we don't just do marketing — we teach it. Our experts train your internal teams on the tools, strategies, and processes that drive real results, so you can own your marketing with confidence. No boring lectures. No jargon overload. Just practical, hands-on training your team can apply immediately.",
  },
  {
    blockType: 'trainingCourses',
    label: 'What We Teach',
    title: 'Popular Training Courses',
    description:
      "Each course is tailored to your business, your tools, and your team's current skill level. Priced per attendee — with discounts for larger groups.",
    courses: [
      {
        icon: 'Bot',
        title: 'AI-Powered Marketing',
        description:
          'Learn how to leverage AI for content creation, SEO, email automation, paid ads, and data-driven decision-making — supercharge your marketing with the tools of tomorrow, today.',
      },
      {
        icon: 'Smartphone',
        title: 'Social Media Mastery',
        description:
          'How to grow, engage, and convert on LinkedIn, Instagram, TikTok and beyond. Strategy, content planning, and community building — all in one session.',
      },
      {
        icon: 'Search',
        title: 'SEO for Business',
        description:
          'The essentials of ranking on Google and driving organic traffic — from keyword research to on-page optimisation and link building, demystified.',
      },
      {
        icon: 'Mail',
        title: 'Email Marketing That Works',
        description:
          'Writing, automation, and strategy for high-performing emails. Learn how to build sequences that nurture, engage, and convert on autopilot.',
      },
      {
        icon: 'Target',
        title: 'Paid Ads Deep Dive',
        description:
          'How to run profitable PPC and social media ad campaigns. Audience targeting, bidding, creative, and measurement — everything your team needs to spend smart.',
      },
      {
        icon: 'PenLine',
        title: 'Content That Converts',
        description:
          'Writing blogs, landing pages, and social posts that drive action. Practical frameworks your team can use immediately to produce content that performs.',
      },
      {
        icon: 'Users',
        title: 'CRM & Sales Enablement',
        description:
          'How to use marketing automation tools for lead nurturing and sales alignment. Build workflows that keep your pipeline moving without manual effort.',
      },
    ],
  },
  {
    blockType: 'trainingCourses',
    label: 'The AI Deep Dive',
    title: 'AI Marketing Training — In Detail',
    description:
      "Our most in-demand course. We'll walk your team through real-world AI tools and workflows that save time, optimise performance, and drive better results.",
    courses: [
      {
        icon: 'PenLine',
        title: 'AI for Content Creation',
        description:
          'Generate ideas, write compelling copy, and streamline your entire content production process — without losing your brand voice.',
      },
      {
        icon: 'Search',
        title: 'AI-Powered SEO',
        description:
          'How AI tools can help with keyword research, on-page SEO, content optimisation, and climbing the Google rankings faster.',
      },
      {
        icon: 'Mail',
        title: 'Smart Email Automation',
        description:
          'Personalise, optimise, and automate your emails for better engagement — using AI to send the right message at the right time.',
      },
      {
        icon: 'MessageSquare',
        title: 'Chatbots & Customer Engagement',
        description:
          'How AI can enhance customer interactions and lead nurturing 24/7 — without losing the human touch that builds trust.',
      },
      {
        icon: 'BarChart2',
        title: 'Data-Driven Marketing with AI',
        description:
          'Using AI analytics to track performance, spot opportunities, and make smarter marketing decisions based on real insight.',
      },
      {
        icon: 'Target',
        title: 'AI for Paid Ads',
        description:
          'Automate audience targeting, bidding strategies, and ad creative optimisation — so your budget works harder with less manual effort.',
      },
    ],
  },
  {
    blockType: 'howItWorks',
    items: [
      {
        icon: 'MapPin',
        title: 'In-Person or Virtual',
        description:
          "Choose what works best for your team — we'll come to you or deliver a seamless online session.",
      },
      {
        icon: 'Clock',
        title: 'Flexible Formats',
        description:
          "Half-day, full-day, or multi-session programmes — we'll fit around your schedule, not the other way around.",
      },
      {
        icon: 'Building2',
        title: 'Tailored to Your Business',
        description:
          'Real-world examples and exercises drawn from your industry, your tools, and your specific challenges.',
      },
      {
        icon: 'Zap',
        title: 'Immediately Actionable',
        description:
          'No theory for the sake of it. Every session gives your team skills they can apply from day one.',
      },
    ],
  },
  {
    blockType: 'ctaStrip',
    title: 'Ready to train your team like',
    titleHighlight: 'pros?',
    description:
      "Give your team the skills to take marketing to the next level — and the confidence to keep going when we step back.",
    ctaLabel: 'Book a Training Session',
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
