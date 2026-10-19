'use client'

import { Bangers, Nunito } from 'next/font/google'
import clsx from 'clsx'
import React from 'react'
import { useInView } from 'react-intersection-observer'
import { ArrowRight } from 'lucide-react'

import { CMSLink } from '@/components/Link'
import RichText from '@/components/RichText'

import type { DefaultTypedEditorState } from '@payloadcms/richtext-lexical'

const bangers = Bangers({
  subsets: ['latin', 'latin-ext'],
  weight: '400',
  display: 'swap',
})

const nunito = Nunito({
  subsets: ['latin', 'latin-ext'],
  display: 'swap',
})

export type SpinningTopLink = {
  type?: 'custom' | 'reference' | null
  newTab?: boolean | null
  label?: string | null
  url?: string | null
  reference?: {
    relationTo: 'pages' | 'posts'
    value: string | number | { id?: string | number | null; slug?: string | null } | null
  } | null
}

export type SpinningTopColor = 'customOrange' | 'customBlue' | 'customLightOrange' | 'customLightBlue'

export type SpinningTopElement = {
  id?: string | null
  label?: string | null
  description?: string | null
  color?: SpinningTopColor | null
  link?: SpinningTopLink | null
}

export type SpinningTopProps = {
  className?: string
  heading?: string | null
  description?: DefaultTypedEditorState | null
  elements?: SpinningTopElement[] | null
  enableAnimation?: boolean | null
  links?: { link?: SpinningTopLink | null }[] | null
}

const QUADRANT_COLORS: Record<SpinningTopColor, string> = {
  customOrange: '#F8A12E',
  customBlue: '#05be9e',
  customLightOrange: '#FEC782',
  customLightBlue: '#C7F1F0',
}

const CENTER_DOT_COLOR = '#2f2f27'
const LABEL_COLOR = '#2f2f27'
const CENTER_LETTER_COLOR = '#F0E6DD'

type NormalizedElement = SpinningTopElement & {
  id: string
  label: string
  color: SpinningTopColor
}

const DEFAULT_ELEMENTS: NormalizedElement[] = [
  { id: 'action', label: 'Acțiune', color: 'customOrange' },
  { id: 'reflection', label: 'Reflecție', color: 'customBlue' },
  { id: 'resilience', label: 'Reziliență', color: 'customLightOrange' },
  { id: 'design', label: 'Design', color: 'customLightBlue' },
]

const BASE_SPEED = 0.01
const HOVER_SPEED = 0.03

const normalizeElements = (elements?: SpinningTopElement[] | null): NormalizedElement[] => {
  const source = Array.isArray(elements) && elements.length > 0 ? elements.slice(0, 4) : []

  return DEFAULT_ELEMENTS.map((fallback, index) => {
    const item = source[index]
    const color = item?.color

    return {
      ...fallback,
      ...item,
      id: item?.id || fallback.id,
      label: item?.label || fallback.label,
      color: color && color in QUADRANT_COLORS ? color : fallback.color,
    }
  })
}

export const SpinningTopBlock: React.FC<SpinningTopProps> = (props) => {
  const { className, description, enableAnimation, heading, links } = props

  const elements = React.useMemo(() => normalizeElements(props.elements), [props.elements])

  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: false,
  })

  const canvasRef = React.useRef<HTMLCanvasElement>(null)
  const rotationRef = React.useRef(0)
  const speedRef = React.useRef(BASE_SPEED)

  const [isHovering, setIsHovering] = React.useState(false)
  const [activeElement, setActiveElement] = React.useState<string | null>(null)
  const [prefersReducedMotion, setPrefersReducedMotion] = React.useState(false)

  const canAnimate = Boolean(enableAnimation) && !prefersReducedMotion

  React.useEffect(() => {
    if (typeof window.matchMedia !== 'function') return

    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    setPrefersReducedMotion(mediaQuery.matches)

    const handleChange = (event: MediaQueryListEvent) => setPrefersReducedMotion(event.matches)
    mediaQuery.addEventListener('change', handleChange)

    return () => mediaQuery.removeEventListener('change', handleChange)
  }, [])

  React.useEffect(() => {
    speedRef.current = isHovering && canAnimate ? HOVER_SPEED : BASE_SPEED
  }, [isHovering, canAnimate])

  React.useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let cssSize = 0
    let rafId: number | null = null

    const resize = () => {
      const rect = canvas.getBoundingClientRect()
      const nextSize = Math.max(1, Math.round(Math.min(rect.width, rect.height)))
      if (nextSize === cssSize) return

      cssSize = nextSize

      const dpr = window.devicePixelRatio || 1
      canvas.width = Math.round(cssSize * dpr)
      canvas.height = Math.round(cssSize * dpr)
    }

    const drawSpinningTop = () => {
      const dpr = window.devicePixelRatio || 1
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      ctx.clearRect(0, 0, cssSize, cssSize)

      const centerX = cssSize / 2
      const centerY = cssSize / 2
      const radius = Math.min(centerX, centerY) - 20
      const labelFontSize = Math.max(11, Math.round(radius * 0.08))

      for (let i = 0; i < elements.length; i++) {
        const startAngle = rotationRef.current + (i * Math.PI) / 2
        const endAngle = rotationRef.current + ((i + 1) * Math.PI) / 2

        ctx.beginPath()
        ctx.moveTo(centerX, centerY)
        ctx.arc(centerX, centerY, radius, startAngle, endAngle)
        ctx.closePath()

        ctx.fillStyle = QUADRANT_COLORS[elements[i].color]
        ctx.fill()

        const textAngle = startAngle + Math.PI / 4
        const textX = centerX + Math.cos(textAngle) * (radius / 2)
        const textY = centerY + Math.sin(textAngle) * (radius / 2)

        ctx.save()
        ctx.translate(textX, textY)
        ctx.rotate(textAngle + Math.PI / 2)
        ctx.fillStyle = LABEL_COLOR
        ctx.font = `bold ${labelFontSize}px Arial`
        ctx.textAlign = 'center'
        ctx.textBaseline = 'middle'
        ctx.fillText(elements[i].label || '', 0, 0)
        ctx.restore()
      }

      ctx.beginPath()
      ctx.arc(centerX, centerY, radius / 6, 0, Math.PI * 2)
      ctx.fillStyle = CENTER_DOT_COLOR
      ctx.fill()

      ctx.fillStyle = CENTER_LETTER_COLOR
      ctx.font = `bold ${Math.round(radius / 5)}px Arial`
      ctx.textAlign = 'center'
      ctx.textBaseline = 'middle'
      ctx.fillText('L', centerX, centerY)
    }

    const animate = () => {
      rotationRef.current += speedRef.current
      drawSpinningTop()
      rafId = requestAnimationFrame(animate)
    }

    const handleResize = () => {
      resize()
      drawSpinningTop()
    }

    resize()
    drawSpinningTop()
    window.addEventListener('resize', handleResize)

    if (inView && canAnimate) {
      rafId = requestAnimationFrame(animate)
    }

    return () => {
      if (rafId !== null) cancelAnimationFrame(rafId)
      window.removeEventListener('resize', handleResize)
    }
  }, [inView, canAnimate, elements])

  const handlePointerMove = (event: React.PointerEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current
    if (!canvas) return

    const rect = canvas.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2
    const dx = event.clientX - centerX
    const dy = event.clientY - centerY

    if (Math.sqrt(dx * dx + dy * dy) > rect.width / 2) {
      setActiveElement(null)
      return
    }

    const angle = Math.atan2(dy, dx)
    const twoPi = Math.PI * 2
    const normalized = ((angle - rotationRef.current) % twoPi + twoPi) % twoPi
    const index = Math.floor(normalized / (Math.PI / 2)) % elements.length

    setActiveElement(elements[index]?.id || null)
  }

  const cta = (links || [])[0]?.link || null

  return (
    <section
      ref={ref}
      className={clsx('py-20 px-4 bg-customWhite relative overflow-hidden', className)}
      style={{ fontFamily: nunito.style.fontFamily }}
    >
      <style>{`
        @keyframes stFloat {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-14px); }
        }
        @keyframes stFadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes stSlideUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .st-float {
          animation: stFloat 6s ease-in-out infinite;
        }
        .st-fade-in {
          animation: stFadeIn 0.5s ease-in forwards;
        }
        .st-slide-up {
          animation: stSlideUp 0.5s ease-out forwards;
        }
        .st-rich p {
          margin-bottom: 1rem;
        }
        @media (prefers-reduced-motion: reduce) {
          .st-float,
          .st-fade-in,
          .st-slide-up {
            animation: none;
          }
        }
      `}</style>

      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="st-float absolute top-20 right-20 w-40 h-40 bg-customOrange rounded-full opacity-10"></div>
        <div
          className="st-float absolute bottom-20 left-20 w-56 h-56 bg-customBlue rounded-full opacity-20"
          style={{ animationDelay: '1s' }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left column - Spinning top visualization */}
          <div
            className={clsx(inView ? 'st-fade-in' : 'opacity-0')}
            style={{ transitionDelay: '0.2s' }}
          >
            <div className="relative">
              <div
                className="bg-white p-6 rounded-full shadow-xl mx-auto max-w-md aspect-square flex items-center justify-center"
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => {
                  setIsHovering(false)
                  setActiveElement(null)
                }}
              >
                <canvas
                  ref={canvasRef}
                  className="w-full h-full cursor-pointer"
                  onClick={() => setIsHovering((prev) => !prev)}
                  onPointerMove={handlePointerMove}
                  onPointerLeave={() => setActiveElement(null)}
                />
              </div>

              {/* Interactive element indicators */}
              <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
                {elements.map((element, index) => {
                  const pill = (
                    <div
                      className="p-3 rounded-full shadow-md whitespace-nowrap"
                      style={{
                        backgroundColor: QUADRANT_COLORS[element.color],
                      }}
                      title={element.description || undefined}
                    >
                      <span className="font-bold text-customBlack">{element.label}</span>
                    </div>
                  )

                  return (
                    <div
                      key={element.id || index}
                      className={clsx(
                        'absolute transition-opacity duration-300',
                        activeElement === element.id ? 'opacity-100' : 'opacity-0',
                        element.link ? 'pointer-events-auto' : '',
                      )}
                      style={{
                        top: index === 0 || index === 1 ? '10%' : '80%',
                        left: index === 0 || index === 3 ? '10%' : '80%',
                      }}
                    >
                      {element.link ? (
                        <CMSLink
                          {...(element.link as Parameters<typeof CMSLink>[0])}
                          className="block rounded-full"
                        >
                          {pill}
                        </CMSLink>
                      ) : (
                        pill
                      )}
                    </div>
                  )
                })}
              </div>

              {/* Instruction text */}
              <p className="text-center mt-4 text-customBlack italic">
                {isHovering && canAnimate
                  ? 'Titirezul se rotește mai repede!'
                  : 'Atinge titirezul pentru a-l accelera'}
              </p>
            </div>
          </div>

          {/* Right column - Text content */}
          <div>
            <div
              className={clsx('mb-6', inView ? 'st-slide-up' : 'opacity-0')}
              style={{ transitionDelay: '0.1s' }}
            >
              <h2
                className="text-4xl md:text-5xl text-customBlack mb-4 italic"
                style={{ fontFamily: bangers.style.fontFamily }}
              >
                {heading || 'Învățarea prin lentila Titirezului'}
              </h2>
              <div className="w-40 h-2 bg-customOrange rounded-full"></div>
            </div>

            {description && (
              <div
                className={clsx(
                  'st-rich space-y-4 text-lg text-customBlack',
                  inView ? 'st-fade-in' : 'opacity-0',
                )}
                style={{ transitionDelay: '0.3s' }}
              >
                <RichText data={description} enableGutter={false} enableProse={false} />
              </div>
            )}

            {cta && (
              <div
                className={clsx('mt-8', inView ? 'st-fade-in' : 'opacity-0')}
                style={{ transitionDelay: '0.5s' }}
              >
                <CMSLink
                  {...(cta as Parameters<typeof CMSLink>[0])}
                  className="group inline-flex items-center bg-customBlue hover:bg-customOrange text-white font-bold py-3 px-6 rounded-full transition-colors duration-300 shadow-md"
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

      {/* Next section anchor */}
      <div
        id="elements-section"
        className={clsx(
          'mt-20 text-center scroll-mt-24',
          inView ? 'st-fade-in' : 'opacity-0',
        )}
        style={{ transitionDelay: '0.6s' }}
      >
        <h2
          className="text-4xl md:text-5xl text-customBlack mb-4 italic"
          style={{ fontFamily: bangers.style.fontFamily }}
        >
          Cele patru elemente de bază și calitățile lor:
        </h2>
        <div className="w-40 h-2 bg-customBlue mx-auto rounded-full"></div>
      </div>
    </section>
  )
}

export default SpinningTopBlock
