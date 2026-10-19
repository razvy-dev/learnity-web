import configPromise from '@payload-config'
import { getPayload } from 'payload'
import React from 'react'

import { WhatTheFutureClient } from './Client'

import type { WhatTheFuture as WhatTheFutureDoc } from '@/payload-types'

export type Props = {
  className?: string
  document?: number | WhatTheFutureDoc | null
}

export const WhatTheFutureBlock: React.FC<Props> = async (props) => {
  const { className, document } = props

  const payload = await getPayload({ config: configPromise })

  let doc: WhatTheFutureDoc | null = null

  if (document && typeof document === 'object') {
    doc = document
  } else {
    const result = await payload.find({
      collection: 'whatTheFuture',
      where: {
        _status: {
          equals: 'published',
        },
      },
      sort: '-publishedAt',
      limit: 1,
      depth: 1,
      pagination: false,
      overrideAccess: true,
    })

    doc = (result.docs[0] as WhatTheFutureDoc) || null
  }

  if (!doc) return null

  return (
    <WhatTheFutureClient
      className={className}
      aboutHeading={doc.aboutHeading}
      badgeText={doc.badgeText}
      description={doc.description}
      details={doc.details}
      detailsHeading={doc.detailsHeading}
      features={doc.features}
      featuresHeading={doc.featuresHeading}
      heading={doc.heading}
      image1={doc.image1}
      image2={doc.image2}
      links={doc.links}
      longDescription={doc.longDescription}
      nextImageLabel={doc.nextImageLabel}
      previousImageLabel={doc.previousImageLabel}
      subtitle={doc.subtitle}
    />
  )
}

export default WhatTheFutureBlock
