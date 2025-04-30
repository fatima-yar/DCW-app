import WhatWeDoComponent from '@/components/WhatWeDoComponent'
import { notFound } from 'next/navigation'
import { getWhatWeDo } from '../src/data/loaders'

async function loader() {
  const data = await getWhatWeDo()
  if (!data) notFound
  return { ...data.data }
}
export default async function whatWeDo() {
  const data = await loader()
  const content = data?.content
  return <WhatWeDoComponent content={content} />
}
