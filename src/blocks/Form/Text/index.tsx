import type { TextField } from '@payloadcms/plugin-form-builder/types'
import type { FieldErrorsImpl, FieldValues, UseFormRegister } from 'react-hook-form'

import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import React from 'react'

import { Error } from '../Error'
import { Width } from '../Width'
import { cn } from '@/utilities/ui'
import { fieldError, fieldLabel, inputBase, requiredMark } from '../styles'

export const Text: React.FC<
  TextField & {
    errors: Partial<FieldErrorsImpl>
    register: UseFormRegister<FieldValues>
  }
> = ({ name, defaultValue, errors, label, register, required, width }) => {
  return (
    <Width width={width}>
      <Label className={fieldLabel} htmlFor={name}>
        {label}

        {required && (
          <span className={requiredMark}>
            * <span className="sr-only">(required)</span>
          </span>
        )}
      </Label>
      <Input
        className={cn(inputBase, errors[name] && fieldError)}
        defaultValue={defaultValue}
        id={name}
        type="text"
        {...register(name, { required })}
      />
      {errors[name] && <Error name={name} />}
    </Width>
  )
}
