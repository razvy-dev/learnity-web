'use client'

import { Bangers } from 'next/font/google'
import Link from 'next/link'
import { Calendar, Home, Mail, Menu, User, X } from 'lucide-react'
import React, { useEffect, useState } from 'react'

import type { Header as HeaderType, Social } from '@/payload-types'

import { CMSLink } from '@/components/Link'
import { Icon } from '@/components/Icon'
import { Media } from '@/components/Media'

const bangers = Bangers({
  subsets: ['latin', 'latin-ext'],
  weight: '400',
  display: 'swap',
})

const FALLBACK_LOGO = '/learnity-logo.svg'

interface HeaderClientProps {
  data: HeaderType
  socials: Social
}

export const HeaderClient: React.FC<HeaderClientProps> = ({ data, socials }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isClosing, setIsClosing] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  const navItems = data?.navItems || []
  const platforms = socials?.platforms || []
  const logo = data?.logo

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const closeMenu = () => {
    if (isMenuOpen) {
      setIsClosing(true)

      setTimeout(() => {
        setIsMenuOpen(false)
        setIsClosing(false)
        document.body.style.overflow = 'auto'
      }, 1000)
    }
  }

  const toggleMenu = () => {
    if (isMenuOpen) {
      closeMenu()
    } else {
      setIsMenuOpen(true)
      document.body.style.overflow = 'hidden'
    }
  }

  return (
    <>
      {/* Mobile Navigation (Bottom) */}
      <nav
        className={`fixed rounded-t-3xl bottom-0 left-0 right-0 z-40 md:hidden bg-customBlack text-customWhite transition-all duration-300 ${isMenuOpen ? 'h-[100dvh]' : 'h-20'}`}
      >
        {/* Mobile Nav Icons - Always visible */}
        <div className="flex justify-around items-center h-20 px-4 relative z-50">
          <Link href="/" onClick={closeMenu} className="flex flex-col items-center">
            <Home className="w-10 h-10" />
          </Link>
          <Link href="/calendar" onClick={closeMenu} className="flex flex-col items-center">
            <Calendar className="w-10 h-10" />
          </Link>
          <button
            onClick={toggleMenu}
            className="flex flex-col items-center focus:outline-none"
            aria-expanded={isMenuOpen}
            aria-label="Toggle menu"
          >
            <div className="w-14 h-14 rounded-full bg-customOrange flex items-center justify-center">
              {isMenuOpen ? (
                <X className="w-8 h-8 text-customBlack" />
              ) : (
                <Menu className="w-8 h-8 text-customBlack" />
              )}
            </div>
          </button>
          <span aria-disabled="true" className="flex flex-col items-center cursor-default">
            <User className="w-10 h-10" />
          </span>
          <Link href="/posts" onClick={closeMenu} className="flex flex-col items-center">
            <Mail className="w-10 h-10" />
          </Link>
        </div>

        {/* Expanded Mobile Menu */}
        {isMenuOpen && (
          <div className="absolute inset-0 overflow-hidden bg-customBlack">
            <div className="relative z-10 flex flex-col items-center justify-center h-[105vh] p-6 transition-opacity duration-500">
              <div className="w-full max-w-md">
                {navItems.map(({ link }, index) => (
                  <div key={link?.label ?? index} onClick={closeMenu}>
                    <CMSLink
                      {...link}
                      appearance="inline"
                      className={`block text-3xl py-5 text-center text-customWhite hover:text-customOrange transition-colors duration-300 ${bangers.className}`}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Desktop Navigation (Top) */}
      <div className="hidden md:block">
        <nav
          className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
            scrolled ? 'bg-customBlack shadow-md py-2' : 'bg-customBlack bg-opacity-90 py-4'
          }`}
        >
          <div className="container mx-auto px-6 flex justify-between items-center">
            {/* Logo */}
            <div className="flex-1">
              <Link href="/" className="flex items-center">
                {logo && typeof logo === 'object' ? (
                  <Media resource={logo} imgClassName="w-[150px] h-auto" priority />
                ) : (
                  /* eslint-disable-next-line @next/next/no-img-element */
                  <img src={FALLBACK_LOGO} alt="Learnity" width={150} height={150} />
                )}
              </Link>
            </div>

            {/* Center Navigation */}
            <div className="flex-1 flex items-center justify-center space-x-10">
              <Link
                href="/"
                className="text-customWhite hover:text-customOrange transition-colors"
              >
                <Home className="w-10 h-10" />
              </Link>
              <Link
                href="/calendar"
                className="text-customWhite hover:text-customOrange transition-colors"
              >
                <Calendar className="w-10 h-10" />
              </Link>
              <button
                onClick={toggleMenu}
                className="w-14 h-14 rounded-full bg-customOrange flex items-center justify-center text-customBlack hover:bg-customLightOrange transition-colors focus:outline-none relative z-50"
                aria-expanded={isMenuOpen}
                aria-label="Toggle menu"
              >
                {isMenuOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
              </button>
              <span aria-disabled="true" className="text-customWhite cursor-default">
                <User className="w-10 h-10" />
              </span>
              <Link
                href="/posts"
                className="text-customWhite hover:text-customOrange transition-colors"
              >
                <Mail className="w-10 h-10" />
              </Link>
            </div>

            {/* Social Media Icons */}
            <div className="flex-1 flex justify-end space-x-6">
              {platforms.map((platform, i) => (
                <a
                  key={platform.id || i}
                  href={platform.link}
                  aria-label={platform.name}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-customWhite hover:text-customOrange transition-colors"
                >
                  <Icon name={platform.icon} className="w-8 h-8" />
                </a>
              ))}
            </div>
          </div>
        </nav>

        {(isMenuOpen || isClosing) && (
          <div className="fixed inset-0 pt-20 z-40 overflow-hidden">
            {/* Circle animation */}
            <div className="absolute top-0 left-0 right-0 bottom-0 flex items-start justify-center">
              <div
                className={`absolute top-10 w-14 h-14 rounded-full bg-customBlack ${
                  isClosing ? 'circle-shrink' : 'circle-expand'
                }`}
                style={{ transformOrigin: 'center center' }}
              />
            </div>

            <div
              className={`relative z-10 flex items-center justify-center h-full ${
                isClosing ? 'nav-menu-fade-out' : 'nav-menu-fade-in'
              }`}
            >
              <div className="container mx-auto px-6">
                <div className="grid grid-cols-2 gap-x-20 gap-y-10 max-w-4xl mx-auto">
                  {navItems.map(({ link }, index) => {
                    const { label, ...linkProps } = link
                    return (
                      <div key={label ?? index} onClick={closeMenu}>
                        <CMSLink
                          {...linkProps}
                          appearance="inline"
                          label={null}
                          className={`text-5xl text-customWhite hover:text-customOrange transition-colors duration-300 flex items-center ${bangers.className}`}
                        >
                          <span className="text-customOrange mr-4">{index + 1}.</span>
                          {label}
                        </CMSLink>
                      </div>
                    )
                  })}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  )
}
