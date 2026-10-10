'use client'

import { Bangers, Nunito } from 'next/font/google'
import clsx from 'clsx'
import React from 'react'
import { useInView } from 'react-intersection-observer'

import type { MapEmbed as MapEmbedBlockProps } from '@/payload-types'

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
} & MapEmbedBlockProps

export const MapEmbed: React.FC<Props> = (props) => {
  const { className, sectionTitle, sectionDescription, embedUrl, mapHeight } = props

  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: false,
  })

  if (!embedUrl) return null

  return (
    <section
      ref={ref}
      className={clsx('py-16 px-4 bg-customLightOrange bg-opacity-10', className)}
      style={{ fontFamily: nunito.style.fontFamily }}
    >
      <div className="max-w-7xl mx-auto">
        <div
          className={clsx(
            'text-center mb-12',
            inView ? 'animate-slide-up' : 'opacity-0',
          )}
          style={{ transitionDelay: '0.2s' }}
        >
          <h2
            className="text-4xl text-customBlack mb-4 italic transform -rotate-1"
            style={{ fontFamily: bangers.style.fontFamily }}
          >
            {sectionTitle}
          </h2>
          {sectionDescription && (
            <p className="text-lg text-customBlack max-w-2xl mx-auto">{sectionDescription}</p>
          )}
        </div>

        <div
          className={clsx(
            'bg-white p-4 rounded-2xl shadow-lg overflow-hidden',
            inView ? 'animate-fade-in' : 'opacity-0',
          )}
          style={{ transitionDelay: '0.4s' }}
        >
          <div className="w-full h-full bg-gray-200 rounded-xl flex items-center justify-center">
            <iframe
              src={embedUrl}
              height={mapHeight || 450}
              width={1300}
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title={sectionTitle || 'Map'}
              className="w-full"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default MapEmbed
