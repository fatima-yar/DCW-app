import WhatWeDoPhoto1 from './WhatWeDoPhoto1'
import WhatWeDoPhoto2 from './WhatWeDoPhoto2'
import WhatWeDoPhoto3 from './WhatWeDoPhoto3'
import LearnMoreButton from './LearnMoreButton'

export default function WhatWeDo() {
  return (
    <div className="grid grid-cols-2 grid-rows-1 gap-1 pt-20">
      <div className="pr-20">
        <div className="grid grid-cols-2 grid-rows-2 gap-4 pl-20">
          <div className="row-span-2 pt-12">
            <WhatWeDoPhoto1 />
          </div>
          <div>
            <WhatWeDoPhoto2 />
          </div>
          <div className="col-start-2">
            <WhatWeDoPhoto3 />
          </div>
        </div>
      </div>
      <div className=" font-[sansation] pt-20">
        <p className=" text-xl text-red-700">What We Do</p>
        <p className="text-black  text-3xl font-bold pt-3 pb-4">Our Projects</p>
        <p className="text-black text-lg pr-10">
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
  )
}
