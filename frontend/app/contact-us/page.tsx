import ContactUs from '@/components/ContactUs'
import { getContactUs } from '../src/data/loaders'
import { notFound } from 'next/navigation'

async function loader() {
  const response = await getContactUs()
  if (!response?.data) notFound()
  return response.data
}
export default async function ContactUsPage() {
  const data = await loader()
  const text = data.text
  const textUK = data.textUK

  return <ContactUs text={text} textUK={textUK} />
}
