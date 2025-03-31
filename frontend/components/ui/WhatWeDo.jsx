import WhatWeDoPhoto1 from './WhatWeDoPhoto1'
import WhatWeDoPhoto2 from './WhatWeDoPhoto2'
import WhatWeDoPhoto3 from './WhatWeDoPhoto3'
import LearnMoreButton from './LearnMoreButton'

export default function WhatWeDo() {
  return (
    <div className="pt-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 lg:grid-rows-1 gap-1 lg:gap-4">
        <div className="lg:pr-20 pr-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 lg:grid-rows-2 gap-4 lg:pl-20 pl-4">
            <div className="row-span-2 pt-12">
              <WhatWeDoPhoto1 />
            </div>
            <div>
              <WhatWeDoPhoto2 />
            </div>
            <div className="lg:col-start-2">
              <WhatWeDoPhoto3 />
            </div>
          </div>
        </div>
        <div className="font-[sansation] pt-20">
          <p className="text-md lg:text-xl text-red-700">What We Do</p>
          <p className="text-lg text-black lg:text-3xl font-bold pt-3 pb-4">
            Our Projects
          </p>
          <p className="text-md text-black lg:text-lg pr-4 lg:pr-20">
            DreamCatchers WorldWide is a charitable organization that provides
            services to vulnerable community groups. Our services include
            providing high quality community services across the education and
            arts sector to those in need.
          </p>
          <div className="pt-8">
            <LearnMoreButton link="/#" />
          </div>
        </div>
      </div>
    </div>
  )
}
