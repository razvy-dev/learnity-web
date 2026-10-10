import { Quote } from 'lucide-react'
import React from 'react'

import { Media } from '@/components/Media'
import { cn } from '@/utilities/ui'

import type { Media as MediaType } from '@/payload-types'

export type TeacherCardData = {
  course: string
  image?: MediaType | number | null
  name: string
  quote?: string | null
}

export type TeacherCardProps = {
  className?: string
  teacher: TeacherCardData
}

export const TeacherCard: React.FC<TeacherCardProps> = ({ teacher, className }) => {
  return (
    <div
      className={cn(
        'bg-white rounded-2xl overflow-hidden shadow-lg transform transition-all duration-500 hover:-translate-y-2 hover:shadow-xl h-full',
        className,
      )}
    >
      <div className="p-6">
        {/* Teacher info header */}
        <div className="flex items-center mb-4">
          <div className="bg-customOrange text-white text-sm font-bold px-3 py-1 rounded-full">
            {teacher.course}
          </div>
        </div>

        <h3 className="text-2xl font-bold text-customBlack mb-2">{teacher.name}</h3>

        {/* Teacher photo and quote side by side */}
        <div className="flex flex-col md:flex-row gap-4 mt-4">
          {/* Teacher photo - contained */}
          <div className="md:w-1/3">
            <div className="relative rounded-xl overflow-hidden aspect-square">
              {typeof teacher.image === 'object' && teacher.image?.url && (
                <Media
                  resource={teacher.image}
                  fill
                  imgClassName="object-cover transition-transform duration-500 hover:scale-105"
                />
              )}
            </div>
          </div>

          {/* Teacher quote */}
          <div className="md:w-2/3 relative">
            <div className="absolute top-0 right-0 text-customOrange opacity-20">
              <Quote size={30} />
            </div>

            {teacher.quote && (
              <p className="text-customBlack italic text-sm md:text-base pt-4 md:pt-0">
                &quot;{teacher.quote}&quot;
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default TeacherCard
