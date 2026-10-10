'use client'

import { Bangers, Nunito } from 'next/font/google'
import clsx from 'clsx'
import React from 'react'
import { useInView } from 'react-intersection-observer'
import { Heart, Sparkles } from 'lucide-react'

import RichText from '@/components/RichText'

import type { DonateStory as DonateStoryProps } from '@/payload-types'

const bangers = Bangers({
  subsets: ['latin', 'latin-ext'],
  weight: '400',
  display: 'swap',
})

const nunito = Nunito({
  subsets: ['latin', 'latin-ext'],
  display: 'swap',
})

const Decorations: React.FC = () => (
  <div className="pointer-events-none absolute inset-0 overflow-hidden">
    <div
      className="ds-float absolute -right-16 -top-16 h-56 w-56 rounded-full opacity-10"
      style={{ backgroundColor: '#F8A12E' }}
    />
    <div
      className="ds-float absolute -bottom-20 -left-16 h-72 w-72 rounded-full opacity-10"
      style={{ backgroundColor: '#05be9e', animationDelay: '1s' }}
    />
    <Heart
      className="ds-float absolute left-10 top-10 h-10 w-10 opacity-10"
      style={{ color: '#05be9e' }}
    />
    <Sparkles
      className="ds-float absolute bottom-12 right-16 h-8 w-8 opacity-10"
      style={{ color: '#F8A12E', animationDelay: '0.7s' }}
    />
    <Heart
      className="ds-float absolute right-1/4 top-1/2 h-8 w-8 opacity-10"
      style={{ color: '#2f2f27', animationDelay: '1.4s' }}
    />
  </div>
)

export const DonateStory: React.FC<DonateStoryProps> = ({ content, heading }) => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: false,
  })

  return (
    <section
      ref={ref}
      className="relative overflow-hidden bg-customWhite px-4 py-20 md:py-24"
      style={{ fontFamily: nunito.style.fontFamily }}
    >
      <style>{`
        @keyframes dsFloat {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-14px); }
        }
        @keyframes dsSlideUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes dsFadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .ds-float {
          animation: dsFloat 6s ease-in-out infinite;
        }
        .ds-slide-up {
          animation: dsSlideUp 0.8s ease-out forwards;
        }
        .ds-fade-in {
          animation: dsFadeIn 0.8s ease-out forwards;
        }
        @media (prefers-reduced-motion: reduce) {
          .ds-float,
          .ds-slide-up,
          .ds-fade-in {
            animation: none;
          }
        }
      `}</style>

      <Decorations />

      <div className="relative z-10 mx-auto max-w-4xl">
        {heading && (
          <div className={clsx('mb-10 text-center', inView ? 'ds-slide-up' : 'opacity-0')}>
            <h2
              className="text-4xl italic text-customBlack md:text-5xl"
              style={{ fontFamily: bangers.style.fontFamily }}
            >
              {heading}
            </h2>
            <div className="mx-auto mt-4 h-2 w-28 rounded-full bg-customOrange" />
          </div>
        )}

        <div
          className={clsx(inView ? 'ds-fade-in' : 'opacity-0')}
          style={{ transitionDelay: '0.2s' }}
        >
          <div className="rounded-3xl bg-white p-6 shadow-xl md:p-12 lg:p-16">
            <RichText className="mx-auto max-w-3xl" data={content} enableGutter={false} />
          </div>
        </div>
      </div>
    </section>
  )
}

export default DonateStory
