'use client'

import { Bangers, Nunito } from 'next/font/google'
import clsx from 'clsx'
import React from 'react'
import { useInView } from 'react-intersection-observer'
import { ArrowRight, Star } from 'lucide-react'

import { CMSLink } from '@/components/Link'
import { Media } from '@/components/Media'
import RichText from '@/components/RichText'

import type { Playground as PlaygroundBlockProps } from '@/payload-types'

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
} & PlaygroundBlockProps

export const Playground: React.FC<Props> = (props) => {
  const { className, sectionTitle, description, image, badgeText, links } = props

  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: false,
  })

  const cta = (links || [])[0]?.link

  return (
    <section
      ref={ref}
      className={clsx('py-20 px-4 bg-customWhite relative overflow-hidden', className)}
      style={{ fontFamily: nunito.style.fontFamily }}
    >
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-customBlue rounded-full opacity-10 transform translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-customOrange rounded-full opacity-10 transform -translate-x-1/4 translate-y-1/4"></div>

      {/* Floating stars */}
      <div className="absolute top-20 left-1/4 animate-bounce-slow">
        <Star className="text-customOrange w-8 h-8 opacity-40" />
      </div>
      <div
        className="absolute bottom-20 right-1/4 animate-bounce-slow"
        style={{ animationDelay: '1s' }}
      >
        <Star className="text-customBlue w-6 h-6 opacity-40" />
      </div>
      <div
        className="absolute top-1/2 right-10 animate-bounce-slow"
        style={{ animationDelay: '1.5s' }}
      >
        <Star className="text-customLightOrange w-10 h-10 opacity-30" />
      </div>

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left column - Image */}
          <div>
            <div
              className={clsx('relative', inView ? 'animate-zoom-in' : 'opacity-0')}
              style={{ transitionDelay: '0.2s' }}
            >
              {/* Main playground image */}
              <div className="rounded-3xl overflow-hidden shadow-xl transform -rotate-2 transition-transform hover:rotate-0 duration-500">
                {typeof image === 'object' && image?.url && (
                  <Media
                    resource={image}
                    className="w-full h-auto"
                    imgClassName="w-full h-auto"
                  />
                )}
              </div>

              {/* Decorative elements */}
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-customOrange rounded-full opacity-20 z-0"></div>
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-customBlue rounded-full opacity-30 z-0"></div>

              {/* Badge overlay */}
              {badgeText && (
                <div className="absolute top-6 right-6 bg-white rounded-full shadow-lg p-4 transform rotate-12">
                  <div
                    className="bg-customOrange rounded-full w-16 h-16 flex items-center justify-center text-white text-xl"
                    style={{ fontFamily: bangers.style.fontFamily }}
                  >
                    {badgeText}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Right column - Text content */}
          <div>
            <div
              className={clsx('mb-6', inView ? 'animate-slide-up' : 'opacity-0')}
              style={{ transitionDelay: '0.1s' }}
            >
              <h2
                className="text-4xl md:text-5xl text-customBlack mb-4 italic"
                style={{ fontFamily: bangers.style.fontFamily }}
              >
                {sectionTitle}
              </h2>
              <div className="w-32 h-2 bg-customOrange rounded-full"></div>
            </div>

            {description && (
              <div
                className={clsx(
                  'text-lg text-customBlack mb-6 max-w-xl',
                  inView ? 'animate-fade-in' : 'opacity-0',
                )}
                style={{ transitionDelay: '0.2s' }}
              >
                <RichText data={description} enableGutter={false} enableProse={false} />
              </div>
            )}

            {cta && (
              <div
                className={clsx(inView ? 'animate-slide-up' : 'opacity-0')}
                style={{ transitionDelay: '0.4s' }}
              >
                <CMSLink
                  {...cta}
                  className="group inline-flex items-center bg-white hover:bg-customOrange text-customBlack hover:text-white font-bold py-3 px-8 rounded-full transition-colors duration-300 shadow-lg"
                >
                  {cta.label}
                  <ArrowRight
                    className="ml-2 transform group-hover:translate-x-1 transition-transform duration-300"
                    size={20}
                  />
                </CMSLink>
              </div>
            )}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes bounce-slow {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        .animate-bounce-slow {
          animation: bounce-slow 2s infinite;
        }
      `}</style>
    </section>
  )
}

export default Playground
