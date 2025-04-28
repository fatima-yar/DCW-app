import PrivacyPolicy from '@/components/PrivacyPolicy'
import { getPrivacyPolicy } from '../src/data/loaders'
import { notFound } from 'next/navigation'

async function loader() {
  const data = await getPrivacyPolicy()
  if (!data) notFound
  return { ...data.data }
}

export default async function privacyPolicy() {
  const data = await loader()
  const content = data?.contents
  return <PrivacyPolicy content={content} />
}
