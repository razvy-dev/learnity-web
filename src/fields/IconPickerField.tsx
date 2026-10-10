'use client'

import { FieldDescription, FieldError, FieldLabel, ReactSelect, useField } from '@payloadcms/ui'
import type { OptionObject, SelectFieldClientComponent } from 'payload'
import React from 'react'
import {
  components as ReactSelectComponents,
  type OptionProps,
  type SingleValueProps,
} from 'react-select'

import { Icon } from '@/components/Icon'

type IconOption = {
  label: string
  value: string
}

const rowStyle: React.CSSProperties = {
  alignItems: 'center',
  display: 'flex',
  gap: 'calc(var(--base) * 0.25)',
}

const IconOptionRow: React.FC<OptionProps<IconOption, false>> = (props) => (
  <ReactSelectComponents.Option {...props}>
    <span style={rowStyle}>
      <Icon name={props.data.value} size={18} />
      <span>{props.data.label}</span>
    </span>
  </ReactSelectComponents.Option>
)

const IconSingleValue: React.FC<SingleValueProps<IconOption, false>> = (props) => (
  <ReactSelectComponents.SingleValue {...props}>
    <span style={rowStyle}>
      <Icon name={props.data.value} size={18} />
      <span>{props.children}</span>
    </span>
  </ReactSelectComponents.SingleValue>
)

export const IconPickerField: SelectFieldClientComponent = ({ field, path, readOnly }) => {
  const { setValue, value } = useField<string | undefined>({ path })

  const options = React.useMemo<IconOption[]>(() => {
    const raw = (field.options || []) as OptionObject[]

    return raw
      .filter((option) => 'value' in option)
      .map((option) => ({
        label: typeof option.label === 'string' ? option.label : String(option.value),
        value: String(option.value),
      }))
  }, [field.options])

  const selected = value ? options.find((option) => option.value === value) : undefined

  return (
    <div className="field-type select">
      <FieldLabel label={field.label} path={path} required={field.required} />

      <ReactSelect
        components={{
          Option: IconOptionRow,
          SingleValue: IconSingleValue,
        }}
        disabled={readOnly}
        isClearable={!field.required}
        isSearchable
        onChange={(option) => {
          const next = Array.isArray(option) ? option[0] : option
          setValue((next?.value as string | undefined) ?? undefined)
        }}
        options={options}
        value={selected}
      />

      <FieldDescription
        description={typeof field.admin?.description === 'string' ? field.admin.description : undefined}
        path={path}
      />
      <FieldError path={path} />
    </div>
  )
}
