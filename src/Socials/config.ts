import type { GlobalConfig } from 'payload'

import { iconPicker } from '@/fields/iconPicker'

import { revalidateSocials } from './hooks/revalidateSocials'

export const Socials: GlobalConfig = {
  slug: 'socials',
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'contact',
      type: 'group',
      fields: [
        {
          name: 'address',
          type: 'textarea',
          required: true,
        },
        {
          name: 'email',
          type: 'email',
          required: true,
        },
        {
          name: 'phone',
          type: 'text',
          required: true,
        },
      ],
    },
    {
      name: 'platforms',
      type: 'array',
      labels: {
        singular: 'Platform',
        plural: 'Platforms',
      },
      fields: [
        iconPicker(),
        {
          name: 'name',
          type: 'text',
          required: true,
        },
        {
          name: 'link',
          type: 'text',
          required: true,
          validate: (value: string | null | undefined) => {
            if (!value) return 'A link is required.'

            try {
              new URL(value)
              return true
            } catch {
              return 'Please enter a valid URL (e.g. https://example.com).'
            }
          },
        },
      ],
      admin: {
        initCollapsed: true,
        components: {
          RowLabel: '@/Socials/RowLabel#RowLabel',
        },
      },
    },
  ],
  hooks: {
    afterChange: [revalidateSocials],
  },
}
