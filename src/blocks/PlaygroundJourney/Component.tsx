'use client'

import { Bangers, Nunito } from 'next/font/google'
import clsx from 'clsx'
import React from 'react'
import { useInView } from 'react-intersection-observer'
import { ArrowRight } from 'lucide-react'

import { CMSLink } from '@/components/Link'
import { Media } from '@/components/Media'
import RichText from '@/components/RichText'

import type { PlaygroundJourney as PlaygroundJourneyBlockProps } from '@/payload-types'

const bangers = Bangers({
  subsets: ['latin', 'latin-ext'],
  weight: '400',
  display: 'swap',
})

const nunito = Nunito({
  subsets: ['latin', 'latin-ext'],
  display: 'swap',
})

export type Props = {
  className?: string
} & PlaygroundJourneyBlockProps

type Area = PlaygroundJourneyBlockProps['areas'][0]

const AreaSection: React.FC<{ area: Area; isEven: boolean }> = ({ area, isEven }) => {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: false,
  })

  const isOrange = area.color === 'customOrange'
  const bgColor = isOrange ? 'bg-customOrange' : 'bg-customWhite'
  const textColor = isOrange ? 'text-white' : 'text-customBlack'
  const btnColor = isOrange
    ? 'bg-white text-customOrange hover:bg-customBlack hover:text-white'
    : 'bg-customBlue text-white hover:bg-customOrange'

  const cta = (area.links || [])[0]?.link

  return (
    <div ref={ref} className={clsx('w-full py-20', bgColor)}>
      <div className="max-w-7xl mx-auto px-4">
        <div
          className={clsx(
            'grid grid-cols-1 lg:grid-cols-2 gap-12 items-center',
            isEven ? 'lg:flex-row-reverse' : '',
          )}
        >
          {/* Image side */}
          <div
            className={clsx(inView ? 'animate-fade-in' : 'opacity-0')}
            style={{ transitionDelay: '0.2s' }}
          >
            <div className="relative">
              <div
                className={clsx(
                  'rounded-3xl overflow-hidden shadow-xl',
                  isEven ? 'transform -rotate-2' : 'transform rotate-2',
                )}
              >
                {typeof area.image === 'object' && area.image?.url && (
                  <Media
                    resource={area.image}
                    className="w-full h-auto"
                    imgClassName="w-full h-auto object-cover"
                  />
                )}
              </div>

              {/* Decorative elements */}
              <div
                className={clsx(
                  'absolute -bottom-6 w-32 h-32 bg-customLightBlue rounded-full opacity-30 z-0',
                  isEven ? '-left-6' : '-right-6',
                )}
              ></div>

              {/* Badge */}
              {area.badgeText && (
                <div
                  className={clsx(
                    'absolute bg-customBlue text-white text-lg font-bold px-6 py-2 rounded-full shadow-lg transform',
                    isEven ? 'top-6 left-6 rotate-3' : 'top-6 right-6 -rotate-3',
                  )}
                >
                  {area.badgeText}
                </div>
              )}
            </div>
          </div>

          {/* Content side */}
          <div
            className={clsx(inView ? 'animate-slide-up' : 'opacity-0')}
            style={{ transitionDelay: '0.3s' }}
          >
            <div className="space-y-6">
              <h2
                className={clsx(
                  'text-4xl md:text-5xl italic transform',
                  textColor,
                  isEven ? 'rotate-1' : '-rotate-1',
                )}
                style={{ fontFamily: bangers.style.fontFamily }}
              >
                {area.name}
              </h2>

              <div className="w-24 h-2 bg-customBlue rounded-full"></div>

              <div className={clsx('text-lg leading-relaxed', textColor)}>
                <RichText data={area.description} enableGutter={false} enableProse={false} />
              </div>

              {cta && (
                <CMSLink
                  {...cta}
                  className={clsx(
                    'group inline-flex items-center font-bold py-3 px-8 rounded-full transition-colors duration-300 shadow-md mt-4',
                    btnColor,
                  )}
                >
                  {area.ctaLabel ? `${area.ctaLabel} ${area.name}` : area.name}
                  <ArrowRight
                    className="ml-2 transform group-hover:translate-x-1 transition-transform duration-300"
                    size={20}
                  />
                </CMSLink>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export const PlaygroundJourney: React.FC<Props> = (props) => {
  const { className, areas } = props

  if (!areas || areas.length === 0) return null

  return (
    <section className={clsx('w-full', className)} style={{ fontFamily: nunito.style.fontFamily }}>
      {areas.map((area, index) => (
        <AreaSection key={area.id || index} area={area} isEven={index % 2 === 1} />
      ))}
    </section>
  )
}

export default PlaygroundJourney
