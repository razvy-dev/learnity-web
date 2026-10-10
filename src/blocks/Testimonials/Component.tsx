'use client'

import { Bangers, Nunito } from 'next/font/google'
import clsx from 'clsx'
import React, { useEffect, useRef, useState } from 'react'
import { useInView } from 'react-intersection-observer'
import { ChevronLeft, ChevronRight } from 'lucide-react'

import { Media } from '@/components/Media'

import type { Testimonials as TestimonialsBlockProps } from '@/payload-types'

const bangers = Bangers({
  subsets: ['latin', 'latin-ext'],
  weight: '400',
  display: 'swap',
})

const nunito = Nunito({
  subsets: ['latin', 'latin-ext'],
  display: 'swap',
})

export type Props = {
  className?: string
} & TestimonialsBlockProps

export const Testimonials: React.FC<Props> = (props) => {
  const { className, sectionTitle, autoAdvanceInterval, testimonials } = props

  const [currentIndex, setCurrentIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const [touchStart, setTouchStart] = useState(0)
  const [touchEnd, setTouchEnd] = useState(0)
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: false,
  })

  const count = testimonials?.length || 0

  // Handle auto-advance
  useEffect(() => {
    if (!inView || isPaused || count === 0) return

    timeoutRef.current = setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % count)
    }, autoAdvanceInterval || 5000)

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }
    }
  }, [currentIndex, isPaused, inView, autoAdvanceInterval, count])

  // Handle navigation
  const pauseTemporarily = () => {
    setIsPaused(true)
    if (timeoutRef.current) clearTimeout(timeoutRef.current)
    timeoutRef.current = setTimeout(() => setIsPaused(false), 10000)
  }

  const handlePrev = () => {
    pauseTemporarily()
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? count - 1 : prevIndex - 1))
  }

  const handleNext = () => {
    pauseTemporarily()
    setCurrentIndex((prevIndex) => (prevIndex + 1) % count)
  }

  // Handle touch events for swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX)
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX)
  }

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 75) {
      // Swipe left
      handleNext()
    } else if (touchEnd - touchStart > 75) {
      // Swipe right
      handlePrev()
    }
  }

  if (!testimonials || testimonials.length === 0) return null

  return (
    <section
      ref={ref}
      className={clsx('py-16 px-4 bg-customWhite relative overflow-hidden', className)}
      style={{ fontFamily: nunito.style.fontFamily }}
    >
      {/* Background decorative elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-customLightOrange rounded-full opacity-20"></div>
      <div className="absolute bottom-20 right-10 w-48 h-48 bg-customLightBlue rounded-full opacity-30"></div>

      <div className="max-w-6xl mx-auto">
        <div
          className={clsx('text-center mb-12', inView ? 'animate-slide-up' : 'opacity-0')}
          style={{ transitionDelay: '0.2s' }}
        >
          <h2
            className="text-4xl md:text-5xl text-customBlack mb-4 italic"
            style={{ fontFamily: bangers.style.fontFamily }}
          >
            {sectionTitle}
          </h2>
          <div className="w-32 h-2 bg-customOrange mx-auto rounded-full"></div>
        </div>

        <div
          className="relative max-w-4xl mx-auto"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {/* Testimonial carousel */}
          <div
            className={clsx(
              'bg-white rounded-3xl shadow-xl p-6 md:p-8 relative z-10',
              inView ? 'animate-zoom-in' : 'opacity-0',
            )}
            style={{ transitionDelay: '0.4s' }}
          >
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.id || index}
                className={clsx(
                  'transition-all duration-500',
                  index === currentIndex
                    ? 'opacity-100 translate-x-0'
                    : 'opacity-0 absolute top-0 left-0 w-full h-full',
                )}
                style={{
                  display: index === currentIndex ? 'block' : 'none',
                  padding: '1.5rem 2rem',
                }}
              >
                <div className="flex flex-col items-center text-center">
                  <div className="w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden border-4 border-customBlue mb-6 relative">
                    {typeof testimonial.image === 'object' && testimonial.image?.url && (
                      <Media
                        resource={testimonial.image}
                        fill
                        imgClassName="w-full h-full object-cover"
                      />
                    )}
                    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-12 h-2 bg-customOrange rounded-t-full z-10"></div>
                  </div>

                  <p className="text-lg md:text-xl italic text-customBlack mb-8 max-w-2xl mx-auto leading-relaxed">
                    &ldquo;{testimonial.text}&rdquo;
                  </p>

                  <h3 className="text-xl font-bold text-customBlue">{testimonial.name}</h3>

                  <p className="text-customOrange font-medium">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation buttons */}
          <button
            onClick={handlePrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 md:-translate-x-6 bg-customBlue text-white rounded-full p-3 shadow-lg hover:bg-customOrange transition-colors duration-300 z-20 focus:outline-none focus:ring-2 focus:ring-customOrange"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={handleNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 md:translate-x-6 bg-customBlue text-white rounded-full p-3 shadow-lg hover:bg-customOrange transition-colors duration-300 z-20 focus:outline-none focus:ring-2 focus:ring-customOrange"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        {/* Fixed Indicators */}
        <div className="flex justify-center mt-8 gap-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                pauseTemporarily()
                setCurrentIndex(index)
              }}
              className={clsx(
                'h-2 mx-1 rounded-full transition-all duration-300',
                index === currentIndex ? 'bg-customOrange w-10' : 'bg-customBlue bg-opacity-30 w-2',
              )}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
