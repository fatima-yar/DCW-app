import Motto from '../components/Motto'
import HeroBox from '../components/HeroBox'
import InfoBox from '../components/InfoBox'
import FadeInSection from '../components/FadeInSection'
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
  // console.log(data)
  // console.log('blocks:', blocks)
  return (
    <div className="space-y-0">
      <BlockRenderer blocks={blocks} />
      {/* <FadeInSection delay={0.1}>
        <Motto />
      </FadeInSection>
      <FadeInSection delay={0.3}>
        <HeroBox />
      </FadeInSection>
      <FadeInSection delay={0.3}>
        <InfoBox />{' '}
      </FadeInSection> */}
    </div>
  )
}
