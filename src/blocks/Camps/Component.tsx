import configPromise from '@payload-config'
import { getPayload } from 'payload'
import React from 'react'

import { CampsClient } from './Client'

import type { Camp } from '@/payload-types'

export type Props = {
  camp?: number | Camp | null
  className?: string
}

export const Camps: React.FC<Props> = async (props) => {
  const { camp, className } = props

  if (!camp) return null

  let doc: Camp | null = null

  if (typeof camp === 'object') {
    doc = camp
  } else {
    const payload = await getPayload({ config: configPromise })

    doc = (await payload.findByID({
      collection: 'camps',
      id: camp,
      depth: 1,
      overrideAccess: true,
    })) as Camp | null
  }

  if (!doc) return null

  return (
    <CampsClient
      className={className}
      age={doc.age}
      badgeText={doc.badgeText}
      dates={doc.dates}
      datesNote={doc.datesNote}
      description={doc.description}
      features={doc.features}
      featuresTitle={doc.featuresTitle}
      heading={doc.heading}
      image={doc.image}
      links={doc.links}
      location={doc.location}
      locationNote={doc.locationNote}
      price={doc.price}
      priceNote={doc.priceNote}
      sectionSubtitle={doc.sectionSubtitle}
      title={doc.title}
      titleSubtitle={doc.titleSubtitle}
    />
  )
}

export default Camps
