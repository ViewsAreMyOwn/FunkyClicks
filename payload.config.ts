import { buildConfig } from 'payload'
import { postgresAdapter } from '@payloadcms/db-postgres'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import { Pages } from './src/collections/Pages'
import { Media } from './src/collections/Media'
import { Users } from './src/collections/Users'
import { Navigation } from './src/globals/Navigation'
const dbUri = process.env.DATABASE_URI || ''
console.log('[Payload] DATABASE_URI set:', !!dbUri, '| starts with:', dbUri.substring(0, 20) || '(empty)')

export default buildConfig({
  admin: {
    user: 'users',
    meta: {
      titleSuffix: '— Funky Clicks Admin',
    },
  },
  collections: [Pages, Media, Users],
  globals: [Navigation],
  editor: lexicalEditor({}),
  secret: process.env.PAYLOAD_SECRET || 'fallback-secret-change-me',
  db: postgresAdapter({
    pool: {
      connectionString: dbUri,
      max: 10,
      idleTimeoutMillis: 30000,
      connectionTimeoutMillis: 10000,
    },
  }),
  upload: {
    limits: {
      fileSize: 5000000,
    },
  },
})
