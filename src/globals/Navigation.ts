import type { GlobalConfig } from 'payload'

export const Navigation: GlobalConfig = {
  slug: 'navigation',
  admin: { group: 'Site Settings' },
  fields: [
    {
      name: 'links',
      type: 'array',
      fields: [
        { name: 'label', type: 'text', required: true },
        { name: 'slug', type: 'text', required: true },
        { name: 'isCta', type: 'checkbox', defaultValue: false },
      ],
    },
  ],
}
