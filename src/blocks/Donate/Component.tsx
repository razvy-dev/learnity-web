'use client'

import { Bangers, Nunito } from 'next/font/google'
import clsx from 'clsx'
import React from 'react'
import { useInView } from 'react-intersection-observer'
import { ArrowRight, Heart, ShieldCheck, Sparkles } from 'lucide-react'

import RichText from '@/components/RichText'
import { CMSLink } from '@/components/Link'
import { Media } from '@/components/Media'

import type { DonateBlock } from '@/payload-types'

const bangers = Bangers({
  subsets: ['latin', 'latin-ext'],
  weight: '400',
  display: 'swap',
})

const nunito = Nunito({
  subsets: ['latin', 'latin-ext'],
  display: 'swap',
})

type Variant = 'teal' | 'orange' | 'dark' | 'cream'

type VariantTheme = {
  background: React.CSSProperties
  textColor: string
  headingColor: string
  ruleColor: string
  badge: string
  primaryBtn: string
  secondaryBtn: string
  amountChip: string
  mutedText: string
  blobColors: [string, string]
  iconColor: string
}

const VARIANTS: Record<Variant, VariantTheme> = {
  teal: {
    background: { background: 'linear-gradient(135deg, #05be9e 0%, #C7F1F0 100%)' },
    textColor: 'text-[#2f2f27]',
    headingColor: '#2f2f27',
    ruleColor: '#F8A12E',
    badge: 'bg-white/80 text-[#2f2f27]',
    primaryBtn: 'bg-[#2f2f27] text-white hover:bg-[#F8A12E] hover:text-white',
    secondaryBtn:
      'bg-white text-[#2f2f27] border border-[#2f2f27]/10 hover:bg-[#F8A12E] hover:text-white',
    amountChip: 'border-[#05be9e] bg-white/70 text-[#2f2f27] hover:bg-[#05be9e] hover:text-white',
    mutedText: 'text-[#2f2f27]/60',
    blobColors: ['#F8A12E', '#F0E6DD'],
    iconColor: '#2f2f27',
  },
  orange: {
    background: { background: 'linear-gradient(135deg, #F8A12E 0%, #FEC782 100%)' },
    textColor: 'text-[#2f2f27]',
    headingColor: '#2f2f27',
    ruleColor: '#05be9e',
    badge: 'bg-white/80 text-[#2f2f27]',
    primaryBtn: 'bg-[#2f2f27] text-white hover:bg-[#05be9e] hover:text-white',
    secondaryBtn:
      'bg-white text-[#2f2f27] border border-[#2f2f27]/10 hover:bg-[#05be9e] hover:text-white',
    amountChip: 'border-[#F8A12E] bg-white/70 text-[#2f2f27] hover:bg-[#F8A12E] hover:text-white',
    mutedText: 'text-[#2f2f27]/60',
    blobColors: ['#05be9e', '#F0E6DD'],
    iconColor: '#2f2f27',
  },
  dark: {
    background: { background: '#2f2f27' },
    textColor: 'text-[#F0E6DD]',
    headingColor: '#F0E6DD',
    ruleColor: '#F8A12E',
    badge: 'bg-white/10 text-[#F0E6DD]',
    primaryBtn: 'bg-[#F8A12E] text-white hover:bg-[#05be9e] hover:text-white',
    secondaryBtn:
      'bg-white/10 text-[#F0E6DD] border border-white/30 hover:bg-white hover:text-[#2f2f27]',
    amountChip: 'border-[#F8A12E] bg-white/10 text-[#F0E6DD] hover:bg-[#F8A12E] hover:text-white',
    mutedText: 'text-[#F0E6DD]/70',
    blobColors: ['#F8A12E', '#05be9e'],
    iconColor: '#F0E6DD',
  },
  cream: {
    background: { background: '#F0E6DD' },
    textColor: 'text-[#2f2f27]',
    headingColor: '#2f2f27',
    ruleColor: '#F8A12E',
    badge: 'bg-white text-[#2f2f27]',
    primaryBtn: 'bg-[#05be9e] text-white hover:bg-[#F8A12E] hover:text-white',
    secondaryBtn:
      'bg-white text-[#2f2f27] border border-[#2f2f27]/15 hover:bg-[#F8A12E] hover:text-white',
    amountChip: 'border-[#05be9e] bg-white text-[#2f2f27] hover:bg-[#05be9e] hover:text-white',
    mutedText: 'text-[#2f2f27]/60',
    blobColors: ['#F8A12E', '#C7F1F0'],
    iconColor: '#2f2f27',
  },
}

const Decorations: React.FC<{ theme: VariantTheme }> = ({ theme }) => (
  <div className="pointer-events-none absolute inset-0 overflow-hidden">
    <div
      className="donate-float absolute -right-16 -top-16 h-56 w-56 rounded-full opacity-20"
      style={{ backgroundColor: theme.blobColors[0] }}
    />
    <div
      className="donate-float absolute -bottom-20 -left-16 h-72 w-72 rounded-full opacity-10"
      style={{ backgroundColor: theme.blobColors[1], animationDelay: '1s' }}
    />
    <Sparkles
      className="donate-float absolute left-10 top-10 h-10 w-10 opacity-20"
      style={{ color: theme.iconColor }}
    />
    <Heart
      className="donate-float absolute bottom-12 right-16 h-8 w-8 opacity-20"
      style={{ color: theme.iconColor, animationDelay: '0.7s' }}
    />
    <Heart
      className="donate-float absolute right-1/4 top-1/2 h-9 w-9 opacity-15"
      style={{ color: theme.iconColor, animationDelay: '1.4s' }}
    />
    <Sparkles
      className="donate-float absolute bottom-1/3 left-1/4 h-7 w-7 opacity-20"
      style={{ color: theme.iconColor, animationDelay: '0.4s' }}
    />
  </div>
)

export type Props = {
  className?: string
} & DonateBlock

export const Donate: React.FC<Props> = (props) => {
  const {
    alignment,
    amounts,
    badgeText,
    className,
    heading,
    image,
    links,
    richText,
    showDecorations,
    trustText,
    variant,
  } = props

  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: false,
  })

  const theme = VARIANTS[(variant as Variant) || 'teal'] || VARIANTS.teal
  const imageResource = typeof image === 'object' ? image : null
  const hasImage = Boolean(imageResource?.url)
  const isCentered = !hasImage && alignment !== 'left'

  const sectionStyle = {
    ...theme.background,
    fontFamily: nunito.style.fontFamily,
    ['--donate-display' as string]: bangers.style.fontFamily,
  } as React.CSSProperties

  const content = (
    <>
      {badgeText && (
        <span
          className={clsx(
            'inline-flex items-center gap-2 rounded-full px-4 py-1 text-xs font-bold uppercase tracking-widest',
            theme.badge,
          )}
        >
          <Heart className="h-3.5 w-3.5" />
          {badgeText}
        </span>
      )}

      {heading && (
        <h2
          className="mt-5 text-4xl italic leading-tight md:text-5xl"
          style={{ color: theme.headingColor, fontFamily: bangers.style.fontFamily }}
        >
          {heading}
        </h2>
      )}

      <div
        className={clsx('mt-5 h-2 w-28 rounded-full', isCentered && 'mx-auto')}
        style={{ backgroundColor: theme.ruleColor }}
      />

      {richText && (
        <div className={clsx('donate-rich mt-6 text-lg', isCentered && 'mx-auto')}>
          <RichText data={richText} enableGutter={false} enableProse={false} />
        </div>
      )}

      {Array.isArray(amounts) && amounts.length > 0 && (
        <div className={clsx('mt-8 flex flex-wrap gap-3', isCentered && 'justify-center')}>
          {amounts.map((amount, i) => {
            if (!amount?.link) return null

            return (
              <CMSLink
                key={amount.id || i}
                className={clsx(
                  'inline-flex items-center rounded-xl border-2 px-6 py-3 text-lg font-bold transition-all duration-300 hover:scale-105',
                  theme.amountChip,
                )}
                newTab={amount.link.newTab}
                reference={amount.link.reference}
                type={amount.link.type}
                url={amount.link.url}
              >
                {amount.amount}
              </CMSLink>
            )
          })}
        </div>
      )}

      {Array.isArray(links) && links.length > 0 && (
        <div className={clsx('mt-6 flex flex-wrap gap-4', isCentered && 'justify-center')}>
          {links.map(({ link }, i) => {
            if (!link) return null

            return (
              <CMSLink
                key={link.label || i}
                className={clsx(
                  'donate-btn group inline-flex items-center rounded-full px-8 py-3 font-bold shadow-lg transition-all duration-300 hover:scale-105',
                  i === 0 ? theme.primaryBtn : theme.secondaryBtn,
                )}
                newTab={link.newTab}
                reference={link.reference}
                type={link.type}
                url={link.url}
              >
                {link.label}
                <ArrowRight
                  className="ml-2 transition-transform duration-300 group-hover:translate-x-1"
                  size={20}
                />
              </CMSLink>
            )
          })}
        </div>
      )}

      {trustText && (
        <div
          className={clsx(
            'mt-6 flex items-center gap-2 text-sm font-medium',
            theme.mutedText,
            isCentered && 'justify-center',
          )}
        >
          <ShieldCheck className="h-4 w-4 text-customOrange" />
          {trustText}
        </div>
      )}
    </>
  )

  return (
    <section
      ref={ref}
      className={clsx('relative overflow-hidden px-4 py-20 md:py-24', theme.textColor, className)}
      style={sectionStyle}
    >
      <style>{`
        @keyframes donateFloat {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-14px); }
        }
        @keyframes donateSlideUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes donateFadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .donate-float {
          animation: donateFloat 6s ease-in-out infinite;
        }
        .donate-slide-up {
          animation: donateSlideUp 0.8s ease-out forwards;
        }
        .donate-fade-in {
          animation: donateFadeIn 0.8s ease-out forwards;
        }
        .donate-rich :is(h1, h2, h3, h4) {
          font-family: var(--donate-display);
          font-style: italic;
          line-height: 1.15;
        }
        .donate-rich p {
          margin-bottom: 0.75rem;
        }
        @media (prefers-reduced-motion: reduce) {
          .donate-float,
          .donate-slide-up,
          .donate-fade-in {
            animation: none;
          }
        }
      `}</style>

      {showDecorations && <Decorations theme={theme} />}

      <div className="relative z-10">
        {hasImage ? (
          <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 lg:grid-cols-2">
            <div
              className={clsx(inView ? 'donate-slide-up' : 'opacity-0')}
              style={{ transitionDelay: '0.2s' }}
            >
              {content}
            </div>

            <div
              className={clsx('relative', inView ? 'donate-fade-in' : 'opacity-0')}
              style={{ transitionDelay: '0.3s' }}
            >
              <div className="rotate-2 rounded-2xl bg-white p-3 shadow-2xl transition-transform duration-500 hover:rotate-0">
                <div className="overflow-hidden rounded-xl">
                  <Media resource={imageResource} imgClassName="w-full h-auto" />
                </div>
              </div>
              <div
                className="absolute -bottom-6 -left-6 z-0 h-32 w-32 rounded-full opacity-20"
                style={{ backgroundColor: theme.blobColors[0] }}
              />
            </div>
          </div>
        ) : (
          <div className={clsx('mx-auto max-w-3xl', isCentered && 'text-center')}>
            <div
              className={clsx(inView ? 'donate-slide-up' : 'opacity-0')}
              style={{ transitionDelay: '0.2s' }}
            >
              {content}
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

export default Donate
