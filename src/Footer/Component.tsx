import { getCachedGlobal } from '@/utilities/getGlobals'
import React from 'react'

import { useSocials } from '@/hooks/useSocials'

import { FooterClient } from './Component.client'

export async function Footer() {
  const footerData = await getCachedGlobal('footer', 2)()
  const socials = await useSocials()

  return <FooterClient footerData={footerData} socials={socials} />
}
