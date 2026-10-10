'use client'

import { Bangers, Nunito } from 'next/font/google'
import clsx from 'clsx'
import React, { useEffect } from 'react'
import { useInView } from 'react-intersection-observer'
import { ArrowRight, Compass, Lightbulb, Puzzle, Rocket, Star, Target } from 'lucide-react'

import type { Page } from '@/payload-types'

import { CMSLink } from '@/components/Link'
import { Icon } from '@/components/Icon'
import { Media } from '@/components/Media'
import RichText from '@/components/RichText'
import { useHeaderTheme } from '@/providers/HeaderTheme'

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

const BACKGROUNDS: Record<string, string> = {
  lightBlue: 'bg-customLightBlue',
  cream: 'bg-customWhite',
  white: 'bg-white',
}

const WaveDivider: React.FC = () => (
  <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-16 overflow-hidden md:h-24">
    <svg
      viewBox="0 0 1200 120"
      preserveAspectRatio="none"
      xmlns="http://www.w3.org/2000/svg"
      className="absolute bottom-0 left-0 h-full w-full"
    >
      <path
        d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
        className="fill-[#F0E6DD]"
      />
    </svg>
  </div>
)

const Decorations: React.FC = () => (
  <>
    <div className="pointer-events-none absolute inset-0">
      <div className="absolute right-20 top-20 h-40 w-40 rounded-full bg-white opacity-20 me-float-slow" />
      <div
        className="absolute bottom-20 left-20 h-56 w-56 rounded-full bg-customOrange opacity-20 me-float-slow"
        style={{ animationDelay: '1s' }}
      />
      <div
        className="absolute left-1/4 top-1/3 h-24 w-24 rounded-full bg-white opacity-30 me-float-slow"
        style={{ animationDelay: '1.5s' }}
      />
    </div>

    <div className="pointer-events-none absolute right-1/4 top-1/4 me-float-slow" style={{ animationDelay: '0.7s' }}>
      <Compass className="h-12 w-12 text-customBlack opacity-30" />
    </div>
    <div className="pointer-events-none absolute bottom-1/4 left-1/3 me-float-slow" style={{ animationDelay: '1.2s' }}>
      <Target className="h-10 w-10 text-customBlack opacity-30" />
    </div>
    <div className="pointer-events-none absolute right-1/3 top-2/3 me-float-slow" style={{ animationDelay: '0.5s' }}>
      <Lightbulb className="h-14 w-14 text-customBlack opacity-30" />
    </div>
    <div className="pointer-events-none absolute left-10 top-1/2 me-float-slow" style={{ animationDelay: '0.9s' }}>
      <Puzzle className="h-10 w-10 text-customBlue opacity-30" />
    </div>
    <div className="pointer-events-none absolute bottom-1/3 right-10 me-float-slow" style={{ animationDelay: '1.4s' }}>
      <Star className="h-8 w-8 text-customOrange opacity-30" />
    </div>
    <div className="pointer-events-none absolute left-1/2 top-16 me-float-slow" style={{ animationDelay: '0.3s' }}>
      <Rocket className="h-9 w-9 text-customBlack opacity-20" />
    </div>
  </>
)

export const MediumImpactHero: React.FC<Page['hero']> = ({
  badgeText,
  backgroundColor,
  description,
  features,
  floatingImage,
  heading,
  image,
  imagePosition,
  links,
  showDecorations,
  waveDivider,
}) => {
  const { setHeaderTheme } = useHeaderTheme()

  useEffect(() => {
    setHeaderTheme('light')
  }, [setHeaderTheme])

  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: false,
  })

  const isImageLeft = imagePosition !== 'right'
  const background = BACKGROUNDS[backgroundColor || 'lightBlue'] || BACKGROUNDS.lightBlue
  const mainImage = typeof image === 'object' ? image : null
  const smallImage = typeof floatingImage === 'object' ? floatingImage : null

  return (
    <header
      ref={ref}
      className={clsx('relative overflow-hidden px-4 py-24', background)}
      style={{ fontFamily: nunito.style.fontFamily }}
    >
      {showDecorations && <Decorations />}

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          {/* Image column */}
          <div
            className={clsx(
              isImageLeft ? 'lg:order-1' : 'lg:order-2',
              inView ? 'me-zoom-in' : 'opacity-0',
            )}
            style={{ transitionDelay: '0.4s' }}
          >
            <div className="relative">
              {mainImage?.url && (
                <div
                  className={clsx(
                    'transform rounded-2xl bg-white p-4 shadow-xl transition-transform duration-500 hover:rotate-0',
                    isImageLeft ? '-rotate-2' : 'rotate-2',
                  )}
                >
                  <div className="overflow-hidden rounded-xl">
                    <Media resource={mainImage} imgClassName="w-full h-auto" />
                  </div>
                </div>
              )}

              {/* Decorative circles */}
              <div className="absolute -bottom-6 -left-6 z-0 h-32 w-32 rounded-full bg-customOrange opacity-20" />
              <div className="absolute -top-6 -right-6 z-0 h-24 w-24 rounded-full bg-white opacity-30" />

              {/* Path illustration */}
              <div
                className={clsx(
                  'absolute bottom-1/3 top-1/3 z-10 flex w-10 flex-col items-center',
                  isImageLeft ? '-right-5' : '-left-5',
                )}
              >
                <div className="h-2 w-2 rounded-full bg-customOrange" />
                <div className="h-16 w-1 bg-customOrange" />
                <div className="h-2 w-2 rounded-full bg-customOrange" />
                <div className="h-16 w-1 bg-customOrange" />
                <div className="h-2 w-2 rounded-full bg-customOrange" />
              </div>

              {/* Badge */}
              {badgeText && (
                <div className="absolute -right-6 top-6 z-20 -rotate-12 transform rounded-full bg-customOrange px-4 py-2 font-bold text-white shadow-lg">
                  {badgeText}
                </div>
              )}

              {/* Floating image */}
              {smallImage?.url && (
                <div
                  className={clsx(
                    'absolute z-10 w-1/3 rounded-xl bg-white p-2 shadow-lg',
                    isImageLeft ? '-bottom-10 -right-10 rotate-6' : '-bottom-10 -left-10 -rotate-6',
                  )}
                >
                  <Media resource={smallImage} imgClassName="w-full h-auto rounded-lg" />
                </div>
              )}
            </div>
          </div>

          {/* Text column */}
          <div className={clsx(isImageLeft ? 'lg:order-2' : 'lg:order-1')}>
            {heading && (
              <div
                className={clsx('mb-6', inView ? 'me-slide-up' : 'opacity-0')}
                style={{ transitionDelay: '0.1s' }}
              >
                <h1
                  className="mb-4 text-5xl italic text-customBlack md:text-6xl"
                  style={{ fontFamily: bangers.style.fontFamily }}
                >
                  {heading}
                </h1>
                <div className="h-2 w-40 rounded-full bg-customOrange" />
              </div>
            )}

            {description && (
              <div
                className={clsx(
                  'mb-8 max-w-xl text-xl leading-relaxed text-customBlack',
                  inView ? 'me-fade-in' : 'opacity-0',
                )}
                style={{ transitionDelay: '0.3s' }}
              >
                <RichText data={description} enableGutter={false} enableProse={false} />
              </div>
            )}

            {Array.isArray(links) && links.length > 0 && (
              <div
                className={clsx('flex flex-wrap gap-4', inView ? 'me-fade-in' : 'opacity-0')}
                style={{ transitionDelay: '0.5s' }}
              >
                {links.map(({ link }, i) => {
                  if (!link) return null

                  return (
                    <CMSLink
                      key={link.label || i}
                      className={clsx(
                        'group inline-flex transform items-center rounded-full py-3 px-8 font-bold shadow-lg transition-colors duration-300 hover:scale-105',
                        i === 0
                          ? 'bg-white text-customBlue hover:bg-customOrange hover:text-white'
                          : 'bg-customOrange text-white hover:bg-white hover:text-customOrange',
                      )}
                      newTab={link.newTab}
                      reference={link.reference}
                      type={link.type}
                      url={link.url}
                    >
                      {link.label}
                      <ArrowRight
                        className="ml-2 transform transition-transform duration-300 group-hover:translate-x-1"
                        size={20}
                      />
                    </CMSLink>
                  )
                })}
              </div>
            )}

            {Array.isArray(features) && features.length > 0 && (
              <div
                className={clsx(
                  'mt-10 grid grid-cols-1 gap-4 sm:grid-cols-3',
                  inView ? 'me-slide-up' : 'opacity-0',
                )}
                style={{ transitionDelay: '0.7s' }}
              >
                {features.map((feature, i) => (
                  <div
                    key={feature.id || i}
                    className="rounded-lg bg-white/70 p-4 backdrop-blur-sm"
                  >
                    <Icon name={feature.icon} className="mb-2 h-6 w-6 text-customBlack" />
                    <h3 className="font-bold text-customBlack">{feature.title}</h3>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {waveDivider && <WaveDivider />}
    </header>
  )
}

export default MediumImpactHero
