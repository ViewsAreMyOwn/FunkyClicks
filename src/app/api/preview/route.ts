import { draftMode } from 'next/headers'
import { redirect } from 'next/navigation'
import type { NextRequest } from 'next/server'

export async function GET(request: NextRequest) {
  const slug = request.nextUrl.searchParams.get('slug') || 'home'
  const draft = await draftMode()
  draft.enable()
  const path = slug === 'home' ? '/' : `/${slug}`
  redirect(path)
}
