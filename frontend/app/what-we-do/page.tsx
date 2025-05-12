import WhatWeDoComponent from '@/components/WhatWeDoComponent'
import { notFound } from 'next/navigation'
import { getWhatWeDo } from '../src/data/loaders'

async function loader() {
  const data = await getWhatWeDo()
  if (!data) notFound()

  return { ...data.data }
}
export default async function whatWeDo() {
  const data = await loader()
  const content = data?.contents
  const contentUK = data?.contentsUK
  const service = data?.services
  const serviceUK = data?.servicesUK
  const event = data?.events
  const eventUK = data?.eventsUK
  const affiliation = data?.affiliations
  const affiliationUK = data?.affiliationsUK

  return (
    <WhatWeDoComponent
      content={content}
      contentUK={contentUK}
      service={service}
      serviceUK={serviceUK}
      event={event}
      eventUK={eventUK}
      affiliation={affiliation}
      affiliationUK={affiliationUK}
    />
  )
}
// contentUK={contentUK}
