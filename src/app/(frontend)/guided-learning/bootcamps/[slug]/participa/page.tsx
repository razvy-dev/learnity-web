import type { Metadata } from 'next'

import { EventRegistration } from '@/components/EventRegistration'

type Args = {
  params: Promise<{
    slug?: string
  }>
}

export default async function BootcampRegistration({ params: paramsPromise }: Args) {
  const { slug = '' } = await paramsPromise
  const decodedSlug = decodeURIComponent(slug)

  return <EventRegistration type="bootcamp" slug={decodedSlug} />
}

export async function generateMetadata({ params: paramsPromise }: Args): Promise<Metadata> {
  const { slug = '' } = await paramsPromise

  return {
    title: `Înscriere la bootcamp`,
    description: decodeURIComponent(slug),
  }
}
