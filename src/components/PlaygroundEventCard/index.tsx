import { Calendar, ArrowRight } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

import { Media } from '@/components/Media'
import { formatRomanianDate } from '@/utilities/formatRomanianDate'
import { richTextToPlainText } from '@/utilities/richTextToPlainText'
import { cn } from '@/utilities/ui'

import type { Event } from '@/payload-types'

export type PlaygroundEventCardProps = {
  className?: string
  ctaHref?: string
  ctaText?: string | null
  event: Event
}

export const PlaygroundEventCard: React.FC<PlaygroundEventCardProps> = ({
  event,
  ctaText,
  ctaHref = '/playground/events',
  className,
}) => {
  const description = richTextToPlainText(event.description).trim()
  const date = formatRomanianDate(event.date)

  return (
    <div
      className={cn(
        'bg-white rounded-3xl overflow-hidden shadow-lg transform transition-all duration-500 hover:-translate-y-2 hover:shadow-xl h-full flex flex-col',
        className,
      )}
    >
      {/* Event image */}
      <div className="relative h-56 overflow-hidden">
        {typeof event.photo === 'object' && event.photo?.url && (
          <Media resource={event.photo} fill imgClassName="object-cover" />
        )}

        {/* Date badge */}
        {date && (
          <div className="absolute bottom-0 right-0 bg-customBlue text-white text-sm font-bold px-4 py-2 rounded-tl-2xl">
            <Calendar size={16} className="inline-block mr-2" />
            {date}
          </div>
        )}
      </div>

      {/* Event content */}
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold text-customBlack mb-3">{event.title}</h3>

        {description && <p className="text-customBlack mb-6 flex-grow">{description}</p>}

        {/* CTA button */}
        <Link
          href={ctaHref}
          className="group flex items-center justify-center bg-customOrange hover:bg-customBlue text-white font-bold py-3 px-6 rounded-full transition-colors duration-300 mt-auto"
        >
          {ctaText || 'Vezi mai multe'}
          <ArrowRight
            size={18}
            className="ml-2 transform group-hover:translate-x-1 transition-transform duration-300"
          />
        </Link>
      </div>
    </div>
  )
}

export default PlaygroundEventCard
