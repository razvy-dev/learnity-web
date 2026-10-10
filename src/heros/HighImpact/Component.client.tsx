'use client'

import { Nunito } from 'next/font/google'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'

import type { Page, Social } from '@/payload-types'

import { Icon } from '@/components/Icon'
import { useHeaderTheme } from '@/providers/HeaderTheme'

import './styles.css'

const nunito = Nunito({
  subsets: ['latin', 'latin-ext'],
  display: 'swap',
})

const BUBBLE_COLORS = ['#F8A12E', '#05be9e', '#2f2f27']

type Bubble = {
  id: number
  color: string
  size: string
  position: { x: string; y: string }
}

const BubblesDesign: React.FC = () => {
  const [bubbles, setBubbles] = useState<Bubble[]>([])

  useEffect(() => {
    const createBubble = (): Bubble => ({
      id: Math.random(),
      color: BUBBLE_COLORS[Math.floor(Math.random() * BUBBLE_COLORS.length)],
      size: `${Math.random() * 100 + 50}px`,
      position: {
        x: `${Math.random() * 100}%`,
        y: `${Math.random() * 100}%`,
      },
    })

    setBubbles(Array.from({ length: 15 }, createBubble))

    const interval = setInterval(() => {
      setBubbles((prevBubbles) =>
        prevBubbles.map((bubble) => ({
          ...bubble,
          position: {
            x: `${Math.random() * 100}%`,
            y: `${Math.random() * 100}%`,
          },
        })),
      )
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div>
      {bubbles.map((bubble) => (
        <div
          key={bubble.id}
          className="hi-bubble"
          style={{
            backgroundColor: bubble.color,
            width: bubble.size,
            height: bubble.size,
            left: bubble.position.x,
            top: bubble.position.y,
          }}
        />
      ))}
    </div>
  )
}

const Vector: React.FC = () => (
  <div className="absolute bottom-0 left-0 w-full overflow-hidden rotate-180">
    <svg
      data-name="Layer 1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1200 120"
      preserveAspectRatio="none"
      className="relative block h-full"
    >
      <path
        d="M1200,0H0V120H281.94C572.9,116.24,602.45,3.86,602.45,3.86h0S632,116.24,923,120h277Z"
        className="fill-[#05be9e]"
      />
    </svg>
  </div>
)

const Title: React.FC<{ text: string }> = ({ text }) => (
  <div className="flex relative pb-10 text-[#2f2f27] font-sans justify-center">
    {text.split('').map((char, index) => {
      if (char === 'a') {
        return (
          <Image
            key={index}
            src="/learnity-logo.svg"
            alt=""
            width={96}
            height={96}
            quality={100}
            priority
            className="hi-spin-slow w-12 h-auto md:w-24"
          />
        )
      }
      return (
        <h1
          key={index}
          className="text-center text-6xl text-[#2f2f27] font-extrabold hi-header-fall-bounce md:text-8xl"
          style={{ animationDuration: `${(index % 3) + 1}s` }}
        >
          {char}
        </h1>
      )
    })}
  </div>
)

type HighImpactHeroClientProps = Page['hero'] & {
  socials?: Social | null
}

export const HighImpactHeroClient: React.FC<HighImpactHeroClientProps> = ({
  title,
  subtitle,
  ctaLabel,
  contact,
  socials,
}) => {
  const { setHeaderTheme } = useHeaderTheme()

  useEffect(() => {
    setHeaderTheme('light')
  }, [setHeaderTheme])

  const handleScrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId)
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const contactHeading = contact?.heading || 'Contactează-ne'
  const platforms = socials?.platforms

  return (
    <header
      className={`${nunito.className} bg-[#F0E6DD] min-h-screen flex flex-col justify-center items-center p-8 relative overflow-hidden`}
    >
      <Vector />
      <BubblesDesign />
      <div className="text-center z-10 max-w-3xl hi-fade-in">
        <Title text={title || 'Learnity'} />
        {subtitle && <p className="text-xl text-[#2f2f27] mb-8">{subtitle}</p>}

        {ctaLabel && (
          <button
            type="button"
            onClick={() => handleScrollToSection('contact')}
            className="bg-[#F8A12E] text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-[#e0911d] transition-all mb-8 transform hover:scale-105 active:scale-95"
          >
            {ctaLabel}
          </button>
        )}

        <div className="mt-8" id="contact">
          {contactHeading && (
            <h2 className="text-2xl font-semibold text-[#2f2f27] mb-4">{contactHeading}</h2>
          )}
          <div className="flex justify-center items-center space-x-6">
            {platforms?.map((platform, index) => (
              <a
                key={platform.id || index}
                href={platform.link}
                aria-label={platform.name}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#05be9e] hover:text-[#04a589] transition-colors inline-flex"
              >
                <Icon name={platform.icon} size={24} />
                <span className="sr-only">{platform.name}</span>
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#05be9e] to-transparent opacity-20" />
    </header>
  )
}
