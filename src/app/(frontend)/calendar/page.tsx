import type { Metadata } from 'next/types'

import configPromise from '@payload-config'
import { getPayload } from 'payload'
import React from 'react'

import type { Media } from '@/payload-types'
import { richTextToPlainText } from '@/utilities/richTextToPlainText'

import CalendarClient, { type CalendarEvent } from './page.client'

export const dynamic = 'force-static'
export const revalidate = 600

export default async function Page() {
  const payload = await getPayload({ config: configPromise })

  const events = await payload.find({
    collection: 'guidedWorkshops',
    depth: 1,
    limit: 100,
    overrideAccess: false,
    select: {
      title: true,
      slug: true,
      description: true,
      photo: true,
      date: true,
      teachers: true,
    },
  })

  const mapped: CalendarEvent[] = events.docs.map((event) => ({
    id: event.id,
    title: event.title,
    slug: event.slug,
    date: event.date,
    image: typeof event.photo === 'object' && event.photo !== null ? (event.photo as Media).url ?? null : null,
    teachers: event.teachers?.map((entry) => entry.teacher).filter(Boolean) ?? [],
    description: richTextToPlainText(event.description.root).trim(),
  }))

  return <CalendarClient events={mapped} />
}

export function generateMetadata(): Metadata {
  return { title: 'Calendar' }
}
