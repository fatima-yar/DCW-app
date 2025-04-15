import DonateUi from './ui/DonateUi'
import DirectDonation from './ui/DirectDonation'
import Gifts from './ui/Gifts'
import Givealittle from './ui/Givealittle'
import Partnerships from './ui/Partnerships'
import Sponsorships from './ui/Sponsorships'
import FadeInSection from './FadeInSection'

export default function Donate() {
  return (
    <>
      <FadeInSection delay={0.1}>
        <DonateUi />
      </FadeInSection>

      <FadeInSection delay={0.3}>
        <div id="givealittle">
          <Givealittle />
        </div>
      </FadeInSection>

      <FadeInSection delay={0.5}>
        <div id="direct-donation">
          <DirectDonation />
        </div>
      </FadeInSection>

      <FadeInSection delay={0.7}>
        <div id="gifts">
          <Gifts />
        </div>
      </FadeInSection>

      <FadeInSection delay={0.9}>
        <div id="partnerships">
          <Partnerships />
        </div>
      </FadeInSection>

      <FadeInSection delay={1}>
        <div id="sponsorships">
          <Sponsorships />
        </div>
      </FadeInSection>
    </>
  )
}
