'use client'

import { useInView } from 'react-intersection-observer'
import { Bangers, Nunito } from 'next/font/google'
import clsx from 'clsx'
import Link from 'next/link'
import React from 'react'
import { ArrowRight, Lightbulb, Target } from 'lucide-react'

import { Icon } from '@/components/Icon'
import RichText from '@/components/RichText'
import { Media } from '@/components/Media'

import type { Guided as GuidedBlockProps } from '@/payload-types'

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
} & GuidedBlockProps

const CREAM = '#F0E6DD'
const BLUE = '#5C9CE6'
const ORANGE = '#F8A12E'
const LIGHT_ORANGE = '#F5B064'
const DARK = '#2f2f27'

const getIcon = (
  icon: string,
  color: 'blue' | 'orange' | 'lightOrange' = 'blue',
  rotation: 'left' | 'right' = 'left',
) => {
  const bgColorMap = {
    blue: 'bg-customBlue',
    orange: 'bg-customOrange',
    lightOrange: 'bg-customLightOrange',
  }
  const textColorMap = {
    blue: 'text-white',
    orange: 'text-white',
    lightOrange: 'text-customBlack',
  }
  const rotationMap = {
    left: '-rotate-3',
    right: 'rotate-3',
  }
  const iconClass = 'w-7 h-7 md:w-8 md:h-8'

  return (
    <div
      className={clsx(
        'rounded-xl p-4 text-white shadow-md',
        bgColorMap[color] || bgColorMap.blue,
        textColorMap[color] === 'text-customBlack' ? 'text-customBlack' : 'text-white',
        rotationMap[rotation] || rotationMap.left,
      )}
    >
      <Icon name={icon} className={iconClass} />
    </div>
  )
}

export const Guided: React.FC<Props> = (props) => {
  const { className, sectionTitle, sectionDescription, image, features, ctaText, ctaLink } = props

  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: false,
  })

  return (
    <section
      ref={ref}
      className={clsx('py-20 px-4 bg-customWhite relative overflow-hidden', className)}
      style={{ fontFamily: nunito.style.fontFamily }}
    >
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-20 left-20 w-40 h-40 bg-customLightOrange rounded-full opacity-20"></div>
        <div className="absolute bottom-20 right-20 w-56 h-56 bg-customLightBlue rounded-full opacity-30"></div>
      </div>

      <div className="max-w-7xl mx-auto">
        {/* Section header - centered */}
        <div className="text-center mb-16">
          <div
            className={clsx('inline-block', inView ? 'animate-slide-up' : 'opacity-0')}
            style={{ transitionDelay: '0.1s' }}
          >
            <h2
              className="text-4xl md:text-5xl font-bangers text-customBlack mb-4 italic tracking-widest"
              style={{ fontFamily: bangers.style.fontFamily }}
            >
              {sectionTitle}
            </h2>
            <div className="w-32 h-2 bg-customOrange mx-auto rounded-full"></div>
          </div>

          {sectionDescription && (
            <div
              className={clsx(
                'text-lg text-customBlack max-w-2xl mx-auto mt-6',
                inView ? 'animate-fade-in' : 'opacity-0',
              )}
              style={{ transitionDelay: '0.2s' }}
            >
              <RichText data={sectionDescription} enableGutter={false} enableProse={false} />
            </div>
          )}
        </div>

        {/* Main content - image left, features right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left column - Image with overlays */}
          <div className="lg:col-span-5">
            <div
              className={clsx('relative', inView ? 'animate-fade-in' : 'opacity-0')}
              style={{ transitionDelay: '0.3s' }}
            >
              <div className="relative z-10">
                {/* Main image with frame */}
                <div className="bg-white p-3 rounded-xl shadow-xl transform rotate-1 transition-transform hover:rotate-0 duration-500">
                  <div className="rounded-lg overflow-hidden">
                    {typeof image === 'object' && image?.url && (
                      <Media
                        resource={image}
                        className="w-full h-auto"
                        imgClassName="w-full h-auto object-cover"
                        fill={false}
                        width={800}
                        height={600}
                      />
                    )}
                  </div>
                </div>

                {/* Floating elements */}
                <div className="absolute -top-6 -right-6 bg-customBlue rounded-lg shadow-lg p-4 transform -rotate-6 z-20">
                  <Lightbulb className="text-white w-8 h-8" />
                </div>

                <div className="absolute -bottom-8 -left-8 bg-customOrange rounded-lg shadow-lg p-4 transform rotate-12 z-20">
                  <Target className="text-white w-8 h-8" />
                </div>
              </div>

              {/* Background decorative elements */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full bg-customLightBlue rounded-full opacity-20 z-0"></div>
            </div>
          </div>

          {/* Right column - Features and CTA */}
          <div className="lg:col-span-7">
            <div className="space-y-8">
              {features?.map((feature, index) => (
                <div
                  key={feature.id || index}
                  className={clsx('flex items-start', inView ? 'animate-slide-up' : 'opacity-0')}
                  style={{ transitionDelay: `${0.4 + index * 0.1}s` }}
                >
                  <div className="mr-5">
                    {getIcon(
                      feature.icon || 'bookOpen',
                      (feature.iconColor as 'blue' | 'orange' | 'lightOrange') || 'blue',
                      (feature.iconRotation as 'left' | 'right') || 'left',
                    )}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-customBlack mb-2">{feature.title}</h3>
                    {feature.description && (
                      <div className="text-customBlack">
                        <RichText
                          data={feature.description}
                          enableGutter={false}
                          enableProse={false}
                        />
                      </div>
                    )}
                  </div>
                </div>
              ))}

              {/* CTA Button */}
              {(ctaText || ctaLink) && (
                <div
                  className={clsx('mt-10', inView ? 'animate-fade-in' : 'opacity-0')}
                  style={{ transitionDelay: `${0.4 + (features?.length || 0) * 0.1 + 0.1}s` }}
                >
                  <Link
                    href={ctaLink || '/guided-learning'}
                    className="group inline-flex items-center bg-customBlue hover:bg-customOrange text-white font-bold py-3 px-8 rounded-full transition-colors duration-300 shadow-lg"
                  >
                    {ctaText}
                    <ArrowRight
                      className="ml-2 transform group-hover:translate-x-1 transition-transform duration-300"
                      size={20}
                    />
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes slide-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        .animate-slide-up {
          animation: slide-up 0.8s ease forwards;
        }
        .animate-fade-in {
          animation: fade-in 0.8s ease forwards;
        }
      `}</style>
    </section>
  )
}

export default Guided
