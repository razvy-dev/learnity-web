'use client'

import { Bangers, Nunito } from 'next/font/google'
import clsx from 'clsx'
import React from 'react'
import { useInView } from 'react-intersection-observer'
import { Calendar, User, MapPin, BookOpen, GraduationCap, Target } from 'lucide-react'

import { Media } from '@/components/Media'
import RichText from '@/components/RichText'
import { formatRomanianDate } from '@/utilities/formatRomanianDate'
import { richTextToPlainText } from '@/utilities/richTextToPlainText'
import { cn } from '@/utilities/ui'

import type { GuidedLearningByYear as GuidedLearningByYearBlockProps } from '@/payload-types'
import type { GuidedWorkshop, Media as MediaType } from '@/payload-types'

const bangers = Bangers({
  subsets: ['latin', 'latin-ext'],
  weight: '400',
  display: 'swap',
})

const nunito = Nunito({
  subsets: ['latin', 'latin-ext'],
  display: 'swap',
})

type Experience = {
  id: number
  title: string
  slug: string
  description: GuidedWorkshop['description']
  photo: number | MediaType
  teachers?: { teacher: string }[] | null
  date?: string
  startDate?: string
  endDate?: string
  location?: string
  type: 'workshop' | 'course' | 'bootcamp'
  module: 'module1' | 'module2' | 'module3'
  href: string
}

type ModuleConfig = {
  value: 'module1' | 'module2' | 'module3'
  label: string
  description: string
  color: 'blue' | 'orange' | 'green' | 'purple' | 'red'
}

type ExperienceWithMeta = Experience & {
  authorNames?: string
  formattedDate: string
  typeIcon: React.ReactNode
  typeLabel: string
}

const colorStyles = {
  blue: {
    bg: 'bg-blue-50',
    border: 'border-blue-200',
    text: 'text-blue-800',
    textDark: 'text-blue-900',
    accent: 'bg-blue-500',
    accentHover: 'hover:bg-blue-600',
    iconBg: 'bg-blue-100',
    iconText: 'text-blue-600',
    gradient: 'from-blue-500 to-blue-600',
    shadow: 'shadow-blue-500/25',
  },
  orange: {
    bg: 'bg-orange-50',
    border: 'border-orange-200',
    text: 'text-orange-800',
    textDark: 'text-orange-900',
    accent: 'bg-orange-500',
    accentHover: 'hover:bg-orange-600',
    iconBg: 'bg-orange-100',
    iconText: 'text-orange-600',
    gradient: 'from-orange-500 to-orange-600',
    shadow: 'shadow-orange-500/25',
  },
  green: {
    bg: 'bg-green-50',
    border: 'border-green-200',
    text: 'text-green-800',
    textDark: 'text-green-900',
    accent: 'bg-green-500',
    accentHover: 'hover:bg-green-600',
    iconBg: 'bg-green-100',
    iconText: 'text-green-600',
    gradient: 'from-green-500 to-green-600',
    shadow: 'shadow-green-500/25',
  },
  purple: {
    bg: 'bg-purple-50',
    border: 'border-purple-200',
    text: 'text-purple-800',
    textDark: 'text-purple-900',
    accent: 'bg-purple-500',
    accentHover: 'hover:bg-purple-600',
    iconBg: 'bg-purple-100',
    iconText: 'text-purple-600',
    gradient: 'from-purple-500 to-purple-600',
    shadow: 'shadow-purple-500/25',
  },
  red: {
    bg: 'bg-red-50',
    border: 'border-red-200',
    text: 'text-red-800',
    textDark: 'text-red-900',
    accent: 'bg-red-500',
    accentHover: 'hover:bg-red-600',
    iconBg: 'bg-red-100',
    iconText: 'text-red-600',
    gradient: 'from-red-500 to-red-600',
    shadow: 'shadow-red-500/25',
  },
}

function getTypeInfo(type: Experience['type']) {
  switch (type) {
    case 'workshop':
      return { Icon: BookOpen, label: 'Workshop' }
    case 'course':
      return { Icon: GraduationCap, label: 'Curs' }
    case 'bootcamp':
      return { Icon: Target, label: 'Bootcamp' }
  }
}

function formatExperienceDate(experience: Experience): string {
  if (experience.type === 'workshop' && experience.date) {
    return formatRomanianDate(experience.date)
  }
  if ((experience.type === 'course' || experience.type === 'bootcamp') && experience.startDate && experience.endDate) {
    const start = formatRomanianDate(experience.startDate)
    const end = formatRomanianDate(experience.endDate)
    return `${start} – ${end}`
  }
  return ''
}

function getTeachers(experience: Experience): string {
  if (!experience.teachers || experience.teachers.length === 0) return ''
  return experience.teachers.map((t) => t.teacher).join(', ')
}

export type GuidedLearningByYearClientProps = Omit<GuidedLearningByYearBlockProps, 'experiencesByModule' | 'moduleLabels'> & {
  className?: string
  experiencesByModule: {
    module1: Experience[]
    module2: Experience[]
    module3: Experience[]
  }
  modulesConfig: ModuleConfig[]
}

export const GuidedLearningByYearClient: React.FC<GuidedLearningByYearClientProps> = (props) => {
  const {
    sectionTitle,
    sectionDescription,
    year,
    experiencesByModule,
    modulesConfig,
    showEmptyModules,
    className,
  } = props

  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: false,
  })

  const allExperiences = [
    ...experiencesByModule.module1,
    ...experiencesByModule.module2,
    ...experiencesByModule.module3,
  ]

  if (allExperiences.length === 0 && !showEmptyModules) return null

  return (
    <section
      ref={ref}
      className={cn('py-20 px-4 bg-customWhite relative overflow-hidden', className)}
      style={{ fontFamily: nunito.style.fontFamily }}
    >
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-20 right-20 w-40 h-40 bg-customLightBlue rounded-full opacity-20" />
        <div className="absolute bottom-40 left-20 w-56 h-56 bg-customLightOrange rounded-full opacity-20" />
      </div>

      <div className="max-w-7xl mx-auto relative">
        {/* Section header */}
        <div className="text-center mb-16">
          <div
            className={cn('inline-block', inView ? 'animate-slide-up' : 'opacity-0')}
            style={{ transitionDelay: '0.1s' }}
          >
            <h2
              className="text-4xl md:text-5xl text-customBlack mb-4 italic"
              style={{ fontFamily: bangers.style.fontFamily }}
            >
              {sectionTitle}
            </h2>
            <div className="w-40 h-2 bg-customOrange mx-auto rounded-full" />
            <span className="inline-block mt-4 px-4 py-1 bg-customLightBlue text-customBlue text-sm font-semibold rounded-full">
              Anul {year}
            </span>
          </div>

          {sectionDescription && (
            <div
              className={cn(
                'text-lg text-customBlack max-w-3xl mx-auto mt-6',
                inView ? 'animate-fade-in' : 'opacity-0',
              )}
              style={{ transitionDelay: '0.2s' }}
            >
              <RichText data={sectionDescription} enableGutter={false} enableProse={false} />
            </div>
          )}
        </div>

        {/* Modules */}
        <div className="space-y-16">
          {modulesConfig.map((moduleConfig, moduleIndex) => {
            const experiences = experiencesByModule[moduleConfig.value as keyof typeof experiencesByModule] || []
            const colors = colorStyles[moduleConfig.color]
            const hasExperiences = experiences.length > 0

            if (!hasExperiences && !showEmptyModules) return null

            return (
              <div
                key={moduleConfig.value}
                className={cn(
                  'relative',
                  inView ? 'animate-slide-up' : 'opacity-0 translate-y-8',
                )}
                style={{ transitionDelay: `${0.3 + moduleIndex * 0.15}s`, transitionDuration: '0.6s' }}
              >
                {/* Module header */}
                <div className="mb-8">
                  <div className="flex items-center gap-4 mb-4">
                    <div
                      className={cn(
                        'w-14 h-14 rounded-2xl flex items-center justify-center shrink-0',
                        colors.iconBg,
                        colors.iconText,
                      )}
                    >
                      {moduleIndex === 0 && <BookOpen size={24} />}
                      {moduleIndex === 1 && <GraduationCap size={24} />}
                      {moduleIndex === 2 && <Target size={24} />}
                    </div>
                    <div>
                      <h3
                        className={cn(
                          'text-2xl md:text-3xl font-bold',
                          colors.textDark,
                        )}
                        style={{ fontFamily: bangers.style.fontFamily }}
                      >
                        {moduleConfig.label}
                      </h3>
                      {moduleConfig.description && (
                        <p className={cn('text-sm mt-1', colors.text)}>{moduleConfig.description}</p>
                      )}
                    </div>
                    <div className="flex-1 h-px bg-gradient-to-r" style={{ backgroundImage: `linear-gradient(to right, transparent, ${colors.accent.replace('bg-', '').replace('500', '400')}, transparent)` }} />
                  </div>

                  {/* Experience count badge */}
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm font-medium" style={{ backgroundColor: colors.bg.replace('bg-', ''), color: colors.text.replace('text-', '') }}>
                    <span className={cn('font-bold', colors.textDark)}>{experiences.length}</span>
                    <span>{experiences.length === 1 ? 'experiență' : 'experiențe'}</span>
                  </div>
                </div>

                {/* Experiences grid */}
                {hasExperiences ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {experiences.map((experience, expIndex) => {
                      const typeInfo = getTypeInfo(experience.type)
                      const colors = colorStyles[moduleConfig.color]
                      const description = richTextToPlainText(experience.description).trim()
                      const teachers = getTeachers(experience)
                      const formattedDate = formatExperienceDate(experience)

                      return (
                        <article
                          key={experience.id}
                          className={cn(
                            'group relative bg-customWhite rounded-2xl overflow-hidden shadow-lg transform transition-all duration-500 hover:-translate-y-2 hover:shadow-xl flex flex-col h-full',
                            colors.border,
                          )}
                        >
                          {/* Image with gradient overlay */}
                          <div className="relative h-48 overflow-hidden">
                            {typeof experience.photo === 'object' && experience.photo?.url && (
                              <Media
                                resource={experience.photo}
                                fill
                                imgClassName="object-cover transition-transform duration-500 group-hover:scale-110"
                              />
                            )}
                            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-customBlack/60" />
                            {/* Type badge */}
                            <div className="absolute top-4 left-4 flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold text-white backdrop-blur-sm"
                              style={{ backgroundColor: 'rgba(0,0,0,0.6)' }}
                            >
                              <typeInfo.Icon size={18} />
                              <span>{typeInfo.label}</span>
                            </div>
                            {/* Module indicator */}
                            <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                              <div className={cn('px-3 py-1.5 rounded-full text-xs font-bold text-white backdrop-blur-sm', colors.accent)}>
                                {moduleConfig.label}
                              </div>
                            </div>
                          </div>

                          {/* Content */}
                          <div className="p-6 flex flex-col flex-1 bg-white">
                            <h4 className="text-xl font-bold text-customBlack mb-3 group-hover:text-customBlue transition-colors duration-300">
                              {experience.title}
                            </h4>

                            {description && (
                              <p className="text-customBlack/70 mb-4 text-sm line-clamp-3">{description}</p>
                            )}

                            <div className="flex flex-col space-y-2.5 mb-6 mt-auto">
                              {teachers && (
                                <div className="flex items-center text-sm text-customBlack/70">
                                  <User size={16} className={cn('mr-2', colors.iconText)} />
                                  <span>{teachers}</span>
                                </div>
                              )}
                              {formattedDate && (
                                <div className="flex items-center text-sm text-customBlack/70">
                                  <Calendar size={16} className={cn('mr-2', colors.iconText)} />
                                  <span>{formattedDate}</span>
                                </div>
                              )}
                              {experience.type === 'bootcamp' && experience.location && (
                                <div className="flex items-center text-sm text-customBlack/70">
                                  <MapPin size={16} className={cn('mr-2', colors.iconText)} />
                                  <span>{experience.location}</span>
                                </div>
                              )}
                            </div>

                            <a
                              href={experience.href}
                              className={cn(
                                'group/cta flex items-center justify-center font-bold py-2.5 px-4 rounded-lg transition-all duration-300 w-full text-sm',
                                colors.accent,
                                colors.accentHover,
                                colors.shadow,
                                'text-white',
                              )}
                            >
                              Explorează
                              <typeInfo.Icon
                                className="ml-2 transform group-hover/cta:translate-x-1 transition-transform duration-300"
                                size={16}
                              />
                            </a>
                          </div>
                        </article>
                      )
                    })}
                  </div>
                ) : (
                  /* Empty state for module */
                  <div className={cn('text-center py-16 rounded-2xl border-2 border-dashed', colors.border, colors.bg)}>
                    <div className={cn('w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center', colors.iconBg, colors.iconText)}>
                      {moduleIndex === 0 && <BookOpen size={32} />}
                      {moduleIndex === 1 && <GraduationCap size={32} />}
                      {moduleIndex === 2 && <Target size={32} />}
                    </div>
                    <h4 className={cn('text-lg font-semibold mb-2', colors.textDark)}>{moduleConfig.label}</h4>
                    <p className={cn('text-sm max-w-sm mx-auto', colors.text)}>
                      Nu există experiențe disponibile pentru acest modul în anul {year}.
                      {moduleConfig.description && ` ${moduleConfig.description}`}
                    </p>
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default GuidedLearningByYearClient