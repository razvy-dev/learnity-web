import { Calendar, User, ArrowRight } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

import { Media } from '@/components/Media'
import { formatRomanianDate } from '@/utilities/formatRomanianDate'
import { richTextToPlainText } from '@/utilities/richTextToPlainText'
import { cn } from '@/utilities/ui'

import type { GuidedWorkshop } from '@/payload-types'

function getAuthors(workshop: GuidedWorkshopCardData): string {
  if (workshop.authorNames) return workshop.authorNames

  if (!Array.isArray(workshop.authors)) return ''

  return workshop.authors
    .map((author) => (typeof author === 'object' && author ? author.name : null))
    .filter((name): name is string => Boolean(name))
    .join(', ')
}

export type GuidedWorkshopCardData = GuidedWorkshop & {
  authorNames?: string | null
}

export type GuidedWorkshopCardProps = {
  badgeText?: string | null
  className?: string
  ctaText?: string | null
  workshop: GuidedWorkshopCardData
}

export const GuidedWorkshopCard: React.FC<GuidedWorkshopCardProps> = ({
  workshop,
  badgeText,
  ctaText,
  className,
}) => {
  const description = richTextToPlainText(workshop.description).trim()
  const authors = getAuthors(workshop)
  const date = formatRomanianDate(workshop.date)
  const href = `/guided-learning/workshops/${workshop.slug}`

  return (
    <div
      className={cn(
        'group bg-customWhite rounded-2xl overflow-hidden shadow-lg transform transition-all duration-500 hover:-translate-y-2 hover:shadow-xl flex flex-col h-full',
        className,
      )}
    >
      <div className="relative h-48 overflow-hidden">
        {typeof workshop.photo === 'object' && workshop.photo?.url && (
          <Media
            resource={workshop.photo}
            fill
            imgClassName="object-cover transition-transform duration-500 group-hover:scale-110"
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-customBlack opacity-50" />
        {badgeText && (
          <div className="absolute top-4 right-4 bg-customOrange text-white text-sm font-bold px-3 py-1 rounded-full">
            {badgeText}
          </div>
        )}
      </div>

      <div className="p-6 flex flex-col flex-1">
        <h3 className="text-xl font-bold text-customBlack mb-3">{workshop.title}</h3>

        {description && <p className="text-customBlack mb-4 text-sm line-clamp-4">{description}</p>}

        <div className="flex flex-col space-y-2 mb-6 mt-auto">
          {authors && (
            <div className="flex items-center text-sm">
              <User size={16} className="text-customBlue mr-2" />
              <span className="text-customBlack">{authors}</span>
            </div>
          )}
          {date && (
            <div className="flex items-center text-sm">
              <Calendar size={16} className="text-customBlue mr-2" />
              <span className="text-customBlack">{date}</span>
            </div>
          )}
        </div>

        <Link
          href={href}
          className="group/cta flex items-center justify-between bg-customBlue hover:bg-customOrange text-white text-sm font-bold py-2 px-4 rounded-lg transition-colors duration-300 w-full"
        >
          <span>{ctaText || 'Vezi mai multe'}</span>
          <ArrowRight
            size={16}
            className="transform group-hover/cta:translate-x-1 transition-transform duration-300"
          />
        </Link>
      </div>
    </div>
  )
}

export default GuidedWorkshopCard
