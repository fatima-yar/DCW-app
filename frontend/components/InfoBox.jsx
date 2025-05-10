import AboutUs from './ui/AboutUs'
import WhatWeDo from './ui/WhatWeDo'

export default function InfoBox({
  missionNZ,
  serviceNZ,
  missionUK,
  serviceUK,
  missionNZImage,
  serviceNZImage,
  missionUKImage,
  serviceUKImage,
}) {
  return (
    <>
      <div className="pl-4 lg:pl-0 relative lg:mx-50 md:mx-30 sm:mx-10 py-20 text-black bg-white">
        <AboutUs
          missionNZ={missionNZ}
          missionNZImage={missionNZImage}
          missionUK={missionUK}
          missionUKImage={missionUKImage}
        />
        <div className="pt-20 ">
          <WhatWeDo
            serviceNZ={serviceNZ}
            serviceUK={serviceUK}
            serviceNZImage={serviceNZImage}
            serviceUKImage={serviceUKImage}
          />
        </div>
      </div>
    </>
  )
}
