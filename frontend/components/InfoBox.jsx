import AboutUs from './ui/AboutUs'
import WhatWeDo from './ui/WhatWeDo'

export default function InfoBox() {
  return (
    <>
      <div className="pl-4 lg:pl-0 relative lg:mx-50 md:mx-30 sm:mx-10 py-20 text-black bg-white">
        <AboutUs />
        <div className="pt-20 ">
          <WhatWeDo />
        </div>
      </div>
    </>
  )
}
