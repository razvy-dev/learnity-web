import type { Block } from 'payload'

import {
  FixedToolbarFeature,
  InlineToolbarFeature,
  lexicalEditor,
} from '@payloadcms/richtext-lexical'

import { link } from '@/fields/link'
import { linkGroup } from '@/fields/linkGroup'
import { lexicalEditorState } from '@/utilities/lexical'

export const SpinningTop: Block = {
  slug: 'spinningTop',
  interfaceName: 'SpinningTopBlock',
  labels: {
    singular: 'Spinning Top',
    plural: 'Spinning Top Sections',
  },
  fields: [
    {
      name: 'heading',
      type: 'text',
      label: 'Heading',
      defaultValue: 'Învățarea prin lentila Titirezului',
      admin: {
        description: 'Big display headline shown next to the spinning top.',
      },
    },
    {
      name: 'description',
      type: 'richText',
      label: 'Description',
      editor: lexicalEditor({
        features: ({ rootFeatures }) => {
          return [...rootFeatures, FixedToolbarFeature(), InlineToolbarFeature()]
        },
      }),
      defaultValue: lexicalEditorState(
        'Metoda titirezului este o definiție metaforică a Învățării Emergente, o busolă pentru a te orienta în timp ce îți proiectezi propria călătorie de învățare, cea a unui grup sau a unei comunități.',
        'Acțiunea, Reflecția și Reziliența descriu toată învățarea în forma sa naturală, iar partea de Design adaugă acesteia o nouă calitate: o face autodeterminată.',
        'Acestea sunt cele patru „puncte cardinale" ce ne ajută să încetinim mental procesul învățării noastre pentru a ne da seama unde și cum avem nevoie să ne îndreptăm focusul. După ce le-am înțeles pe fiecare individual, pentru a ne păstra procesul activ și eficient, cele patru elemente de bază se amestecă între ele, exact precum culorile unui titirez în rotație.',
        'Așadar, dacă vizualizezi învățarea sub forma unui titirez, scopul este să-i echilibrezi toate cele patru puncte pentru a-l ține în mișcare.',
      ),
    },
    {
      name: 'elements',
      type: 'array',
      label: 'Titirez Elements',
      required: true,
      minRows: 4,
      maxRows: 4,
      admin: {
        description:
          'Exactly 4 quadrants, drawn clockwise on the canvas: Acțiune, Reflecție, Reziliență, Design.',
        initCollapsed: true,
      },
      labels: {
        singular: 'Element',
        plural: 'Elements',
      },
      defaultValue: [
        { label: 'Acțiune', color: 'customOrange' },
        { label: 'Reflecție', color: 'customBlue' },
        { label: 'Reziliență', color: 'customLightOrange' },
        { label: 'Design', color: 'customLightBlue' },
      ],
      fields: [
        {
          name: 'label',
          type: 'text',
          label: 'Label',
          required: true,
        },
        {
          name: 'description',
          type: 'textarea',
          label: 'Short Description',
          admin: {
            description: 'Shown on the element pill when hovering its quadrant.',
          },
        },
        {
          name: 'color',
          type: 'select',
          label: 'Color',
          required: true,
          defaultValue: 'customOrange',
          options: [
            { label: 'Orange — #F8A12E', value: 'customOrange' },
            { label: 'Teal — #05be9e', value: 'customBlue' },
            { label: 'Light Orange — #FEC782', value: 'customLightOrange' },
            { label: 'Light Blue — #C7F1F0', value: 'customLightBlue' },
          ],
        },
        link({
          appearances: false,
          overrides: {
            admin: {
              description:
                'Optional link for this quadrant (e.g. a custom URL anchor like #elements-section).',
            },
          },
        }),
      ],
    },
    {
      name: 'enableAnimation',
      type: 'checkbox',
      label: 'Enable Animation',
      defaultValue: true,
      admin: {
        description:
          'Continuously spin the top (and accelerate it on hover). When unchecked — or when the visitor prefers reduced motion — a static top is drawn instead.',
      },
    },
    linkGroup({
      appearances: false,
      overrides: {
        maxRows: 1,
        admin: {
          description:
            'Optional CTA, e.g. "Descoperă cele patru elemente" pointing to a custom URL anchor like #elements-section.',
        },
      },
    }),
  ],
}

export default SpinningTop
