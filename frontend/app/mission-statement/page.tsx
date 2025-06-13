import MissionStatement from '@/components/MissionStatement'
import { getMissionStatement } from '../src/data/loaders'
import { notFound } from 'next/navigation'
export const revalidate = 60
async function loader() {
  const data = await getMissionStatement()
  if (!data) notFound
  return { ...data.data }
}
export default async function missonstatement() {
  const data = await loader()
  const content = data?.contents
  const contentUK = data?.contentsUK

  return <MissionStatement content={content} contentUK={contentUK} />
}
