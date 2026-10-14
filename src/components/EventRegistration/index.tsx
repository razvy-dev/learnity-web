import configPromise from '@payload-config'
import { getPayload } from 'payload'
import { cache } from 'react'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowLeft } from 'lucide-react'

import { FormBlock } from '@/blocks/Form/Component'
import type { EventHeroType } from '@/components/EventHero'
import type { Form as FormType } from '@payloadcms/plugin-form-builder/types'

type GuidedCollection = 'guidedWorkshops' | 'guidedCourses' | 'guidedBootcamps'

const EVENT_CONFIG: Record<EventHeroType, { collection: GuidedCollection; basePath: string }> = {
  bootcamp: { collection: 'guidedBootcamps', basePath: 'bootcamps' },
  course: { collection: 'guidedCourses', basePath: 'cursuri' },
  workshop: { collection: 'guidedWorkshops', basePath: 'workshops' },
}

export type EventRegistrationProps = {
  type: EventHeroType
  slug: string
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

      {form ? (
        <FormBlock
          sectionTitle={event.title}
          sectionDescription="Completează formularul de mai jos pentru a te înscrie. Te vom contacta în cel mai scurt timp cu toate detaliile."
          form={form}
          event={{ relationTo: config.collection, value: event.id }}
        />
      ) : (
        <section className="relative overflow-hidden bg-customWhite px-4 py-20">
          <div className="container relative z-10 max-w-2xl text-center">
            <h2 className="mb-4 text-4xl italic text-customBlack md:text-5xl">
              {event.title}
            </h2>
            <div className="mx-auto h-2 w-40 rounded-full bg-customOrange" />
            <p className="mt-6 text-lg text-customBlack">
              Înscrierile pentru acest eveniment nu sunt încă deschise. Te rugăm să revii în curând.
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
