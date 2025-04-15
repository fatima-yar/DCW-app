import DonateUi from './ui/DonateUi'
import DirectDonation from './ui/DirectDonation'
import Gifts from './ui/Gifts'
import Givealittle from './ui/Givealittle'
import Partnerships from './ui/Partnerships'
import Sponsorships from './ui/Sponsorships'

export default function Donate() {
  return (
    <>
      <DonateUi />
      <div id="givealittle">
        <Givealittle />
      </div>
      <div id="direct-donation">
        <DirectDonation />
      </div>
      <div id="gifts">
        <Gifts />
      </div>
      <div id="partnerships">
        <Partnerships />
      </div>
      <div id="sponsorships">
        <Sponsorships />
      </div>
    </>
  )
}
