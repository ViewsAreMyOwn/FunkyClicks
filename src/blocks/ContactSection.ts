import type { Block } from 'payload'

export const ContactSectionBlock: Block = {
  slug: 'contactSection',
  imageURL: '/block-previews/contact-section.png',
  labels: { singular: 'Contact Section', plural: 'Contact Sections' },
  admin: { group: 'Conversion' },
  fields: [
    { name: 'email', type: 'email', defaultValue: 'hello@funkyclicks.com' },
    { name: 'website', type: 'text', defaultValue: 'www.funkyclicks.com' },
  ],
}
