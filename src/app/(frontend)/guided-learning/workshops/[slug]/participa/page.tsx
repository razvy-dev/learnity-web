import type { Metadata } from 'next'

import { EventRegistration } from '@/components/EventRegistration'

type Args = {
  params: Promise<{
    slug?: string
  }>
}

export default async function WorkshopRegistration({ params: paramsPromise }: Args) {
  const { slug = '' } = await paramsPromise
  const decodedSlug = decodeURIComponent(slug)

  return <EventRegistration type="workshop" slug={decodedSlug} />
}

export async function generateMetadata({ params: paramsPromise }: Args): Promise<Metadata> {
  const { slug = '' } = await paramsPromise

  return {
    title: `Înscriere la workshop`,
    description: decodeURIComponent(slug),
  }
}
