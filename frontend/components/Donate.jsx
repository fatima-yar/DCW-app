import DonateUi from './ui/DonateUi'
import DirectDonation from './ui/DirectDonation'
import GeneralPolicies from './ui/GeneralPolicies'
import Givealittle from './ui/Givealittle'
export default function Donate() {
  return (
    <>
      <DonateUi />
      <Givealittle />
      <DirectDonation />
      <GeneralPolicies />
    </>
  )
}
