import type { Block } from 'payload'

export const HowItWorksBlock: Block = {
  slug: 'howItWorks',
  labels: { singular: 'How It Works', plural: 'How It Works' },
  fields: [
    {
      name: 'items',
      type: 'array',
      fields: [
        { name: 'icon', type: 'text', required: true },
        { name: 'title', type: 'text', required: true },
        { name: 'description', type: 'textarea', required: true },
      ],
    },
  ],
}
