'use client'

import clsx from 'clsx'
import { Bangers, Nunito } from 'next/font/google'
import React from 'react'
import { useInView } from 'react-intersection-observer'
import { Check, Heart, Sparkles } from 'lucide-react'

import { CMSLink } from '@/components/Link'
import { Icon } from '@/components/Icon'
import { Media } from '@/components/Media'
import RichText from '@/components/RichText'

import type { DefaultTypedEditorState } from '@payloadcms/richtext-lexical'

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

export type ObjectiveLink = Partial<
  Pick<CMSLinkProps, 'type' | 'newTab' | 'url' | 'label' | 'reference'>
>

export type Objective = {
  id?: string | number | null
  title?: string | null
  description?: string | null
  target?: string | null
  image?: MediaResource
  icon?: string | null
  color?: string | null
}

export type ObjectiveLinkRow = {
  id?: string | number | null
  link?: ObjectiveLink | null
}

export type ObjectivesProps = {
  badgeText?: string | null
  heading?: string | null
  sectionDescription?: DefaultTypedEditorState | null
  objectives?: Objective[] | null
  footerText?: string | null
  links?: ObjectiveLinkRow[] | null
  className?: string
}

type AccentColor = 'blue' | 'lightBlue' | 'orange' | 'lightOrange' | 'black' | 'white'

const COLORS: Record<AccentColor, { badge: string; text: string; icon: string }> = {
  blue: { badge: 'bg-customBlue', text: 'text-customBlue', icon: 'text-white' },
  lightBlue: {
    badge: 'bg-customLightBlue',
    text: 'text-customLightBlue',
    icon: 'text-customBlack',
  },
  orange: { badge: 'bg-customOrange', text: 'text-customOrange', icon: 'text-white' },
  lightOrange: {
    badge: 'bg-customLightOrange',
    text: 'text-customLightOrange',
    icon: 'text-customBlack',
  },
  black: { badge: 'bg-customBlack', text: 'text-customBlack', icon: 'text-white' },
  white: { badge: 'bg-customWhite', text: 'text-customBlack', icon: 'text-customBlack' },
}

export const ObjectivesBlock: React.FC<ObjectivesProps> = (props) => {
  const { badgeText, className, footerText, heading, links, objectives, sectionDescription } = props

  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: false,
  })

  const hasLinks = Array.isArray(links) && links.some((row) => Boolean(row?.link))
  const hasFooter = Boolean(footerText) || hasLinks

  return (
    <section
      id="objectives"
      ref={ref}
      className={clsx('py-20 px-4 bg-customWhite relative overflow-hidden', className)}
      style={{ fontFamily: nunito.style.fontFamily }}
    >
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div
          className={clsx('mb-16 text-center', inView ? 'animate-slide-up' : 'opacity-0')}
          style={{ transitionDelay: '0.1s' }}
        >
          {badgeText && (
            <div className="inline-flex items-center gap-2 rounded-full bg-customLightBlue px-4 py-1 mb-4 text-xs font-bold uppercase tracking-widest text-customBlue">
              <Sparkles className="h-3.5 w-3.5" />
              {badgeText}
            </div>
          )}

          <h2
            className="text-4xl md:text-5xl font-bangers text-customBlack mb-4"
            style={{ fontFamily: bangers.style.fontFamily }}
          >
            {heading}
          </h2>

          <div className="w-32 h-2 bg-customBlue mx-auto rounded-full" />

          {sectionDescription && (
            <div className="text-lg text-customBlack max-w-3xl mx-auto mt-6">
              <RichText data={sectionDescription} enableGutter={false} enableProse={false} />
            </div>
          )}
        </div>

        {/* Objective cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {objectives?.map((objective, index) => {
            const color = COLORS[(objective.color as AccentColor) || 'blue'] || COLORS.blue
            const imageResource =
              typeof objective.image === 'object' && objective.image !== null
                ? objective.image
                : null

            return (
              <div
                key={objective.id || index}
                className={clsx(
                  'bg-white rounded-2xl shadow-lg overflow-hidden transform transition-all duration-500 hover:-translate-y-2 hover:shadow-xl',
                  inView ? 'animate-fade-in' : 'opacity-0',
                )}
                style={{ transitionDelay: `${0.2 + index * 0.1}s` }}
              >
                <div className="h-48 overflow-hidden">
                  {imageResource?.url ? (
                    <Media
                      resource={imageResource}
                      imgClassName="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                    />
                  ) : (
                    <div className="h-full w-full bg-gradient-to-r from-customLightBlue to-customBlue" />
                  )}
                </div>

                <div className="p-6">
                  <div
                    className={clsx(
                      'rounded-full p-3 w-14 h-14 flex items-center justify-center mb-4 -mt-12 border-4 border-white shadow-lg',
                      color.badge,
                    )}
                  >
                    <Icon
                      name={objective.icon || 'school'}
                      className={clsx('w-8 h-8', color.icon)}
                    />
                  </div>

                  <h3 className="text-xl font-bold text-customBlack mb-3">{objective.title}</h3>

                  {objective.description && (
                    <p className="text-customBlack">{objective.description}</p>
                  )}

                  {objective.target && (
                    <div className="mt-4 pt-4 border-t border-gray-100">
                      <div className={clsx('flex items-center', color.text)}>
                        <Check className="w-5 h-5 mr-2" />
                        <span className="font-medium">{objective.target}</span>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            )
          })}
        </div>

        {/* Closing text + CTA */}
        {hasFooter && (
          <div
            className={clsx('text-center', inView ? 'animate-fade-in' : 'opacity-0')}
            style={{ transitionDelay: '0.5s' }}
          >
            {footerText && (
              <p className="text-lg text-customBlack mb-8 max-w-3xl mx-auto">{footerText}</p>
            )}

            {links?.map((row, i) => {
              const link = row?.link
              if (!link) return null

              return (
                <CMSLink
                  key={link.label || i}
                  {...link}
                  className="inline-flex items-center bg-customBlue hover:bg-customOrange text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  <Heart className="ml-2 w-5 h-5" />
                </CMSLink>
              )
            })}
          </div>
        )}
      </div>
    </section>
  )
}

export default ObjectivesBlock
