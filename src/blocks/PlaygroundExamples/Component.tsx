import configPromise from '@payload-config'
import { getPayload } from 'payload'
import { draftMode } from 'next/headers'
import React from 'react'

import { PlaygroundExamplesClient } from './Client'

import type { Event, PlaygroundExamples as PlaygroundExamplesBlockProps } from '@/payload-types'

export type Props = PlaygroundExamplesBlockProps & {
  className?: string
}

export const PlaygroundExamples: React.FC<Props> = async (props) => {
  const { events } = props
  const { isEnabled: draft } = await draftMode()

  const ids = (events || [])
    .map((event) => (typeof event === 'object' && event ? event.id : event))
    .filter((id): id is number => typeof id === 'number')

  if (ids.length === 0) return null

  const payload = await getPayload({ config: configPromise })

  const result = await payload.find({
    collection: 'events',
    where: {
      id: {
        in: ids,
      },
    },
    depth: 1,
    limit: ids.length,
    pagination: false,
    draft,
    overrideAccess: draft,
  })

  const byId = new Map(result.docs.map((doc) => [doc.id, doc]))
  const docs = ids.map((id) => byId.get(id)).filter((doc): doc is Event => Boolean(doc))

  if (docs.length === 0) return null

  return <PlaygroundExamplesClient {...props} events={docs} />
}

export default PlaygroundExamples
