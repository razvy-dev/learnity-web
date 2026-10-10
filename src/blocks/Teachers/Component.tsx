'use client'

import { Bangers, Nunito } from 'next/font/google'
import clsx from 'clsx'
import React from 'react'
import { useInView } from 'react-intersection-observer'

import { CMSLink } from '@/components/Link'
import { TeacherCard } from '@/components/TeacherCard'

import type { Teachers as TeachersBlockProps } from '@/payload-types'

const bangers = Bangers({
  subsets: ['latin', 'latin-ext'],
  weight: '400',
  display: 'swap',
})

const nunito = Nunito({
  subsets: ['latin', 'latin-ext'],
  display: 'swap',
})

export type Props = TeachersBlockProps & {
  className?: string
}

export const Teachers: React.FC<Props> = (props) => {
  const { sectionTitle, sectionDescription, teachers, links, className } = props

  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: false,
  })

  const cta = (links || [])[0]?.link

  return (
    <section
      ref={ref}
      className={clsx('py-20 px-4 bg-customWhite relative overflow-hidden', className)}
      style={{ fontFamily: nunito.style.fontFamily }}
    >
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-20 right-20 w-40 h-40 bg-customOrange rounded-full opacity-10" />
        <div className="absolute bottom-20 left-20 w-56 h-56 bg-customBlue rounded-full opacity-10" />
      </div>

      <div className="max-w-7xl mx-auto relative">
        {/* Section header */}
        <div className="text-center mb-16">
          <div
            className={clsx('inline-block', inView ? 'animate-slide-up' : 'opacity-0')}
            style={{ transitionDelay: '0.1s' }}
          >
            <h2
              className="text-4xl md:text-5xl text-customBlack mb-4 italic"
              style={{ fontFamily: bangers.style.fontFamily }}
            >
              {sectionTitle}
            </h2>
            <div className="w-40 h-2 bg-customOrange mx-auto rounded-full" />
          </div>

          {sectionDescription && (
            <p
              className={clsx(
                'text-lg text-customBlack max-w-2xl mx-auto mt-6',
                inView ? 'animate-fade-in' : 'opacity-0',
              )}
              style={{ transitionDelay: '0.2s' }}
            >
              {sectionDescription}
            </p>
          )}
        </div>

        {/* Teachers grid - uniform layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          {teachers.map((teacher, index) => (
            <div
              key={teacher.id || index}
              className={clsx('h-full', inView ? 'animate-fade-in' : 'opacity-0')}
              style={{ transitionDelay: `${0.3 + index * 0.1}s` }}
            >
              <TeacherCard teacher={teacher} />
            </div>
          ))}
        </div>

        {/* View all teachers button */}
        {cta && (
          <div
            className={clsx('text-center mt-12', inView ? 'animate-fade-in' : 'opacity-0')}
            style={{ transitionDelay: '0.8s' }}
          >
            <CMSLink
              {...cta}
              appearance="inline"
              className="inline-flex items-center bg-customBlue hover:bg-customOrange text-white font-bold py-3 px-8 rounded-full transition-colors duration-300 shadow-md"
            />
          </div>
        )}
      </div>
    </section>
  )
}

export default Teachers
