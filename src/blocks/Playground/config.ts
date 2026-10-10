import type { Block } from 'payload'

import {
  FixedToolbarFeature,
  InlineToolbarFeature,
  lexicalEditor,
} from '@payloadcms/richtext-lexical'

import { linkGroup } from '@/fields/linkGroup'
import { lexicalEditorState } from '@/utilities/lexical'

export const Playground: Block = {
  slug: 'playground',
  interfaceName: 'Playground',
  labels: {
    singular: 'Playground',
    plural: 'Playground Sections',
  },
  fields: [
    {
      name: 'sectionTitle',
      type: 'text',
      required: true,
      defaultValue: 'Playground',
    },
    {
      name: 'description',
      type: 'richText',
      editor: lexicalEditor({
        features: ({ rootFeatures }) => {
          return [...rootFeatures, FixedToolbarFeature(), InlineToolbarFeature()]
        },
      }),
      required: true,
      defaultValue: lexicalEditorState(
        'Spațiul care oferă adolescenților oportunitatea de a-și lua învățarea în propriile mâini și de a organiza experiențe bazate pe interesele lor (precum grupuri autonome, cursuri, workshop-uri sau evenimente fun), totodată fiind și partea în care se construiește spiritul de comunitate.',
      ),
    },
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
      required: true,
      label: 'Main Image',
    },
    {
      name: 'badgeText',
      type: 'text',
      label: 'Badge Text',
      defaultValue: 'Fun!',
    },
    linkGroup({
      appearances: false,
      overrides: {
        maxRows: 1,
      },
    }),
  ],
}
