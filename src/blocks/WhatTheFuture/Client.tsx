'use client'

import { Bangers, Nunito } from 'next/font/google'
import clsx from 'clsx'
import React, { useState } from 'react'
import { useInView } from 'react-intersection-observer'
import { ArrowRight, Calendar, Clock, MapPin, Rocket, Sparkles, Star, Users } from 'lucide-react'

import RichText from '@/components/RichText'
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

type DetailItem = {
  icon?: 'calendar' | 'clock' | 'mapPin' | 'users' | null
  id?: string | null
  label?: string | null
  value?: string | null
}

type FeatureItem = {
  id?: string | null
  text?: string | null
}

type LinkItem = {
  link?: {
    label?: string | null
    newTab?: boolean | null
    reference?: React.ComponentProps<typeof CMSLink>['reference']
    type?: 'custom' | 'reference' | null
    url?: string | null
  } | null
}

type RichTextData = React.ComponentProps<typeof RichText>['data']

const DETAIL_ICONS: Record<string, React.FC<{ className?: string }>> = {
  calendar: Calendar,
  clock: Clock,
  mapPin: MapPin,
  users: Users,
}

export type WhatTheFutureProps = {
  aboutHeading?: string | null
  badgeText?: string | null
  className?: string
  description?: RichTextData | null
  details?: DetailItem[] | null
  detailsHeading?: string | null
  features?: FeatureItem[] | null
  featuresHeading?: string | null
  heading?: string | null
  image1?: MediaResource
  image2?: MediaResource
  links?: LinkItem[] | null
  longDescription?: RichTextData | null
  nextImageLabel?: string | null
  previousImageLabel?: string | null
  subtitle?: string | null
}

export const WhatTheFutureClient: React.FC<WhatTheFutureProps> = (props) => {
  const {
    aboutHeading,
    badgeText,
    className,
    description,
    details,
    detailsHeading,
    features,
    featuresHeading,
    heading,
    image1,
    image2,
    links,
    longDescription,
    nextImageLabel,
    previousImageLabel,
    subtitle,
  } = props

  const [activeImage, setActiveImage] = useState(0)

  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: false,
  })

  const images = [image1, image2].filter(
    (img): img is Exclude<MediaResource, null | string | number> =>
      Boolean(img) && typeof img === 'object',
  )

  const imageCount = images.length
  const currentImage = imageCount > 0 ? images[activeImage % imageCount] : null

  const nextImage = () => {
    setActiveImage((prev) => (imageCount > 0 ? (prev + 1) % imageCount : 0))
  }

  const prevImage = () => {
    setActiveImage((prev) => (imageCount > 0 ? (prev === 0 ? imageCount - 1 : prev - 1) : 0))
  }

  return (
    <section
      ref={ref}
      className={clsx('py-20 px-4 bg-customWhite relative overflow-hidden', className)}
      style={{ fontFamily: nunito.style.fontFamily }}
    >
      <style>{`
        @keyframes wtfFloat {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-14px); }
        }
        @keyframes wtfSlideUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes wtfFadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .wtf-float {
          animation: wtfFloat 6s ease-in-out infinite;
        }
        .wtf-slide-up {
          animation: wtfSlideUp 0.8s ease-out forwards;
        }
        .wtf-fade-in {
          animation: wtfFadeIn 0.8s ease-out forwards;
        }
        @media (prefers-reduced-motion: reduce) {
          .wtf-float,
          .wtf-slide-up,
          .wtf-fade-in {
            animation: none;
          }
        }
      `}</style>

      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-20 right-20 w-40 h-40 bg-customOrange rounded-full opacity-10 wtf-float"></div>
        <div
          className="absolute bottom-20 left-20 w-56 h-56 bg-customBlue rounded-full opacity-20 wtf-float"
          style={{ animationDelay: '1s' }}
        ></div>
      </div>

      {/* Floating icons */}
      <div
        className="absolute top-1/4 right-1/4 wtf-float"
        style={{ animationDelay: '0.7s' }}
      >
        <Rocket className="text-customBlue w-12 h-12 opacity-20" />
      </div>
      <div className="absolute bottom-1/4 left-1/3 wtf-float" style={{ animationDelay: '1.2s' }}>
        <Star className="text-customOrange w-10 h-10 opacity-20" />
      </div>
      <div className="absolute top-2/3 right-1/3 wtf-float" style={{ animationDelay: '0.5s' }}>
        <Sparkles className="text-customBlue w-14 h-14 opacity-20" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Event header with title and subtitle */}
        <div
          className={clsx(
            'text-center mb-12',
            inView ? 'wtf-fade-in' : 'opacity-0',
          )}
        >
          {badgeText && (
            <span className="inline-flex items-center gap-2 rounded-full bg-white/80 px-4 py-1 text-xs font-bold uppercase tracking-widest text-customBlack mb-4">
              <Sparkles className="h-3.5 w-3.5 text-customBlue" />
              {badgeText}
            </span>
          )}
          <h2
            className="text-5xl md:text-6xl text-customBlack mb-4 italic transform -rotate-1"
            style={{ fontFamily: bangers.style.fontFamily }}
          >
            {heading}
          </h2>
          {subtitle && <p className="text-xl md:text-2xl text-customBlue font-bold">{subtitle}</p>}
          <div className="w-40 h-2 bg-customOrange mx-auto rounded-full mt-4"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left column - Images and details */}
          <div
            className={clsx(
              'lg:col-span-7',
              inView ? 'wtf-fade-in' : 'opacity-0',
            )}
            style={{ transitionDelay: '0.2s' }}
          >
            {/* Image carousel */}
            {currentImage && (
              <div className="relative mb-8">
                <div className="bg-white p-4 rounded-2xl shadow-xl overflow-hidden">
                  <div className="rounded-xl overflow-hidden aspect-video relative">
                    <Media
                      resource={currentImage}
                      fill
                      imgClassName="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    />
                  </div>

                  {/* Image navigation */}
                  {imageCount > 1 && (
                    <>
                      <div className="absolute top-1/2 left-0 right-0 transform -translate-y-1/2 flex justify-between px-6 pointer-events-none">
                        <button
                          onClick={prevImage}
                          className="pointer-events-auto bg-white bg-opacity-70 hover:bg-customBlue hover:text-white p-2 rounded-full shadow-md transition-colors duration-300"
                          aria-label={previousImageLabel || 'Previous image'}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M15 19l-7-7 7-7"
                            />
                          </svg>
                        </button>
                        <button
                          onClick={nextImage}
                          className="pointer-events-auto bg-white bg-opacity-70 hover:bg-customBlue hover:text-white p-2 rounded-full shadow-md transition-colors duration-300"
                          aria-label={nextImageLabel || 'Next image'}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M9 5l7 7-7 7"
                            />
                          </svg>
                        </button>
                      </div>

                      {/* Image indicator */}
                      <div className="absolute bottom-8 left-0 right-0 flex justify-center gap-2">
                        {images.map((_, index) => (
                          <button
                            key={index}
                            onClick={() => setActiveImage(index)}
                            className={clsx(
                              'h-3 rounded-full transition-all duration-300',
                              activeImage % imageCount === index
                                ? 'bg-customOrange w-6'
                                : 'bg-white bg-opacity-70 w-3',
                            )}
                            aria-label={`Go to image ${index + 1}`}
                          />
                        ))}
                      </div>
                    </>
                  )}
                </div>
              </div>
            )}

            {/* Event description */}
            {(description || longDescription) && (
              <div
                className={clsx(
                  'bg-white rounded-2xl shadow-lg p-6 mb-8',
                  inView ? 'wtf-slide-up' : 'opacity-0',
                )}
                style={{ transitionDelay: '0.3s' }}
              >
                {aboutHeading && (
                  <h3 className="text-2xl font-bold text-customBlack mb-4">{aboutHeading}</h3>
                )}
                {description && (
                  <div className="text-customBlack mb-4">
                    <RichText data={description} enableGutter={false} enableProse={false} />
                  </div>
                )}
                {longDescription && (
                  <div className="text-customBlack">
                    <RichText data={longDescription} enableGutter={false} enableProse={false} />
                  </div>
                )}
              </div>
            )}

            {/* Event features */}
            {features && features.length > 0 && (
              <div
                className={clsx(
                  'bg-customLightBlue bg-opacity-50 rounded-2xl p-6',
                  inView ? 'wtf-slide-up' : 'opacity-0',
                )}
                style={{ transitionDelay: '0.4s' }}
              >
                <h3 className="text-2xl font-bold text-customBlack mb-4 flex items-center">
                  <Sparkles className="mr-2 text-customBlue" /> {featuresHeading}
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {features.map((feature, index) => (
                    <div key={feature.id || index} className="flex items-center">
                      <div className="bg-customBlue rounded-full p-1 mr-3">
                        <Star className="w-4 h-4 text-white" />
                      </div>
                      <span className="text-customBlack">{feature.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Right column - Event details and CTAs */}
          <div className="lg:col-span-5">
            {/* Event details card */}
            {details && details.length > 0 && (
              <div
                className={clsx(
                  'bg-white rounded-2xl shadow-lg overflow-hidden mb-8',
                  inView ? 'wtf-fade-in' : 'opacity-0',
                )}
                style={{ transitionDelay: '0.3s' }}
              >
                <div className="bg-customBlue p-6 text-white">
                  <h3 className="text-2xl font-bold">{detailsHeading}</h3>
                </div>
                <div className="p-6 space-y-4">
                  {details.map((detail, index) => {
                    const DetailIcon = DETAIL_ICONS[detail.icon || 'calendar'] || Calendar

                    return (
                      <div key={detail.id || index} className="flex items-start">
                        <DetailIcon className="w-5 h-5 text-customOrange mr-3 mt-1" />
                        <div>
                          <h4 className="font-bold text-customBlack">{detail.label}</h4>
                          <p className="text-customBlack">{detail.value}</p>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>
            )}

            {/* CTA buttons */}
            {links && links.length > 0 && (
              <div
                className={clsx('space-y-4', inView ? 'wtf-fade-in' : 'opacity-0')}
                style={{ transitionDelay: '0.5s' }}
              >
                {links.map(({ link }, i) => {
                  if (!link) return null

                  return (
                    <CMSLink
                      key={link.label || i}
                      className={clsx(
                        'block w-full font-bold py-4 px-6 rounded-xl transition-all duration-300 text-center shadow-lg transform hover:scale-105',
                        i === 0
                          ? 'bg-customBlue hover:bg-customOrange text-white'
                          : 'bg-white border-2 border-customBlue text-customBlue hover:bg-customLightBlue shadow-md',
                      )}
                      newTab={link.newTab}
                      reference={link.reference}
                      type={link.type}
                      url={link.url}
                    >
                      {link.label}
                      {i > 0 && <ArrowRight className="inline-block ml-2 w-5 h-5" />}
                    </CMSLink>
                  )
                })}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhatTheFutureClient
