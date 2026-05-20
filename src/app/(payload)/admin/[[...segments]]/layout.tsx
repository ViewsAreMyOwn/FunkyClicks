import { handleServerFunctions, RootLayout } from '@payloadcms/next/layouts'
import config from '@payload-config'
import { importMap } from '../importMap.js'

type Args = {
  children: React.ReactNode
}

const serverFunction: typeof handleServerFunctions = async (args) => {
  'use server'
  return handleServerFunctions({ ...args, config, importMap })
}

export default async function Layout({ children }: Args) {
  return (
    <RootLayout config={config} importMap={importMap} serverFunction={serverFunction}>
      {children}
    </RootLayout>
  )
}
