import type { Block } from 'payload'

export const CtaStripBlock: Block = {
  slug: 'ctaStrip',
  labels: { singular: 'CTA Strip', plural: 'CTA Strips' },
  fields: [
    { name: 'title', type: 'text', required: true },
    { name: 'titleHighlight', type: 'text' },
    { name: 'description', type: 'textarea' },
    { name: 'ctaLabel', type: 'text' },
    { name: 'ctaSlug', type: 'text', defaultValue: 'contact' },
  ],
}
