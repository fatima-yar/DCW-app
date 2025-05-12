import JoinUs from '@/components/JoinUs'
import { notFound } from 'next/navigation'
import { getJoinUs } from '../src/data/loaders'

async function loader() {
  const data = await getJoinUs()
  if (!data) notFound()
  return { ...data.data }
}
export default async function joinUsPage() {
  const data = await loader()

  return (
    <JoinUs
      text={data.text}
      image={data.image}
      button={data.cta}
      textUK={data.textUK}
      imageUK={data.imageUK}
      buttonUK={data.ctaUK}
      imageVolunteer={data.imageVolunteer}
    />
  )
}
