import configPromise from '@payload-config'
import { getPayload } from 'payload'
import { draftMode } from 'next/headers'
import React from 'react'

import { GuidedExamplesClient } from './Client'

import type { GuidedExamples as GuidedExamplesBlockProps, GuidedWorkshop } from '@/payload-types'

export type Props = GuidedExamplesBlockProps & {
  className?: string
}

export const GuidedExamples: React.FC<Props> = async (props) => {
  const { workshops } = props
  const { isEnabled: draft } = await draftMode()

  const ids = (workshops || [])
    .map((workshop) => (typeof workshop === 'object' && workshop ? workshop.id : workshop))
    .filter((id): id is number => typeof id === 'number')

  if (ids.length === 0) return null

  const payload = await getPayload({ config: configPromise })

  const result = await payload.find({
    collection: 'guidedWorkshops',
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
  const docs = ids
    .map((id) => byId.get(id))
    .filter((doc): doc is GuidedWorkshop => Boolean(doc))

  if (docs.length === 0) return null

  // The `users` collection is not publicly readable, so author names are resolved
  // manually here (name only) instead of relying on relationship population.
  const authorIds = new Set<number>()
  for (const doc of docs) {
    for (const author of doc.authors || []) {
      if (typeof author === 'object' && author) authorIds.add(author.id)
      else if (typeof author === 'number') authorIds.add(author)
    }
  }

  const authorNameById = new Map<number, string>()
  if (authorIds.size > 0) {
    const users = await payload.find({
      collection: 'users',
      where: {
        id: {
          in: [...authorIds],
        },
      },
      depth: 0,
      limit: authorIds.size,
      pagination: false,
      overrideAccess: true,
      select: {
        name: true,
      },
    })

    for (const user of users.docs) {
      if (user.name) authorNameById.set(user.id, user.name)
    }
  }

  const workshopsWithAuthors = docs.map((doc) => ({
    ...doc,
    authorNames: (doc.authors || [])
      .map((author) => (typeof author === 'object' && author ? author.id : author))
      .map((id) => (typeof id === 'number' ? authorNameById.get(id) : undefined))
      .filter((name): name is string => Boolean(name))
      .join(', '),
  }))

  return <GuidedExamplesClient {...props} workshops={workshopsWithAuthors} />
}

export default GuidedExamples
