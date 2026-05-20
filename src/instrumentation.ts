export async function register() {
  if (process.env.NEXT_RUNTIME === 'nodejs') {
    try {
      const { getPayload } = await import('payload')
      const { default: config } = await import('@payload-config')
      const payload = await getPayload({ config })
      await payload.db.migrate()
      console.log('[Payload] Migrations applied')
    } catch (err) {
      console.error('[Payload] Startup error:', err)
    }
  }
}
