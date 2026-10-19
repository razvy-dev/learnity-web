'use client'

import { Nunito } from 'next/font/google'
import clsx from 'clsx'
import React from 'react'
import { useInView } from 'react-intersection-observer'
import { BookOpen } from 'lucide-react'

import { GuidedWorkshopCard } from '@/components/GuidedWorkshopCard'

import type { GuidedWorkshopCardData } from '@/components/GuidedWorkshopCard'

const nunito = Nunito({
  subsets: ['latin', 'latin-ext'],
  display: 'swap',
})

export type WorkshopsListingProps = {
  className?: string
  workshops: GuidedWorkshopCardData[]
}

export const WorkshopsListing: React.FC<WorkshopsListingProps> = ({ workshops, className }) => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: false,
  })

  return (
    <section
      ref={ref}
      className={clsx('py-20 px-4 bg-customWhite relative overflow-hidden', className)}
      style={{ fontFamily: nunito.style.fontFamily }}
    >
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-20 right-20 w-40 h-40 bg-customLightBlue rounded-full opacity-20" />
        <div className="absolute bottom-40 left-20 w-56 h-56 bg-customLightOrange rounded-full opacity-20" />
      </div>

      <div className="max-w-7xl mx-auto relative">
        {workshops.length === 0 ? (
          <div
            className={clsx(
              'mx-auto max-w-2xl bg-customWhite p-12 text-center shadow-lg',
              inView ? 'animate-fade-in' : 'opacity-0',
            )}
            style={{ transitionDelay: '0.1s' }}
          >
            <BookOpen className="mx-auto mb-4 h-16 w-16 text-customLightBlue" />
            <h2 className="mb-2 text-2xl font-bold text-customBlack">Încă nu există workshops.</h2>
            <p className="mx-auto max-w-md text-customBlack">
              Publicăm în curând primele workshopuri Learnity. Reveniți în curând!
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
            {workshops.map((workshop, index) => (
              <div
                key={workshop.id}
                className={clsx('h-full', inView ? 'animate-fade-in' : 'opacity-0')}
                style={{ transitionDelay: `${0.1 + index * 0.1}s` }}
              >
                <GuidedWorkshopCard workshop={workshop} />
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}

export default WorkshopsListing
