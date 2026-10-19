import configPromise from '@payload-config'
import { getPayload } from 'payload'
import { cache } from 'react'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowLeft } from 'lucide-react'

import { FormBlock } from '@/blocks/Form/Component'
import type { EventHeroType } from '@/components/EventHero'
import type { Form as FormType } from '@payloadcms/plugin-form-builder/types'
import type { GuidedBootcamp, GuidedCourse, GuidedWorkshop } from '@/payload-types'
import { formatRomanianDate } from '@/utilities/formatRomanianDate'

type GuidedCollection = 'guidedWorkshops' | 'guidedCourses' | 'guidedBootcamps'

type GuidedDoc = GuidedBootcamp | GuidedCourse | GuidedWorkshop

const EVENT_CONFIG: Record<EventHeroType, { collection: GuidedCollection; basePath: string }> = {
  bootcamp: { collection: 'guidedBootcamps', basePath: 'bootcamps' },
  course: { collection: 'guidedCourses', basePath: 'cursuri' },
  workshop: { collection: 'guidedWorkshops', basePath: 'workshops' },
}

export type EventRegistrationProps = {
  type: EventHeroType
  slug: string
}

const buildEventSummary = (
  event: GuidedDoc,
  type: EventHeroType,
): { label: string; value: string }[] => {
  const summary: { label: string; value: string }[] = []

  if (type === 'workshop' && 'date' in event && event.date) {
    summary.push({ label: 'Data', value: formatRomanianDate(event.date as string) })
  }

  if ((type === 'course' || type === 'bootcamp') && 'startDate' in event && event.startDate) {
    const start = formatRomanianDate(event.startDate as string)
    const end = 'endDate' in event && event.endDate ? formatRomanianDate(event.endDate as string) : ''
    summary.push({ label: 'Perioada', value: end && end !== start ? `${start} – ${end}` : start })
  }

  if ('location' in event && event.location) {
    summary.push({ label: 'Locație', value: event.location as string })
  }

  if ('teachers' in event && Array.isArray(event.teachers)) {
    const teachers = event.teachers
      .map((t: { teacher?: string }) => t?.teacher)
      .filter(Boolean)
      .join(', ')
    if (teachers) summary.push({ label: 'Coordonatori', value: teachers })
  }

  return summary
}

export const EventRegistration: React.FC<EventRegistrationProps> = async ({ type, slug }) => {
  const config = EVENT_CONFIG[type]
  const event = await queryEventBySlug({ collection: config.collection, slug })

  if (!event) notFound()

  const backHref = `/guided-learning/${config.basePath}/${event.slug}`
  const form =
    event.customForm && typeof event.customForm === 'object'
      ? (event.customForm as unknown as FormType)
      : null

  const now = new Date()
  let isEventEnded = false

  if (type === 'workshop') {
    const end = 'date' in event && event.date ? new Date(event.date) : null
    if (end && end < now) {
      isEventEnded = true
    }
  } else {
    const end = 'endDate' in event && event.endDate ? new Date(event.endDate) : null
    if (end && end < now) {
      isEventEnded = true
    }
  }

  const isClosed = !form || isEventEnded
  const eventSummary = buildEventSummary(event, type)
  const eventImage =
    'photo' in event && event.photo && typeof event.photo === 'object' && 'url' in event.photo
      ? (event.photo.url as string)
      : null

  return (
    <article className="pt-16">
      <div className="bg-customWhite">
        <div className="container pt-8">
          <Link
            href={backHref}
            className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-2 text-sm font-bold text-customBlack shadow-md transition-colors duration-300 hover:bg-customBlue hover:text-white"
          >
            <ArrowLeft className="size-4" />
            Înapoi la eveniment
          </Link>
        </div>
      </div>

      {!isClosed ? (
        <FormBlock
          sectionTitle={event.title}
          sectionDescription="Completează formularul de mai jos pentru a te înscrie. Te vom contacta în cel mai scurt timp cu toate detaliile."
          form={form}
          event={{ relationTo: config.collection, value: event.id }}
          eventSummary={eventSummary}
          eventImage={eventImage}
        />
      ) : (
        <section className="relative overflow-hidden bg-customWhite px-3 py-20 md:px-4">
          <div className="container relative z-10 max-w-2xl text-center">
            <h2 className="mb-4 text-4xl italic text-customBlack md:text-5xl">
              {event.title}
            </h2>
            <div className="mx-auto h-2 w-40 rounded-full bg-customOrange" />
            <p className="mt-6 text-lg text-customBlack">
              {isEventEnded
                ? 'Înscrierile pentru acest eveniment s-au încheiat.'
                : 'Înscrierile pentru acest eveniment nu sunt încă deschise. Te rugăm să revii în curând.'}
            </p>
            <Link
              href={backHref}
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-customBlue px-8 py-3 font-bold text-white shadow-lg transition-colors duration-300 hover:bg-customOrange"
            >
              <ArrowLeft className="size-4" />
              Vezi detalii eveniment
            </Link>
          </div>
        </section>
      )}
    </article>
  )
}

const queryEventBySlug = cache(
  async ({ collection, slug }: { collection: GuidedCollection; slug: string }) => {
    const payload = await getPayload({ config: configPromise })

    const result = await payload.find({
      collection,
      depth: 1,
      limit: 1,
      pagination: false,
      overrideAccess: false,
      where: {
        slug: {
          equals: slug,
        },
      },
    })

    return result.docs?.[0] ?? null
  },
)

export default EventRegistration
