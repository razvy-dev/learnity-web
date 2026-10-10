import type { Block } from 'payload'

import {
  BlocksFeature,
  FixedToolbarFeature,
  HeadingFeature,
  HorizontalRuleFeature,
  InlineToolbarFeature,
  lexicalEditor,
} from '@payloadcms/richtext-lexical'

import { Banner } from '../../blocks/Banner/config'
import { Code } from '../../blocks/Code/config'
import { MediaBlock } from '../../blocks/MediaBlock/config'
import { lexicalEditorState } from '@/utilities/lexical'

export const DonateStory: Block = {
  slug: 'donateStory',
  interfaceName: 'DonateStory',
  labels: {
    plural: 'Donation Stories',
    singular: 'Donation Story',
  },
  fields: [
    {
      name: 'heading',
      type: 'text',
      label: 'Heading',
      admin: {
        description: 'Optional heading shown above the content.',
      },
    },
    {
      name: 'content',
      type: 'richText',
      editor: lexicalEditor({
        features: ({ rootFeatures }) => {
          return [
            ...rootFeatures,
            HeadingFeature({ enabledHeadingSizes: ['h1', 'h2', 'h3', 'h4'] }),
            BlocksFeature({ blocks: [Banner, Code, MediaBlock] }),
            FixedToolbarFeature(),
            InlineToolbarFeature(),
            HorizontalRuleFeature(),
          ]
        },
      }),
      label: false,
      required: true,
      defaultValue: lexicalEditorState(
        'De ce avem nevoie de donații? Aici poți scrie povestea din spatele misiunii noastre: contextul, provocările și de ce sprijinul tău contează.',
        'Folosește editorul ca pe o postare: adaugă titluri, paragrafe, citate sau imagini pentru a explica clar de ce donațiile fac diferența în comunitatea noastră.',
      ),
    },
  ],
}
