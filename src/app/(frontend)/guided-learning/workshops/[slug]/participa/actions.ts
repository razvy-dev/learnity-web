'use server'

import { getPayload } from 'payload'
import config from '@payload-config'

export default async function submitEventForm(eventId: string, formId: string, formData: FormData) {
  const payload = await getPayload({ config })

  // Format data as expected by the form builder plugin
  const submissionData = Array.from(formData.entries()).map(([field, value]) => ({
    field,
    value: value.toString(),
  }))

  try {
    await payload.create({
      collection: 'form-submissions',
      data: {
        form: formId,
        event: eventId,
        submissionData,
      },
    })
    return { success: true }
  } catch (error) {
    console.error(error)
    return { success: false, error: 'Failed to submit form' }
  }
}