'use client'

import Link from 'next/link'
import React, { useState } from 'react'
import { ArrowRight, Calendar, ChevronLeft, ChevronRight, Clock, User } from 'lucide-react'
import { useInView } from 'react-intersection-observer'

import { formatRomanianDate } from '@/utilities/formatRomanianDate'

const MONTHS = [
  'Ianuarie',
  'Februarie',
  'Martie',
  'Aprilie',
  'Mai',
  'Iunie',
  'Iulie',
  'August',
  'Septembrie',
  'Octombrie',
  'Noiembrie',
  'Decembrie',
]

export type CalendarEvent = {
  id: number
  title: string
  slug: string
  date: string
  image?: string | null
  teachers: string[]
  description?: string
}

export default function CalendarClient({ events }: { events: CalendarEvent[] }) {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: false,
  })

  const [displayMonth, setDisplayMonth] = useState(() => getInitialMonth(events))

  const goToPreviousMonth = () => {
    setDisplayMonth((prev) => {
      if (prev.month === 0) {
        return { month: 11, year: prev.year - 1 }
      }
      return { ...prev, month: prev.month - 1 }
    })
  }

  const goToNextMonth = () => {
    setDisplayMonth((prev) => {
      if (prev.month === 11) {
        return { month: 0, year: prev.year + 1 }
      }
      return { ...prev, month: prev.month + 1 }
    })
  }

  const filteredEvents = events.filter((event) => {
    const { month, year } = getDateParts(event.date)
    return month === displayMonth.month && year === displayMonth.year
  })

  return (
    <section ref={ref} className="py-20 mt-20 px-4 bg-gradient-to-br bg-customWhite relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-20 right-20 w-40 h-40 bg-customOrange rounded-full opacity-10"></div>
        <div className="absolute bottom-20 left-20 w-56 h-56 bg-customLightBlue rounded-full opacity-20"></div>
        <div className="absolute top-1/3 left-1/4 w-24 h-24 bg-customBlue rounded-full opacity-10"></div>
        <div className="absolute bottom-1/3 right-1/4 w-32 h-32 bg-customOrange rounded-full opacity-10"></div>
      </div>

      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-12">
          <div
            className={`inline-block ${inView ? 'animate-slide-up' : 'opacity-0'}`}
            style={{ transitionDelay: '0.1s' }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-customBlack mb-4 italic transform -rotate-1">
              Următoarele evenimente
            </h2>
            <div className="w-40 h-2 bg-customOrange mx-auto rounded-full"></div>
          </div>

          <p
            className={`text-lg text-customBlack max-w-2xl mx-auto mt-6 ${inView ? 'animate-fade-in' : 'opacity-0'}`}
            style={{ transitionDelay: '0.2s' }}
          >
            Alăturați-vă nouă pentru ateliere interesante, întâlniri comunitare și aventuri de învățare pe tot
            parcursul anului. Evenimentele noastre oferă experiențe îmbogățitoare pentru copii și familii, pentru a
            învăța, a crea și a se conecta.
          </p>
        </div>

        <div className={`mb-12 ${inView ? 'animate-fade-in' : 'opacity-0'}`} style={{ transitionDelay: '0.3s' }}>
          <div className="flex justify-center items-center">
            <button
              onClick={goToPreviousMonth}
              className="bg-white hover:bg-customLightOrange text-customBlack p-3 rounded-full shadow-md transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-customOrange"
              aria-label="Previous month"
            >
              <ChevronLeft size={24} />
            </button>

            <div className="mx-6 px-8 py-3 bg-customBlue text-white font-bold text-xl rounded-full shadow-md min-w-[200px] text-center">
              {MONTHS[displayMonth.month]} {displayMonth.year}
            </div>

            <button
              onClick={goToNextMonth}
              className="bg-white hover:bg-customLightOrange text-customBlack p-3 rounded-full shadow-md transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-customOrange"
              aria-label="Next month"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>

        <div className="space-y-8">
          {filteredEvents.length > 0 ? (
            filteredEvents.map((event, index) => (
              <div
                key={event.id}
                className={`bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-500 hover:shadow-xl ${
                  inView ? 'animate-fade-in' : 'opacity-0'
                }`}
                style={{ transitionDelay: `${0.4 + index * 0.1}s` }}
              >
                <div className="flex flex-col md:flex-row">
                  {/* Event image */}
                  <div className="md:w-2/5 relative">
                    <img
                      src={event.image || '/placeholder.svg'}
                      alt={event.title}
                      className="w-full h-64 md:h-full object-cover"
                    />
                    <div className="absolute top-0 left-0 bg-customOrange text-white font-bold px-4 py-2 rounded-br-lg">
                      <Calendar className="inline-block mr-2 h-5 w-5" />
                      {formatRomanianDate(event.date)}
                    </div>
                  </div>

                  {/* Event content */}
                  <div className="md:w-3/5 p-6 md:p-8 flex flex-col">
                    <div>
                      <h3 className="text-2xl font-bold text-customBlack mb-3">{event.title}</h3>

                      <div className="space-y-3 mb-4 text-sm">
                        <div className="flex items-start">
                          <Calendar className="text-customBlue mr-2 mt-1 flex-shrink-0 h-5 w-5" />
                          <span>{formatRomanianDate(event.date)}</span>
                        </div>

                        <div className="flex items-start">
                          <Clock className="text-customBlue mr-2 mt-1 flex-shrink-0 h-5 w-5" />
                          <span>{formatEventTime(event.date)}</span>
                        </div>

                        {event.teachers.length > 0 && (
                          <div className="flex items-start">
                            <User className="text-customBlue mr-2 mt-1 flex-shrink-0 h-5 w-5" />
                            <span>Susținut de {event.teachers.join(', ')}</span>
                          </div>
                        )}
                      </div>

                      {event.description && <p className="text-customBlack mb-6">{event.description}</p>}
                    </div>

                    <div className="mt-auto">
                      <Link
                        href={`/guided-learning/workshops/${event.slug}`}
                        className="inline-flex items-center bg-customBlue hover:bg-customOrange text-white font-bold py-3 px-6 rounded-lg transition-colors duration-300"
                      >
                        Participă
                        <ArrowRight className="ml-2" size={18} />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div
              className={`bg-white rounded-xl p-12 text-center ${inView ? 'animate-fade-in' : 'opacity-0'}`}
              style={{ transitionDelay: '0.4s' }}
            >
              <Calendar className="w-16 h-16 text-customLightBlue mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-customBlack mb-2">Nu sunt evenimente programate.</h3>
              <p className="text-customBlack max-w-md mx-auto">
                Nu este niciun eveniment planificat pentru {MONTHS[displayMonth.month]} {displayMonth.year} momentan.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

function getDateParts(value: string): { month: number; year: number } {
  const parts = new Intl.DateTimeFormat('en-CA', {
    timeZone: 'Europe/Bucharest',
    year: 'numeric',
    month: 'numeric',
  }).formatToParts(new Date(value))

  const get = (type: string) => Number(parts.find((part) => part.type === type)?.value ?? 0)

  return { month: get('month') - 1, year: get('year') }
}

function getInitialMonth(events: CalendarEvent[]): { month: number; year: number } {
  const now = new Date()
  if (events.length === 0) {
    return { month: now.getMonth(), year: now.getFullYear() }
  }

  const sorted = [...events].sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())
  const upcoming = sorted.find((event) => new Date(event.date).getTime() >= now.getTime())
  const target = upcoming ?? sorted[sorted.length - 1]

  return getDateParts(target.date)
}

function formatEventTime(date: string): string {
  return new Intl.DateTimeFormat('ro-RO', {
    timeZone: 'Europe/Bucharest',
    hour: '2-digit',
    minute: '2-digit',
  }).format(new Date(date))
}
