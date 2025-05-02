import Donate from '@/components/Donate'
import { getDonate } from '../src/data/loaders'
import { notFound } from 'next/navigation'

// export default async function donate() {
//   return <Donate />
// }

async function loader() {
  const data = await getDonate()
  if (!data) notFound()
  console.log('getDonate result:', data)
  return { ...data.data }
}
export default async function donate() {
  const data = await loader()

  return <Donate content={data} />
}
