import type { Block } from 'payload'

export const WhySectionBlock: Block = {
  slug: 'whySection',
  imageURL: '/block-previews/why-section.png',
  labels: { singular: 'Why Section', plural: 'Why Sections' },
  admin: { group: 'Content' },
  fields: [
    { name: 'label', type: 'text' },
    { name: 'title', type: 'text' },
    { name: 'description', type: 'textarea' },
    { name: 'showStats', type: 'checkbox', defaultValue: true },
    {
      name: 'cards',
      type: 'array',
      fields: [
        { name: 'icon', type: 'text', required: true, admin: { description: 'Lucide icon name e.g. target, zap, users' } },
        { name: 'title', type: 'text', required: true },
        { name: 'description', type: 'textarea', required: true },
      ],
    },
  ],
}
