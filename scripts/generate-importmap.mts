import { generateImportMap } from 'payload/dist/bin/generateImportMap/index.js'
import payloadConfig from '../payload.config.ts'

const config = await payloadConfig
await generateImportMap(config, { log: true, force: true })
