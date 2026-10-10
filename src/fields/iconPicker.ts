import type { Field, SelectField } from 'payload'

import deepMerge from '@/utilities/deepMerge'
import { iconOptions } from '@/utilities/iconOptions'

type IconPickerType = (options?: { name?: string; overrides?: Partial<SelectField> }) => Field

export const iconPicker: IconPickerType = ({ name = 'icon', overrides = {} } = {}) => {
  const field: SelectField = {
    name,
    type: 'select',
    label: 'Icon',
    required: true,
    defaultValue: 'school',
    options: iconOptions.map((option) => ({ label: option.label, value: option.value })),
    admin: {
      components: {
        Field: '@/fields/IconPickerField#IconPickerField',
      },
    },
  }

  return deepMerge(field, overrides)
}
