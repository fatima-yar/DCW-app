import { getMainPage } from './src/data/loaders'
import { notFound } from 'next/navigation'
import { BlockRenderer } from '@/components/BlockRenderer'

async function loader() {
  const data = await getMainPage()
  if (!data) notFound
  return { ...data.data }
}

export default async function mainPage() {
  const data = await loader()
  const blocks = data?.blocks || []

  return (
    <div className="space-y-0">
      <BlockRenderer blocks={blocks} />
    </div>
  )
}
