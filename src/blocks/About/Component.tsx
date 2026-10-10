'use client'

import { Bangers, Nunito } from 'next/font/google'
import clsx from 'clsx'
import React, { useEffect, useRef, useState } from 'react'
import { ArrowRight, Pause, Play, Volume2, VolumeX } from 'lucide-react'
import { useInView } from 'react-intersection-observer'

import RichText from '@/components/RichText'
import { CMSLink } from '@/components/Link'

import type { About as AboutBlockProps } from '@/payload-types'

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
} & AboutBlockProps

const CREAM = '#F0E6DD'
const TEAL = '#05be9e'
const LIGHT_TEAL = '#C7F1F0'
const ORANGE = '#F8A12E'
const DARK = '#2f2f27'

export const About: React.FC<Props> = (props) => {
  const { className, title, description, caption, video, poster, links } = props

  const [isPlaying, setIsPlaying] = useState(false)
  const [isMuted, setIsMuted] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)

  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: false,
  })

  const videoResource = typeof video === 'object' ? video : null
  const posterResource = typeof poster === 'object' ? poster : null

  // Keep the element's muted state in sync with React state. The video must
  // never start muted, so it plays with sound when the user presses play.
  useEffect(() => {
    const element = videoRef.current
    if (element) {
      element.muted = isMuted
    }
  }, [isMuted])

  const handlePlayPause = async () => {
    const element = videoRef.current
    if (!element) return

    if (element.paused) {
      element.muted = isMuted
      try {
        await element.play()
        setIsPlaying(true)
        setIsMuted(element.muted)
      } catch {
        setIsPlaying(false)
      }
    } else {
      element.pause()
      setIsPlaying(false)
    }
  }

  const handleMuteToggle = () => {
    const element = videoRef.current
    if (!element) return

    element.muted = !element.muted
    setIsMuted(element.muted)
  }

  const cta = (links || [])[0]?.link

  return (
    <section
      ref={ref}
      className={clsx('py-24 relative overflow-hidden', className)}
      style={{
        background: `linear-gradient(135deg, ${TEAL} 0%, ${LIGHT_TEAL} 100%)`,
        fontFamily: nunito.style.fontFamily,
        color: DARK,
      }}
    >
      <style>{`
        @keyframes about-slide-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes about-fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        .about-animate-slide-up {
          animation: about-slide-up 0.8s ease-out forwards;
        }
        .about-animate-fade-in {
          animation: about-fade-in 0.8s ease-out forwards;
        }
      `}</style>

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-20 opacity-10 -skew-y-3" style={{ backgroundColor: CREAM }} />
        <div className="absolute bottom-0 right-0 w-full h-20 opacity-10 skew-y-3" style={{ backgroundColor: CREAM }} />

        <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full opacity-20" style={{ backgroundColor: ORANGE }} />
        <div className="absolute -bottom-10 -left-10 w-60 h-60 rounded-full opacity-10" style={{ backgroundColor: CREAM }} />

        <svg className="absolute top-0 right-0 h-24 w-24 opacity-5" style={{ color: CREAM }} viewBox="0 0 24 24" fill="currentColor">
          <circle cx="12" cy="12" r="10" />
        </svg>
        <svg className="absolute bottom-20 left-20 h-32 w-32 opacity-5" style={{ color: CREAM }} viewBox="0 0 24 24" fill="currentColor">
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {videoResource?.url && (
            <div
              className={clsx(
                'order-2 lg:order-1',
                inView ? 'about-animate-fade-in' : 'opacity-0',
              )}
              style={{ transitionDelay: '0.2s' }}
            >
              <div
                className="relative rounded-2xl overflow-hidden shadow-2xl rotate-1 border-8"
                style={{ borderColor: CREAM }}
              >
                <video
                  ref={videoRef}
                  className="w-full h-auto"
                  poster={posterResource?.url || undefined}
                  preload="metadata"
                  playsInline
                  onEnded={() => setIsPlaying(false)}
                >
                  <source src={videoResource.url} type={videoResource.mimeType || 'video/mp4'} />
                </video>

                <div
                  className={clsx(
                    'absolute inset-0 flex items-center justify-center bg-black/30 transition-opacity duration-300',
                    isPlaying ? 'opacity-0 hover:opacity-100' : 'opacity-100',
                  )}
                >
                  <button
                    onClick={handlePlayPause}
                    className="w-20 h-20 bg-white/80 rounded-full flex items-center justify-center transition-transform duration-300 hover:scale-110 focus:outline-none"
                    aria-label={isPlaying ? 'Pauză video' : 'Redă video'}
                  >
                    {isPlaying ? (
                      <Pause className="w-8 h-8" style={{ color: TEAL }} />
                    ) : (
                      <Play className="w-8 h-8 ml-1" style={{ color: TEAL }} />
                    )}
                  </button>
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black to-transparent flex justify-between items-center">
                  <button
                    onClick={handlePlayPause}
                    className="text-white transition-colors duration-300 hover:text-[#F8A12E] focus:outline-none"
                    aria-label={isPlaying ? 'Pauză video' : 'Redă video'}
                  >
                    {isPlaying ? <Pause className="w-6 h-6" /> : <Play className="w-6 h-6" />}
                  </button>

                  <button
                    onClick={handleMuteToggle}
                    className="text-white transition-colors duration-300 hover:text-[#F8A12E] focus:outline-none"
                    aria-label={isMuted ? 'Activează sunetul' : 'Dezactivează sunetul'}
                  >
                    {isMuted ? <VolumeX className="w-6 h-6" /> : <Volume2 className="w-6 h-6" />}
                  </button>
                </div>
              </div>

              {caption && (
                <div
                  className="bg-white p-4 rounded-xl shadow-lg max-w-md mx-auto -mt-6 relative z-20 -rotate-1"
                  style={{ color: DARK }}
                >
                  <p className="text-center text-sm italic">{caption}</p>
                </div>
              )}
            </div>
          )}

          <div
            className={clsx(
              'order-1 lg:order-2',
              inView ? 'about-animate-slide-up' : 'opacity-0',
            )}
            style={{ transitionDelay: '0.3s' }}
          >
            <div className="bg-white/90 rounded-3xl p-8 shadow-xl -rotate-1">
              <div className="rotate-1">
                {title && (
                  <h2
                    className="text-4xl md:text-5xl mb-6 italic"
                    style={{ color: DARK, fontFamily: bangers.style.fontFamily }}
                  >
                    {title}
                  </h2>
                )}

                <div className="w-32 h-2 rounded-full mb-6" style={{ backgroundColor: ORANGE }} />

                <div className="mb-8 text-lg">
                  <RichText
                    data={description}
                    enableGutter={false}
                    enableProse={false}
                    className="[&_p]:mb-4 last:[&_p]:mb-0"
                  />
                </div>

                {cta && (
                  <CMSLink
                    {...cta}
                    className="group inline-flex items-center text-white font-bold py-3 px-8 rounded-full transition-colors duration-300 shadow-lg bg-[#F8A12E] hover:bg-[#05be9e]"
                  >
                    {cta.label}
                    <ArrowRight
                      className="ml-2 transition-transform duration-300 group-hover:translate-x-1"
                      size={20}
                    />
                  </CMSLink>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}