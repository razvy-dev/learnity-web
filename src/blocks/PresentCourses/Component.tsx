'use client'

import { Bangers, Nunito } from 'next/font/google'
import clsx from 'clsx'
import React, { useState } from 'react'
import { useInView } from 'react-intersection-observer'
import { Calendar, ChevronDown, ChevronUp, MapPin, User } from 'lucide-react'
import Link from 'next/link'

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
type RichTextData = React.ComponentProps<typeof RichText>['data']
type CMSLinkProps = React.ComponentProps<typeof CMSLink>

export type PresentCoursesItem = {
  id?: string | null
  title?: string | null
  description?: string | null
  teacher?: string | null
  place?: string | null
  timeperiod?: string | null
  icon?: string | null
  image?: MediaResource
}

export type PresentCoursesModule = {
  id?: string | null
  name?: string | null
  description?: string | null
  items?: PresentCoursesItem[] | null
}

export type PresentCoursesProps = {
  className?: string
  badge?: string | null
  sectionTitle?: string | null
  sectionDescription?: RichTextData
  ctaText?: string | null
  modules?: PresentCoursesModule[] | null
  links?:
    | {
        id?: string | null
        link?: {
          type?: 'custom' | 'reference' | null
          label?: string | null
          newTab?: boolean | null
          url?: string | null
          reference?: CMSLinkProps['reference']
        } | null
      }[]
    | null
}

export const PresentCoursesBlockComponent: React.FC<PresentCoursesProps> = (props) => {
  const { badge, className, ctaText, links, modules, sectionDescription, sectionTitle } = props

  const moduleList = Array.isArray(modules) ? modules : []
  const [activeModule, setActiveModule] = useState(0)
  const [expandedCourse, setExpandedCourse] = useState<number | null>(null)

  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: false,
  })

  const toggleCourse = (index: number) => {
    setExpandedCourse((current) => (current === index ? null : index))
  }

  const activeModuleData = moduleList[activeModule] || moduleList[0]
  const cta = links?.[0]?.link

  return (
    <section
      ref={ref}
      className={clsx(
        'relative overflow-hidden bg-customWhite/20 px-4 py-20',
        className,
      )}
      style={{ fontFamily: nunito.style.fontFamily }}
    >
      <style>{`
        @keyframes presentCourses-slide-up {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes presentCourses-fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .presentCourses-slide-up {
          animation: presentCourses-slide-up 0.8s ease-out both;
        }
        .presentCourses-fade-in {
          animation: presentCourses-fade-in 0.8s ease-out both;
        }
        @media (prefers-reduced-motion: reduce) {
          .presentCourses-slide-up,
          .presentCourses-fade-in {
            animation: none;
          }
        }
      `}</style>

      {/* Decorative background elements */}
      <div className="pointer-events-none absolute left-0 top-0 h-full w-full">
        <div className="absolute right-20 top-20 h-40 w-40 rounded-full bg-customOrange opacity-10" />
        <div className="absolute bottom-20 left-20 h-56 w-56 rounded-full bg-customBlue opacity-10" />
      </div>

      <div className="relative mx-auto max-w-7xl">
        {/* Section header */}
        <div className="mb-12 text-center">
          <div className={clsx('inline-block', inView ? 'presentCourses-slide-up' : 'opacity-0')}>
            {badge && (
              <span className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/70 px-4 py-1 text-xs font-bold uppercase tracking-widest text-customBlack">
                {badge}
              </span>
            )}
            <h2
              className="mb-4 text-4xl italic tracking-widest text-customBlack md:text-5xl"
              style={{ fontFamily: bangers.style.fontFamily }}
            >
              {sectionTitle}
            </h2>
            <div className="mx-auto h-2 w-40 rounded-full bg-customOrange" />
          </div>

          {sectionDescription && (
            <div
              className={clsx(
                'mx-auto mt-6 max-w-2xl text-lg text-customBlack',
                inView ? 'presentCourses-fade-in' : 'opacity-0',
              )}
              style={{ animationDelay: '0.2s' }}
            >
              <RichText data={sectionDescription} enableGutter={false} enableProse={false} />
            </div>
          )}
        </div>

        {/* Module tabs */}
        {moduleList.length > 0 && (
          <div
            className={clsx(
              'mb-12 flex flex-wrap justify-center',
              inView ? 'presentCourses-fade-in' : 'opacity-0',
            )}
            style={{ animationDelay: '0.3s' }}
          >
            {moduleList.map((module, index) => (
              <button
                key={module.id ?? module.name ?? index}
                onClick={() => {
                  setActiveModule(index)
                  setExpandedCourse(null)
                }}
                className={clsx(
                  'mx-2 mb-3 rounded-full px-6 py-3 font-bold transition-all duration-300',
                  activeModule === index
                    ? 'bg-customBlue text-white shadow-md'
                    : 'bg-white text-customBlack hover:bg-customLightOrange',
                )}
              >
                {module.name}
              </button>
            ))}
          </div>
        )}

        {/* Courses grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {activeModuleData?.items?.map((course, index) => {
            const imageResource = typeof course.image === 'object' ? course.image : null

            return (
              <div
                key={course.id ?? course.title ?? index}
                className={clsx(
                  'overflow-hidden rounded-xl bg-white shadow-lg transition-all duration-500 hover:shadow-xl',
                  inView ? 'presentCourses-fade-in' : 'opacity-0',
                )}
                style={{ animationDelay: `${0.4 + index * 0.1}s` }}
              >
                {/* Course image */}
                {imageResource?.url && (
                  <div className="relative h-48 overflow-hidden">
                    <Media
                      resource={imageResource}
                      imgClassName="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                      fill
                    />
                  </div>
                )}

                {/* Course content */}
                <div className="p-6">
                  <h3 className="mb-3 text-xl font-bold text-customBlack">{course.title}</h3>

                  <div className="mb-4 space-y-3">
                    {course.teacher && (
                      <div className="flex items-start">
                        <User size={18} className="mr-2 mt-1 flex-shrink-0 text-customBlue" />
                        <span className="text-customBlack">{course.teacher}</span>
                      </div>
                    )}

                    {course.place && (
                      <div className="flex items-start">
                        <MapPin size={18} className="mr-2 mt-1 flex-shrink-0 text-customBlue" />
                        <span className="text-customBlack">{course.place}</span>
                      </div>
                    )}

                    {course.timeperiod && (
                      <div className="flex items-start">
                        <Calendar size={18} className="mr-2 mt-1 flex-shrink-0 text-customBlue" />
                        <span className="text-customBlack">{course.timeperiod}</span>
                      </div>
                    )}
                  </div>

                  {/* Toggle description */}
                  {course.description && (
                    <div>
                      <button
                        onClick={() => toggleCourse(index)}
                        className="flex items-center font-bold text-customBlue transition-colors duration-300 hover:text-customOrange"
                      >
                        {expandedCourse === index ? (
                          <>
                            <span>Show Less</span>
                            <ChevronUp size={20} className="ml-1" />
                          </>
                        ) : (
                          <>
                            <span>Read Description</span>
                            <ChevronDown size={20} className="ml-1" />
                          </>
                        )}
                      </button>

                      {expandedCourse === index && (
                        <div className="presentCourses-fade-in mt-4 border-t border-gray-200 pt-4">
                          <p className="whitespace-pre-line text-customBlack">{course.description}</p>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              </div>
            )
          })}
        </div>

        {/* Registration button */}
        {(cta?.type || ctaText) && (
          <div
            className={clsx('mt-16 text-center', inView ? 'presentCourses-fade-in' : 'opacity-0')}
            style={{ animationDelay: '0.9s' }}
          >
            {cta?.type ? (
              <CMSLink
                className="inline-flex items-center rounded-full bg-customOrange px-8 py-3 font-bold text-white shadow-md transition-colors duration-300 hover:bg-customBlue"
                newTab={cta.newTab}
                reference={cta.reference}
                type={cta.type}
                url={cta.url}
              >
                {cta.label}
              </CMSLink>
            ) : (
              <Link
                href="/contact"
                className="inline-flex items-center rounded-full bg-customOrange px-8 py-3 font-bold text-white shadow-md transition-colors duration-300 hover:bg-customBlue"
              >
                {ctaText || 'Înscrie-te la cursuri'}
              </Link>
            )}
          </div>
        )}
      </div>
    </section>
  )
}

export default PresentCoursesBlockComponent
export { PresentCoursesBlockComponent as PresentCourses }
