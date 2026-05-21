import type { Block } from 'payload'

export const HeroBlock: Block = {
  slug: 'hero',
  imageURL: '/block-previews/hero.png',
  labels: { singular: 'Hero Section', plural: 'Hero Sections' },
  admin: { group: 'Layout' },
  fields: [
    { name: 'badge', type: 'text' },
    { name: 'title', type: 'text', required: true },
    { name: 'titleHighlight', type: 'text', admin: { description: 'Text inside the title shown in pink' } },
    { name: 'tagline', type: 'text' },
    { name: 'description', type: 'textarea' },
    { name: 'primaryCtaLabel', type: 'text' },
    { name: 'secondaryCtaLabel', type: 'text' },
  ],
}
