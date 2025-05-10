import MissionStatement from '@/components/MissionStatement'
import { getMissionStatement } from '../src/data/loaders'
import { notFound } from 'next/navigation'

async function loader() {
  const data = await getMissionStatement()
  if (!data) notFound
  return { ...data.data }
}
export default async function ourTeam() {
  const data = await loader()
  const content = data?.contents
  const contentUK = data?.contentsUK

  return <MissionStatement content={content} contentUK={contentUK} />
}
