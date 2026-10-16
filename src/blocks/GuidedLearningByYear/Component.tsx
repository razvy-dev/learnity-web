import configPromise from '@payload-config'
import { getPayload } from 'payload'
import { draftMode } from 'next/headers'
import React from 'react'

import { GuidedLearningByYearClient } from './Client'

import type { GuidedLearningByYear as GuidedLearningByYearBlockProps } from '@/payload-types'
import type { GuidedWorkshop, GuidedCourse, GuidedBootcamp, Media } from '@/payload-types'

type Experience = {
  id: number
  title: string
  slug: string
  description: GuidedWorkshop['description']
  photo: number | Media
  teachers?: { teacher: string }[] | null
  date?: string
  startDate?: string
  endDate?: string
  location?: string
  type: 'workshop' | 'course' | 'bootcamp'
  module: 'module1' | 'module2' | 'module3'
  href: string
}

export type Props = GuidedLearningByYearBlockProps & {
  className?: string
}

async function fetchExperiences(
  payload: Awaited<ReturnType<typeof getPayload>>,
  year: number,
  draft: boolean,
): Promise<Experience[]> {
  const startOfYear = `${year}-01-01T00:00:00.000Z`
  const endOfYear = `${year}-12-31T23:59:59.999Z`

  const [workshopsResult, coursesResult, bootcampsResult] = await Promise.all([
    payload.find({
      collection: 'guidedWorkshops',
      where: {
        and: [
          { date: { greater_than_equal: startOfYear } },
          { date: { less_than_equal: endOfYear } },
          { _status: { equals: 'published' } },
        ],
      },
      depth: 1,
      limit: 100,
      pagination: false,
      draft,
      overrideAccess: draft,
    }),
    payload.find({
      collection: 'guidedCourses',
      where: {
        and: [
          { startDate: { greater_than_equal: startOfYear } },
          { startDate: { less_than_equal: endOfYear } },
          { _status: { equals: 'published' } },
        ],
      },
      depth: 1,
      limit: 100,
      pagination: false,
      draft,
      overrideAccess: draft,
    }),
    payload.find({
      collection: 'guidedBootcamps',
      where: {
        and: [
          { startDate: { greater_than_equal: startOfYear } },
          { startDate: { less_than_equal: endOfYear } },
          { _status: { equals: 'published' } },
        ],
      },
      depth: 1,
      limit: 100,
      pagination: false,
      draft,
      overrideAccess: draft,
    }),
  ])

  const experiences: Experience[] = []

  for (const workshop of workshopsResult.docs) {
    if (workshop.module) {
      experiences.push({
        id: workshop.id,
        title: workshop.title,
        slug: workshop.slug,
        description: workshop.description,
        photo: workshop.photo,
        teachers: workshop.teachers,
        date: workshop.date,
        type: 'workshop',
        module: workshop.module as 'module1' | 'module2' | 'module3',
        href: `/guided-learning/workshops/${workshop.slug}`,
      })
    }
  }

  for (const course of coursesResult.docs) {
    if (course.module) {
      experiences.push({
        id: course.id,
        title: course.title,
        slug: course.slug,
        description: course.description,
        photo: course.photo,
        teachers: course.teachers,
        startDate: course.startDate,
        endDate: course.endDate,
        type: 'course',
        module: course.module as 'module1' | 'module2' | 'module3',
        href: `/guided-learning/cursuri/${course.slug}`,
      })
    }
  }

  for (const bootcamp of bootcampsResult.docs) {
    if (bootcamp.module) {
      experiences.push({
        id: bootcamp.id,
        title: bootcamp.title,
        slug: bootcamp.slug,
        description: bootcamp.description,
        photo: bootcamp.photo,
        teachers: bootcamp.teachers,
        startDate: bootcamp.startDate,
        endDate: bootcamp.endDate,
        location: bootcamp.location,
        type: 'bootcamp',
        module: bootcamp.module as 'module1' | 'module2' | 'module3',
        href: `/guided-learning/bootcamps/${bootcamp.slug}`,
      })
    }
  }

  return experiences
}

export const GuidedLearningByYear: React.FC<Props> = async (props) => {
  const { year, moduleLabels, showEmptyModules } = props
  const { isEnabled: draft } = await draftMode()

  const payload = await getPayload({ config: configPromise })

  const experiences = await fetchExperiences(payload, year, draft)

  const experiencesByModule = {
    module1: experiences.filter((e) => e.module === 'module1'),
    module2: experiences.filter((e) => e.module === 'module2'),
    module3: experiences.filter((e) => e.module === 'module3'),
  }

  const modulesConfig = (moduleLabels || []).map((ml) => ({
    value: ml.moduleValue,
    label: ml.label,
    description: ml.description ?? '',
    color: ml.color,
  }))

  return <GuidedLearningByYearClient {...props} experiencesByModule={experiencesByModule} modulesConfig={modulesConfig} />
}

export default GuidedLearningByYear