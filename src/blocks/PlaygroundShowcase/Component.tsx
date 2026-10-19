import configPromise from '@payload-config'
import { getPayload } from 'payload'
import { draftMode } from 'next/headers'
import React from 'react'

import { PlaygroundShowcaseClient } from './Client'

import type { PlaygroundShowcaseCard, PlaygroundShowcaseLink, PlaygroundShowcaseTab } from './Client'
import type { Media } from '@/payload-types'
import { formatRomanianDate } from '@/utilities/formatRomanianDate'
import { richTextToPlainText } from '@/utilities/richTextToPlainText'

type SourceSlug = 'workshops' | 'autonomousGroups' | 'events' | 'courses'

type SourceDoc = {
  id: number
  title?: string | null
  description?: unknown
  photo?: number | Media | null
  date?: string | null
  startDate?: string | null
  endDate?: string | null
}

const SOURCE_ICON: Record<SourceSlug, string> = {
  workshops: 'bookOpen',
  autonomousGroups: 'users',
  events: 'calendar',
  courses: 'graduationCap',
}

export type Props = {
  className?: string
  badge?: string | null
  sectionDescription?: string | null
  sectionTitle?: string | null
  tabs?:
    | {
        id?: string | null
        label?: string | null
        source?: SourceSlug | null
        limit?: number | null
      }[]
    | null
  links?: PlaygroundShowcaseLink[] | null
}

async function fetchTabCards(
  payload: Awaited<ReturnType<typeof getPayload>>,
  source: SourceSlug,
  limit: number,
  draft: boolean,
): Promise<PlaygroundShowcaseCard[]> {
  const result = await payload.find({
    collection: source,
    where: {
      _status: {
        equals: 'published',
      },
    },
    sort: source === 'courses' ? '-startDate' : '-date',
    limit,
    depth: 1,
    pagination: false,
    draft,
    overrideAccess: true,
  })

  return (result.docs as unknown as SourceDoc[]).map((doc) => {
    let meta: string | null = null

    if (source === 'courses') {
      const start = formatRomanianDate(doc.startDate)
      const end = formatRomanianDate(doc.endDate)
      meta = start && end ? `${start} - ${end}` : start || end || null
    } else {
      meta = formatRomanianDate(doc.date) || null
    }

    return {
      id: doc.id,
      title: doc.title,
      description: richTextToPlainText(doc.description).trim(),
      icon: SOURCE_ICON[source],
      image: typeof doc.photo === 'object' && doc.photo ? doc.photo : undefined,
      meta,
    }
  })
}

export const PlaygroundShowcase: React.FC<Props> = async (props) => {
  const { badge, className, links, sectionDescription, sectionTitle, tabs } = props

  const { isEnabled: draft } = await draftMode()

  const payload = await getPayload({ config: configPromise })

  const resolvedTabs: PlaygroundShowcaseTab[] = []

  for (const tab of tabs || []) {
    const source = (tab.source || 'workshops') as SourceSlug
    const cards = await fetchTabCards(payload, source, tab.limit || 3, draft)

    resolvedTabs.push({
      id: tab.id,
      label: tab.label,
      cards,
    })
  }

  return (
    <PlaygroundShowcaseClient
      badge={badge}
      className={className}
      links={links}
      sectionDescription={sectionDescription}
      sectionTitle={sectionTitle}
      tabs={resolvedTabs}
    />
  )
}

export default PlaygroundShowcase
