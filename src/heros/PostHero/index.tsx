'use client'

import { Bangers, Nunito } from 'next/font/google'
import clsx from 'clsx'
import React, { useEffect } from 'react'
import { useInView } from 'react-intersection-observer'
import { Calendar, Compass, Sparkles, User } from 'lucide-react'

import type { Post } from '@/payload-types'

import { Media } from '@/components/Media'
import { useHeaderTheme } from '@/providers/HeaderTheme'
import { formatAuthors } from '@/utilities/formatAuthors'
import { formatDateTime } from '@/utilities/formatDateTime'

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

const Decorations: React.FC = () => (
  <>
    <div className="pointer-events-none absolute inset-0">
      <div className="ph-float-slow absolute right-20 top-20 h-40 w-40 rounded-full bg-white opacity-20" />
      <div
        className="ph-float-slow absolute bottom-20 left-20 h-56 w-56 rounded-full bg-customOrange opacity-20"
        style={{ animationDelay: '1s' }}
      />
      <div
        className="ph-float-slow absolute left-1/4 top-1/3 h-24 w-24 rounded-full bg-white opacity-30"
        style={{ animationDelay: '1.5s' }}
      />
    </div>

    <div
      className="ph-float-slow pointer-events-none absolute right-1/4 top-1/4"
      style={{ animationDelay: '0.7s' }}
    >
      <Compass className="h-12 w-12 text-customBlack opacity-30" />
    </div>
    <div
      className="ph-float-slow pointer-events-none absolute bottom-1/4 left-1/3"
      style={{ animationDelay: '1.2s' }}
    >
      <Sparkles className="h-10 w-10 text-customBlack opacity-30" />
    </div>
  </>
)

const InfoChip: React.FC<{ children: React.ReactNode; icon: React.ReactNode }> = ({
  children,
  icon,
}) => (
  <div className="flex items-center gap-2 rounded-full bg-white/70 px-4 py-2 text-sm font-semibold text-customBlack backdrop-blur-sm">
    <span className="text-customBlue">{icon}</span>
    <span>{children}</span>
  </div>
)

export const PostHero: React.FC<{
  className?: string
  post: Post
}> = ({ className, post }) => {
  const { categories, excerpt, heroImage, populatedAuthors, publishedAt, title } = post

  const { setHeaderTheme } = useHeaderTheme()

  useEffect(() => {
    setHeaderTheme('light')
  }, [setHeaderTheme])

  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: false,
  })

  const hasAuthors =
    populatedAuthors && populatedAuthors.length > 0 && formatAuthors(populatedAuthors) !== ''

  const categoryLabel =
    categories
      ?.map((category) =>
        typeof category === 'object' && category !== null
          ? category.title || 'Untitled category'
          : null,
      )
      .filter(Boolean)
      .join(' • ') || ''

  const mainPhoto = typeof heroImage === 'object' && heroImage !== null ? heroImage : null

  return (
    <header
      ref={ref}
      className={clsx(
        'relative overflow-hidden bg-customLightBlue px-4 pb-24 pt-32 md:pt-36',
        className,
      )}
      style={{ fontFamily: nunito.style.fontFamily }}
    >
      <Decorations />

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          {/* Main photo column */}
          {mainPhoto?.url && (
            <div
              className={clsx('relative', inView ? 'ph-zoom-in' : 'opacity-0')}
              style={{ transitionDelay: '0.2s' }}
            >
              <div className="relative">
                <div className="transform -rotate-2 rounded-2xl bg-white p-4 shadow-xl transition-transform duration-500 hover:rotate-0">
                  <div className="overflow-hidden rounded-xl">
                    <Media resource={mainPhoto} imgClassName="w-full h-auto" priority />
                  </div>
                </div>

                <div className="absolute -bottom-6 -left-6 z-0 h-32 w-32 rounded-full bg-customOrange opacity-20" />
                <div className="absolute -right-6 -top-6 z-0 h-24 w-24 rounded-full bg-white opacity-30" />
              </div>
            </div>
          )}

          {/* Text column */}
          <div className={clsx(!mainPhoto?.url && 'lg:col-span-2 lg:max-w-3xl')}>
            <div
              className={clsx('mb-6', inView ? 'ph-slide-up' : 'opacity-0')}
              style={{ transitionDelay: '0.1s' }}
            >
              {categoryLabel && (
                <p className="mb-2 text-sm font-bold uppercase tracking-[0.2em] text-customBlue">
                  {categoryLabel}
                </p>
              )}
              <h1
                className="mb-4 text-4xl italic text-customBlack md:text-5xl lg:text-6xl"
                style={{ fontFamily: bangers.style.fontFamily }}
              >
                {title}
              </h1>
              <div className="h-2 w-40 rounded-full bg-customOrange" />
            </div>

            {excerpt && (
              <p
                className={clsx(
                  'mb-8 max-w-xl text-lg leading-relaxed text-customBlack',
                  inView ? 'ph-fade-in' : 'opacity-0',
                )}
                style={{ transitionDelay: '0.25s' }}
              >
                {excerpt}
              </p>
            )}

            {(hasAuthors || publishedAt) && (
              <div
                className={clsx('flex flex-wrap gap-3', inView ? 'ph-fade-in' : 'opacity-0')}
                style={{ transitionDelay: '0.35s' }}
              >
                {hasAuthors && (
                  <InfoChip icon={<User size={16} />}>{formatAuthors(populatedAuthors)}</InfoChip>
                )}
                {publishedAt && (
                  <InfoChip icon={<Calendar size={16} />}>
                    <time dateTime={publishedAt}>{formatDateTime(publishedAt)}</time>
                  </InfoChip>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  )
}

export default PostHero
