import Newsletter from '@/components/Newsletter'
import { getNewsletter } from '../src/data/loaders'
import { notFound } from 'next/navigation'

// export default function joinUs() {
//   return (
//     <div className="relative lg:mx-50 md:mx-30 sm:mx-10 text-black overflow-hidden bg-white font-[Convergence] lg:px-36 px-4">
//       <Newsletter />
//     </div>
//   )
// }

async function loader() {
  const data = await getNewsletter()
  if (!data) notFound
  return { ...data.data }
}
export default async function newsletter() {
  const data = await loader()
  console.log('datatattat', data.links)
  return (
    <div className="relative lg:mx-50 md:mx-30 sm:mx-10 text-black overflow-hidden bg-white font-[Convergence] lg:px-36 px-4">
      <Newsletter links={data.link} />
    </div>
  )
}
