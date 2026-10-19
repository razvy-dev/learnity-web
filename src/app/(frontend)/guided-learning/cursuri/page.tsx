import type { Metadata } from 'next/types'

import configPromise from '@payload-config'
import { Bangers, Nunito } from 'next/font/google'
import { getPayload } from 'payload'
import React from 'react'

import { LowImpactHero } from '@/heros/LowImpact'

import { CoursesListing } from './CoursesListing'

export const dynamic = 'force-dynamic'

const bangers = Bangers({
  subsets: ['latin', 'latin-ext'],
  weight: '400',
  display: 'swap',
})

const nunito = Nunito({
  subsets: ['latin', 'latin-ext'],
  display: 'swap',
})

export default async function Page() {
  const payload = await getPayload({ config: configPromise })

  const courses = await payload.find({
    collection: 'guidedCourses',
    depth: 1,
    limit: 100,
    pagination: false,
    overrideAccess: false,
    sort: '-startDate',
  })

  return (
    <div className="pb-16">
      <LowImpactHero>
        <div style={{ fontFamily: nunito.style.fontFamily }}>
          <p className="mb-2 text-sm font-bold uppercase tracking-[0.2em] text-customBlue">
            Guided Learning
          </p>
          <h1
            className="mb-4 text-4xl italic text-customBlack md:text-5xl"
            style={{ fontFamily: bangers.style.fontFamily }}
          >
            Cursuri
          </h1>
          <div className="mb-6 h-2 w-40 rounded-full bg-customOrange" />
          <p className="text-lg leading-relaxed text-customBlack">
            Cursuri ghidate Learnity — învățare structurată, alături de mentori, pentru copii și
            adolescenți care vor să descopere și să învețe altfel.
          </p>
        </div>
      </LowImpactHero>

      <CoursesListing courses={courses.docs} />
    </div>
  )
}

export function generateMetadata(): Metadata {
  return { title: 'Cursuri' }
}
