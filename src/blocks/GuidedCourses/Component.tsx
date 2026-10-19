'use client'

import { Bangers, Nunito } from 'next/font/google'
import clsx from 'clsx'
import React, { useState } from 'react'
import { useInView } from 'react-intersection-observer'
import { BookOpen, Calendar, ChevronDown, ChevronUp, User } from 'lucide-react'

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
type CMSLinkProps = React.ComponentProps<typeof CMSLink>

export type GuidedCoursesLinkRow = {
  id?: string | null
  link?: {
    type?: 'custom' | 'reference' | null
    label?: string | null
    newTab?: boolean | null
    url?: string | null
    reference?: CMSLinkProps['reference']
  } | null
}

export type GuidedCourseCard = {
  id?: string | null
  title?: string | null
  teacher?: string | null
  description?: string | null
  dateInterval?: string | null
  subjects?: string[] | null
  image?: MediaResource
  links?: GuidedCoursesLinkRow[] | null
}

export type GuidedCoursesProps = {
  className?: string
  badge?: string | null
  sectionTitle?: string | null
  sectionDescription?: string | null
  courses?: GuidedCourseCard[] | null
  links?: GuidedCoursesLinkRow[] | null
}

export const GuidedCourses: React.FC<GuidedCoursesProps> = (props) => {
  const { badge, className, courses: coursesProp, links, sectionDescription, sectionTitle } = props
  const courses = coursesProp ?? []

  const [expandedCourse, setExpandedCourse] = useState<string | number | null>(null)

  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: false,
  })

  const toggleCourse = (courseId: string | number) => {
    if (expandedCourse === courseId) {
      setExpandedCourse(null)
    } else {
      setExpandedCourse(courseId)
    }
  }

  const cta = links?.[0]?.link

  return (
    <section
      ref={ref}
      className={clsx('py-20 px-4 bg-customWhite relative overflow-hidden', className)}
      style={{ fontFamily: nunito.style.fontFamily }}
    >
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-20 right-20 w-40 h-40 bg-customLightOrange rounded-full opacity-20" />
        <div className="absolute bottom-20 left-20 w-56 h-56 bg-customLightBlue rounded-full opacity-30" />
      </div>

      <div className="max-w-6xl mx-auto relative">
        {/* Section header */}
        <div className="text-center mb-16">
          <div
            className={clsx('inline-block', inView ? 'animate-slide-up' : 'opacity-0')}
            style={{ transitionDelay: '0.1s' }}
          >
            {badge && (
              <span className="inline-flex items-center gap-2 rounded-full bg-white/70 px-4 py-1 text-xs font-bold uppercase tracking-widest text-customBlack mb-4">
                {badge}
              </span>
            )}

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

        {/* Timeline-style course layout */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-1 bg-customBlue transform md:translate-x-[-0.5px] hidden md:block" />

          {/* Courses */}
          {courses.map((course, index) => {
            const courseKey = course.id ?? index
            const imageResource =
              typeof course.image === 'object' && course.image?.url ? course.image : null
            const cardLink = (course.links || [])[0]?.link
            const subjects = course.subjects || []

            return (
              <div
                key={courseKey}
                className={clsx('mb-12 md:mb-16 relative', inView ? 'animate-fade-in' : 'opacity-0')}
                style={{ transitionDelay: `${0.3 + index * 0.1}s` }}
              >
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-1/2 top-0 w-5 h-5 bg-customOrange rounded-full transform md:translate-x-[-10px] mt-6 z-10 hidden md:block" />

                {/* Course content */}
                <div
                  className={clsx(
                    'md:grid md:grid-cols-2 md:gap-8',
                    index % 2 === 0 ? '' : 'md:flex md:flex-row-reverse',
                  )}
                >
                  {/* Text side */}
                  <div className={clsx('relative', index % 2 === 0 ? 'md:pr-12' : 'md:pl-12')}>
                    {/* Date badge */}
                    {course.dateInterval && (
                      <div className="inline-flex items-center bg-customBlue text-white text-sm font-bold px-4 py-2 rounded-full mb-4">
                        <Calendar size={16} className="mr-2" />
                        {course.dateInterval}
                      </div>
                    )}

                    <h3 className="text-2xl font-bold text-customBlack mb-3">{course.title}</h3>

                    {course.teacher && (
                      <div className="flex items-center mb-4">
                        <div className="flex items-center text-customBlack">
                          <User size={18} className="text-customBlue mr-2" />
                          <span className="font-medium">Taught by {course.teacher}</span>
                        </div>
                      </div>
                    )}

                    {course.description && (
                      <p className="text-customBlack mb-4">{course.description}</p>
                    )}

                    {/* Toggle button */}
                    {subjects.length > 0 && (
                      <button
                        type="button"
                        onClick={() => toggleCourse(courseKey)}
                        className="flex items-center text-customBlue hover:text-customOrange transition-colors duration-300 font-bold"
                      >
                        {expandedCourse === courseKey ? (
                          <>
                            <span>Show Less</span>
                            <ChevronUp size={20} className="ml-1" />
                          </>
                        ) : (
                          <>
                            <span>Show Subjects</span>
                            <ChevronDown size={20} className="ml-1" />
                          </>
                        )}
                      </button>
                    )}

                    {/* Expandable subjects */}
                    {subjects.length > 0 && expandedCourse === courseKey && (
                      <div className="mt-4 pl-4 border-l-2 border-customLightOrange animate-fade-in">
                        <h4 className="font-bold text-customBlack mb-2">Course Subjects:</h4>
                        <ul className="space-y-2">
                          {subjects.map((subject, idx) => (
                            <li key={idx} className="flex items-start">
                              <BookOpen
                                size={18}
                                className="text-customOrange mr-2 mt-1 flex-shrink-0"
                              />
                              <span className="text-customBlack">{subject}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* Optional course link */}
                    {cardLink && (
                      <CMSLink
                        {...cardLink}
                        appearance="inline"
                        className="inline-flex items-center mt-4 text-customBlue hover:text-customOrange transition-colors duration-300 font-bold"
                      />
                    )}
                  </div>

                  {/* Image side */}
                  <div className="mt-6 md:mt-0">
                    <div
                      className={clsx(
                        'w-1/2 h-auto rounded-xl overflow-hidden shadow-lg transform',
                        index % 2 === 0 ? 'md:rotate-2' : 'md:-rotate-2',
                      )}
                    >
                      {imageResource && (
                        <Media
                          resource={imageResource}
                          alt={course.title || ''}
                          imgClassName="w-full h-auto object-cover"
                        />
                      )}
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* View all courses button */}
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

export default GuidedCourses
