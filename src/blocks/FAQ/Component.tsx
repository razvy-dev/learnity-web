'use client'

import React, { useMemo, useState } from 'react'
import { Bangers, Nunito } from 'next/font/google'
import clsx from 'clsx'
import { useInView } from 'react-intersection-observer'
import { ChevronDown, ChevronUp, HelpCircle, Search } from 'lucide-react'

import { Icon } from '@/components/Icon'
import { CMSLink } from '@/components/Link'
import type { FAQ as FAQBlockProps } from '@/payload-types'

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
} & FAQBlockProps

const CREAM = '#F0E6DD'
const DARK = '#2f2f27'
const TEAL = '#05be9e'
const LIGHT_TEAL = '#C7F1F0'
const ORANGE = '#F8A12E'

export const FAQ: React.FC<Props> = (props) => {
  const {
    className,
    badgeText,
    sectionTitle,
    sectionDescription,
    searchPlaceholder,
    noResultsText,
    categories,
    ctaTitle,
    ctaDescription,
    links,
  } = props

  const [activeCategoryIndex, setActiveCategoryIndex] = useState(0)
  const [activeQuestions, setActiveQuestions] = useState<string[]>([])
  const [searchQuery, setSearchQuery] = useState('')

  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: false,
  })

  const toggleQuestion = (key: string) => {
    setActiveQuestions((prev) =>
      prev.includes(key) ? prev.filter((item) => item !== key) : [...prev, key],
    )
  }

  const filteredQuestions = useMemo(() => {
    if (!categories || categories.length === 0) return []

    const query = searchQuery.trim().toLowerCase()

    if (!query) {
      return (categories[activeCategoryIndex]?.questions || []).map((item, index) => ({
        ...item,
        key: `${activeCategoryIndex}-${index}`,
      }))
    }

    return categories.flatMap((category, categoryIndex) =>
      (category.questions || [])
        .map((item, index) => ({ ...item, key: `${categoryIndex}-${index}` }))
        .filter(
          (item) =>
            item.question.toLowerCase().includes(query) ||
            item.answer.toLowerCase().includes(query),
        ),
    )
  }, [categories, activeCategoryIndex, searchQuery])

  if (!categories || categories.length === 0) return null

  return (
    <div
      ref={ref}
      className={clsx('py-20 px-4 relative overflow-hidden', className)}
      style={{ fontFamily: nunito.style.fontFamily, backgroundColor: CREAM, color: DARK }}
    >
      <style>{`
        @keyframes faq-slide-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes faq-fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        .faq-animate-slide-up {
          animation: faq-slide-up 0.8s ease-out forwards;
        }
        .faq-animate-fade-in {
          animation: faq-fade-in 0.8s ease-out forwards;
        }
      `}</style>

      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div
          className="absolute top-10 left-10 w-32 h-32 rounded-full opacity-20"
          style={{ backgroundColor: ORANGE }}
        />
        <div
          className="absolute bottom-10 right-10 w-48 h-48 rounded-full opacity-30"
          style={{ backgroundColor: LIGHT_TEAL }}
        />
        <div
          className="absolute top-1/3 right-1/4 w-16 h-16 rounded-full opacity-10"
          style={{ backgroundColor: ORANGE }}
        />
        <div
          className="absolute bottom-1/3 left-1/4 w-24 h-24 rounded-full opacity-20"
          style={{ backgroundColor: TEAL }}
        />
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        <div className={clsx('text-center mb-12', inView ? 'faq-animate-slide-up' : 'opacity-0')}>
          {badgeText && (
            <div
              className="inline-flex items-center px-4 py-2 rounded-full mb-4"
              style={{ backgroundColor: LIGHT_TEAL }}
            >
              <HelpCircle className="w-5 h-5 mr-2" style={{ color: TEAL }} />
              <span className="font-medium" style={{ color: TEAL }}>
                {badgeText}
              </span>
            </div>
          )}
          <h2
            className="text-4xl md:text-5xl mb-4 italic"
            style={{ color: DARK, fontFamily: bangers.style.fontFamily }}
          >
            {sectionTitle}
          </h2>
          {sectionDescription && (
            <p className="text-lg max-w-2xl mx-auto" style={{ color: DARK }}>
              {sectionDescription}
            </p>
          )}
        </div>

        <div className={clsx('mb-10', inView ? 'faq-animate-fade-in' : 'opacity-0')}>
          <div className="relative max-w-2xl mx-auto">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={searchPlaceholder || 'Caută întrebări...'}
              className="block w-full pl-10 pr-3 py-4 border border-gray-200 rounded-xl placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-customBlue focus:border-transparent shadow-sm text-customBlack"
            />
          </div>
        </div>

        {!searchQuery && (
          <div
            className={clsx(
              'flex flex-wrap justify-center mb-10',
              inView ? 'faq-animate-fade-in' : 'opacity-0',
            )}
          >
            {categories.map((category, index) => (
              <button
                key={category.id || index}
                onClick={() => setActiveCategoryIndex(index)}
                className={clsx(
                  'flex items-center px-5 py-3 m-2 rounded-full font-medium transition-all duration-300 border',
                  activeCategoryIndex === index
                    ? 'text-white shadow-md border-transparent'
                    : 'bg-white hover:bg-gray-50 border-gray-200',
                )}
                style={activeCategoryIndex === index ? { backgroundColor: TEAL } : { color: DARK }}
              >
                <span className="mr-2">
                  <Icon name={category.icon} className="w-5 h-5" />
                </span>
                {category.name}
              </button>
            ))}
          </div>
        )}

        <div className="space-y-4">
          {filteredQuestions.length > 0 ? (
            filteredQuestions.map((item, index) => {
              const isOpen = activeQuestions.includes(item.key)

              return (
                <div
                  key={item.key}
                  className={clsx(
                    'bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm transition-all duration-500',
                    isOpen ? 'shadow-md' : '',
                    inView ? 'faq-animate-fade-in' : 'opacity-0',
                  )}
                  style={{ transitionDelay: `${0.4 + index * 0.05}s` }}
                >
                  <button
                    onClick={() => toggleQuestion(item.key)}
                    className="flex justify-between items-center w-full px-6 py-5 text-left"
                  >
                    <span className="font-bold text-lg pr-8" style={{ color: DARK }}>
                      {item.question}
                    </span>
                    {isOpen ? (
                      <ChevronUp className="flex-shrink-0 w-5 h-5" style={{ color: TEAL }} />
                    ) : (
                      <ChevronDown className="flex-shrink-0 w-5 h-5" style={{ color: TEAL }} />
                    )}
                  </button>

                  <div
                    className={clsx(
                      'px-6 overflow-hidden transition-all duration-300',
                      isOpen ? 'max-h-96 pb-6 opacity-100' : 'max-h-0 opacity-0',
                    )}
                  >
                    <p className="leading-relaxed" style={{ color: DARK }}>
                      {item.answer}
                    </p>
                  </div>
                </div>
              )
            })
          ) : (
            <div
              className={clsx('text-center py-10', inView ? 'faq-animate-fade-in' : 'opacity-0')}
            >
              <div className="rounded-xl p-8 inline-block" style={{ backgroundColor: LIGHT_TEAL }}>
                <HelpCircle className="w-12 h-12 mx-auto mb-4 opacity-50" style={{ color: TEAL }} />
                <p className="text-lg" style={{ color: DARK }}>
                  {noResultsText || 'Nu am găsit întrebări care să corespundă căutării tale.'}
                </p>
              </div>
            </div>
          )}
        </div>

        {(ctaTitle || ctaDescription || (links && links.length > 0)) && (
          <div className={clsx('mt-16 text-center', inView ? 'faq-animate-fade-in' : 'opacity-0')}>
            <div className="rounded-2xl p-8" style={{ backgroundColor: '#FCE7C9' }}>
              {ctaTitle && (
                <h3 className="text-2xl font-bold mb-4" style={{ color: DARK }}>
                  {ctaTitle}
                </h3>
              )}
              {ctaDescription && (
                <p className="mb-6" style={{ color: DARK }}>
                  {ctaDescription}
                </p>
              )}
              <div className="flex flex-wrap justify-center gap-4">
                {(links || []).map(({ link }, index) => (
                  <CMSLink
                    key={link?.label || index}
                    {...link}
                    className={clsx(
                      'inline-flex items-center font-bold py-3 px-6 rounded-xl transition-all duration-300',
                      index === 0
                        ? 'bg-customBlue hover:bg-customOrange text-white shadow-md transform hover:scale-105'
                        : 'bg-white border-2 border-customBlue text-customBlue hover:bg-customLightBlue',
                    )}
                  />
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
