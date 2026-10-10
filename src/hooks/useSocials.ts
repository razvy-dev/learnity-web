import { cache } from 'react'

import type { Social } from '@/payload-types'

import { getCachedGlobal } from '@/utilities/getGlobals'

type Platform = NonNullable<Social['platforms']>[number]

/**
 * Reusable accessor for the `socials` global.
 *
 * Deduplicates within a single render pass via React's `cache`, while
 * `getCachedGlobal` provides the persistent, tag-based cache (`global_socials`).
 * Call it from a Server Component and `await` the result.
 *
 * The contact phone and email are appended to the returned `platforms` array as
 * extra entries (with `phone` and `mail` icons) so they can be rendered alongside
 * the configured social platforms.
 */
export const useSocials = cache(async (): Promise<Social> => {
  const socials = await getCachedGlobal('socials', 1)()

  const contact = socials.contact
  const extra: Platform[] = []

  if (contact?.phone) {
    extra.push({
      id: 'phone',
      name: 'Phone',
      link: `tel:${contact.phone.replace(/\s+/g, '')}`,
      icon: 'phone',
    })
  }

  if (contact?.email) {
    extra.push({
      id: 'email',
      name: 'Email',
      link: `mailto:${contact.email}`,
      icon: 'mail',
    })
  }

  return {
    ...socials,
    platforms: [...(socials.platforms || []), ...extra],
  }
})
