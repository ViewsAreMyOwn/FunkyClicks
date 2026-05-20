import type { Block } from 'payload'

export const ServicesOverviewBlock: Block = {
  slug: 'servicesOverview',
  labels: { singular: 'Services Overview', plural: 'Services Overviews' },
  fields: [
    { name: 'label', type: 'text' },
    { name: 'title', type: 'text' },
    { name: 'description', type: 'textarea' },
    {
      name: 'cards',
      type: 'array',
      fields: [
        { name: 'icon', type: 'text', required: true },
        { name: 'title', type: 'text', required: true },
        { name: 'description', type: 'textarea', required: true },
        { name: 'linkSlug', type: 'text', admin: { description: 'Slug of the page to link to e.g. services' } },
      ],
    },
  ],
}
