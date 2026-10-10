import type { Block } from 'payload'

import {
  FixedToolbarFeature,
  InlineToolbarFeature,
  lexicalEditor,
} from '@payloadcms/richtext-lexical'

export const Teacher: Block = {
  slug: 'teacher',
  interfaceName: 'TeacherBlock',
  labels: {
    singular: 'Teacher Profile',
    plural: 'Teacher Profiles',
  },
  fields: [
    {
      name: 'image',
      type: 'upload',
      admin: {
        description: 'Portrait photo of the teacher.',
      },
      relationTo: 'media',
      required: true,
    },
    {
      name: 'name',
      type: 'text',
      label: 'Teacher name',
      required: true,
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
    },
  ],
}
