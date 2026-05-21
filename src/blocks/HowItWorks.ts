import type { Block } from 'payload'

export const HowItWorksBlock: Block = {
  slug: 'howItWorks',
  imageURL: '/block-previews/how-it-works.png',
  labels: { singular: 'How It Works', plural: 'How It Works' },
  admin: { group: 'Content' },
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
