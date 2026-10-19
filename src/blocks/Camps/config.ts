import type { Block } from 'payload'

export const Camps: Block = {
  slug: 'camps',
  interfaceName: 'CampsBlock',
  labels: {
    singular: 'Camps Section',
    plural: 'Camps Sections',
  },
  fields: [
    {
      name: 'camp',
      type: 'relationship',
      relationTo: 'camps',
      hasMany: false,
      required: true,
      label: 'Camp',
      admin: {
        description: 'Choose which camp to display in this section.',
      },
    },
  ],
}
