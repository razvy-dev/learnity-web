import React from 'react'

import type { Page } from '@/payload-types'

import { useSocials } from '@/hooks/useSocials'

import { HighImpactHeroClient } from './Component.client'

export async function HighImpactHero(props: Page['hero']) {
  const socials = await useSocials()

  return <HighImpactHeroClient {...props} socials={socials} />
}
