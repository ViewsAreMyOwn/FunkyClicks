import { generateImportMap } from 'payload'
import payloadConfig from '../payload.config.ts'

const config = await payloadConfig
await generateImportMap(config, { log: true, force: true })
