import type { Block } from 'payload'

import { linkGroup } from '@/fields/linkGroup'

export const Teachers: Block = {
  slug: 'teachers',
  interfaceName: 'Teachers',
  labels: {
    singular: 'Teachers',
    plural: 'Teachers Sections',
  },
  fields: [
    {
      name: 'sectionTitle',
      type: 'text',
      defaultValue: 'Câțiva dintre profesorii noștri',
      required: true,
    },
    {
      name: 'sectionDescription',
      type: 'textarea',
      defaultValue:
        'Profesorii noștri pasionați aduc învățarea la viață cu creativitate, expertiză și o înțelegere profundă a modului în care copiii învață cel mai bine. Fiecare profesor contribuie cu aptitudinile sale unice pentru a crea un mediu captivant și sigur.',
    },
    {
      name: 'teachers',
      type: 'array',
      required: true,
      minRows: 1,
      labels: {
        singular: 'Teacher',
        plural: 'Teachers',
      },
      fields: [
        {
          name: 'name',
          type: 'text',
          required: true,
        },
        {
          name: 'course',
          type: 'text',
          label: 'Course',
          required: true,
        },
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
          required: true,
        },
        {
          name: 'quote',
          type: 'textarea',
          required: true,
        },
      ],
    },
    linkGroup({
      appearances: false,
      overrides: {
        maxRows: 1,
        defaultValue: [
          {
            link: {
              type: 'custom',
              url: '/despre-noi',
              label: 'Profesorii acestui an',
            },
          },
        ],
      },
    }),
  ],
}
