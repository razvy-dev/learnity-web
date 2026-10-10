import type { CheckboxField } from '@payloadcms/plugin-form-builder/types'
import type { FieldErrorsImpl, FieldValues, UseFormRegister } from 'react-hook-form'

import { useFormContext } from 'react-hook-form'

import { Checkbox as CheckboxUi } from '@/components/ui/checkbox'
import { Label } from '@/components/ui/label'
import React from 'react'

import { Error } from '../Error'
import { Width } from '../Width'
import { checkboxBase, requiredMark } from '../styles'

export const Checkbox: React.FC<
  CheckboxField & {
    errors: Partial<FieldErrorsImpl>
    register: UseFormRegister<FieldValues>
  }
> = ({ name, defaultValue, errors, label, register, required, width }) => {
  const props = register(name, { required: required })
  const { setValue } = useFormContext()

  return (
    <Width width={width}>
      <div className="flex items-center gap-3">
        <CheckboxUi
          className={checkboxBase}
          defaultChecked={defaultValue}
          id={name}
          {...props}
          onCheckedChange={(checked) => {
            setValue(props.name, checked)
          }}
        />
        <Label className="text-sm font-medium text-customBlack" htmlFor={name}>
          {label}
          {required && (
            <span className={requiredMark}>
              {' '}
              * <span className="sr-only">(required)</span>
            </span>
          )}
        </Label>
      </div>
      {errors[name] && <Error name={name} />}
    </Width>
  )
}
