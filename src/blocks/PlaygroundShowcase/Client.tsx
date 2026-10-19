'use client'

import { Bangers, Nunito } from 'next/font/google'
import clsx from 'clsx'
import React, { useState } from 'react'
import { useInView } from 'react-intersection-observer'
import { ArrowRight, Calendar, Sparkles } from 'lucide-react'

import { Icon } from '@/components/Icon'
import { CMSLink } from '@/components/Link'
import { Media } from '@/components/Media'

const bangers = Bangers({
  subsets: ['latin', 'latin-ext'],
  weight: '400',
  display: 'swap',
})

const nunito = Nunito({
  subsets: ['latin', 'latin-ext'],
  display: 'swap',
})

type MediaResource = React.ComponentProps<typeof Media>['resource']
type CMSLinkProps = React.ComponentProps<typeof CMSLink>

export type PlaygroundShowcaseCard = {
  id?: string | number | null
  title?: string | null
  description?: string | null
  icon?: string | null
  image?: MediaResource
  meta?: string | null
}

export type PlaygroundShowcaseTab = {
  id?: string | null
  label?: string | null
  cards?: PlaygroundShowcaseCard[] | null
}

export type PlaygroundShowcaseLink = {
  id?: string | null
  link?: {
    id?: string | null
    type?: 'custom' | 'reference' | null
    label?: string | null
    newTab?: boolean | null
    url?: string | null
    reference?: CMSLinkProps['reference']
  } | null
}

export type PlaygroundShowcaseProps = {
  className?: string
  badge?: string | null
  sectionTitle?: string | null
  sectionDescription?: string | null
  tabs?: PlaygroundShowcaseTab[] | null
  links?: PlaygroundShowcaseLink[] | null
}

export const PlaygroundShowcaseClient: React.FC<PlaygroundShowcaseProps> = (props) => {
  const { badge, className, links, sectionDescription, sectionTitle, tabs } = props

  const [activeTab, setActiveTab] = useState(0)

  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: false,
  })

  const validTabs = (tabs || []).filter((tab) => (tab.cards?.length ?? 0) > 0)

  if (validTabs.length === 0) return null

  const safeIndex = activeTab < validTabs.length ? activeTab : 0
  const activeCards = validTabs[safeIndex]?.cards || []
  const cta = (links || [])[0]?.link

  return (
    <section
      ref={ref}
      className={clsx('py-20 px-4 bg-customWhite relative overflow-hidden', className)}
      style={{ fontFamily: nunito.style.fontFamily }}
    >
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-20 right-20 w-40 h-40 bg-customOrange rounded-full opacity-10" />
        <div className="absolute bottom-20 left-20 w-56 h-56 bg-customLightBlue rounded-full opacity-20" />
      </div>

      <div className="max-w-7xl mx-auto relative">
        {/* Section header */}
        <div className="text-center mb-16">
          <div
            className={clsx('inline-block', inView ? 'animate-slide-up' : 'opacity-0')}
            style={{ transitionDelay: '0.1s' }}
          >
            {badge && (
              <span className="inline-flex items-center gap-2 rounded-full bg-white/80 px-4 py-1 text-xs font-bold uppercase tracking-widest text-customBlack shadow-sm mb-4">
                <Sparkles className="h-3.5 w-3.5 text-customOrange" />
                {badge}
              </span>
            )}

            {sectionTitle && (
              <h2
                className="text-4xl md:text-5xl text-customBlack mb-4 italic transform -rotate-1"
                style={{ fontFamily: bangers.style.fontFamily }}
              >
                {sectionTitle}
              </h2>
            )}

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

        {/* Category tabs */}
        <div
          className={clsx(
            'flex flex-wrap justify-center mb-12',
            inView ? 'animate-fade-in' : 'opacity-0',
          )}
          style={{ transitionDelay: '0.3s' }}
        >
          {validTabs.map((tab, index) => (
            <button
              key={tab.id || tab.label || index}
              type="button"
              onClick={() => setActiveTab(index)}
              aria-pressed={safeIndex === index}
              className={clsx(
                'px-6 py-3 mx-2 mb-2 rounded-full font-bold transition-all duration-300',
                safeIndex === index
                  ? 'bg-customOrange text-white shadow-md'
                  : 'bg-white text-customBlack hover:bg-customLightOrange',
              )}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Experiences grid */}
        <div key={safeIndex} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {activeCards.map((card, index) => {
            const imageResource = typeof card.image === 'object' && card.image ? card.image : null

            return (
              <div
                key={card.id ?? card.title ?? index}
                className={clsx(
                  'group bg-white rounded-2xl overflow-hidden shadow-lg transform transition-all duration-500 hover:-translate-y-2 hover:shadow-xl flex flex-col',
                  inView ? 'animate-fade-in' : 'opacity-0',
                )}
                style={{ transitionDelay: `${0.4 + index * 0.1}s` }}
              >
                {/* Card image */}
                <div className="relative h-60 overflow-hidden bg-customLightBlue">
                  {imageResource?.url ? (
                    <Media
                      resource={imageResource}
                      fill
                      imgClassName="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  ) : null}

                  {/* Meta / date badge */}
                  {card.meta && (
                    <div className="absolute bottom-0 right-0 bg-customBlue text-white text-sm font-bold px-4 py-2 rounded-tl-2xl">
                      <Calendar size={16} className="inline-block mr-2" />
                      {card.meta}
                    </div>
                  )}
                </div>

                {/* Card content */}
                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex items-center gap-2 mb-3">
                    {card.icon && (
                      <Icon name={card.icon} className="w-5 h-5 text-customOrange shrink-0" />
                    )}
                    <h3 className="text-xl font-bold text-customBlack">{card.title}</h3>
                  </div>

                  {card.description && (
                    <p className="text-customBlack flex-grow">{card.description}</p>
                  )}
                </div>
              </div>
            )
          })}
        </div>

        {/* Optional section CTA */}
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

export default PlaygroundShowcaseClient
