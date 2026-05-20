import type { Block } from 'payload'

export const ContactSectionBlock: Block = {
  slug: 'contactSection',
  labels: { singular: 'Contact Section', plural: 'Contact Sections' },
  fields: [
    { name: 'email', type: 'email', defaultValue: 'hello@funkyclicks.com' },
    { name: 'website', type: 'text', defaultValue: 'www.funkyclicks.com' },
  ],
}
