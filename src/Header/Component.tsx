import { HeaderClient } from './Component.client'
import { getCachedGlobal } from '@/utilities/getGlobals'
import React from 'react'

import { useSocials } from '@/hooks/useSocials'

export async function Header() {
  const headerData = await getCachedGlobal('header', 1)()
  const socials = await useSocials()

  return <HeaderClient data={headerData} socials={socials} />
}
