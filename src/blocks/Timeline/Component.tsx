import { Bangers, Nunito } from 'next/font/google'
import clsx from 'clsx'
import React from 'react'

import RichText from '@/components/RichText'
import { Media } from '@/components/Media'

import type { Timeline as TimelineBlockProps } from '@/payload-types'

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
} & TimelineBlockProps

const CREAM = '#F0E6DD'
const TEAL = '#05be9e'
const ORANGE = '#F8A12E'
const DARK = '#2f2f27'

const PHOTO_VARIANTS = [
  'w-64 h-64 rounded-full',
  'w-80 h-80 rounded-lg -rotate-3',
  'w-96 h-96 rounded-full rotate-3',
]

const WAVE_PATH =
  'M0,288L48,272C96,256,192,224,288,197.3C384,171,480,149,576,165.3C672,181,768,235,864,234.7C960,235,1056,181,1152,170.7C1248,160,1344,192,1392,208L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z'

export const Timeline: React.FC<Props> = (props) => {
  const { className, items } = props

  if (!items || items.length === 0) return null

  return (
    <div className={clsx(className)} style={{ fontFamily: nunito.style.fontFamily }}>
      <style>{`
        .timeline-blob {
          animation: timelineBlob 10s ease-in-out infinite;
        }
        .timeline-blob-2 {
          animation-delay: 2s;
        }
        .timeline-blob-3 {
          animation-delay: 4s;
        }
        @keyframes timelineBlob {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(24px, -32px) scale(1.08); }
          66% { transform: translate(-20px, 16px) scale(0.92); }
        }
        .timeline-bubble {
          transition: transform 0.5s ease;
        }
        .timeline-bubble-pos:hover {
          transform: scale(1.1) rotate(360deg);
        }
        .timeline-bubble-neg:hover {
          transform: scale(1.1) rotate(-360deg);
        }
      `}</style>

      {items.map((item, index) => {
        const isOdd = index % 2 === 1
        const backgroundColor = isOdd ? TEAL : CREAM
        const textColor = isOdd ? '#ffffff' : DARK
        const nextBackgroundColor = (index + 1) % 2 === 1 ? TEAL : CREAM
        const headingColor = isOdd ? '#ffffff' : ORANGE
        const isLast = index === items.length - 1

        return (
          <section
            className="relative min-h-screen flex flex-col justify-center items-center p-8 overflow-hidden"
            key={item.id || index}
            style={{ backgroundColor, color: textColor }}
          >
            <h2
              className={clsx(
                'mb-8 font-bold tracking-widest text-center',
                index === 0 ? 'text-6xl md:text-8xl' : 'text-5xl',
              )}
              style={{ color: headingColor, fontFamily: bangers.style.fontFamily }}
            >
              {item.title}
            </h2>

            <div
              className={clsx(
                'flex flex-col md:flex-row items-center justify-center gap-8 mb-8 w-full',
                isOdd && 'md:flex-row-reverse',
              )}
            >
              {typeof item.photo === 'object' && item.photo?.url && (
                <div
                  className={clsx('bg-[#F8A12E] shadow-lg overflow-hidden', PHOTO_VARIANTS[index % 3])}
                >
                  <Media
                    className="relative w-full h-full"
                    imgClassName="w-full h-full object-cover"
                    resource={item.photo}
                  />
                </div>
              )}

              <RichText
                data={item.description}
                enableGutter={false}
                enableProse={false}
                className="max-w-lg text-xl text-center md:text-left"
              />
            </div>

            <div
              className={clsx(
                'w-20 h-20 bg-[#F8A12E] rounded-full flex items-center justify-center text-white text-2xl font-bold shadow-md timeline-bubble',
                isOdd ? 'timeline-bubble-neg' : 'timeline-bubble-pos',
              )}
            >
              {index + 1}
            </div>

            <div className="absolute inset-0 pointer-events-none">
              <div
                className="absolute top-10 left-10 w-20 h-20 rounded-full opacity-20 timeline-blob"
                style={{ backgroundColor: ORANGE }}
              />
              <div
                className="absolute bottom-10 right-10 w-32 h-32 rounded-full opacity-20 timeline-blob timeline-blob-2"
                style={{ backgroundColor: TEAL }}
              />
              <div
                className="absolute top-1/2 left-1/2 -ml-20 -mt-20 w-40 h-40 rounded-full opacity-10 timeline-blob timeline-blob-3"
                style={{ backgroundColor: DARK }}
              />
            </div>

            {!isLast && (
              <svg
                className="absolute left-0 bottom-0 w-full"
                viewBox="0 0 1440 320"
                preserveAspectRatio="none"
              >
                <path fill={nextBackgroundColor} fillOpacity="1" d={WAVE_PATH} />
              </svg>
            )}
          </section>
        )
      })}
    </div>
  )
}