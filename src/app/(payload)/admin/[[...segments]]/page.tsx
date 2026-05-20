import { RootPage, generatePageMetadata } from '@payloadcms/next/views'
import config from '@payload-config'
import { importMap } from '../importMap.js'

type AdminPageProps = {
  params: Promise<{ segments: string[] }>
  searchParams: Promise<{ [key: string]: string | string[] }>
}

export const generateMetadata = ({ params, searchParams }: AdminPageProps) =>
  generatePageMetadata({ config, params, searchParams })

export default function Page({ params, searchParams }: AdminPageProps) {
  return RootPage({ config, params, importMap, searchParams })
}
