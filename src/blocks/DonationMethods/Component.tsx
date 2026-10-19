'use client'

import { Bangers, Nunito } from 'next/font/google'
import clsx from 'clsx'
import React from 'react'
import { useInView } from 'react-intersection-observer'
import { ArrowRight, Check, Sparkles } from 'lucide-react'

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

export type DonationMethodBullet = {
  id?: string | null
  text?: string | null
}

export type DonationMethodCard = {
  id?: string | null
  title?: string | null
  description?: string | null
  bullets?: DonationMethodBullet[] | null
  icon?: string | null
  image?: MediaResource
  variant?: 'blue' | 'orange' | null
  link?: {
    type?: 'custom' | 'reference' | null
    label?: string | null
    newTab?: boolean | null
    url?: string | null
    reference?: CMSLinkProps['reference']
  } | null
}

export type DonationMethodsCorporation = {
  icon?: string | null
  title?: string | null
  description?: string | null
  links?:
    | {
        id?: string | null
        link?: {
          type?: 'custom' | 'reference' | null
          label?: string | null
          newTab?: boolean | null
          url?: string | null
          reference?: CMSLinkProps['reference']
        } | null
      }[]
    | null
}

export type DonationMethodsProps = {
  className?: string
  badgeText?: string | null
  heading?: string | null
  sectionDescription?: string | null
  methods?: DonationMethodCard[] | null
  corporate?: DonationMethodsCorporation | null
}

const CARD_THEMES = {
  blue: {
    header: 'bg-gradient-to-r from-customLightBlue to-customBlue',
    icon: 'text-white',
    check: 'text-customBlue',
    button: 'bg-customBlue hover:bg-customOrange',
  },
  orange: {
    header: 'bg-gradient-to-r from-customLightOrange to-customOrange',
    icon: 'text-white',
    check: 'text-customOrange',
    button: 'bg-customOrange hover:bg-customBlue',
  },
} as const

export const DonationMethodsBlock: React.FC<DonationMethodsProps> = (props) => {
  const { badgeText, className, corporate, heading, methods, sectionDescription } = props

  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: false,
  })

  const cards = Array.isArray(methods) ? methods : []
  const corporateLinks = corporate?.links ?? []

  return (
    <section
      ref={ref}
      id="method"
      className={clsx('relative overflow- bg-customWhite px-4 py-20', className)}
      style={{ fontFamily: nunito.style.fontFamily }}
    >
      <style>{`
        @keyframes donationMethods-slide-up {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes donationMethods-fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .donationMethods-slide-up {
          animation: donationMethods-slide-up 0.8s ease-out both;
        }
        .donationMethods-fade-in {
          animation: donationMethods-fade-in 0.8s ease-out both;
        }
        @media (prefers-reduced-motion: reduce) {
          .donationMethods-slide-up,
          .donationMethods-fade-in {
            animation: none;
          }
        }
      `}</style>

      <div className="relative z-10 mx-auto max-w-6xl">
        {/* Header */}
        <div className="mb-12 text-center">
          {badgeText && (
            <div className={clsx('mb-4', inView ? 'donationMethods-fade-in' : 'opacity-0')}>
              <span className="inline-flex items-center gap-2 rounded-full bg-customBlue px-4 py-1 text-xs font-bold uppercase tracking-widest text-white shadow-md">
                <Sparkles className="h-3.5 w-3.5" />
                {badgeText}
              </span>
            </div>
          )}

          <h2
            className={clsx(
              'mb-4 text-4xl italic text-customBlack md:text-5xl',
              inView ? 'donationMethods-slide-up' : 'opacity-0',
            )}
            style={{ fontFamily: bangers.style.fontFamily }}
          >
            {heading}
          </h2>
          <div className="mx-auto h-2 w-32 rounded-full bg-customOrange" />
          {sectionDescription && (
            <p
              className={clsx(
                'mx-auto mt-6 max-w-3xl text-lg text-customBlack',
                inView ? 'donationMethods-fade-in' : 'opacity-0',
              )}
              style={{ animationDelay: '0.1s' }}
            >
              {sectionDescription}
            </p>
          )}
        </div>

        {/* Method cards */}
        {cards.length > 0 && (
          <div className="mb-12 grid grid-cols-1 gap-8 md:grid-cols-2">
            {cards.map((card, index) => {
              const theme = CARD_THEMES[(card.variant as 'blue' | 'orange') || 'blue'] || CARD_THEMES.blue
              const imageResource = typeof card.image === 'object' && card.image ? card.image : null

              return (
                <div
                  key={card.id || index}
                  className={clsx(
                    'overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-lg transition-all duration-500 hover:-translate-y-2 hover:shadow-xl',
                    inView ? 'donationMethods-fade-in' : 'opacity-0',
                  )}
                  style={{ animationDelay: `${0.2 + index * 0.1}s` }}
                >
                  <div
                    className={clsx(
                      'flex h-48 items-center justify-center overflow-hidden',
                      theme.header,
                    )}
                  >
                    {imageResource?.url ? (
                      <Media resource={imageResource} fill imgClassName="object-cover" />
                    ) : card.icon ? (
                      <Icon name={card.icon} className={clsx('h-24 w-24', theme.icon)} />
                    ) : null}
                  </div>

                  <div className="p-8">
                    <h3 className="mb-4 text-2xl font-bold text-customBlack">{card.title}</h3>
                    {card.description && <p className="mb-6 text-customBlack">{card.description}</p>}

                    {Array.isArray(card.bullets) && card.bullets.length > 0 && (
                      <div className="mb-8 space-y-4">
                        {card.bullets.map((bullet, i) => (
                          <div key={bullet.id || i} className="flex items-center">
                            <Check className={clsx('mr-3 h-5 w-5', theme.check)} />
                            <span>{bullet.text}</span>
                          </div>
                        ))}
                      </div>
                    )}

                    {card.link?.type && (
                      <CMSLink
                        className={clsx(
                          'inline-flex items-center rounded-xl px-8 py-4 font-bold text-white shadow-lg transition-all duration-300 hover:scale-105',
                          theme.button,
                        )}
                        newTab={card.link.newTab}
                        reference={card.link.reference}
                        type={card.link.type}
                        url={card.link.url}
                      >
                        {card.link.label}
                        <ArrowRight className="ml-2 h-5 w-5" />
                      </CMSLink>
                    )}
                  </div>
                </div>
              )
            })}
          </div>
        )}

        {/* Corporate donations */}
        {corporate && (
          <div
            className={clsx(
              'rounded-2xl bg-customLightBlue/10 p-8',
              inView ? 'donationMethods-fade-in' : 'opacity-0',
            )}
            style={{ animationDelay: '0.4s' }}
          >
            <div className="flex flex-col items-center md:flex-row">
              <div className="mb-6 flex justify-center md:mb-0 md:w-1/4">
                <div className="rounded-full bg-white p-4 shadow-lg">
                  <Icon name={corporate.icon || 'shield'} className="h-24 w-24 text-customBlue" />
                </div>
              </div>
              <div className="md:w-3/4 md:pl-8">
                <h3 className="mb-4 text-2xl font-bold text-customBlack">{corporate.title}</h3>
                {corporate.description && (
                  <p className="mb-6 text-customBlack">{corporate.description}</p>
                )}
                {corporateLinks.length > 0 && (
                  <div className="flex flex-wrap gap-4">
                    {corporateLinks.map(({ link }, i) => {
                      if (!link?.type) return null

                      return (
                        <CMSLink
                          key={link.label || i}
                          className={clsx(
                            'inline-flex items-center rounded-xl border-2 px-6 py-3 font-bold transition-all duration-300',
                            i === 0
                              ? 'border-customBlue bg-white text-customBlue hover:bg-customLightBlue'
                              : 'border-customBlack bg-white text-customBlack hover:bg-gray-100',
                          )}
                          newTab={link.newTab}
                          reference={link.reference}
                          type={link.type}
                          url={link.url}
                        >
                          {link.label}
                          <ArrowRight className="ml-2 h-5 w-5" />
                        </CMSLink>
                      )
                    })}
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

export default DonationMethodsBlock
