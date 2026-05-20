import { getPayload } from 'payload'
import config from '@payload-config'
import { notFound } from 'next/navigation'
import { draftMode } from 'next/headers'
import PagePreview from './PagePreview'

interface PageProps {
  params: Promise<{ slug?: string[] }>
}

export async function generateStaticParams() {
  try {
    const payload = await getPayload({ config })
    const result = await payload.find({ collection: 'pages', limit: 100 })
    return result.docs
      .filter((doc) => doc.slug !== 'home')
      .map((doc) => ({ slug: [doc.slug] }))
  } catch {
    return []
  }
}

export default async function CatchAllPage({ params }: PageProps) {
  const { slug } = await params
  const slugPath = slug ? slug.join('/') : 'home'
  const { isEnabled: isDraftMode } = await draftMode()

  const payload = await getPayload({ config })
  const result = await payload.find({
    collection: 'pages',
    where: { slug: { equals: slugPath } },
    limit: 1,
    draft: isDraftMode,
  })

  const page = result.docs[0]
  if (!page) notFound()

  const serverURL = process.env.NEXT_PUBLIC_SERVER_URL || 'http://localhost:3000'
  return <PagePreview initialData={page} serverURL={serverURL} />
}
