import Motto from '../components/Motto'
import HeroBox from '../components/HeroBox'
import InfoBox from '../components/InfoBox'
import FadeInSection from '../components/FadeInSection'

export default function Home() {
  return (
    <div className="space-y-0">
      <FadeInSection delay={0.1}>
        <Motto />
      </FadeInSection>
      <FadeInSection delay={0.3}>
        <HeroBox />
      </FadeInSection>
      <FadeInSection delay={0.3}>
        <InfoBox />{' '}
      </FadeInSection>
    </div>
  )
}
