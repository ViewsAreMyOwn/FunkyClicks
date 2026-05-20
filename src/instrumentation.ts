export async function register() {
  if (process.env.NEXT_RUNTIME === 'nodejs') {
    try {
      const { getPayload } = await import('payload')
      const { default: config } = await import('@payload-config')
      const payload = await getPayload({ config })
      // pushDevSchema is what the adapter calls in dev mode — it syncs the schema
      // directly without needing migration files. Safe to call in production when
      // bootstrapping because it is non-destructive (only creates/alters, never drops).
      const { pushDevSchema } = await import('@payloadcms/drizzle')
      await pushDevSchema(payload.db as Parameters<typeof pushDevSchema>[0])
      console.log('[Payload] Schema pushed')
    } catch (err) {
      console.error('[Payload] Schema push error:', err)
    }
  }
}
