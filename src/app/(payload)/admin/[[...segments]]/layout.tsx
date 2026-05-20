import { RootLayout } from '@payloadcms/next/layouts'
import config from '@payload-config'
import { importMap } from '../importMap.js'

type Args = {
  children: React.ReactNode
}

export default async function Layout({ children }: Args) {
  return (
    <RootLayout config={config} importMap={importMap}>
      {children}
    </RootLayout>
  )
}
