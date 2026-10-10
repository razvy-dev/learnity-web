import type { Block } from 'payload'

import { linkGroup } from '@/fields/linkGroup'

export const GuidedExamples: Block = {
  slug: 'guidedExamples',
  interfaceName: 'GuidedExamples',
  labels: {
    singular: 'Guided Examples',
    plural: 'Guided Examples Sections',
  },
  fields: [
    {
      name: 'sectionTitle',
      type: 'text',
      defaultValue: 'Câteva dintre workshop-urile Guided',
      required: true,
    },
    {
      name: 'sectionDescription',
      type: 'textarea',
      defaultValue:
        'Workshop-urile ghidate: Pastile de învățare susținute de profesioniști din diferite domenii. Fiecare atelier este practic și creat în funcție de interesele adolescenților.',
    },
    {
      name: 'workshops',
      type: 'relationship',
      relationTo: 'guidedWorkshops',
      hasMany: true,
      required: true,
      label: 'Workshops',
      admin: {
        description: 'Each card pulls its content from the selected Guided Workshop.',
      },
    },
    {
      name: 'badgeText',
      type: 'text',
      label: 'Card Badge Text',
      defaultValue: 'Featured',
    },
    {
      name: 'cardCtaText',
      type: 'text',
      label: 'Card CTA Text',
      defaultValue: 'Vezi mai multe',
    },
    linkGroup({
      appearances: false,
      overrides: {
        maxRows: 1,
        defaultValue: [
          {
            link: {
              type: 'custom',
              url: '/guided-learning',
              label: 'Vezi toate workshop-urile',
            },
          },
        ],
      },
    }),
  ],
}
