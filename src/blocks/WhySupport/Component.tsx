'use client'

import { Bangers, Nunito } from 'next/font/google'
import clsx from 'clsx'
import React from 'react'
import { useInView } from 'react-intersection-observer'
import { ArrowRight, Sparkles } from 'lucide-react'

import RichText from '@/components/RichText'
import { CMSLink } from '@/components/Link'
import { Media } from '@/components/Media'

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

export type WhySupportMedia = {
  url?: string | null
  alt?: string | null
  width?: number | null
  height?: number | null
  mimeType?: string | null
  updatedAt?: string | null
}

export type WhySupportHighlight = {
  value?: string | null
  text?: string | null
}

export type WhySupportLinkItem = {
  link?: {
    type?: 'custom' | 'reference' | null
    label?: string | null
    newTab?: boolean | null
    url?: string | null
    reference?: {
      relationTo: 'pages' | 'posts'
      value: string | number | { slug?: string | null }
    } | null
  } | null
}

export type WhySupportProps = {
  className?: string
  badgeText?: string | null
  heading?: string | null
  richText?: DefaultTypedEditorState | null
  image?: WhySupportMedia | string | number | null
  quoteText?: string | null
  quoteAuthor?: string | null
  highlights?: WhySupportHighlight[] | null
  links?: WhySupportLinkItem[] | null
}

export const WhySupport: React.FC<WhySupportProps> = (props) => {
  const {
    badgeText,
    className,
    heading,
    highlights,
    image,
    links,
    quoteAuthor,
    quoteText,
    richText,
  } = props

  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: false,
  })

  const imageResource = typeof image === 'object' && image !== null ? image : null
  const hasImage = Boolean(imageResource?.url)
  const hasQuote = Boolean(quoteText || quoteAuthor)
  const hasHighlights = Array.isArray(highlights) && highlights.some((item) => item?.text)
  const hasLinks = Array.isArray(links) && links.length > 0

  return (
    <section
      ref={ref}
      className={clsx('bg-customWhite px-4 py-20', className)}
      style={{ fontFamily: nunito.style.fontFamily }}
    >
      <style>{`
        @keyframes wsSlideUp {
          from { opacity: 0; transform: translateY(50px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes wsFadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .ws-slide-up {
          animation: wsSlideUp 0.5s ease-out both;
        }
        .ws-fade-in {
          animation: wsFadeIn 0.5s ease-in both;
        }
        @media (prefers-reduced-motion: reduce) {
          .ws-slide-up,
          .ws-fade-in {
            animation: none;
          }
        }
      `}</style>

      <div className="mx-auto max-w-5xl">
        <div
          className={clsx('mb-12 text-center', inView ? 'ws-slide-up' : 'opacity-0')}
          style={{ animationDelay: '0.1s' }}
        >
          {badgeText && (
            <span className="mb-4 inline-flex items-center gap-2 rounded-full bg-customLightBlue/60 px-4 py-1 text-xs font-bold uppercase tracking-widest text-customBlack">
              <Sparkles className="h-3.5 w-3.5" />
              {badgeText}
            </span>
          )}

          {heading && (
            <h2
              className="mb-4 text-4xl text-customBlack md:text-5xl"
              style={{ fontFamily: bangers.style.fontFamily }}
            >
              {heading}
            </h2>
          )}

          <div className="mx-auto h-2 w-32 rounded-full bg-customOrange" />
        </div>

        <div
          className={clsx(
            'grid grid-cols-1 items-center gap-12',
            hasImage && 'lg:grid-cols-2',
          )}
        >
          {hasImage && (
            <div
              className={clsx(inView ? 'ws-fade-in' : 'opacity-0')}
              style={{ animationDelay: '0.2s' }}
            >
              <div className="relative">
                <div className="overflow-hidden rounded-2xl shadow-lg transition-transform duration-500 hover:rotate-0">
                  <Media
                    resource={
                      imageResource as unknown as React.ComponentProps<typeof Media>['resource']
                    }
                    imgClassName="w-full h-auto"
                  />
                </div>

                {hasQuote && (
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-customBlue to-transparent p-6">
                    {quoteText && <p className="font-bold italic text-white">{quoteText}</p>}
                    {quoteAuthor && <p className="text-sm text-white">— {quoteAuthor}</p>}
                  </div>
                )}
              </div>
            </div>
          )}

          <div>
            <div
              className={clsx(
                'prose prose-lg max-w-none text-customBlack',
                inView ? 'ws-fade-in' : 'opacity-0',
              )}
              style={{ animationDelay: '0.3s' }}
            >
              {richText && <RichText data={richText} enableGutter={false} enableProse={false} />}
            </div>
          </div>
        </div>

        {hasHighlights && (
          <div
            className={clsx(
              'mt-12 rounded-2xl bg-customLightBlue/10 p-8',
              inView ? 'ws-fade-in' : 'opacity-0',
            )}
            style={{ animationDelay: '0.4s' }}
          >
            {highlights?.map((item, i) => {
              if (!item?.text && !item?.value) return null

              return (
                <div key={`${i}-${item.value || ''}`} className={clsx(i > 0 && 'mt-4')}>
                  {item.value && (
                    <p
                      className="text-3xl text-customBlue"
                      style={{ fontFamily: bangers.style.fontFamily }}
                    >
                      {item.value}
                    </p>
                  )}
                  {item.text && <p className="text-lg text-customBlack">{item.text}</p>}
                </div>
              )
            })}
          </div>
        )}

        {hasLinks && (
          <div
            className={clsx('mt-10 flex flex-wrap gap-4', inView ? 'ws-fade-in' : 'opacity-0')}
            style={{ animationDelay: '0.45s' }}
          >
            {links?.map(({ link }, i) => {
              if (!link) return null

              return (
                <CMSLink
                  key={link.label || i}
                  className={clsx(
                    'group inline-flex items-center rounded-full px-8 py-3 font-bold shadow-lg transition-all duration-300 hover:scale-105',
                    i === 0
                      ? 'bg-customBlack text-white hover:bg-customOrange hover:text-white'
                      : 'border border-customBlack/10 bg-white text-customBlack hover:bg-customOrange hover:text-white',
                  )}
                  newTab={link.newTab}
                  reference={
                    link.reference as React.ComponentProps<typeof CMSLink>['reference']
                  }
                  type={link.type}
                  url={link.url}
                >
                  {link.label}
                  <ArrowRight
                    className="ml-2 transition-transform duration-300 group-hover:translate-x-1"
                    size={20}
                  />
                </CMSLink>
              )
            })}
          </div>
        )}
      </div>
    </section>
  )
}

export default WhySupport
