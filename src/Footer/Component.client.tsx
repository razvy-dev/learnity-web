'use client'

import { ArrowRight, Mail, MapPin, Phone, Send } from 'lucide-react'
import React, { useState } from 'react'
import { useInView } from 'react-intersection-observer'

import type { Footer as FooterType, Social } from '@/payload-types'

import { CMSLink } from '@/components/Link'
import { Icon } from '@/components/Icon'
import { Media } from '@/components/Media'

interface FooterClientProps {
  footerData: FooterType
  socials: Social
}

export const FooterClient: React.FC<FooterClientProps> = ({ footerData, socials }) => {
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: false,
  })

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      // In a real app, you would send this to your backend
      console.log('Subscribing email:', email)
      setSubscribed(true)
      setEmail('')

      setTimeout(() => {
        setSubscribed(false)
      }, 3000)
    }
  }

  const { columns, copyright, description, logo } = footerData
  const { contact, platforms } = socials

  const phoneHref = `tel:${(contact?.phone || '').replace(/\s+/g, '')}`
  const emailHref = `mailto:${contact?.email || ''}`

  return (
    <footer ref={ref} className="bg-customBlue text-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-white rounded-full opacity-5"></div>
      <div className="absolute bottom-10 right-10 w-48 h-48 bg-customOrange rounded-full opacity-10"></div>

      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-12">
          {/* Logo and about section */}
          <div
            className={`md:col-span-4 ${inView ? 'animate-fade-in' : 'opacity-0'}`}
            style={{ transitionDelay: '0.1s' }}
          >
            {logo && typeof logo === 'object' && (
              <Media resource={logo} imgClassName="w-48 h-auto mb-6" priority />
            )}

            {description && <p className="text-customWhite mb-6 max-w-md">{description}</p>}

            {platforms && platforms.length > 0 && (
              <div className="flex space-x-4">
                {platforms.map((platform, i) => (
                  <a
                    key={platform.id || i}
                    href={platform.link}
                    aria-label={platform.name}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white/20 p-2 rounded-full hover:bg-customOrange transition-colors duration-300 inline-flex items-center justify-center"
                  >
                    <Icon name={platform.icon} className="w-5 h-5" />
                  </a>
                ))}
              </div>
            )}
          </div>

          {/* Link columns */}
          {columns?.map((column, i) => (
            <div
              key={column.id || i}
              className={`md:col-span-2 ${inView ? 'animate-slide-up' : 'opacity-0'}`}
              style={{ transitionDelay: `${0.2 + i * 0.1}s` }}
            >
              <h3 className="text-xl font-bold mb-4 text-customWhite">{column.title}</h3>
              <ul className="space-y-2">
                {column.links?.map(({ link }, j) => (
                  <li key={j} className="flex items-center">
                    <ArrowRight size={14} className="mr-2 shrink-0" />
                    {link && (
                      <CMSLink
                        {...link}
                        className="hover:text-customOrange transition-colors duration-300"
                      />
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact info */}
          <div
            className={`md:col-span-4 ${inView ? 'animate-slide-up' : 'opacity-0'}`}
            style={{ transitionDelay: '0.4s' }}
          >
            <h3 className="text-xl font-bold mb-4 text-customWhite">Stay Connected</h3>

            <form onSubmit={handleSubscribe} className="mb-6">
              <div className="flex">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email address"
                  className="px-4 py-2 rounded-l-lg flex-grow text-customBlack focus:outline-none focus:ring-2 focus:ring-customOrange"
                  required
                />
                <button
                  type="submit"
                  className="bg-customOrange hover:bg-customLightOrange text-white px-4 py-2 rounded-r-lg transition-colors duration-300 flex items-center"
                >
                  <Send size={18} />
                </button>
              </div>
              {subscribed && (
                <p className="text-customLightOrange mt-2 text-sm">Thanks for subscribing!</p>
              )}
            </form>

            <h3 className="text-xl font-bold mb-4 text-customWhite">Contactează-ne: </h3>
            <ul className="space-y-3">
              {contact?.address && (
                <li className="flex items-start">
                  <MapPin size={20} className="mr-3 mt-1 text-customOrange shrink-0" />
                  <span className="whitespace-pre-line">{contact.address}</span>
                </li>
              )}
              {contact?.phone && (
                <li className="flex items-center">
                  <Phone size={20} className="mr-3 text-customOrange shrink-0" />
                  <a href={phoneHref}>{contact.phone}</a>
                </li>
              )}
              {contact?.email && (
                <li className="flex items-center">
                  <Mail size={20} className="mr-3 text-customOrange shrink-0" />
                  <a
                    href={emailHref}
                    className="hover:text-customOrange transition-colors duration-300"
                  >
                    {contact.email}
                  </a>
                </li>
              )}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className={`pt-8 border-t border-white/20 flex flex-col md:flex-row justify-between items-center ${inView ? 'animate-fade-in' : 'opacity-0'}`}
          style={{ transitionDelay: '0.5s' }}
        >
          <p className="text-sm text-customWhite mb-4 md:mb-0">{copyright}</p>
        </div>
      </div>
    </footer>
  )
}
