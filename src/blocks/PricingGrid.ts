import type { Block } from 'payload'

export const PricingGridBlock: Block = {
  slug: 'pricingGrid',
  imageURL: '/block-previews/pricing-grid.png',
  labels: { singular: 'Pricing Grid', plural: 'Pricing Grids' },
  admin: { group: 'Conversion' },
  fields: [
    { name: 'sectionTitle', type: 'text' },
    { name: 'sectionSubtitle', type: 'text' },
    { name: 'style', type: 'select', options: ['cards', 'bundles', 'consultancy'], defaultValue: 'cards' },
    {
      name: 'cards',
      type: 'array',
      fields: [
        { name: 'title', type: 'text', required: true },
        { name: 'price', type: 'text', required: true },
        { name: 'priceSuffix', type: 'text' },
        { name: 'description', type: 'textarea' },
        { name: 'featured', type: 'checkbox', defaultValue: false },
        { name: 'badgeLabel', type: 'text' },
        { name: 'altStyle', type: 'checkbox', defaultValue: false, admin: { description: 'For bundle cards: use alternate gradient' } },
        {
          name: 'includes',
          type: 'array',
          fields: [{ name: 'text', type: 'text', required: true }],
        },
      ],
    },
  ],
}
