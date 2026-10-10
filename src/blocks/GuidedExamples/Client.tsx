'use client'

import { Bangers, Nunito } from 'next/font/google'
import clsx from 'clsx'
import React from 'react'
import { useInView } from 'react-intersection-observer'
import { ArrowRight } from 'lucide-react'

import { CMSLink } from '@/components/Link'
import { GuidedWorkshopCard } from '@/components/GuidedWorkshopCard'

import type { GuidedExamples as GuidedExamplesBlockProps } from '@/payload-types'
import type { GuidedWorkshopCardData } from '@/components/GuidedWorkshopCard'

const bangers = Bangers({
  subsets: ['latin', 'latin-ext'],
  weight: '400',
  display: 'swap',
})

const nunito = Nunito({
  subsets: ['latin', 'latin-ext'],
  display: 'swap',
})

export type GuidedExamplesClientProps = Omit<GuidedExamplesBlockProps, 'workshops'> & {
  className?: string
  workshops: GuidedWorkshopCardData[]
}

export const GuidedExamplesClient: React.FC<GuidedExamplesClientProps> = (props) => {
  const { sectionTitle, sectionDescription, workshops, badgeText, cardCtaText, links, className } =
    props

  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: false,
  })

  const cta = (links || [])[0]?.link

  return (
    <section
      ref={ref}
      className={clsx('py-20 px-4 bg-customWhite relative overflow-hidden', className)}
      style={{ fontFamily: nunito.style.fontFamily }}
    >
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-20 right-20 w-40 h-40 bg-customLightBlue rounded-full opacity-20" />
        <div className="absolute bottom-40 left-20 w-56 h-56 bg-customLightOrange rounded-full opacity-20" />
      </div>

      <div className="max-w-7xl mx-auto relative">
        {/* Section header */}
        <div className="text-center mb-16">
          <div
            className={clsx('inline-block', inView ? 'animate-slide-up' : 'opacity-0')}
            style={{ transitionDelay: '0.1s' }}
          >
            <h2
              className="text-4xl md:text-5xl text-customBlack mb-4 italic"
              style={{ fontFamily: bangers.style.fontFamily }}
            >
              {sectionTitle}
            </h2>
            <div className="w-40 h-2 bg-customOrange mx-auto rounded-full" />
          </div>

          {sectionDescription && (
            <p
              className={clsx(
                'text-lg text-customBlack max-w-2xl mx-auto mt-6',
                inView ? 'animate-fade-in' : 'opacity-0',
              )}
              style={{ transitionDelay: '0.2s' }}
            >
              {sectionDescription}
            </p>
          )}
        </div>

        {/* Workshops grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          {workshops.map((workshop, index) => (
            <div
              key={workshop.id}
              className={clsx('h-full', inView ? 'animate-fade-in' : 'opacity-0')}
              style={{ transitionDelay: `${0.3 + index * 0.1}s` }}
            >
              <GuidedWorkshopCard
                workshop={workshop}
                badgeText={badgeText}
                ctaText={cardCtaText}
              />
            </div>
          ))}
        </div>

        {/* View all workshops button */}
        {cta && (
          <div
            className={clsx('text-center mt-12', inView ? 'animate-fade-in' : 'opacity-0')}
            style={{ transitionDelay: '0.7s' }}
          >
            <CMSLink
              {...cta}
              appearance="inline"
              className="inline-flex items-center bg-white border-2 border-customBlue hover:bg-customBlue text-customBlue hover:text-white font-bold py-3 px-8 rounded-full transition-colors duration-300 shadow-md"
            >
              <ArrowRight className="ml-2" size={20} />
            </CMSLink>
          </div>
        )}
      </div>
    </section>
  )
}

export default GuidedExamplesClient
