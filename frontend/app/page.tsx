import Motto from '../components/Motto'
import HeroBox from '../components/HeroBox'
import InfoBox from '../components/InfoBox'
import FadeInSection from '../components/FadeInSection'

export default function Home() {
  return (
    <div className="space-y-0">
      <Motto />
      <HeroBox />
      <InfoBox />
    </div>
  )
}
