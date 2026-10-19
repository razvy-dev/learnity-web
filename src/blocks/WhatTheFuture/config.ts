import type { Block } from 'payload'

export const WhatTheFuture: Block = {
  slug: 'whatTheFuture',
  interfaceName: 'WhatTheFutureBlock',
  labels: {
    singular: 'What The Future',
    plural: 'What The Future Sections',
  },
  fields: [
    {
      name: 'document',
      type: 'relationship',
      relationTo: 'whatTheFuture',
      hasMany: false,
      label: 'Event',
      admin: {
        description:
          'Choose which What The Future event to display. Leave empty to always show the latest published event.',
      },
    },
  ],
}
