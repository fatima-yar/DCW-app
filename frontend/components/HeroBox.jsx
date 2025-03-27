import React from 'react'
import MaoriStrip from './ui/MaoriStrip'
import BgImage from './ui/BgImage'
import DonateButton from './ui/DonateButton'

export default function HeroBox() {
  return (
    <>
      <MaoriStrip />

      <BgImage />
      <DonateButton />
      <MaoriStrip />
    </>
  )
}
