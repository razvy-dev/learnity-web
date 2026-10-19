'use client'

import { Bangers, Nunito } from 'next/font/google'
import clsx from 'clsx'
import React from 'react'
import { useInView } from 'react-intersection-observer'
import { PenLine, Quote, Sparkles } from 'lucide-react'

import type { DefaultTypedEditorState } from '@payloadcms/richtext-lexical'

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

export type AboutStoryMedia = {
  alt?: string
  url?: string | null
  mimeType?: string | null
} | null

export type AboutStoryImageItem = {
  id?: string
  image?: AboutStoryMedia
  title?: string | null
  caption?: string | null
}

export type AboutStoryLinkItem = {
  id?: string
  link?: {
    type?: 'reference' | 'custom' | null
    label?: string | null
    newTab?: boolean | null
    reference?: {
      relationTo: 'pages' | 'posts'
      value: string | number
    } | null
    url?: string | null
  } | null
}

export type AboutStoryProps = {
  badgeText?: string | null
  className?: string
  founders?: string | null
  heading?: string | null
  images?: AboutStoryImageItem[] | null
  links?: AboutStoryLinkItem[] | null
  quote?: string | null
  story?: DefaultTypedEditorState | null
  subheading?: string | null
}

type MediaResource = React.ComponentProps<typeof Media>['resource']

const CREAM = '#F0E6DD'
const TEAL = '#05be9e'
const ORANGE = '#F8A12E'

const WAVE_TEAL =
  'M0,288L48,272C96,256,192,224,288,197.3C384,171,480,149,576,165.3C672,181,768,235,864,234.7C960,235,1056,181,1152,170.7C1248,160,1344,192,1392,208L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z'

const WAVE_CREAM =
  'M0,96L48,128C96,160,192,224,288,240C384,256,480,224,576,197.3C672,171,768,149,864,160C960,171,1056,213,1152,224C1248,235,1344,213,1392,202.7L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z'

const Blobs: React.FC = () => (
  <div className="pointer-events-none absolute inset-0 overflow-hidden">
    <div className="as-float absolute left-10 top-10 h-20 w-20 rounded-full bg-customOrange opacity-20" />
    <div
      className="as-float absolute bottom-10 right-10 h-32 w-32 rounded-full bg-customBlue opacity-20"
      style={{ animationDelay: '2s' }}
    />
    <div
      className="as-float absolute left-1/2 top-1/2 h-40 w-40 -translate-x-1/2 -translate-y-1/2 rounded-full bg-customBlack opacity-10"
      style={{ animationDelay: '4s' }}
    />
  </div>
)

const ChapterBadge: React.FC<{ index: number }> = ({ index }) => (
  <div className="as-badge z-10 mt-8 flex h-20 w-20 items-center justify-center rounded-full bg-customOrange text-2xl font-bold text-white shadow-md">
    {index}
  </div>
)

const Wave: React.FC<{ fill: string }> = ({ fill }) => (
  <svg
    className="absolute bottom-0 left-0 z-10 w-full"
    viewBox="0 0 1440 320"
    preserveAspectRatio="none"
    aria-hidden="true"
  >
    <path fill={fill} fillOpacity="1" d={fill === TEAL ? WAVE_TEAL : WAVE_CREAM} />
  </svg>
)

const imageFrames = [
  'w-64 h-64 rounded-full bg-customOrange shadow-lg',
  'w-80 h-80 rounded-lg bg-customOrange shadow-lg transform -rotate-3',
  'w-96 h-96 rounded-full bg-customOrange shadow-lg transform rotate-3',
  'w-80 h-80 rounded-lg bg-customOrange shadow-lg transform rotate-3',
]

export const AboutStory: React.FC<AboutStoryProps> = (props) => {
  const { badgeText, className, founders, heading, images, links, quote, story, subheading } =
    props

  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: false,
  })

  const chapters: AboutStoryImageItem[] = (images || []).filter(
    (item): item is AboutStoryImageItem => Boolean(item),
  )

  if (chapters.length === 0) return null

  const renderLinks = () => {
    const validLinks = (links || []).filter((item) => item?.link)
    if (validLinks.length === 0) return null

    return (
      <div className="mt-8 flex flex-wrap justify-center gap-4 md:justify-start">
        {validLinks.map(({ link }, i) => {
          if (!link) return null

          return (
            <CMSLink
              key={link.label || i}
              className={clsx(
                'group inline-flex items-center rounded-full px-8 py-3 font-bold shadow-lg transition-all duration-300 hover:scale-105',
                i === 0
                  ? 'bg-customOrange text-white hover:bg-customBlue'
                  : 'border border-customBlack/10 bg-white text-customBlack hover:bg-customBlue hover:text-white',
              )}
              newTab={link.newTab}
              reference={link.reference}
              type={link.type}
              url={link.url}
            >
              {link.label}
              <Sparkles className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:rotate-12" />
            </CMSLink>
          )
        })}
      </div>
    )
  }

  return (
    <div
      ref={ref}
      className={clsx('w-full bg-customWhite text-customBlack', className)}
      style={{ fontFamily: nunito.style.fontFamily }}
    >
      <style>{`
        @keyframes asSlideUp {
          from { opacity: 0; transform: translateY(50px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes asPhotoIn {
          from { opacity: 0; transform: scale(0.8); }
          to { opacity: 1; transform: scale(1); }
        }
        @keyframes asFadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes asFloat {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-14px); }
        }
        .as-slide-up {
          animation: asSlideUp 0.8s ease-out forwards;
        }
        .as-photo-in {
          animation: asPhotoIn 0.5s ease-out forwards;
        }
        .as-fade-in {
          animation: asFadeIn 0.8s ease-out forwards;
        }
        .as-float {
          animation: asFloat 6s ease-in-out infinite;
        }
        .as-badge {
          transition: transform 0.5s ease;
        }
        .as-badge:hover {
          transform: scale(1.1) rotate(360deg);
        }
        @media (prefers-reduced-motion: reduce) {
          .as-slide-up,
          .as-photo-in,
          .as-fade-in,
          .as-float,
          .as-badge,
          .as-badge:hover {
            animation: none;
            transition: none;
            transform: none;
          }
        }
      `}</style>

      {chapters.map((item, index) => {
        const isHero = index === 0
        const isTeal = index % 2 === 1
        const isLast = index === chapters.length - 1
        const nextIsTeal = (index + 1) % 2 === 1
        const frame = imageFrames[Math.min(index, imageFrames.length - 1)] || imageFrames[0]
        const imageResource = (item.image ?? null) as MediaResource
        const hasImage = Boolean(item.image?.url)
        const delay = `${0.2 + index * 0.1}s`

        const headingEl = isHero ? heading : item.title
        const body = isHero ? story : null
        const caption = isHero ? null : item.caption

        return (
          <section
            key={item.id || index}
            className={clsx(
              'relative flex min-h-screen flex-col items-center justify-center overflow-hidden p-8',
              isTeal ? 'bg-customBlue text-white' : 'bg-customWhite text-customBlack',
            )}
          >
            <div className={clsx('relative z-10', inView ? 'as-slide-up' : 'opacity-0')}>
              {isHero && badgeText && (
                <span className="mb-6 inline-flex items-center gap-2 rounded-full bg-white/80 px-4 py-1 text-xs font-bold uppercase tracking-widest text-customBlack">
                  <Sparkles className="h-3.5 w-3.5" />
                  {badgeText}
                </span>
              )}

              {headingEl && (
                <h2
                  className={clsx(
                    'mb-8 text-center font-bold tracking-widest',
                    isHero
                      ? 'text-6xl md:text-8xl'
                      : 'text-5xl',
                    isTeal ? 'text-white' : isHero ? 'text-customOrange' : 'text-customBlue',
                  )}
                  style={{ fontFamily: bangers.style.fontFamily }}
                >
                  {headingEl}
                </h2>
              )}

              {isHero && subheading && (
                <h3
                  className="mb-8 text-center text-4xl font-bold text-customBlue"
                >
                  {subheading}
                </h3>
              )}
            </div>

            <div
              className={clsx(
                'mb-8 flex flex-col items-center justify-center gap-8',
                index === 0 ? 'md:flex-row' : 'md:flex-row-reverse',
              )}
            >
              {hasImage && (
                <div
                  className={clsx(
                    'overflow-hidden',
                    frame,
                    inView ? 'as-photo-in' : 'opacity-0',
                  )}
                  style={{ animationDelay: delay }}
                >
                  <Media
                    resource={imageResource}
                    imgClassName="w-full h-full object-cover"
                    alt={item.image?.alt || ''}
                  />
                </div>
              )}

              <div
                className={clsx(inView ? 'as-fade-in' : 'opacity-0')}
                style={{ animationDelay: delay }}
              >
                {isHero && body && (
                  <div className="max-w-lg text-center text-xl md:text-left [&_p]:mb-4 [&_p]:last:mb-0">
                    <RichText data={body} enableGutter={false} enableProse={false} />
                  </div>
                )}

                {!isHero && caption && (
                  <p className="max-w-lg text-center text-xl md:text-left">{caption}</p>
                )}
              </div>
            </div>

            {isHero && (
              <div
                className={clsx('relative z-10 mb-4 w-full max-w-lg', inView ? 'as-fade-in' : 'opacity-0')}
                style={{ animationDelay: '0.4s' }}
              >
                {founders && (
                  <div className="mb-6 flex items-center justify-center gap-3 md:justify-start">
                    <span className="h-0.5 w-10 rounded-full bg-customOrange" />
                    <p className="flex items-center gap-2 text-lg font-bold italic">
                      <PenLine className="h-5 w-5" style={{ color: ORANGE }} />
                      {founders}
                    </p>
                  </div>
                )}

                {quote && (
                  <blockquote className="relative rounded-2xl bg-white p-6 italic shadow-lg">
                    <Quote
                      className="absolute -left-3 -top-3 h-8 w-8 rotate-180"
                      style={{ color: ORANGE }}
                      fill="currentColor"
                      aria-hidden="true"
                    />
                    {quote}
                  </blockquote>
                )}

                {renderLinks()}
              </div>
            )}

            <ChapterBadge index={index + 1} />

            {!isLast && <Wave fill={nextIsTeal ? TEAL : CREAM} />}

            {!isTeal && <Blobs />}
          </section>
        )
      })}
    </div>
  )
}

export default AboutStory
