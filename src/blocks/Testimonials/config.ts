import type { Block } from 'payload'

export const Testimonials: Block = {
  slug: 'testimonials',
  interfaceName: 'Testimonials',
  labels: {
    singular: 'Testimonials',
    plural: 'Testimonials Sections',
  },
  fields: [
    {
      name: 'sectionTitle',
      type: 'text',
      required: true,
      defaultValue: 'Testimoniale',
    },
    {
      name: 'autoAdvanceInterval',
      type: 'number',
      label: 'Auto-advance interval (ms)',
      defaultValue: 5000,
      admin: {
        description: 'How long each testimonial is shown before advancing automatically.',
      },
    },
    {
      name: 'testimonials',
      type: 'array',
      required: true,
      minRows: 1,
      labels: {
        singular: 'Testimonial',
        plural: 'Testimonials',
      },
      fields: [
        {
          name: 'name',
          type: 'text',
          required: true,
        },
        {
          name: 'role',
          type: 'text',
          required: true,
        },
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
          required: true,
        },
        {
          name: 'text',
          type: 'textarea',
          required: true,
        },
      ],
    },
  ],
}
