'use client'

import DonateUi from './ui/DonateUi'
import DirectDonation from './ui/DirectDonation'
import Gifts from './ui/Gifts'
import Givealittle from './ui/Givealittle'
import Partnerships from './ui/Partnerships'
import Sponsorships from './ui/Sponsorships'
import FadeInSection from './FadeInSection'
import { useLocale } from './LocaleContext'
import { useState, useEffect } from 'react'

export default function Donate({ content }) {
  const { isUK } = useLocale()

  const [hasMounted, setHasMounted] = useState(false)

  useEffect(() => {
    setHasMounted(true)
  }, [])

  if (!hasMounted) return null

  const donate = isUK ? content?.donateUK : content?.donate
  const givealittle = isUK ? content?.gofundme : content?.givealittle || []
  const directDonation = isUK
    ? content?.directDonationUK
    : content?.directDonation || []
  const gifts = isUK ? content?.giftsUK : content?.gifts || []
  const partnerships = isUK
    ? content?.partnershipsUK
    : content?.partnerships || []

  const sponsorships = isUK
    ? content?.sponsorshipsUK
    : content?.sponsorships || []

  console.log('gifts content:', gifts)
  return (
    <>
      <FadeInSection delay={0.1}>
        <DonateUi content={donate} />
      </FadeInSection>

      <FadeInSection delay={0.3}>
        <div id="givealittle">
          <Givealittle content={givealittle} />
        </div>
      </FadeInSection>

      {directDonation && (
        <FadeInSection delay={0.5}>
          <div id="direct-donation">
            <DirectDonation content={directDonation} />
          </div>
        </FadeInSection>
      )}

      {gifts && (
        <FadeInSection delay={0.7}>
          <div id="gifts">
            <Gifts content={gifts} />
          </div>
        </FadeInSection>
      )}

      {partnerships && (
        <FadeInSection delay={0.9}>
          <div id="partnerships">
            <Partnerships content={partnerships} />
          </div>
        </FadeInSection>
      )}

      {sponsorships && (
        <FadeInSection delay={1}>
          <div id="sponsorships">
            <Sponsorships content={sponsorships} />
          </div>
        </FadeInSection>
      )}
    </>
  )
}
