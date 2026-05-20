import { getPayload } from 'payload'
import { pushDevSchema } from '@payloadcms/drizzle'
import config from '../payload.config.mts'

const payload = await getPayload({ config })
await pushDevSchema(payload.db as Parameters<typeof pushDevSchema>[0])
console.log('[Schema] Push complete')
await (payload.db as unknown as { destroy: () => Promise<void> }).destroy?.()
process.exit(0)
