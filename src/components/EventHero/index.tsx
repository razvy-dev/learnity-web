'use client'

import { Bangers, Nunito } from 'next/font/google'
import clsx from 'clsx'
import Link from 'next/link'
import React, { useEffect } from 'react'
import { useInView } from 'react-intersection-observer'
import { ArrowRight, Calendar, Compass, MapPin, Sparkles, Users } from 'lucide-react'

import type { GuidedBootcamp, GuidedCourse, GuidedWorkshop } from '@/payload-types'

import { Media } from '@/components/Media'
import { useHeaderTheme } from '@/providers/HeaderTheme'
import { formatRomanianDate } from '@/utilities/formatRomanianDate'
import { richTextToPlainText } from '@/utilities/richTextToPlainText'

import './styles.css'

const bangers = Bangers({
  subsets: ['latin', 'latin-ext'],
  weight: '400',
  display: 'swap',
})

const nunito = Nunito({
  subsets: ['latin', 'latin-ext'],
  display: 'swap',
})

export type EventHeroType = 'bootcamp' | 'course' | 'workshop'

export type EventHeroDocument = GuidedBootcamp | GuidedCourse | GuidedWorkshop

export type EventHeroProps = {
  className?: string
  /**
   * The Payload document backing the individual activity page.
   * Expects a course, workshop or bootcamp document.
   */
  event: EventHeroDocument
  /** Where the primary call to action points. Defaults to the activity's registration route. */
  signUpHref?: string
  /** Label of the primary call to action. */
  signUpLabel?: string
  /** Which guided-learning activity this document represents. Drives the badge and default CTA route. */
  type: EventHeroType
}

const TYPE_CONFIG: Record<EventHeroType, { badge: string; basePath: string }> = {
  bootcamp: { badge: 'Bootcamp', basePath: 'bootcamps' },
  course: { badge: 'Curs', basePath: 'cursuri' },
  workshop: { badge: 'Workshop', basePath: 'workshops' },
}

const getDateLabel = (event: EventHeroDocument): string => {
  if ('startDate' in event && event.startDate) {
    const start = formatRomanianDate(event.startDate)
    const end = 'endDate' in event && event.endDate ? formatRomanianDate(event.endDate) : ''
    return end && end !== start ? `${start} – ${end}` : start
  }

  if ('date' in event && event.date) {
    return formatRomanianDate(event.date)
  }

  return ''
}

const getLocation = (event: EventHeroDocument): string | null => {
  return 'location' in event && event.location ? event.location : null
}

const getTeachers = (event: EventHeroDocument): string => {
  if (!Array.isArray(event.teachers)) return ''
  return event.teachers
    .map((entry) => entry?.teacher)
    .filter((name): name is string => Boolean(name))
    .join(', ')
}

const Decorations: React.FC = () => (
  <>
    <div className="pointer-events-none absolute inset-0">
      <div className="eh-float-slow absolute right-20 top-20 h-40 w-40 rounded-full bg-white opacity-20" />
      <div
        className="eh-float-slow absolute bottom-20 left-20 h-56 w-56 rounded-full bg-customOrange opacity-20"
        style={{ animationDelay: '1s' }}
      />
      <div
        className="eh-float-slow absolute left-1/4 top-1/3 h-24 w-24 rounded-full bg-white opacity-30"
        style={{ animationDelay: '1.5s' }}
      />
    </div>

    <div className="eh-float-slow pointer-events-none absolute right-1/4 top-1/4" style={{ animationDelay: '0.7s' }}>
      <Compass className="h-12 w-12 text-customBlack opacity-30" />
    </div>
    <div className="eh-float-slow pointer-events-none absolute bottom-1/4 left-1/3" style={{ animationDelay: '1.2s' }}>
      <Sparkles className="h-10 w-10 text-customBlack opacity-30" />
    </div>
  </>
)

const InfoChip: React.FC<{ children: React.ReactNode; icon: React.ReactNode }> = ({
  children,
  icon,
}) => (
  <div className="flex items-center gap-2 rounded-full bg-white/70 px-4 py-2 text-sm font-semibold text-customBlack backdrop-blur-sm">
    <span className="text-customBlue">{icon}</span>
    <span>{children}</span>
  </div>
)

export const EventHero: React.FC<EventHeroProps> = ({
  className,
  event,
  signUpHref,
  signUpLabel,
  type,
}) => {
  const { setHeaderTheme } = useHeaderTheme()

  useEffect(() => {
    setHeaderTheme('light')
  }, [setHeaderTheme])

  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: false,
  })

  const config = TYPE_CONFIG[type]
  const image = typeof event.photo === 'object' ? event.photo : null
  const description = richTextToPlainText(event.description?.root).trim()
  const dateLabel = getDateLabel(event)
  const location = getLocation(event)
  const teachers = getTeachers(event)
  const href = signUpHref || `/guided-learning/${config.basePath}/${event.slug}/participa`
  const ctaLabel = signUpLabel || 'Înscrie-te'

  return (
    <header
      ref={ref}
      className={clsx(
        'relative overflow-hidden bg-customLightBlue px-4 pb-24 pt-32 md:pt-36',
        className,
      )}
      style={{ fontFamily: nunito.style.fontFamily }}
    >
      <Decorations />

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          {/* Image column */}
          <div
            className={clsx('relative', inView ? 'eh-zoom-in' : 'opacity-0')}
            style={{ transitionDelay: '0.2s' }}
          >
            <div className="relative">
              {image?.url && (
                <div className="transform -rotate-2 rounded-2xl bg-white p-4 shadow-xl transition-transform duration-500 hover:rotate-0">
                  <div className="overflow-hidden rounded-xl">
                    <Media resource={image} imgClassName="w-full h-auto" priority />
                  </div>
                </div>
              )}

              <div className="absolute -bottom-6 -left-6 z-0 h-32 w-32 rounded-full bg-customOrange opacity-20" />
              <div className="absolute -right-6 -top-6 z-0 h-24 w-24 rounded-full bg-white opacity-30" />

              {config.badge && (
                <div className="absolute -right-4 top-6 z-20 -rotate-6 transform rounded-full bg-customOrange px-5 py-2 text-sm font-bold uppercase tracking-wide text-white shadow-lg">
                  {config.badge}
                </div>
              )}
            </div>
          </div>

          {/* Text column */}
          <div>
            <div
              className={clsx('mb-6', inView ? 'eh-slide-up' : 'opacity-0')}
              style={{ transitionDelay: '0.1s' }}
            >
              <p className="mb-2 text-sm font-bold uppercase tracking-[0.2em] text-customBlue">
                Guided Learning
              </p>
              <h1
                className="mb-4 text-4xl italic text-customBlack md:text-5xl lg:text-6xl"
                style={{ fontFamily: bangers.style.fontFamily }}
              >
                {event.title}
              </h1>
              <div className="h-2 w-40 rounded-full bg-customOrange" />
            </div>

            {description && (
              <p
                className={clsx(
                  'mb-8 line-clamp-3 max-w-xl text-lg leading-relaxed text-customBlack',
                  inView ? 'eh-fade-in' : 'opacity-0',
                )}
                style={{ transitionDelay: '0.3s' }}
              >
                {description}
              </p>
            )}

            {(dateLabel || teachers || location) && (
              <div
                className={clsx(
                  'mb-8 flex flex-wrap gap-3',
                  inView ? 'eh-fade-in' : 'opacity-0',
                )}
                style={{ transitionDelay: '0.45s' }}
              >
                {dateLabel && <InfoChip icon={<Calendar size={16} />}>{dateLabel}</InfoChip>}
                {teachers && <InfoChip icon={<Users size={16} />}>{teachers}</InfoChip>}
                {location && <InfoChip icon={<MapPin size={16} />}>{location}</InfoChip>}
              </div>
            )}

            <div
              className={clsx('flex flex-wrap gap-4', inView ? 'eh-fade-in' : 'opacity-0')}
              style={{ transitionDelay: '0.6s' }}
            >
              <Link
                href={href}
                className="group inline-flex transform items-center rounded-full bg-customOrange px-8 py-3 font-bold text-white shadow-lg transition-colors duration-300 hover:scale-105 hover:bg-white hover:text-customOrange"
              >
                {ctaLabel}
                <ArrowRight
                  className="ml-2 transform transition-transform duration-300 group-hover:translate-x-1"
                  size={20}
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default EventHero
