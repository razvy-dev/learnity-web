// app/events/[slug]/page.tsx
import { getPayload } from 'payload'
import config from '@payload-config'
import submitEventForm from '@/app/(frontend)/guided-learning/workshops/[slug]/participa/actions'

export default async function EventPage({ params }: { params: { slug: string } }) {
  const payload = await getPayload({ config })
  
  // Fetch event and populate the customForm relationship
  const events = await payload.find({
    collection: 'guidedWorkshops',
    where: { slug: { equals: params.slug } },
    depth: 2, 
  })

  const event = events.docs[0]
  if (!event || !event.customForm) return <div>Event or form not found</div>

  const form = event.customForm as any // Type safely if using generated payload-types

  // Bind the event ID to our server action wrapper
  const handleAction = submitEventForm.bind(null, event.id, form.id)

  return (
    <main className="max-w-xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">{event.title}</h1>
      
      <form action={handleAction} className="space-y-4">
        {form.fields?.map((field: any, index: number) => {
          // Render inputs dynamically based on field.blockType (text, email, textarea, etc.)
          return (
            <div key={index} className="flex flex-col">
              <label className="text-sm font-medium mb-1">{field.label}</label>
              {field.blockType === 'textarea' ? (
                <textarea name={field.name} required={field.required} className="border p-2 rounded" />
              ) : (
                <input type={field.blockType === 'email' ? 'email' : 'text'} name={field.name} required={field.required} className="border p-2 rounded" />
              )}
            </div>
          )
        })}
        <button type="submit" className="bg-black text-white px-4 py-2 rounded">
          {form.submitButtonLabel || 'Submit'}
        </button>
      </form>
    </main>
  )
}