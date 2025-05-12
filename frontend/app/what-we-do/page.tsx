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

  return (
    <WhatWeDoComponent
      content={content}
      contentUK={contentUK}
      service={data?.services}
      serviceUK={data?.servicesUK}
      event={data?.events}
      eventUK={data?.eventsUK}
    />
  )
}
// contentUK={contentUK}
