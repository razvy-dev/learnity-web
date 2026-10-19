import React, { Fragment } from 'react'

import type { Page } from '@/payload-types'

import { ArchiveBlock } from '@/blocks/ArchiveBlock/Component'
import { About } from '@/blocks/About/Component'
import { CallToActionBlock } from '@/blocks/CallToAction/Component'
import { ContentBlock } from '@/blocks/Content/Component'
import { FormBlock } from '@/blocks/Form/Component'
import { MediaBlock } from '@/blocks/MediaBlock/Component'
import { Timeline } from '@/blocks/Timeline/Component'
import { RulesAndValues } from '@/blocks/RulesAndValues/Component'
import { Guided } from '@/blocks/Guided/Component'
import { GuidedLearningByYear } from '@/blocks/GuidedLearningByYear/Component'
import { FAQ } from '@/blocks/FAQ/Component'
import { Playground } from '@/blocks/Playground/Component'
import { Testimonials } from '@/blocks/Testimonials/Component'
import { PlaygroundJourney } from '@/blocks/PlaygroundJourney/Component'
import { MapEmbed } from '@/blocks/MapEmbed/Component'
import { GuidedExamples } from '@/blocks/GuidedExamples/Component'
import { PlaygroundExamples } from '@/blocks/PlaygroundExamples/Component'
import { Teachers } from '@/blocks/Teachers/Component'
import { Teacher } from '@/blocks/Teacher/Component'
import { Donate } from '@/blocks/Donate/Component'
import { DonateStory } from '@/blocks/DonateStory/Component'
import { PresentCourses } from '@/blocks/PresentCourses/Component'
import { AboutStory } from '@/blocks/AboutStory/Component'
import { Camps } from '@/blocks/Camps/Component'
import { GuidedCourses } from '@/blocks/GuidedCourses/Component'
import { ObjectivesBlock } from '@/blocks/Objectives/Component'
import { PlaygroundShowcase } from '@/blocks/PlaygroundShowcase/Component'
import { SpinningTopBlock } from '@/blocks/SpinningTop/Component'
import { WhatTheFutureBlock } from '@/blocks/WhatTheFuture/Component'
import { WhySupport } from '@/blocks/WhySupport/Component'
import { DonationMethodsBlock } from '@/blocks/DonationMethods/Component'

const blockComponents = {
  about: About,
  archive: ArchiveBlock,
  content: ContentBlock,
  cta: CallToActionBlock,
  donate: Donate,
  donateStory: DonateStory,
  formBlock: FormBlock,
  mediaBlock: MediaBlock,
  timeline: Timeline,
  rulesAndValues: RulesAndValues,
  guided: Guided,
  guidedLearningByYear: GuidedLearningByYear,
  faq: FAQ,
  playground: Playground,
  testimonials: Testimonials,
  playgroundJourney: PlaygroundJourney,
  map: MapEmbed,
  guidedExamples: GuidedExamples,
  playgroundExamples: PlaygroundExamples,
  teachers: Teachers,
  teacher: Teacher,
  presentCourses: PresentCourses,
  aboutStory: AboutStory,
  camps: Camps,
  guidedCourses: GuidedCourses,
  objectives: ObjectivesBlock,
  playgroundShowcase: PlaygroundShowcase,
  spinningTop: SpinningTopBlock,
  whatTheFuture: WhatTheFutureBlock,
  whySupport: WhySupport,
  donationMethods: DonationMethodsBlock,
}

export const RenderBlocks: React.FC<{
  blocks: Page['layout'][0][]
}> = (props) => {
  const { blocks } = props

  const hasBlocks = blocks && Array.isArray(blocks) && blocks.length > 0

  if (hasBlocks) {
    return (
      <Fragment>
        {blocks.map((block, index) => {
          const { blockType } = block

          if (blockType && blockType in blockComponents) {
            const Block = blockComponents[blockType]

            if (Block) {
              return (
                <div key={index}>
                  {/* @ts-expect-error there may be some mismatch between the expected types here */}
                  <Block {...block} disableInnerContainer />
                </div>
              )
            }
          }
          return null
        })}
      </Fragment>
    )
  }

  return null
}
