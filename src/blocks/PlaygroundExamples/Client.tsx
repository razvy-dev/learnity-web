'use client'

import { Bangers, Nunito } from 'next/font/google'
import clsx from 'clsx'
import React from 'react'
import { useInView } from 'react-intersection-observer'
import { ArrowRight } from 'lucide-react'

import { CMSLink } from '@/components/Link'
import { PlaygroundEventCard } from '@/components/PlaygroundEventCard'

import type { Event, PlaygroundExamples as PlaygroundExamplesBlockProps } from '@/payload-types'

const bangers = Bangers({
  subsets: ['latin', 'latin-ext'],
  weight: '400',
  display: 'swap',
})

const nunito = Nunito({
  subsets: ['latin', 'latin-ext'],
  display: 'swap',
})

export type PlaygroundExamplesClientProps = Omit<PlaygroundExamplesBlockProps, 'events'> & {
  className?: string
  events: Event[]
}

const staggerClass = (index: number): string => {
  if (index === 1) return 'md:mt-12'
  if (index === 2) return 'md:mt-24'
  return ''
}

export const PlaygroundExamplesClient: React.FC<PlaygroundExamplesClientProps> = (props) => {
  const { sectionTitle, sectionDescription, events, cardCtaText, links, className } = props

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
      {/* Playful background elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-10 left-10 w-32 h-32 bg-customOrange rounded-full opacity-10" />
        <div className="absolute bottom-10 right-10 w-48 h-48 bg-customLightOrange rounded-full opacity-20" />
        <div className="absolute top-1/3 right-1/4 w-16 h-16 bg-customBlue rounded-full opacity-10" />
        <div className="absolute bottom-1/3 left-1/4 w-24 h-24 bg-customOrange rounded-full opacity-10" />
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

        {/* Playground events - overlapping cards layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-4 items-start">
          {events.map((event, index) => (
            <div
              key={event.id}
              className={clsx(
                'md:col-span-6 lg:col-span-4',
                staggerClass(index),
                inView ? 'animate-fade-in' : 'opacity-0',
              )}
              style={{ transitionDelay: `${0.3 + index * 0.1}s` }}
            >
              <PlaygroundEventCard event={event} ctaText={cardCtaText} />
            </div>
          ))}
        </div>

        {/* View all playground events button */}
        {cta && (
          <div
            className={clsx('text-center mt-16', inView ? 'animate-fade-in' : 'opacity-0')}
            style={{ transitionDelay: '0.7s' }}
          >
            <CMSLink
              {...cta}
              appearance="inline"
              className="inline-flex items-center bg-white border-2 border-customOrange hover:bg-customOrange text-customOrange hover:text-white font-bold py-3 px-8 rounded-full transition-colors duration-300 shadow-md"
            >
              <ArrowRight className="ml-2" size={20} />
            </CMSLink>
          </div>
        )}
      </div>
    </section>
  )
}

export default PlaygroundExamplesClient
