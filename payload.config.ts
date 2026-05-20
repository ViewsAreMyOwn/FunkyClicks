import fs from 'fs'
import path from 'path'
import { buildConfig } from 'payload'
import { postgresAdapter } from '@payloadcms/db-postgres'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import { Pages } from './src/collections/Pages'
import { Media } from './src/collections/Media'
import { Users } from './src/collections/Users'
import { Navigation } from './src/globals/Navigation'

// Amplify Lambda doesn't inject env vars at runtime — read them from the
// env.json file baked in by amplify.yml during the build step.
function loadAmplifyEnv() {
  if (process.env.DATABASE_URI) return
  const candidates = [
    path.join(process.cwd(), '.next/env.json'),
    '/tmp/app/.next/env.json',
    '/var/task/.next/env.json',
  ]
  for (const p of candidates) {
    try {
      const config = JSON.parse(fs.readFileSync(p, 'utf-8'))
      if (config.DATABASE_URI) {
        Object.assign(process.env, config)
        console.log('[Payload] Loaded env from', p)
        return
      }
    } catch {}
  }
  console.log('[Payload] env.json not found — candidates tried:', candidates.join(', '))
}

loadAmplifyEnv()

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
