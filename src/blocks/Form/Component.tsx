'use client'
import type { FormFieldBlock, Form as FormType } from '@payloadcms/plugin-form-builder/types'

import { useRouter } from 'next/navigation'
import React, { useCallback, useState } from 'react'
import { useForm, FormProvider } from 'react-hook-form'
import { Bangers, Nunito } from 'next/font/google'
import { Loader2 } from 'lucide-react'
import RichText from '@/components/RichText'
import { Button } from '@/components/ui/button'

import { fields } from './fields'
import { getClientSideURL } from '@/utilities/getURL'

const bangers = Bangers({
  subsets: ['latin', 'latin-ext'],
  weight: '400',
  display: 'swap',
})

const nunito = Nunito({
  subsets: ['latin', 'latin-ext'],
  display: 'swap',
})

export type FormBlockType = {
  blockName?: string
  blockType?: 'formBlock'
  sectionTitle?: string
  sectionDescription?: string
  form: FormType
}

export const FormBlock: React.FC<
  {
    id?: string
  } & FormBlockType
> = (props) => {
  const {
    sectionTitle,
    sectionDescription,
    form: formFromProps,
    form: { id: formID, confirmationMessage, confirmationType, redirect, submitButtonLabel } = {},
  } = props

  const formMethods = useForm({
    defaultValues: formFromProps.fields,
  })
  const {
    control,
    formState: { errors },
    handleSubmit,
    register,
  } = formMethods

  const [isLoading, setIsLoading] = useState(false)
  const [hasSubmitted, setHasSubmitted] = useState<boolean>()
  const [error, setError] = useState<{ message: string; status?: string } | undefined>()
  const router = useRouter()

  const onSubmit = useCallback(
    (data: FormFieldBlock[]) => {
      let loadingTimerID: ReturnType<typeof setTimeout>
      const submitForm = async () => {
        setError(undefined)

        const dataToSend = Object.entries(data).map(([name, value]) => ({
          field: name,
          value,
        }))

        // delay loading indicator by 1s
        loadingTimerID = setTimeout(() => {
          setIsLoading(true)
        }, 1000)

        try {
          const req = await fetch(`${getClientSideURL()}/api/form-submissions`, {
            body: JSON.stringify({
              form: formID,
              submissionData: dataToSend,
            }),
            headers: {
              'Content-Type': 'application/json',
            },
            method: 'POST',
          })

          const res = await req.json()

          clearTimeout(loadingTimerID)

          if (req.status >= 400) {
            setIsLoading(false)

            setError({
              message: res.errors?.[0]?.message || 'Internal Server Error',
              status: res.status,
            })

            return
          }

          setIsLoading(false)
          setHasSubmitted(true)

          if (confirmationType === 'redirect' && redirect) {
            const { url } = redirect

            const redirectUrl = url

            if (redirectUrl) router.push(redirectUrl)
          }
        } catch (err) {
          console.warn(err)
          setIsLoading(false)
          setError({
            message: 'Something went wrong.',
          })
        }
      }

      void submitForm()
    },
    [router, formID, redirect, confirmationType],
  )

  return (
    <section
      className="relative overflow-hidden bg-customWhite px-4 py-20"
      style={{ fontFamily: nunito.style.fontFamily }}
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-20 right-10 h-40 w-40 rounded-full bg-customOrange opacity-10 md:right-24" />
        <div className="absolute bottom-20 left-0 h-56 w-56 rounded-full bg-customBlue opacity-10 md:left-16" />
      </div>

      <div className="container relative z-10 lg:max-w-[56rem]">
        {(sectionTitle || sectionDescription) && !hasSubmitted && (
          <div className="mb-10 text-center lg:mb-12">
            {sectionTitle && (
              <h2
                className="text-4xl md:text-5xl text-customBlack mb-4 italic"
                style={{ fontFamily: bangers.style.fontFamily }}
              >
                {sectionTitle}
              </h2>
            )}
            <div className="w-40 h-2 bg-customOrange mx-auto rounded-full" />
            {sectionDescription && (
              <p className="text-lg text-customBlack max-w-2xl mx-auto mt-6">
                {sectionDescription}
              </p>
            )}
          </div>
        )}

        <div className="rounded-3xl border border-customLightBlue/70 bg-white p-6 shadow-xl md:p-10">
          <FormProvider {...formMethods}>
            {!isLoading && hasSubmitted && confirmationType === 'message' && (
              <div className="rounded-2xl border border-customBlue/30 bg-customLightBlue/40 p-6">
                <RichText data={confirmationMessage} enableGutter={false} />
              </div>
            )}

            {isLoading && !hasSubmitted && (
              <div className="flex items-center justify-center gap-3 py-8 text-customBlack">
                <Loader2 className="size-5 animate-spin text-customBlue" />
                <span className="font-medium">Loading, please wait...</span>
              </div>
            )}

            {error && (
              <div className="mb-6 rounded-xl border border-destructive/30 bg-destructive/10 px-4 py-3 text-sm font-medium text-destructive">
                {`${error.status || '500'}: ${error.message || ''}`}
              </div>
            )}

            {!hasSubmitted && (
              <form id={formID} onSubmit={handleSubmit(onSubmit)}>
                <div className="grid grid-cols-1 gap-x-6 gap-y-6 md:grid-cols-12">
                  {formFromProps &&
                    formFromProps.fields &&
                    formFromProps.fields?.map((field, index) => {
                      // eslint-disable-next-line @typescript-eslint/no-explicit-any
                      const Field: React.FC<any> = fields?.[field.blockType as keyof typeof fields]
                      if (Field) {
                        return (
                          <Field
                            key={index}
                            form={formFromProps}
                            {...field}
                            {...formMethods}
                            control={control}
                            errors={errors}
                            register={register}
                          />
                        )
                      }
                      return null
                    })}
                </div>

                <Button
                  className="mt-8 w-full rounded-full bg-customBlue py-3 text-base font-bold text-white shadow-lg transition-colors duration-300 hover:bg-customOrange sm:w-auto sm:px-10"
                  form={formID}
                  type="submit"
                  variant="default"
                >
                  {submitButtonLabel}
                </Button>
              </form>
            )}
          </FormProvider>
        </div>
      </div>
    </section>
  )
}
