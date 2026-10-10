'use client'

import { Bangers, Nunito } from 'next/font/google'
import clsx from 'clsx'
import React, { useEffect } from 'react'
import { useInView } from 'react-intersection-observer'
import {
  ArrowRight,
  GraduationCap,
  Handshake,
  Heart,
  ShieldCheck,
  Sparkles,
  Users,
} from 'lucide-react'

import type { Page } from '@/payload-types'

import { CMSLink } from '@/components/Link'
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

const STAT_ICONS = [Users, GraduationCap, Handshake]

const Decorations: React.FC = () => (
  <>
    <div className="pointer-events-none absolute inset-0">
      <div className="dh-float absolute right-20 top-20 h-40 w-40 rounded-full bg-white opacity-20" />
      <div
        className="dh-float absolute -bottom-20 -left-20 h-56 w-56 rounded-full bg-customOrange opacity-20"
        style={{ animationDelay: '1s' }}
      />
      <div
        className="dh-float absolute left-1/3 top-1/4 h-24 w-24 rounded-full bg-customBlue opacity-20"
        style={{ animationDelay: '1.5s' }}
      />
      <div
        className="dh-float absolute right-1/4 top-1/2 h-14 w-14 rounded-full bg-white opacity-30"
        style={{ animationDelay: '2s' }}
      />
    </div>

    <Heart
      className="dh-float pointer-events-none absolute right-1/4 top-1/4 text-customOrange opacity-20"
      size={48}
      style={{ animationDelay: '0.5s' }}
    />
    <Sparkles
      className="dh-float pointer-events-none absolute bottom-1/4 left-1/4 text-customBlue opacity-20"
      size={40}
      style={{ animationDelay: '1.2s' }}
    />
    <Heart
      className="dh-float pointer-events-none absolute bottom-1/3 right-10 text-customBlack opacity-15"
      size={28}
      style={{ animationDelay: '1.8s' }}
    />
    <Sparkles
      className="dh-float pointer-events-none absolute left-10 top-1/3 text-customOrange opacity-15"
      size={24}
      style={{ animationDelay: '0.8s' }}
    />
  </>
)

export const DonateHero: React.FC<Page['hero']> = ({
  badgeText,
  backgroundColor,
  description,
  floatingText,
  goalLabel,
  goalProgress,
  heading,
  image,
  imagePosition,
  links,
  showDecorations,
  stats,
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
  const background = BACKGROUNDS[backgroundColor || 'cream'] || BACKGROUNDS.cream
  const heroImage = typeof image === 'object' ? image : null
  const progress = Math.min(100, Math.max(0, goalProgress ?? 45))

  return (
    <header
      ref={ref}
      className={clsx('relative overflow-hidden px-4 py-24', background)}
      style={{ fontFamily: nunito.style.fontFamily }}
    >
      {showDecorations && <Decorations />}

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
          {/* Text column */}
          <div className={clsx(isImageLeft ? 'lg:order-1' : 'lg:order-2')}>
            {badgeText && (
              <div
                className={clsx('mb-6', inView ? 'dh-slide-up' : 'opacity-0')}
                style={{ transitionDelay: '0.1s' }}
              >
                <span className="inline-flex items-center rounded-full bg-customLightBlue px-4 py-2 font-bold text-customBlack">
                  <Heart className="mr-2 h-5 w-5 text-customBlue" />
                  {badgeText}
                </span>
              </div>
            )}

            {heading && (
              <div
                className={clsx('mb-6', inView ? 'dh-slide-up' : 'opacity-0')}
                style={{ transitionDelay: '0.2s' }}
              >
                <h1
                  className="mb-6 text-5xl italic text-customBlack md:text-6xl"
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
                  inView ? 'dh-fade-in' : 'opacity-0',
                )}
                style={{ transitionDelay: '0.3s' }}
              >
                <RichText data={description} enableGutter={false} enableProse={false} />
              </div>
            )}

            {Array.isArray(stats) && stats.length > 0 && (
              <div
                className={clsx(
                  'mb-8 grid grid-cols-1 gap-4 sm:grid-cols-3',
                  inView ? 'dh-slide-up' : 'opacity-0',
                )}
                style={{ transitionDelay: '0.4s' }}
              >
                {stats.map((stat, i) => {
                  const StatIcon = STAT_ICONS[i % STAT_ICONS.length]

                  return (
                    <div
                      key={stat.id || i}
                      className="rounded-2xl bg-white/70 p-4 text-center shadow-sm backdrop-blur-sm"
                    >
                      <StatIcon className="mx-auto mb-2 h-6 w-6 text-customBlue" />
                      <div
                        className="text-2xl italic text-customBlack"
                        style={{ fontFamily: bangers.style.fontFamily }}
                      >
                        {stat.value}
                      </div>
                      <div className="mt-1 text-sm text-customBlack/70">{stat.label}</div>
                    </div>
                  )
                })}
              </div>
            )}

            {Array.isArray(links) && links.length > 0 && (
              <div
                className={clsx('flex flex-wrap gap-4', inView ? 'dh-fade-in' : 'opacity-0')}
                style={{ transitionDelay: '0.5s' }}
              >
                {links.map(({ link }, i) => {
                  if (!link) return null

                  return (
                    <CMSLink
                      key={link.label || i}
                      className={clsx(
                        'group inline-flex items-center rounded-full px-8 py-3 font-bold shadow-lg transition-all duration-300 hover:scale-105',
                        i === 0
                          ? 'bg-customBlue text-white hover:bg-customOrange'
                          : 'border-2 border-customBlue bg-transparent text-customBlue hover:bg-customLightBlue',
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

            <div
              className={clsx(
                'mt-6 flex items-center gap-2 text-sm font-medium text-customBlack/60',
                inView ? 'dh-fade-in' : 'opacity-0',
              )}
              style={{ transitionDelay: '0.6s' }}
            >
              <ShieldCheck className="h-4 w-4 text-customOrange" />
              Donațiile sunt deductibile fiscal
            </div>
          </div>

          {/* Image column */}
          <div
            className={clsx(
              isImageLeft ? 'lg:order-2' : 'lg:order-1',
              inView ? 'dh-zoom-in' : 'opacity-0',
            )}
            style={{ transitionDelay: '0.3s' }}
          >
            <div className="relative">
              {heroImage?.url && (
                <div
                  className={clsx(
                    'transform rounded-2xl bg-white p-4 shadow-xl transition-transform duration-500 hover:rotate-0',
                    isImageLeft ? '-rotate-2' : 'rotate-2',
                  )}
                >
                  <div className="overflow-hidden rounded-xl">
                    <Media resource={heroImage} imgClassName="w-full h-auto" />
                  </div>
                </div>
              )}

              {/* Decorative circles */}
              <div className="absolute -bottom-6 -left-6 z-0 h-32 w-32 rounded-full bg-customOrange opacity-20" />
              <div className="absolute -top-6 -right-6 z-0 h-24 w-24 rounded-full bg-customBlue opacity-20" />

              {/* Floating badge */}
              {floatingText && (
                <div className="dh-float absolute -right-6 top-6 z-20 -rotate-12 rounded-full bg-customOrange px-5 py-2 font-bold text-white shadow-lg">
                  {floatingText}
                </div>
              )}

              {/* Donation progress card */}
              {(goalLabel || goalProgress) && (
                <div className="dh-float absolute -bottom-8 -left-4 z-20 w-64 rounded-2xl bg-white p-4 shadow-xl">
                  <div className="mb-2 flex items-center">
                    <Heart className="mr-2 h-5 w-5 text-customOrange" />
                    <span className="text-sm font-bold text-customBlack">{goalLabel}</span>
                  </div>
                  <div className="h-2.5 w-full overflow-hidden rounded-full bg-customLightBlue">
                    <div
                      className="h-full rounded-full bg-customOrange"
                      style={{ width: `${progress}%` }}
                    />
                  </div>
                  <p className="mt-2 text-right text-sm font-bold text-customBlack">{progress}%</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default DonateHero
