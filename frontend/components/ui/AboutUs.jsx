import OurMissionPhoto from './OurMissionPhoto'
import LearnMoreButton from './LearnMoreButton'

export default function AboutUs() {
  return (
    <div className="grid grid-cols-2 grid-rows-1 gap-1">
      <div className="pl-20 font-[sansation]">
        <p className=" text-xl text-red-700">About Us</p>
        <p className="text-black  text-3xl font-bold pt-3 pb-4">Our Mission</p>
        <p className="text-black text-lg pr-10">
          At DreamCatchers WorldWide, we believe that everyone has the power to
          make a difference. Whether you are a volunteer, donor, or supporter,
          you can help us achieve our mission of providing services to
          vulnerable community groups.
        </p>
        <div className="pt-8">
          <LearnMoreButton link="/#" />
        </div>
      </div>
      <div className="pr-20">
        <OurMissionPhoto />
      </div>
    </div>
  )
}
