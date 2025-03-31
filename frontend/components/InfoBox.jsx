// import WhatWeDoPhoto1 from './ui/WhatWeDoPhoto1'
// import WhatWeDoPhoto2 from './ui/WhatWeDoPhoto2'
// import WhatWeDoPhoto3 from './ui/WhatWeDoPhoto3'
import AboutUs from './ui/AboutUs'
import WhatWeDo from './ui/WhatWeDo'

export default function InfoBox() {
  return (
    <>
      <div className="mx-50 py-20 text-black bg-white">
        <AboutUs />
        <WhatWeDo />
        {/* <WhatWeDoPhoto1 />
        <WhatWeDoPhoto2 />
        <WhatWeDoPhoto3 /> */}
      </div>
    </>
  )
}
