import type { Block } from 'payload'

import {
  FixedToolbarFeature,
  InlineToolbarFeature,
  lexicalEditor,
} from '@payloadcms/richtext-lexical'

import { lexicalEditorState } from '@/utilities/lexical'
import { iconPicker } from '@/fields/iconPicker'

export const RulesAndValues: Block = {
  slug: 'rulesAndValues',
  interfaceName: 'RulesAndValues',
  fields: [
    {
      name: 'sectionTitle',
      type: 'text',
      defaultValue: 'Valorile și regulile noastre',
      required: true,
    },
    {
      name: 'sectionDescription',
      type: 'text',
      defaultValue:
        'La Learnity, valorile și acordurile noastre comunitare creează o bază pentru învățarea plină de bucurie și creșterea personală. Aceste principii ghidează modul în care învățăm, interacționăm și creștem împreună.',
      required: true,
    },
    {
      name: 'valuesTabLabel',
      type: 'text',
      defaultValue: 'Valori',
      required: true,
    },
    {
      name: 'rulesTabLabel',
      type: 'text',
      defaultValue: 'Regulile comunității',
      required: true,
    },
    {
      name: 'values',
      type: 'array',
      label: 'Core Values',
      required: true,
      minRows: 1,
      fields: [
        {
          name: 'title',
          type: 'text',
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
        iconPicker({
          overrides: {
            defaultValue: 'lightbulb',
          },
        }),
        {
          name: 'color',
          type: 'select',
          required: true,
          defaultValue: 'blue',
          options: [
            { label: 'Blue', value: 'blue' },
            { label: 'Orange', value: 'orange' },
          ],
        },
      ],
    },
    {
      name: 'rules',
      type: 'array',
      label: 'Community Rules',
      required: true,
      minRows: 1,
      fields: [
        {
          name: 'title',
          type: 'text',
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
    },
    {
      name: 'valuesFooterTitle',
      type: 'text',
      defaultValue: 'Valorile noastre în acțiune',
    },
    {
      name: 'valuesFooterDescription',
      type: 'richText',
      editor: lexicalEditor({
        features: ({ rootFeatures }) => {
          return [...rootFeatures, FixedToolbarFeature(), InlineToolbarFeature()]
        },
      }),
      defaultValue: lexicalEditorState(
        'Aceste valori de bază nu sunt doar cuvinte pe o pagină - sunt experiențe trăite la Learnity. În fiecare zi, elevii și profesorii noștri aduc la viață aceste valori prin interacțiunile, proiectele și aventurile lor de învățare. Când vizitați școala noastră, veți vedea curiozitatea care conduce la descoperire, creativitatea care modelează exprimarea, compasiunea care ghidează relațiile, construirea de conexiuni comunitare și curajul care alimentează creșterea.',
      ),
    },
    {
      name: 'rulesFooterText',
      type: 'richText',
      editor: lexicalEditor({
        features: ({ rootFeatures }) => {
          return [...rootFeatures, FixedToolbarFeature(), InlineToolbarFeature()]
        },
      }),
      defaultValue: lexicalEditorState(
        'Aceste acorduri ne ajută să creăm un mediu de învățare în care toată lumea poate evolua. Atunci când respectăm aceste principii, construim o comunitate bazată pe încredere, respect și bucuria de a învăța.',
      ),
    },
  ],
}
