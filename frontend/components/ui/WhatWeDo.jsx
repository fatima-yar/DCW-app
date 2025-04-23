import WhatWeDoPhoto3in1 from './WhatWeDoPhoto3in1'
import Button from './Button'

export default function AboutUs() {
  return (
    <div className="">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-1 lg:gap-4">
        {/* Photo on the left */}
        <div className="lg:pl-20 pl-4 lg:pr-0 pr-4">
          <WhatWeDoPhoto3in1 />
        </div>

        {/* Text and button on the right */}
        <div className="lg:pr-20 pl-4 font-[sansation] pt-5">
          <p className="text-md lg:text-xl text-red-700">What We Do</p>
          <p className="text-md text-black lg:text-3xl font-bold pt-3 pb-4">
            Our Projects
          </p>
          <p className="text-md text-black lg:text-lg pr-10">
            At DreamCatchers WorldWide, we’re committed to creating inclusive,
            accessible, and high-quality services that uplift vulnerable
            communities. Our projects span education, the arts, and community
            support — all designed to break down barriers and ensure everyone,
            regardless of age or background, has the opportunity to learn, grow,
            and thrive.
          </p>
          <div className="pt-8">
            <Button text="Learn more" link="/what-we-do" />
          </div>
        </div>
      </div>
    </div>
  )
}
