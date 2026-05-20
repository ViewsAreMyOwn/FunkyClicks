'use client'

import { useLivePreview } from '@payloadcms/live-preview-react'
import { BlockRenderer } from '@/components/blocks'

interface PagePreviewProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  initialData: Record<string, unknown>
  serverURL: string
}

export default function PagePreview({ initialData, serverURL }: PagePreviewProps) {
  const { data } = useLivePreview({ serverURL, depth: 2, initialData })

  return (
    <>
      {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
      {(data.layout ?? []).map((block: any, i: number) => (
        <BlockRenderer key={i} block={block} index={i} />
      ))}
    </>
  )
}
