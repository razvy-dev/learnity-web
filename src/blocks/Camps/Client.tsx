'use client'

import type { DefaultTypedEditorState } from '@payloadcms/richtext-lexical'
import { Bangers, Nunito } from 'next/font/google'
import clsx from 'clsx'
import React, { useState } from 'react'
import { useInView } from 'react-intersection-observer'
import { Calendar, Eye, HandCoins, Home, MapPin, Sparkles } from 'lucide-react'

import { Icon } from '@/components/Icon'
import { CMSLink } from '@/components/Link'
import { Media } from '@/components/Media'
import RichText from '@/components/RichText'

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

export type CampsFeature = {
  id?: string | null
  title?: string | null
  description?: string | null
  icon?: string | null
}

export type CampsLink = {
  id?: string | null
  link?: {
    type?: 'custom' | 'reference' | null
    label?: string | null
    newTab?: boolean | null
    url?: string | null
    reference?: CMSLinkProps['reference']
  } | null
}

export type CampsProps = {
  className?: string
  badgeText?: string | null
  heading?: string | null
  sectionSubtitle?: string | null
  title?: string | null
  titleSubtitle?: string | null
  description?: DefaultTypedEditorState | null
  age?: string | null
  dates?: string | null
  datesNote?: string | null
  location?: string | null
  locationNote?: string | null
  price?: string | null
  priceNote?: string | null
  featuresTitle?: string | null
  features?: CampsFeature[] | null
  image?: MediaResource
  links?: CampsLink[] | null
}

export const CampsClient: React.FC<CampsProps> = (props) => {
  const {
    age,
    badgeText,
    className,
    dates,
    datesNote,
    description,
    features,
    featuresTitle,
    heading,
    image,
    links,
    location,
    locationNote,
    price,
    priceNote,
    sectionSubtitle,
    title,
    titleSubtitle,
  } = props

  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: false,
  })

  const [isHovered, setIsHovered] = useState(false)

  const imageResource = typeof image === 'object' && image ? image : null

  return (
    <section
      ref={ref}
      className={clsx('py-20 px-4 bg-customWhite relative overflow-hidden', className)}
      style={{ fontFamily: nunito.style.fontFamily }}
    >
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-20 left-10 w-32 h-32 bg-customOrange rounded-full opacity-15 animate-bounce-slow"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-customBlue rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute bottom-20 left-1/4 w-40 h-40 bg-customLightBlue rounded-full opacity-10 animate-spin-slow"></div>
        <div className="absolute bottom-40 right-10 w-20 h-20 bg-customOrange rounded-full opacity-15"></div>

        {/* Floating icons */}
        <div className="absolute top-32 right-1/3 animate-bounce-slow">
          <Home className="w-8 h-8 text-customBlue opacity-30" />
        </div>
        <div className="absolute bottom-32 left-1/3 animate-pulse">
          <Eye className="w-10 h-10 text-customOrange opacity-25" />
        </div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section header */}
        <div className="text-center mb-16">
          {badgeText && (
            <div
              className={clsx('mb-4', inView ? 'animate-fade-in' : 'opacity-0')}
              style={{ transitionDelay: '0.1s' }}
            >
              <span className="inline-flex items-center gap-2 rounded-full bg-customBlue px-4 py-1 text-xs font-bold uppercase tracking-widest text-white shadow-md">
                <Sparkles className="h-3.5 w-3.5" />
                {badgeText}
              </span>
            </div>
          )}

          <h2
            className={clsx(
              'text-5xl md:text-6xl text-customBlack mb-4 italic',
              inView ? 'animate-slide-up' : 'opacity-0',
            )}
            style={{ fontFamily: bangers.style.fontFamily, transitionDelay: '0.15s' }}
          >
            {heading}
          </h2>

          {sectionSubtitle && (
            <p
              className={clsx('text-xl text-customBlack opacity-80', inView ? 'animate-fade-in' : 'opacity-0')}
              style={{ transitionDelay: '0.2s' }}
            >
              {sectionSubtitle}
            </p>
          )}
        </div>

        {/* Camp card */}
        <div
          className={clsx(
            'transform transition-all duration-1000',
            inView ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0',
          )}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden transform transition-all duration-500 hover:shadow-2xl hover:-translate-y-2">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              {/* Image Section */}
              <div className="relative h-80 lg:h-full overflow-hidden bg-customLightBlue">
                <div
                  className={clsx(
                    'absolute inset-0 transition-transform duration-700',
                    isHovered ? 'scale-110' : 'scale-100',
                  )}
                >
                  {imageResource?.url && <Media resource={imageResource} fill imgClassName="object-cover" />}
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>

                {/* Age group badge */}
                {age && (
                  <div className="absolute top-6 left-6 bg-customBlue text-white px-4 py-2 rounded-full font-bold shadow-lg">
                    {age}
                  </div>
                )}

                {/* Bottom overlay info */}
                <div className="absolute bottom-6 left-6 right-6">
                  <h3
                    className="text-3xl md:text-4xl text-white mb-2"
                    style={{ fontFamily: bangers.style.fontFamily }}
                  >
                    {title}
                  </h3>
                  {titleSubtitle && <p className="text-white opacity-90 text-lg">{titleSubtitle}</p>}
                </div>
              </div>

              {/* Content Section */}
              <div className="p-8 lg:p-12">
                <div className="space-y-6">
                  {/* Event Details */}
                  <div className="flex flex-row flex-wrap justify-around gap-4">
                    {dates && (
                      <div className="flex items-center space-x-3 p-3 bg-customLightBlue rounded-xl">
                        <Calendar size={24} className="text-customBlue shrink-0" />
                        <div>
                          <p className="font-bold text-customBlack">{dates}</p>
                          {datesNote && (
                            <p className="text-sm text-customBlack opacity-70">{datesNote}</p>
                          )}
                        </div>
                      </div>
                    )}

                    {location && (
                      <div className="flex items-center space-x-3 p-3 bg-customLightOrange rounded-xl">
                        <MapPin size={24} className="text-customOrange shrink-0" />
                        <div>
                          <p className="font-bold text-customBlack">{location}</p>
                          {locationNote && (
                            <p className="text-sm text-customBlack opacity-70">{locationNote}</p>
                          )}
                        </div>
                      </div>
                    )}

                    {price && (
                      <div className="flex items-center space-x-3 p-3 bg-customLightBlue rounded-xl">
                        <HandCoins size={24} className="text-customBlue shrink-0" />
                        <div>
                          <p className="font-bold text-customBlack">{price}</p>
                          {priceNote && (
                            <p className="text-sm text-customBlack opacity-70">{priceNote}</p>
                          )}
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Description */}
                  {description && (
                    <div className="camps-rich text-customBlack leading-relaxed">
                      <RichText data={description} enableGutter={false} enableProse={false} />
                    </div>
                  )}

                  {/* Features */}
                  {(featuresTitle || features?.length) && (
                    <div>
                      {featuresTitle && (
                        <h4 className="text-xl font-bold text-customBlack mb-4">{featuresTitle}</h4>
                      )}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {features?.map((feature, index) => (
                          <div key={feature.id || index} className="flex items-center space-x-2">
                            {feature.icon ? (
                              <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-customBlue text-white">
                                <Icon name={feature.icon} className="h-3 w-3" />
                              </span>
                            ) : (
                              <span className="w-2 h-2 bg-customBlue rounded-full animate-pulse shrink-0"></span>
                            )}
                            <div className="min-w-0">
                              <span className="text-customBlack text-sm">{feature.title}</span>
                              {feature.description && (
                                <p className="text-customBlack text-xs opacity-70">
                                  {feature.description}
                                </p>
                              )}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* CTA Buttons */}
                  {links?.some(({ link }) => Boolean(link)) && (
                    <div className="flex flex-col sm:flex-row gap-4 pt-6">
                      {links.map(({ link }, i) => {
                        if (!link) return null

                        return (
                          <CMSLink
                            key={link.label || i}
                            className={clsx(
                              'block text-center px-8 py-4 rounded-2xl font-bold text-lg transition-all transform hover:-translate-y-1',
                              i === 0
                                ? 'bg-customBlue text-white hover:bg-customBlue/90 shadow-lg hover:shadow-xl'
                                : 'border-2 border-customOrange text-customOrange hover:bg-customOrange hover:text-white',
                            )}
                            newTab={link.newTab}
                            reference={link.reference}
                            type={link.type}
                            url={link.url}
                          >
                            {link.label}
                          </CMSLink>
                        )
                      })}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes camps-bounce-slow {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        @keyframes camps-spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        .animate-bounce-slow {
          animation: camps-bounce-slow 2s ease-in-out infinite;
        }
        .animate-spin-slow {
          animation: camps-spin-slow 14s linear infinite;
        }
        .camps-rich p {
          margin-bottom: 1rem;
        }
        .camps-rich p:last-child {
          margin-bottom: 0;
        }
        @media (prefers-reduced-motion: reduce) {
          .animate-bounce-slow,
          .animate-spin-slow {
            animation: none;
          }
        }
      `}</style>
    </section>
  )
}

export default CampsClient
