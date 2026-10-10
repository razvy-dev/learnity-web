import type { Block } from 'payload'

import { linkGroup } from '@/fields/linkGroup'

export const PlaygroundExamples: Block = {
  slug: 'playgroundExamples',
  interfaceName: 'PlaygroundExamples',
  labels: {
    singular: 'Playground Examples',
    plural: 'Playground Examples Sections',
  },
  fields: [
    {
      name: 'sectionTitle',
      type: 'text',
      defaultValue: 'Câteva evenimente din Playground',
      required: true,
    },
    {
      name: 'sectionDescription',
      type: 'textarea',
      defaultValue:
        'În Playground, elevii au oportunitatea de a-și lua învățarea în propriile mâini, fie prin a deveni ei profesori și a susține workshop-uri, fie prin a organiza evenimente alături de alți learniți pentru restul comunității, toate acestea sub ghidajul și îndrumarea noastră.',
    },
    {
      name: 'events',
      type: 'relationship',
      relationTo: 'events',
      hasMany: true,
      required: true,
      label: 'Playground Events',
      admin: {
        description: 'Each card pulls its content from the selected Playground Event.',
      },
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
              url: '/playground/events',
              label: 'Vezi mai mult din Playground',
            },
          },
        ],
      },
    }),
  ],
}
