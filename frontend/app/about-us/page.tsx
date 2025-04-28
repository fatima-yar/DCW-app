import AboutUs from '@/components/AboutUs'
import { notFound } from 'next/navigation'
import { getAboutUs } from '../src/data/loaders'

async function loader() {
  const data = await getAboutUs()
  if (!data) notFound
  return { ...data.data }
}
export default async function aboutUs() {
  const data = await loader()
  const content = data?.contents
  console.log(data)
  console.log('content :', content)

  return <AboutUs content={content} />
}
