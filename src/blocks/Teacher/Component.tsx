'use client'

import { Bangers, Nunito } from 'next/font/google'
import clsx from 'clsx'
import React from 'react'
import { useInView } from 'react-intersection-observer'
import { GraduationCap } from 'lucide-react'

import { Media } from '@/components/Media'
import RichText from '@/components/RichText'

import type { TeacherBlock as TeacherBlockProps } from '@/payload-types'

const bangers = Bangers({
  subsets: ['latin', 'latin-ext'],
  weight: '400',
  display: 'swap',
})

const nunito = Nunito({
  subsets: ['latin', 'latin-ext'],
  display: 'swap',
})

export type Props = TeacherBlockProps & {
  className?: string
}

export const Teacher: React.FC<Props> = (props) => {
  const { className, description, image, name } = props

  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: false,
  })

  const photo = typeof image === 'object' && image !== null ? image : null

  return (
    <section
      ref={ref}
      className={clsx('relative overflow-hidden bg-customWhite px-4 py-20', className)}
      style={{ fontFamily: nunito.style.fontFamily }}
    >
      {/* Decorative background elements */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-10 top-16 h-48 w-48 rounded-full bg-customLightOrange opacity-20" />
        <div className="absolute -right-10 bottom-10 h-56 w-56 rounded-full bg-customLightBlue opacity-30" />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          {/* Teacher photo */}
          <div
            className={clsx('relative', inView ? 'animate-zoom-in' : 'opacity-0')}
            style={{ transitionDelay: '0.2s' }}
          >
            <div className="relative mx-auto max-w-sm lg:max-w-none">
              <div className="relative transform -rotate-2 rounded-2xl bg-white p-4 shadow-xl transition-transform duration-500 hover:rotate-0">
                <div className="relative aspect-square overflow-hidden rounded-xl">
                  {photo?.url && (
                    <Media
                      resource={photo}
                      fill
                      imgClassName="object-cover transition-transform duration-500 hover:scale-105"
                    />
                  )}
                </div>
              </div>

              <div className="absolute -bottom-6 -left-6 z-0 h-28 w-28 rounded-full bg-customOrange opacity-20" />

              <div className="absolute -right-4 -top-4 z-20 flex items-center gap-2 rounded-full bg-customBlue px-4 py-2 text-sm font-bold text-white shadow-lg">
                <GraduationCap size={16} />
                Profesor
              </div>
            </div>
          </div>

          {/* Teacher details */}
          <div
            className={clsx(inView ? 'animate-slide-up' : 'opacity-0')}
            style={{ transitionDelay: '0.1s' }}
          >
            <h2
              className="mb-4 text-4xl italic text-customBlack md:text-5xl"
              style={{ fontFamily: bangers.style.fontFamily }}
            >
              {name}
            </h2>
            <div className="mb-6 h-2 w-32 rounded-full bg-customOrange" />

            {description && (
              <div className="max-w-xl text-lg leading-relaxed text-customBlack">
                <RichText data={description} enableGutter={false} enableProse={false} />
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Teacher
