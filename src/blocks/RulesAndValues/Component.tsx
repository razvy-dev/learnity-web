'use client'

import React, { useState } from 'react'
import { Bangers, Nunito } from 'next/font/google'
import clsx from 'clsx'
import { BookOpen, Star } from 'lucide-react'
import { useInView } from 'react-intersection-observer'

import { Icon } from '@/components/Icon'
import RichText from '@/components/RichText'
import type { RulesAndValues as RulesAndValuesBlockProps } from '@/payload-types'

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
} & RulesAndValuesBlockProps

const CREAM = '#F0E6DD'
const ORANGE = '#F8A12E'
const DARK = '#2f2f27'
const BLUE = '#5C9CE6'

export const RulesAndValues: React.FC<Props> = (props) => {
  const {
    className,
    sectionTitle,
    sectionDescription,
    valuesTabLabel,
    rulesTabLabel,
    values,
    rules,
    valuesFooterTitle,
    valuesFooterDescription,
    rulesFooterText,
  } = props

  const [activeTab, setActiveTab] = useState('values')
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: false,
  })

  if (!values || values.length === 0) return null

  return (
    <div
      className={clsx('py-20 px-4 relative overflow-hidden', className)}
      style={{ fontFamily: nunito.style.fontFamily, backgroundColor: CREAM, color: DARK }}
      ref={ref}
    >
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
          animation: slide-up 0.8s ease-out forwards;
        }
        .animate-fade-in {
          animation: fade-in 0.8s ease-out forwards;
        }
      `}</style>

      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div
          className="absolute top-20 right-20 w-40 h-40 rounded-full opacity-20"
          style={{ backgroundColor: ORANGE }}
        />
        <div
          className="absolute bottom-20 left-20 w-56 h-56 rounded-full opacity-30"
          style={{ backgroundColor: BLUE }}
        />
      </div>

      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className={clsx('inline-block', inView ? 'animate-slide-up' : 'opacity-0')}>
            <h2
              className="text-4xl md:text-5xl mb-4 italic"
              style={{ color: DARK, fontFamily: bangers.style.fontFamily }}
            >
              {sectionTitle}
            </h2>
            <div className="w-40 h-2 mx-auto rounded-full" style={{ backgroundColor: ORANGE }} />
          </div>
          <p
            className={clsx(
              'text-lg max-w-2xl mx-auto mt-6',
              inView ? 'animate-fade-in' : 'opacity-0',
            )}
            style={{ color: DARK }}
          >
            {sectionDescription}
          </p>
        </div>

        <div
          className={clsx('flex justify-center mb-12', inView ? 'animate-fade-in' : 'opacity-0')}
        >
          <div className="bg-gray-100 p-1 rounded-full inline-flex">
            <button
              onClick={() => setActiveTab('values')}
              className={clsx(
                'px-6 py-3 rounded-full font-bold transition-all duration-300',
                activeTab === 'values'
                  ? 'text-white shadow-md'
                  : 'bg-transparent hover:bg-gray-200 text-gray-800',
              )}
              style={activeTab === 'values' ? { backgroundColor: BLUE } : {}}
            >
              {valuesTabLabel}
            </button>
            <button
              onClick={() => setActiveTab('rules')}
              className={clsx(
                'px-6 py-3 rounded-full font-bold transition-all duration-300',
                activeTab === 'rules'
                  ? 'text-white shadow-md'
                  : 'bg-transparent hover:bg-gray-200 text-gray-800',
              )}
              style={activeTab === 'rules' ? { backgroundColor: BLUE } : {}}
            >
              {rulesTabLabel}
            </button>
          </div>
        </div>

        {activeTab === 'values' && (
          <div className={clsx(inView ? 'animate-fade-in' : 'opacity-0')}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {values.map((value: any, index: number) => (
                <div
                  key={value.id || index}
                  className={clsx(
                    'bg-white rounded-2xl p-6 shadow-lg transform transition-all duration-500 hover:-translate-y-2 hover:shadow-xl',
                    inView ? 'animate-fade-in' : 'opacity-0',
                  )}
                >
                  <div className="flex flex-col items-center text-center">
                    <div
                      className="w-20 h-20 rounded-full flex items-center justify-center mb-4 shadow-md"
                      style={{ backgroundColor: value.color === 'orange' ? ORANGE : BLUE }}
                    >
                      <Icon name={value.icon} className="w-10 h-10 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold mb-3" style={{ color: DARK }}>
                      {value.title}
                    </h3>
                    {value.description && (
                      <div style={{ color: DARK }}>
                        <RichText
                          data={value.description}
                          enableGutter={false}
                          enableProse={false}
                        />
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className={clsx('mt-16 text-center', inView ? 'animate-fade-in' : 'opacity-0')}>
              <div
                className="rounded-2xl p-8 relative overflow-hidden"
                style={{ backgroundColor: BLUE }}
              >
                <div className="relative z-10">
                  <BookOpen className="w-16 h-16 mx-auto mb-4 text-white" />
                  <h3 className="text-2xl font-bold mb-3 text-white">{valuesFooterTitle}</h3>
                  {valuesFooterDescription && (
                    <div className="max-w-3xl mx-auto text-white">
                      <RichText
                        data={valuesFooterDescription}
                        enableGutter={false}
                        enableProse={false}
                      />
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'rules' && (
          <div className={clsx(inView ? 'animate-fade-in' : 'opacity-0')}>
            <div
              className="rounded-3xl p-8 md:p-12 relative overflow-hidden"
              style={{ backgroundColor: BLUE }}
            >
              <div className="relative z-10">
                <div className="space-y-8">
                  {rules.map((rule: any, index: number) => (
                    <div
                      key={rule.id || index}
                      className={clsx(
                        'bg-white rounded-xl p-6 shadow-md transform transition-all duration-500 hover:shadow-lg',
                        inView ? 'animate-fade-in' : 'opacity-0',
                      )}
                    >
                      <div className="flex items-start">
                        <div className="mr-4 mt-1">
                          <Star className="w-6 h-6" style={{ color: ORANGE }} />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold mb-2" style={{ color: DARK }}>
                            {rule.title}
                          </h3>
                          {rule.description && (
                            <div style={{ color: DARK }}>
                              <RichText
                                data={rule.description}
                                enableGutter={false}
                                enableProse={false}
                              />
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div
                  className={clsx('mt-10 text-center', inView ? 'animate-fade-in' : 'opacity-0')}
                >
                  <div className="bg-white rounded-xl p-6 shadow-md inline-block">
                    {rulesFooterText && (
                      <div className="font-bold italic" style={{ color: DARK }}>
                        <RichText data={rulesFooterText} enableGutter={false} enableProse={false} />
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
