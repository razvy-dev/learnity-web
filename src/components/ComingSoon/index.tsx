import React from 'react'

export type ComingSoonProps = {
  className?: string
  description?: string
  title: string
}

export const ComingSoon: React.FC<ComingSoonProps> = ({ className, description, title }) => {
  return (
    <section
      className={[
        'relative overflow-hidden bg-customWhite px-4 py-32',
        className,
      ]
        .filter(Boolean)
        .join(' ')}
    >
      <div className="absolute top-20 right-20 h-40 w-40 rounded-full bg-customLightBlue opacity-20" />
      <div className="absolute bottom-20 left-20 h-56 w-56 rounded-full bg-customLightOrange opacity-20" />

      <div className="relative mx-auto max-w-3xl text-center">
        <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-customBlue">
          Coming soon
        </p>
        <h1 className="mb-6 text-4xl italic text-customBlack md:text-5xl">{title}</h1>
        <div className="mx-auto mb-8 h-2 w-32 rounded-full bg-customOrange" />
        <p className="text-lg text-customBlack">
          {description || 'Această pagină este în curs de dezvoltare. Revenim în curând.'}
        </p>
      </div>
    </section>
  )
}

export default ComingSoon
