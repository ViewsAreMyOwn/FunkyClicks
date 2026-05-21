import type { Block } from 'payload'

export const ServiceDetailBlock: Block = {
  slug: 'serviceDetail',
  imageURL: '/block-previews/service-detail.png',
  labels: { singular: 'Service Detail Block', plural: 'Service Detail Blocks' },
  admin: { group: 'Services' },
  fields: [
    { name: 'icon', type: 'text', required: true },
    { name: 'title', type: 'text', required: true },
    { name: 'tagline', type: 'text' },
    { name: 'reverse', type: 'checkbox', defaultValue: false },
    {
      name: 'bullets',
      type: 'array',
      fields: [
        { name: 'title', type: 'text', required: true },
        { name: 'description', type: 'textarea', required: true },
      ],
    },
  ],
}
