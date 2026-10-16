import type { Block } from 'payload'

import {
  FixedToolbarFeature,
  InlineToolbarFeature,
  lexicalEditor,
} from '@payloadcms/richtext-lexical'

export const GuidedLearningByYear: Block = {
  slug: 'guidedLearningByYear',
  interfaceName: 'GuidedLearningByYear',
  labels: {
    singular: 'Guided Learning by Year',
    plural: 'Guided Learning by Year Sections',
  },
  fields: [
    {
      name: 'sectionTitle',
      type: 'text',
      defaultValue: 'Experiențe de învățare ghidate',
      required: true,
    },
    {
      name: 'sectionDescription',
      type: 'richText',
      editor: lexicalEditor({
        features: ({ rootFeatures }) => {
          return [...rootFeatures, FixedToolbarFeature(), InlineToolbarFeature()]
        },
      }),
      required: false,
    },
    {
      name: 'year',
      type: 'number',
      required: true,
      admin: {
        description: 'Year to display guided learning experiences for (e.g., 2025)',
      },
      defaultValue: new Date().getFullYear(),
    },
    {
      name: 'showEmptyModules',
      type: 'checkbox',
      defaultValue: true,
      label: 'Show modules with no content',
      admin: {
        description: 'If checked, modules without any experiences will still be displayed with a placeholder message.',
      },
    },
    {
      name: 'moduleLabels',
      type: 'array',
      dbName: 'gl_module_labels',
      fields: [
        {
          name: 'moduleValue',
          type: 'select',
          required: true,
          options: [
            { label: 'Module 1', value: 'module1' },
            { label: 'Module 2', value: 'module2' },
            { label: 'Module 3', value: 'module3' },
          ],
        },
        {
          name: 'label',
          type: 'text',
          required: true,
        },
        {
          name: 'description',
          type: 'textarea',
          required: false,
        },
        {
          name: 'color',
          type: 'select',
          required: true,
          defaultValue: 'blue',
          options: [
            { label: 'Blue', value: 'blue' },
            { label: 'Orange', value: 'orange' },
            { label: 'Green', value: 'green' },
            { label: 'Purple', value: 'purple' },
            { label: 'Red', value: 'red' },
          ],
        },
      ],
      defaultValue: [
        { moduleValue: 'module1', label: 'Modulul 1', description: 'Descoperire și explorare', color: 'blue' },
        { moduleValue: 'module2', label: 'Modulul 2', description: 'Aprofundare și practică', color: 'orange' },
        { moduleValue: 'module3', label: 'Modulul 3', description: 'Proiect final și prezentare', color: 'green' },
      ],
      admin: {
        description: 'Customize labels and colors for each module.',
      },
    },
  ],
}