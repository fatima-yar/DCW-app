import React from 'react'
import MaoriStrip from './ui/MaoriStrip'
import HeroBoxContent from './ui/HeroBoxContent'

export default function HeroBox() {
  return (
    <>
      <div className="lg:mx-50 md:mx-30 sm:mx:10 ">
        <MaoriStrip />
      </div>

      <HeroBoxContent />
      <div className="lg:mx-50 md:mx-30 sm:mx:10 ">
        <MaoriStrip />
      </div>
    </>
  )
}
