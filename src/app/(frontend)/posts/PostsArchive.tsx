'use client'

import Link from 'next/link'
import React from 'react'
import { useInView } from 'react-intersection-observer'
import { ArrowRight, Calendar, Newspaper, User } from 'lucide-react'

import type { Post } from '@/payload-types'

import { Media } from '@/components/Media'
import { formatAuthors } from '@/utilities/formatAuthors'
import { formatRomanianDate } from '@/utilities/formatRomanianDate'

export type PostsArchivePost = Pick<
  Post,
  | 'slug'
  | 'title'
  | 'excerpt'
  | 'categories'
  | 'meta'
  | 'heroImage'
  | 'publishedAt'
  | 'populatedAuthors'
>

export type Props = {
  posts: PostsArchivePost[]
  currentPage: number
  limit: number
  totalDocs: number
}

export const PostsArchive: React.FC<Props> = ({ posts, currentPage, limit, totalDocs }) => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: false,
  })

  const rangeStart = totalDocs === 0 ? 0 : (currentPage - 1) * limit + 1
  const rangeEnd = Math.min(currentPage * limit, totalDocs)

  return (
    <section ref={ref} className="relative overflow-hidden bg-customWhite px-4 py-20">
      {/* Decorative background elements */}
      <div className="pointer-events-none absolute top-0 left-0 h-full w-full">
        <div className="absolute top-20 right-20 h-40 w-40 rounded-full bg-customOrange opacity-10"></div>
        <div className="absolute bottom-20 left-20 h-56 w-56 rounded-full bg-customLightBlue opacity-20"></div>
        <div className="absolute top-1/3 left-1/4 h-24 w-24 rounded-full bg-customBlue opacity-10"></div>
        <div className="absolute right-1/4 bottom-1/3 h-32 w-32 rounded-full bg-customOrange opacity-10"></div>
      </div>

      <div className="relative mx-auto max-w-7xl">
        {/* Section header */}
        <div className="mb-12 text-center">
          <div
            className={`inline-block ${inView ? 'animate-slide-up' : 'opacity-0'}`}
            style={{ transitionDelay: '0.1s' }}
          >
            <p className="mb-4 text-sm font-bold tracking-[0.2em] text-customBlue uppercase">
              Blogul Learnity
            </p>
            <h2 className="mb-4 text-4xl font-bold text-customBlack italic md:text-5xl transform -rotate-1">
              Articole din comunitate
            </h2>
            <div className="mx-auto h-2 w-40 rounded-full bg-customOrange"></div>
          </div>

          <p
            className={`mx-auto mt-6 max-w-2xl text-lg text-customBlack ${inView ? 'animate-fade-in' : 'opacity-0'}`}
            style={{ transitionDelay: '0.2s' }}
          >
            Povești, idei și resurse din atelierele și cursurile Learnity — scrise pentru copii,
            părinți și profesori care vor să învețe altfel.
          </p>

          {totalDocs > 0 && (
            <p
              className={`mt-4 text-sm font-semibold text-customBlack/70 ${inView ? 'animate-fade-in' : 'opacity-0'}`}
              style={{ transitionDelay: '0.3s' }}
            >
              Se afișează {rangeStart}–{rangeEnd} din {totalDocs}{' '}
              {totalDocs === 1 ? 'articol' : 'articole'}
            </p>
          )}
        </div>

        {posts.length === 0 ? (
          <div
            className={`mx-auto max-w-2xl bg-white p-12 text-center shadow-lg ${inView ? 'animate-fade-in' : 'opacity-0'}`}
            style={{ transitionDelay: '0.4s' }}
          >
            <Newspaper className="mx-auto mb-4 h-16 w-16 text-customLightBlue" />
            <h3 className="mb-2 text-2xl font-bold text-customBlack">
              Încă nu există articole.
            </h3>
            <p className="mx-auto max-w-md text-customBlack">
              Publicăm în curând primele articole din comunitatea Learnity. Reveniți în curând!
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((post, index) => {
              const {
                slug,
                title,
                excerpt,
                categories,
                meta,
                heroImage,
                publishedAt,
                populatedAuthors,
              } = post

              const image =
                typeof heroImage === 'object' && heroImage?.url
                  ? heroImage
                  : typeof meta?.image === 'object' && meta?.image?.url
                    ? meta.image
                    : null

              const date = formatRomanianDate(publishedAt)
              const summary = (excerpt || meta?.description || '').replace(/\s/g, ' ')
              const authorNames =
                populatedAuthors && populatedAuthors.length > 0
                  ? formatAuthors(populatedAuthors)
                  : ''
              const categoryTitles = (categories ?? [])
                .map((category) => (typeof category === 'object' && category ? category.title : ''))
                .filter(Boolean)
                .join(' • ')

              return (
                <article
                  key={slug ?? index}
                  className={`group relative flex h-full flex-col overflow-hidden rounded-3xl bg-white shadow-lg transition-all duration-500 hover:-translate-y-2 hover:shadow-xl ${
                    inView ? 'animate-fade-in' : 'opacity-0'
                  }`}
                  style={{ transitionDelay: `${0.4 + index * 0.1}s` }}
                >
                  <div className="relative h-56 overflow-hidden">
                    {image ? (
                      <Media
                        resource={image}
                        className="relative h-full w-full"
                        pictureClassName="relative block h-full w-full"
                        fill
                        imgClassName="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    ) : (
                      <div className="flex h-full w-full items-center justify-center bg-customLightBlue">
                        <Newspaper className="h-12 w-12 text-customBlue opacity-60" />
                      </div>
                    )}

                    {date && (
                      <div className="absolute right-0 bottom-0 rounded-tl-2xl bg-customBlue px-4 py-2 text-sm font-bold text-white">
                        <Calendar size={16} className="mr-2 inline-block" />
                        {date}
                      </div>
                    )}
                  </div>

                  <div className="flex flex-1 flex-col p-6">
                    {categoryTitles && (
                      <p className="mb-2 text-xs font-bold tracking-[0.15em] text-customBlue uppercase">
                        {categoryTitles}
                      </p>
                    )}

                    <h3 className="mb-3 text-xl font-bold text-customBlack transition-colors duration-300 group-hover:text-customBlue">
                      {title}
                    </h3>

                    {summary && (
                      <p className="mb-6 flex-grow leading-relaxed text-customBlack">{summary}</p>
                    )}

                    <div className="mt-auto flex items-center justify-between border-t border-customLightBlue pt-4">
                      {authorNames ? (
                        <span className="flex items-center gap-2 text-sm text-customBlack">
                          <User size={14} className="text-customBlue" />
                          {authorNames}
                        </span>
                      ) : (
                        <span />
                      )}

                      <Link
                        href={`/posts/${slug}`}
                        aria-label={`Citește articolul: ${title}`}
                        className="relative z-10 flex items-center gap-2 font-bold text-customBlue transition-colors duration-300 after:absolute after:inset-0 after:content-[''] group-hover:text-customOrange"
                      >
                        Citește articolul
                        <ArrowRight
                          size={18}
                          className="transition-transform duration-300 group-hover:translate-x-1"
                        />
                      </Link>
                    </div>
                  </div>
                </article>
              )
            })}
          </div>
        )}
      </div>
    </section>
  )
}

export default PostsArchive
