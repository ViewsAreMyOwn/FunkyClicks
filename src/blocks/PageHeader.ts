import type { Block } from 'payload'

export const PageHeaderBlock: Block = {
  slug: 'pageHeader',
  imageURL: '/block-previews/page-header.png',
  labels: { singular: 'Page Header', plural: 'Page Headers' },
  fields: [
    { name: 'label', type: 'text' },
    { name: 'title', type: 'text', required: true },
    { name: 'description', type: 'textarea' },
  ],
}
