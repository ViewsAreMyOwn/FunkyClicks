import { getPayload } from 'payload'
import config from '@payload-config'
import { BlockRenderer } from '@/components/blocks'
import { notFound } from 'next/navigation'

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

  const payload = await getPayload({ config })
  const result = await payload.find({
    collection: 'pages',
    where: { slug: { equals: slugPath } },
    limit: 1,
  })

  const page = result.docs[0]
  if (!page) notFound()

  return (
    <>
      {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
      {(page.layout ?? []).map((block: any, i: number) => (
        <BlockRenderer key={i} block={block} index={i} />
      ))}
    </>
  )
}
